import React from 'react';
import { Target, DollarSign, Brain, Rocket, GraduationCap, Gift } from 'lucide-react';

const FinancialSecuritySection: React.FC = () => {
  const courseBenefits = [
    {
      icon: Target,
      title: 'Proven Strategies',
      description: 'Learn time-tested trading strategies used by institutional investors and professional traders for over two centuries.',
      borderColor: 'border-green-500',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: DollarSign,
      title: 'Risk Management Mastery',
      description: 'Advanced techniques to protect your capital and minimize losses while maximizing profits in any market condition.',
      borderColor: 'border-blue-500',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Brain,
      title: 'Trading Psychology',
      description: 'Develop the mental discipline and emotional control needed to maintain consistency and avoid common trading mistakes.',
      borderColor: 'border-purple-500',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Rocket,
      title: 'Lifetime Access',
      description: 'One-time payment gives you permanent access to all course materials, updates, and future additions to the curriculum.',
      borderColor: 'border-orange-500',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
  ];

  return (
    <section className="py-16 px-4 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You'll <span className="gradient-text-green">Achieve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your trading journey with proven strategies, advanced techniques, and the mindset of professional traders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#0a1f0e] rounded-2xl p-8 border border-green-900/40">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap size={32} className="text-blue-400 mr-3" />
              What's Inside The Course
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>83 comprehensive lessons</strong> covering every aspect of professional trading</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>22+ hours of video content</strong> with real market examples and case studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Advanced risk management</strong> techniques used by hedge funds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Trading psychology mastery</strong> to overcome fear and greed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Live trading sessions</strong> and practical application</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#0a1f0e] rounded-2xl p-8 border border-green-900/40">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Gift size={32} className="text-yellow-400 mr-3" />
              Exclusive Bonuses
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Discord community access</strong> with 2000+ active traders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Direct support</strong> from experienced trading professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Trading templates and tools</strong> for immediate implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Regular Q&A sessions</strong> and ongoing mentorship</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Free updates</strong> and new content additions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className={`bg-[#0a1f0e] rounded-xl p-6 flex flex-col items-center text-center border-t-4 shadow-lg transition-transform duration-300 hover:scale-105 ${benefit.borderColor} ${benefit.bgColor}`}
              >
                <div className={`w-16 h-16 rounded-full ${benefit.bgColor} flex items-center justify-center mb-4 border ${benefit.borderColor}`}>
                  <IconComponent size={32} className={benefit.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinancialSecuritySection; 