import React from 'react';
import { BookOpen, Target, Users, Crown } from 'lucide-react';

const MultiBankAdvantages: React.FC = () => {
  const advantages = [
    {
      icon: BookOpen,
      text: 'Professional Trading Education',
      description: 'Comprehensive course with lifetime access and proven strategies',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Target,
      text: '85% Win Rate VIP Signals',
      description: 'Accurate real-time signals with advanced layering techniques',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Users,
      text: '2000+ Active Community',
      description: 'Growing Discord and Telegram community with daily support',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Crown,
      text: 'VIP Management Service',
      description: 'Professional account management with profit-sharing model',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
  ];

  return (
    <section className="py-16 px-4 gradient-bg2">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-green-400 uppercase font-semibold tracking-wider mb-2">ADVANTAGES</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Choose XD Trading</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className={`bg-[#0a1f0e] rounded-xl p-6 flex flex-col items-center justify-start text-center h-full border border-green-900/40 transition-all duration-300 hover:scale-105 xd-card-hover ${advantage.bgColor}`}>
                <div className={`w-16 h-16 rounded-full ${advantage.bgColor} flex items-center justify-center mb-4 border border-gray-600/50`}>
                  <IconComponent size={32} className={advantage.color} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{advantage.text}</h4>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MultiBankAdvantages; 