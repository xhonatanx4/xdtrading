import React from 'react';
import { MessageCircle, Send, Users } from 'lucide-react';

const KontaktInfoSection: React.FC = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Discord Server',
      description: 'Join our active Discord community for real-time support and trading discussions',
      link: 'https://discord.gg/cAqxqN4bUT',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: Send,
      title: 'Telegram Channels',
      description: 'Get free daily signals and market analysis on our Telegram channels',
      link: 'https://t.me/xdtradingo',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Users,
      title: '2000+ Community',
      description: 'Connect with thousands of traders across Discord and Telegram platforms',
      link: '/community',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
  ];

  return (
    <section className="pt-32 pb-16 px-4 gradient-bg2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            GET IN <span className="gradient-text-green">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our thriving community of traders and get direct access to professional support, 
            premium signals, and exclusive trading education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            const isExternalLink = option.link.startsWith('http');
            
            const cardContent = (
              <div className={`bg-radial rounded-xl p-6 flex flex-col items-center justify-start text-center h-full advantage-box transition-all duration-300 hover:scale-105 ${option.bgColor} border border-gray-700/50`}>
                <div className={`w-14 h-14 rounded-full ${option.bgColor} flex items-center justify-center mb-4 border border-gray-600/50`}>
                  <IconComponent size={28} className={option.color} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{option.description}</p>
              </div>
            );

            return isExternalLink ? (
              <a key={index} href={option.link} target="_blank" rel="noopener noreferrer" className="block">
                {cardContent}
              </a>
            ) : (
              <a key={index} href={option.link} className="block">
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KontaktInfoSection; 