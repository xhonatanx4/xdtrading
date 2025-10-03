import React from 'react';

interface GlobalPaymentOptionsProps {
  isHomePage?: boolean;
}



const GlobalPaymentOptions: React.FC<GlobalPaymentOptionsProps> = ({ isHomePage = false }) => {
  return (
    <section className={`relative py-8 px-2 ${isHomePage ? 'gradient-bg2' : 'gradient-bg'}`}>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">How to Get Started</h2>
          <p className="text-lg text-gray-300">Simple steps to join our trading community and start your success journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              icon: "👥",
              title: "Join Discord",
              description: "Connect with 2000+ traders in our private Discord server",
              color: "border-green-500"
            },
            {
              step: "2", 
              icon: "📚",
              title: "Choose Your Path",
              description: "Select from our Course, VIP Signals, or VIP Management services",
              color: "border-blue-500"
            },
            {
              step: "3",
              icon: "💰",
              title: "Start Learning",
              description: "Begin with our comprehensive course or jump into VIP signals",
              color: "border-yellow-500"
            },
            {
              step: "4",
              icon: "🚀",
              title: "Achieve Success",
              description: "Apply strategies, follow signals, and grow your trading portfolio",
              color: "border-purple-500"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#0a1f0e] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 border-l-4 ${item.color} relative overflow-hidden`}
            >
              <div className="absolute top-2 right-2 text-6xl opacity-10">{item.icon}</div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-black font-bold text-sm mr-3`}>
                    {item.step}
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPaymentOptions; 