import React, { useEffect, useState } from 'react';
import { CheckCircle, Download, Users, Crown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OrderData {
  orderId: string;
  productType: 'course' | 'vip-signals';
  vipPlan?: string;
  timestamp: number;
}

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get order data from localStorage
    const storedOrder = localStorage.getItem('volet_order');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
      // Clear the stored order data
      localStorage.removeItem('volet_order');
    }
    setIsLoading(false);
  }, []);

  const getProductInfo = () => {
    if (!orderData) return null;

    if (orderData.productType === 'course') {
      return {
        name: 'Complete Trading Course',
        price: '$350',
        description: 'Lifetime access to professional trading education',
        nextSteps: [
          'Check your email for course access details',
          'Join our Discord server for support',
          'Start with the beginner modules',
          'Access exclusive trading materials'
        ],
        actionText: 'Access Course',
        actionLink: 'https://discord.gg/cAqxqN4bUT'
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
        description: `${plan.period} access to premium trading signals`,
        nextSteps: [
          'Check your email for VIP access details',
          'Join our VIP Discord channel',
          'Start receiving real-time signals',
          'Access advanced trading strategies'
        ],
        actionText: 'Join VIP Discord',
        actionLink: 'https://discord.gg/cAqxqN4bUT'
      };
    }
  };

  const productInfo = getProductInfo();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!orderData || !productInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Order Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-sm text-gray-400">
            Order ID: {orderData.orderId}
          </p>
        </div>

        {/* Product Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              {orderData.productType === 'course' ? (
                <Download className="w-8 h-8 text-blue-400 mr-4" />
              ) : (
                <Crown className="w-8 h-8 text-red-400 mr-4" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-white">{productInfo.name}</h2>
                <p className="text-gray-300">{productInfo.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{productInfo.price}</div>
              <div className="text-sm text-gray-400">One-time payment</div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {productInfo.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.open(productInfo.actionLink, '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-3" />
            {productInfo.actionText}
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20"
          >
            Return Home
          </button>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              If you have any questions about your purchase, contact our support team.
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
                href="mailto:support@xdtradingacademy.com"
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

export default PaymentSuccess;
