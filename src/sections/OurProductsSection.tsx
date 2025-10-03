import React from 'react';
import { MessageCircle, Users, Send, TrendingUp, BookOpen, Crown } from 'lucide-react';

const OurProductsSection: React.FC = () => {
  const communityPlatforms = [
    {
      name: 'Discord Server',
      description: 'Interactive community with VIP signals and courses',
      icon: MessageCircle,
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-500/10',
      members: '2000+',
      link: 'https://discord.gg/cAqxqN4bUT'
    },
    {
      name: 'Telegram Channel',
      description: 'Free daily signals and market analysis',
      icon: Send,
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500/10',
      members: '1500+',
      link: 'https://t.me/xdtradingo'
    },
    {
      name: 'Telegram Group',
      description: 'Community chat and discussions',
      icon: Users,
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/10',
      members: '500+',
      link: 'https://t.me/xdtradingoo'
    },
    {
      name: 'VIP Signals',
      description: 'Premium trading signals with 85% win rate',
      icon: TrendingUp,
      borderColor: 'border-red-500',
      bgColor: 'bg-red-500/10',
      members: 'VIP',
      link: '/vip-signals'
    },
    {
      name: 'Trading Course',
      description: 'Complete professional trading education',
      icon: BookOpen,
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-500/10',
      members: '350+',
      link: '/courses'
    },
    {
      name: 'VIP Management',
      description: 'Professional portfolio management service',
      icon: Crown,
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-500/10',
      members: 'Elite',
      link: 'https://discord.gg/cAqxqN4bUT'
    },
  ];

  return (
    <section className="py-16 px-4 text-white gradient-bg2">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our <span className="gradient-text-green">Community</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Connect with over 2000+ active traders across Discord and Telegram. Get access to premium signals, 
          professional courses, and a supportive trading community that's constantly growing and expanding.
        </p>
        <div className="flex justify-center items-center mt-6 space-x-8 text-green-400">
          <div className="flex items-center space-x-2">
            <Users size={24} />
            <span className="text-xl font-bold">2000+ Members</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp size={24} />
            <span className="text-xl font-bold">Expanding on Discord</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityPlatforms.map((platform, index) => {
          const IconComponent = platform.icon;
          const isExternalLink = platform.link.startsWith('http');
          
          const cardContent = (
            <div
              className={`relative flex flex-col items-center justify-center p-6 rounded-xl
                bg-[#0f2515] border-b-4 ${platform.borderColor} ${platform.bgColor}
                hover:scale-105 transition-all duration-300 ease-in-out
                min-h-[220px] cursor-pointer hover:shadow-xl hover:shadow-green-500/20
              `}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <IconComponent size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-300 text-center mb-3">{platform.description}</p>
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${platform.borderColor.replace('border', 'bg').replace('500', '500/20')} ${platform.borderColor.replace('border', 'text')}`}>
                {platform.members} {platform.members.includes('+') ? 'Members' : ''}
              </div>
            </div>
          );

          return isExternalLink ? (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              {cardContent}
            </a>
          ) : (
            <a key={index} href={platform.link}>
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default OurProductsSection; 