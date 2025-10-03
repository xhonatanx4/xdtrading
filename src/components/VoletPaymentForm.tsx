import React, { useState } from 'react';
import { CreditCard, Shield, AlertCircle } from 'lucide-react';
import voletService, { VoletPaymentData } from '../services/voletService';

interface VoletPaymentFormProps {
  productType: 'course' | 'vip-signals';
  vipPlan?: 'monthly' | '6months' | 'yearly' | 'lifetime';
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const VoletPaymentForm: React.FC<VoletPaymentFormProps> = ({
  productType,
  vipPlan = 'monthly',
  onSuccess,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      setError('');

      // Check if voletService is available
      if (!voletService) {
        throw new Error('VoletService not available');
      }

      // Generate unique order ID
      const orderId = voletService.generateOrderId();

      // Create payment data based on product type
      let paymentData: VoletPaymentData;
      
      if (productType === 'course') {
        paymentData = voletService.createCoursePayment(orderId);
      } else {
        paymentData = voletService.createVipSignalsPayment(orderId, vipPlan);
      }

      // Store order info in localStorage for success page
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('volet_order', JSON.stringify({
          orderId,
          productType,
          vipPlan,
          timestamp: Date.now()
        }));
      }

      // Submit payment
      voletService.submitPayment(paymentData);
      
      onSuccess?.();
    } catch (err) {
      console.error('Payment error:', err);
      const errorMessage = 'Errore durante la creazione del pagamento. Riprova.';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductInfo = () => {
    if (productType === 'course') {
      return {
        name: 'Complete Trading Course',
        price: '$350',
        description: 'Lifetime access to professional trading education'
      };
    } else {
      const plans = {
        monthly: { price: '$200', period: '1 Month' },
        '6months': { price: '$1000', period: '6 Months' },
        yearly: { price: '$1500', period: '1 Year' },
        lifetime: { price: '$2500', period: 'Lifetime' }
      };
      
      const plan = plans[vipPlan];
      return {
        name: 'VIP Trading Signals',
        price: plan.price,
        description: `${plan.period} access to premium trading signals`
      };
    }
  };

  const productInfo = getProductInfo();

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
          <CreditCard className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Secure Payment</h3>
        <p className="text-gray-300">Powered by Volet Payment System</p>
      </div>

      <div className="bg-white/5 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white font-medium">{productInfo.name}</span>
          <span className="text-2xl font-bold text-green-400">{productInfo.price}</span>
        </div>
        <p className="text-gray-300 text-sm">{productInfo.description}</p>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
          <span className="text-red-300">{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-3" />
              Pay with Volet
            </>
          )}
        </button>

        <div className="flex items-center justify-center text-sm text-gray-400">
          <Shield className="w-4 h-4 mr-2" />
          <span>Secure payment protected by Volet</span>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>You will be redirected to Volet's secure payment page</p>
        <p>Supports: Credit Cards, Crypto, and more</p>
      </div>
    </div>
  );
};

export default VoletPaymentForm;
