import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, Crown, Clock, Users, Bell, Flame, DollarSign, Target, Brain } from 'lucide-react';
import VoletPaymentForm from './VoletPaymentForm';

const AnimatedAwardsSection: React.FC = () => {
  const [showPaymentForm, setShowPaymentForm] = useState<{
    type: 'vip-signals';
    vipPlan: 'monthly' | '6months' | 'yearly' | 'lifetime';
  } | null>(null);

  // Change scrollbar color to red for VIP Signals page
  useEffect(() => {
    console.log('Adding vip-page class to body');
    document.body.classList.add('vip-page');
    
    // Force scrollbar styles with JavaScript
    const style = document.createElement('style');
    style.id = 'vip-scrollbar-style';
    style.textContent = `
      ::-webkit-scrollbar-track {
        background: #1a0a0a !important;
      }
      ::-webkit-scrollbar-thumb {
        background: #dc2626 !important;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #ef4444 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      console.log('Removing vip-page class from body');
      document.body.classList.remove('vip-page');
      
      // Remove the style element
      const existingStyle = document.getElementById('vip-scrollbar-style');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const vipPlans = [
    {
      id: 'monthly',
      name: '1 Month',
      price: '$200',
      period: 'Monthly',
      description: 'Perfect to test our VIP signals service',
      features: [
        'Real-time VIP signals',
        'Advanced layering techniques',
        'Risk management guidance',
        'Discord community access',
        'Live market updates'
      ],
      popular: false,
      icon: Clock
    },
    {
      id: '6months',
      name: '6 Months',
      price: '$1000',
      period: '6 Months',
      description: 'Best value for consistent profitable trading',
      features: [
        'Everything in Monthly',
        'Priority signal delivery',
        'Advanced market analysis',
        'Personal trading support',
        'Exclusive strategy sessions'
      ],
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'yearly',
      name: '1 Year',
      price: '$1500',
      period: 'Annual',
      description: 'Complete trading transformation package',
      features: [
        'Everything in 6 Months',
        'One-on-one mentoring',
        'Custom trading strategies',
        'Portfolio optimization',
        'Advanced risk analysis'
      ],
      popular: false,
      icon: Shield
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$2500',
      period: 'One-time',
      description: 'Ultimate VIP experience with lifetime access',
      features: [
        'Everything included forever',
        'Lifetime signal access',
        'Priority support for life',
        'All future updates included',
        'Exclusive VIP community'
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section className="pt-32 pb-16 px-4 gradient-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            VIP Trading <span className="vip-gradient-text">Signals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get accurate, real-time trading signals with 85% win rate. Advanced layering techniques and professional risk management included.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl px-8 py-6 border-b-4 border-red-500 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500/20 rounded-lg p-2">
                  <TrendingUp size={20} className="text-red-400" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-red-400">85%</span>
                  <span className="text-gray-300 ml-2">Win Rate</span>
                </div>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl px-8 py-6 border-b-4 border-red-500 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500/20 rounded-lg p-2">
                  <Zap size={20} className="text-red-400" />
                </div>
                <span className="text-white font-semibold">Real-time Signals</span>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl px-8 py-6 border-b-4 border-red-500 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500/20 rounded-lg p-2">
                  <Shield size={20} className="text-red-400" />
                </div>
                <span className="text-white font-semibold">Layering Strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Choose Your VIP Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipPlans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.id}
                  className="vip-feature-card rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap flex items-center">
                        <Flame size={12} className="mr-1" />
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="bg-red-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/ {plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <span className="text-red-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => setShowPaymentForm({ 
                      type: 'vip-signals', 
                      vipPlan: plan.id as 'monthly' | '6months' | 'yearly' | 'lifetime'
                    })}
                    className="red-button text-white font-bold py-3 px-6 rounded-lg w-full transition-all hover:scale-105 flex items-center justify-center"
                  >
                    <Bell size={20} className="mr-2" />
                    Get {plan.name} VIP
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Layering Strategy Explanation */}
        <div className="vip-feature-card rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Master the <span className="vip-gradient-text">Layering Strategy</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="text-red-400 mr-3" size={24} />
                How Layering Works
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 font-bold">1.</span>
                  <span>Execute initial order when signal is received</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 font-bold">2.</span>
                  <span>Add positions as price moves within signal range</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 font-bold">3.</span>
                  <span>Wait for market reversal in your favor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 font-bold">4.</span>
                  <span>Take profits as price moves through entry points</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="text-red-400 mr-3" size={24} />
                Why It's Powerful
              </h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <DollarSign size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Better Risk/Reward:</strong> Optimize TP:SL ratios</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Higher Profits:</strong> Maximize reversal movements</span>
                </li>
                <li className="flex items-start">
                  <Target size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Controlled Risk:</strong> Disciplined position sizing</span>
                </li>
                <li className="flex items-start">
                  <Brain size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>No Panic:</strong> Strategic patience pays off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Revolutionary Stats & CTA Section */}
        <div className="relative mb-16">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-800/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-black/80 to-red-950/40 backdrop-blur-xl rounded-3xl border border-red-500/20 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-red-500/50 to-transparent animate-pulse delay-100"></div>
              <div className="absolute top-0 left-2/4 w-1 h-full bg-gradient-to-b from-red-400/70 to-transparent animate-pulse delay-300"></div>
              <div className="absolute top-0 left-3/4 w-2 h-full bg-gradient-to-b from-red-600/40 to-transparent animate-pulse delay-500"></div>
            </div>
            
            <div className="relative p-12">
              {/* Main Headline */}
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                  PROVEN
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                    RESULTS
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join the elite traders who've transformed their financial future with our precision signals
                </p>
              </div>

              {/* Revolutionary Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Left Column - Main Stats */}
                <div className="space-y-6">
                  <div className="group bg-gradient-to-r from-red-600/20 to-red-700/10 rounded-2xl p-8 border-l-4 border-red-500 hover:border-red-400 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center">
                      <div className="bg-red-500 rounded-xl p-4 mr-6 shadow-lg shadow-red-500/25">
                        <TrendingUp size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-black text-red-400 mb-1">85%</div>
                        <div className="text-gray-300 font-semibold text-lg">WIN RATE ACHIEVEMENT</div>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-red-600/20 to-red-700/10 rounded-2xl p-8 border-l-4 border-red-500 hover:border-red-400 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center">
                      <div className="bg-red-500 rounded-xl p-4 mr-6 shadow-lg shadow-red-500/25">
                        <Crown size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-black text-red-400 mb-1">$750K+</div>
                        <div className="text-gray-300 font-semibold text-lg">MEMBER PROFITS GENERATED</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Secondary Stats */}
                <div className="space-y-6">
                  <div className="group bg-gradient-to-r from-red-600/20 to-red-700/10 rounded-2xl p-8 border-l-4 border-red-500 hover:border-red-400 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center">
                      <div className="bg-red-500 rounded-xl p-4 mr-6 shadow-lg shadow-red-500/25">
                        <Zap size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-black text-red-400 mb-1">7500+</div>
                        <div className="text-gray-300 font-semibold text-lg">PRECISION SIGNALS DELIVERED</div>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-red-600/20 to-red-700/10 rounded-2xl p-8 border-l-4 border-red-500 hover:border-red-400 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center">
                      <div className="bg-red-500 rounded-xl p-4 mr-6 shadow-lg shadow-red-500/25">
                        <Users size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-black text-red-400 mb-1">2000+</div>
                        <div className="text-gray-300 font-semibold text-lg">ELITE TRADERS COMMUNITY</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revolutionary CTA */}
              <div className="relative bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-2xl p-8 border border-red-500/30 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-600/10 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-4 shadow-2xl shadow-red-500/40">
                      <Shield size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                    CLAIM YOUR SPOT AMONG THE TRADING ELITE
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mt-8">
                    <a 
                      href="https://subscord.com/store/1352231735961714748#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-bold text-lg py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 border border-red-400/50 overflow-hidden whitespace-nowrap"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-white/10 to-red-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative flex items-center justify-center">
                        <Crown size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        ACCESS VIP SIGNALS
                      </span>
                    </a>
                    
                    <a 
                      href="https://discord.gg/cAqxqN4bUT" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black/60 border-2 border-red-500/60 text-red-300 font-bold text-lg py-3 px-6 rounded-xl hover:bg-red-950/50 hover:border-red-400/80 hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-105 whitespace-nowrap"
                    >
                      <Users size={18} className="mr-2" />
                      JOIN COMMUNITY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volet Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  VIP Trading Signals - {showPaymentForm.vipPlan === 'monthly' ? '1 Month' : 
                    showPaymentForm.vipPlan === '6months' ? '6 Months' :
                    showPaymentForm.vipPlan === 'yearly' ? '1 Year' : 'Lifetime'}
                </h3>
                <button
                  onClick={() => setShowPaymentForm(null)}
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
                onSuccess={() => setShowPaymentForm(null)}
                onError={() => setShowPaymentForm(null)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnimatedAwardsSection; 