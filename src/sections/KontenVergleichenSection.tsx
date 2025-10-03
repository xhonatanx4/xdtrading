import React, { useState } from 'react';
import { ArrowRight, Users, Crown, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import VoletPaymentForm from '../components/VoletPaymentForm';

const KontenVergleichenSection: React.FC = () => {
  const [showPaymentForm, setShowPaymentForm] = useState<{
    type: 'course' | 'vip-signals' | null;
    vipPlan?: 'monthly' | '6months' | 'yearly' | 'lifetime';
  }>({ type: null });

  // Telegram SVG Component
  const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.333-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.834.941z"/>
    </svg>
  );

  // Discord SVG Component
  const DiscordIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
    </svg>
  );

  const membershipTiers = [
    {
      name: 'Telegram Free',
      icon: TelegramIcon,
      description: 'Join our free Telegram channels for daily market analysis and trading signals.',
      platform: 'Telegram Channels',
      price: 'Free',
      signals: 'Basic Daily Signals',
      support: 'Community Support',
      advantages: [
        'Free daily market analysis',
        'Basic trading signals',
        'Community discussions',
        'Market insights and tips'
      ],
      buttonText: 'Join Telegram',
      buttonLink: 'https://t.me/xdtradingo',
      titleColorClass: 'text-blue-400',
      iconColorClass: 'text-blue-400',
      borderColor: 'border-blue-400',
      bgColor: 'bg-blue-500/10',
      cardBg: 'bg-gradient-to-br from-blue-900/20 to-blue-800/10'
    },
    {
      name: 'Discord Free',
      icon: DiscordIcon,
      description: 'Access our Discord server for community interaction and trading discussions.',
      platform: 'Discord Server',
      price: 'Free',
      signals: 'Community Discussions',
      support: 'Community Support',
      advantages: [
        'Free Discord access',
        'Community discussions',
        'Basic trading tips',
        'Network with traders'
      ],
      buttonText: 'Join Discord',
      buttonLink: 'https://discord.gg/cAqxqN4bUT',
      titleColorClass: 'text-indigo-400',
      iconColorClass: 'text-indigo-400',
      borderColor: 'border-indigo-400',
      bgColor: 'bg-indigo-500/10',
      cardBg: 'bg-gradient-to-br from-indigo-900/20 to-indigo-800/10'
    },
    {
      name: 'Discord + Course',
      icon: BookOpen,
      description: 'Complete trading course with exclusive Discord channels and direct support.',
      platform: 'Discord + Course Access',
      price: '$350',
      signals: 'Course Materials',
      support: 'Direct Discord Support',
      advantages: [
        'Complete Trading Course',
        'Exclusive Discord channels',
        'Direct support from XD Trading',
        'Lifetime course access'
      ],
      buttonText: 'Get Course Access',
      buttonLink: '#',
      isVoletPayment: true,
      productType: 'course' as const,
      titleColorClass: 'text-purple-400',
      iconColorClass: 'text-purple-400',
      borderColor: 'border-purple-400',
      bgColor: 'bg-purple-500/10',
      cardBg: 'bg-gradient-to-br from-purple-900/20 to-purple-800/10'
    },
    {
      name: 'VIP Signals',
      icon: Crown,
      description: 'Premium VIP signals with 85% win rate and advanced layering strategies.',
      platform: 'Discord VIP + Signals',
      price: '$200-$2500',
      signals: '85% Win Rate Signals',
      support: 'VIP Priority Support',
      advantages: [
        'Premium VIP trading signals',
        '85% win rate proven results',
        'Advanced layering strategy',
        'Real-time signal updates'
      ],
      buttonText: 'Get VIP Access',
      buttonLink: '#',
      isVoletPayment: true,
      productType: 'vip-signals' as const,
      vipPlan: 'monthly' as const,
      titleColorClass: 'text-red-400',
      iconColorClass: 'text-red-400',
      borderColor: 'border-red-400',
      bgColor: 'bg-red-500/10',
      cardBg: 'bg-gradient-to-br from-red-900/20 to-red-800/10'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your <span className="gradient-text-green">Membership</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          From free Telegram signals to VIP premium services - find the perfect level for your trading journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {membershipTiers.map((tier, index) => {
          const IconComponent = tier.icon;
          const isExternalLink = tier.buttonLink.startsWith('http');
          
          return (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl p-6 group transition-all duration-300 
                ${tier.cardBg} border border-gray-700 border-b-4 ${tier.borderColor}
                hover:bg-white hover:scale-[1.02] hover:shadow-xl
                h-[580px] flex flex-col
              `}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full ${tier.bgColor} flex items-center justify-center border ${tier.borderColor}`}>
                    <IconComponent className={`${tier.iconColorClass} group-hover:text-gray-800`} />
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-center ${tier.titleColorClass} group-hover:text-gray-800`}>{tier.name}</h3>
                <p className="text-xs text-gray-300 mb-4 group-hover:text-gray-600 text-center h-10 flex items-center justify-center">{tier.description}</p>

                <div className="space-y-3 mb-4 text-left flex-grow">
                  <div className="border-b border-gray-600 pb-1.5">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-0.5">PLATFORM</p>
                    <p className="text-white font-semibold text-sm group-hover:text-gray-800">{tier.platform}</p>
                  </div>

                  <div className="border-b border-gray-600 pb-1.5">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-0.5">PRICE</p>
                    <p className="text-white font-semibold text-sm group-hover:text-gray-800">{tier.price}</p>
                  </div>

                  <div className="border-b border-gray-600 pb-1.5">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-0.5">SIGNALS</p>
                    <p className="text-white font-semibold text-sm group-hover:text-gray-800">{tier.signals}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-1">WHAT'S INCLUDED</p>
                    <ul className="space-y-0.5">
                      {tier.advantages.map((advantage, advIdx) => (
                        <li key={advIdx} className="text-white text-xs flex items-start group-hover:text-gray-800">
                          <span className="text-green-500 mr-1.5 mt-0.5 flex-shrink-0">✔</span>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 pb-2">
                {tier.isVoletPayment ? (
                  <button 
                    onClick={() => setShowPaymentForm({ 
                      type: tier.productType, 
                      vipPlan: tier.vipPlan 
                    })}
                    className={`w-full flex items-center justify-center font-medium py-2.5 px-4 rounded-md transition-all duration-300 text-white text-sm
                      ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600' : 
                        index === 1 ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600' :
                        index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600' :
                        'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600'}
                      group-hover:bg-white group-hover:text-gray-800 hover:scale-105
                    `}
                  >
                    {tier.buttonText}
                    <ArrowRight className="ml-1.5 group-hover:text-gray-800" size={16} />
                  </button>
                ) : isExternalLink ? (
                  <a 
                    href={tier.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center font-medium py-2.5 px-4 rounded-md transition-all duration-300 text-white text-sm
                      ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600' : 
                        index === 1 ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600' :
                        index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600' :
                        'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600'}
                      group-hover:bg-white group-hover:text-gray-800 hover:scale-105
                    `}
                  >
                    {tier.buttonText}
                    <ArrowRight className="ml-1.5 group-hover:text-gray-800" size={16} />
                  </a>
                ) : (
                  <Link 
                    to={tier.buttonLink}
                    className={`w-full flex items-center justify-center font-medium py-2.5 px-4 rounded-md transition-all duration-300 text-white text-sm
                      ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600' : 
                        index === 1 ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600' :
                        index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600' :
                        'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600'}
                      group-hover:bg-white group-hover:text-gray-800 hover:scale-105
                    `}
                  >
                    {tier.buttonText}
                    <ArrowRight className="ml-1.5 group-hover:text-gray-800" size={16} />
                  </Link>
                )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Volet Payment Modal */}
      {showPaymentForm.type && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {showPaymentForm.type === 'course' ? 'Complete Trading Course' : 'VIP Trading Signals'}
                </h3>
                <button
                  onClick={() => setShowPaymentForm({ type: null })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <VoletPaymentForm
                productType={showPaymentForm.type}
                vipPlan={showPaymentForm.vipPlan}
                onSuccess={() => setShowPaymentForm({ type: null })}
                onError={() => setShowPaymentForm({ type: null })}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KontenVergleichenSection; 