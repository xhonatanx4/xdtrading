import React, { useEffect, useState } from 'react';
import { XCircle, RefreshCw, ArrowLeft, CreditCard, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OrderData {
  orderId: string;
  productType: 'course' | 'vip-signals';
  vipPlan?: string;
  timestamp: number;
}

const PaymentFailed: React.FC = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get order data from localStorage
    const storedOrder = localStorage.getItem('volet_order');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
    setIsLoading(false);
  }, []);

  const getProductInfo = () => {
    if (!orderData) return null;

    if (orderData.productType === 'course') {
      return {
        name: 'Complete Trading Course',
        price: '$350',
        description: 'Lifetime access to professional trading education'
      };
    } else {
      const plans = {
        monthly: { price: '$200', period: '1 Month' },
        '6months': { price: '$1000', period: '6 Months' },
        yearly: { price: '$2000', period: '1 Year' },
        lifetime: { price: '$2500', period: 'Lifetime' }
      };
      
      const plan = plans[orderData.vipPlan as keyof typeof plans] || plans.monthly;
      
      return {
        name: 'VIP Trading Signals',
        price: plan.price,
        description: `${plan.period} access to premium trading signals`
      };
    }
  };

  const productInfo = getProductInfo();

  const handleRetryPayment = () => {
    if (orderData) {
      // Navigate back to the product page to retry payment
      if (orderData.productType === 'course') {
        navigate('/courses');
      } else {
        navigate('/vip-signals');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Error Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
            <XCircle className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Failed
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            We couldn't process your payment
          </p>
          {orderData && (
            <p className="text-sm text-gray-400">
              Order ID: {orderData.orderId}
            </p>
          )}
        </div>

        {/* Product Details */}
        {productInfo && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <CreditCard className="w-8 h-8 text-gray-400 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-white">{productInfo.name}</h2>
                  <p className="text-gray-300">{productInfo.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-400">{productInfo.price}</div>
                <div className="text-sm text-gray-500">Payment not completed</div>
              </div>
            </div>
          </div>
        )}

        {/* Error Information */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-8">
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">What went wrong?</h3>
              <p className="text-gray-300 mb-4">
                Your payment could not be processed. This might be due to:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Insufficient funds in your account</li>
                <li>• Payment method not supported</li>
                <li>• Network connection issues</li>
                <li>• Payment was cancelled</li>
                <li>• Account verification required</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleRetryPayment}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-3" />
            Try Again
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Return Home
          </button>
        </div>

        {/* Alternative Payment Methods */}
        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Alternative Payment Methods
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <CreditCard className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-1">Credit Card</h4>
              <p className="text-sm text-gray-400">Visa, Mastercard</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-orange-400 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">₿</span>
              </div>
              <h4 className="font-semibold text-white mb-1">Cryptocurrency</h4>
              <p className="text-sm text-gray-400">Bitcoin, Ethereum</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-green-400 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">€</span>
              </div>
              <h4 className="font-semibold text-white mb-1">Bank Transfer</h4>
              <p className="text-sm text-gray-400">SEPA, SWIFT</p>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              If you continue to experience issues, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/cAqxqN4bUT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Discord Support
              </a>
              <a
                href="mailto:support@multibankeurope.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
