import React from 'react';

const XDTradingHistoryAndFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            XD <span className="gradient-text-green">Trading</span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-8">Professional Trading Excellence</p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            XD Trading was founded with one mission: to provide professional trading education and signals 
            that help traders achieve consistent profits. With years of experience and a growing community 
            of 2000+ active members, we're expanding our reach through Discord and advanced trading services. 
            Our boss has many years of experience in trading and shares proven strategies that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              number: 1,
              title: 'Professional Trading Course',
              description: 'Comprehensive trading education with lifetime access. Learn market analysis, risk management, and proven strategies used by institutional traders. One-time payment of $350 for complete access.'
            },
            {
              number: 2,
              title: 'VIP Trading Signals',
              description: 'Accurate real-time trading signals with 85% win rate. Advanced layering techniques, risk management, and live updates. Plans from $200/month to lifetime access.'
            },
            {
              number: 3,
              title: 'Advanced Trading Bot',
              description: 'Automated trading bot that executes trades based on our proven strategies. Let technology work for you while you focus on learning and growing your portfolio.'
            },
            {
              number: 4,
              title: 'VIP Management Service',
              description: 'Professional account management where we trade with your funds. You keep 70% of profits with zero risk to your principal amount. Perfect for passive income generation.'
            },
            {
              number: 5,
              title: 'Active Discord Community',
              description: 'Join 2000+ active traders in our private Discord server. Daily insights, strategy discussions, live support, and direct access to our trading expertise.'
            },
            {
              number: 6,
              title: 'Free Telegram Channels',
              description: 'Get free daily trading insights, basic signals, and market analysis through our Telegram group and channel. Perfect for beginners to start their trading journey.'
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-[#0a1f0e] rounded-lg shadow-lg flex flex-col items-start text-left space-y-3">
              <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-400 font-bold text-lg mb-2">
                {item.number}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XDTradingHistoryAndFeatures;

