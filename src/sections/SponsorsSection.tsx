import React from 'react';
import 'swiper/css';
import { User, Bot, Gem, Briefcase, Laptop, TrendingUp, BookOpen, Users, Crown, DollarSign, GraduationCap, Bell, BarChart3 } from 'lucide-react';
import multibankLogo from '../assets/multibank-logo-new.svg';
import sponsor1 from '../assets/sponsors/multibank-io-logo.svg';
import sponsor2 from '../assets/sponsors/mex-exchange-logo.svg';
import sponsor3 from '../assets/sponsors/mbg_token-d.webp';
import sponsor4 from '../assets/sponsors/multibank-fx-logo.svg';
import sponsor5 from '../assets/sponsors/rwa-logo.svg';
import heavilyRegulated from '../assets/icons/heavily-regulated.webp';
import bestPrice from '../assets/icons/best-price.webp';
import imgLeverageUp from '../assets/icons/img-leverage-up.webp';
import customerService from '../assets/icons/customer-service.webp';
import eth from '../assets/crypto/eth.webp';
import litecoin from '../assets/crypto/litecoin.webp';
import bitcoin from '../assets/crypto/bitcoin.webp';
import solana from '../assets/crypto/solana.webp';
import cardano from '../assets/crypto/cardano.webp';
import usdt from '../assets/crypto/usdt.webp';
import dash from '../assets/crypto/dash.webp';
import xrp from '../assets/crypto/xrp.webp';
import dot from '../assets/crypto/dot.webp';

const testimonials = [
  {
    name: 'Marco R.',
    role: 'Professional Trader',
    desc: '"XD Trading course completely changed my approach. From losing money to consistent profits in 3 months. The layering strategy alone paid for itself!"',
    avatar: Briefcase,
    profit: '+$15,420',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    name: 'Sarah K.',
    role: 'Beginner Trader',
    desc: '"Started with zero knowledge. The Discord community and VIP signals helped me make my first $5000 in trading. Amazing support!"',
    avatar: Laptop,
    profit: '+$5,240',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    name: 'David L.',
    role: 'Forex Trader',
    desc: '"The VIP signals are incredibly accurate. Following the risk management rules, I\'ve had 8 winning months out of 10. Highly recommended!"',
    avatar: TrendingUp,
    profit: '+$22,100',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10'
  },
  {
    name: 'Anna M.',
    role: 'Day Trader',
    desc: '"The trading bot has been running for 6 months with consistent results. Passive income while I focus on learning more strategies."',
    avatar: Bot,
    profit: '+$8,950',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    name: 'James T.',
    role: 'Swing Trader',
    desc: '"VIP Management service is fantastic. They trade with my funds and I get 70% of profits. No stress, just results every month."',
    avatar: Gem,
    profit: '+$31,200',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },
];

const SponsorsSection: React.FC = () => {
  return (
    <section className="py-10 gradient-bg2 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
            <span className="text-black font-bold text-2xl">XD</span>
          </div>
          <h1 className="text-5xl font-bold gradient-text-green">Trading</h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          XD Trading was founded with one mission: to provide professional trading education and signals to help traders succeed. 
          With years of experience and a growing community of 2000+ active members, we're expanding our reach through Discord and advanced trading services.
        </p>
      </div>
      <div className="relative w-full overflow-x-hidden">
        <div className="flex items-center gap-8 animate-sponsor-marquee">
          {Array(2).fill(null).map((_, loopIdx) => (
            testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name + loopIdx + idx}
                className="flex-shrink-0 w-80 bg-[#0a1f0e] rounded-2xl shadow-lg p-6 mx-2 flex flex-col border border-green-900/40 xd-card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center mr-3 border border-gray-600/50`}>
                    <testimonial.avatar size={24} className={testimonial.color} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto text-green-400 font-bold text-sm">{testimonial.profit}</div>
                </div>
                <p className="text-gray-300 text-sm text-center leading-relaxed italic">{testimonial.desc}</p>
              </div>
            ))
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Why 2000+ Traders Choose XD Trading</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">We provide professional trading education, accurate VIP signals, and a supportive community that helps traders achieve consistent profits through proven strategies and risk management.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#0a1f0e] rounded-2xl p-8 flex flex-col items-start border border-green-900/40 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-600/50">
              <BookOpen size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Professional<br />Education</h3>
            <p className="text-gray-300 text-sm">Comprehensive trading course with lifetime access and proven strategies.</p>
          </div>
          <div className="bg-[#0a1f0e] rounded-2xl p-8 flex flex-col items-start border border-green-900/40 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-600/50">
              <TrendingUp size={32} className="text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">VIP Signals<br />85% Win Rate</h3>
            <p className="text-gray-300 text-sm">Accurate real-time signals with advanced layering techniques and risk management.</p>
          </div>
          <div className="bg-[#0a1f0e] rounded-2xl p-8 flex flex-col items-start border border-green-900/40 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-600/50">
              <Users size={32} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Active Community<br />2000+ Members</h3>
            <p className="text-gray-300 text-sm">Growing Discord and Telegram community with daily insights and support.</p>
          </div>
          <div className="bg-[#0a1f0e] rounded-2xl p-8 flex flex-col items-start border border-green-900/40 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-600/50">
              <Crown size={32} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">VIP Management<br />Profit Sharing</h3>
            <p className="text-gray-300 text-sm">Professional account management with profit-sharing model and zero principal risk.</p>
          </div>
        </div>
      </div>
      {/* Success Stats Row */}
      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-8 mt-16 mb-4 min-w-max px-4 mx-auto">
          {[
            { icon: TrendingUp, value: '85%', label: 'Win Rate', color: 'text-red-400' },
            { icon: DollarSign, value: '$500K+', label: 'Student Profits', color: 'text-green-400' },
            { icon: GraduationCap, value: '1500+', label: 'Course Students', color: 'text-blue-400' },
            { icon: Users, value: '2000+', label: 'Discord Members', color: 'text-purple-400' },
            { icon: Bell, value: '5000+', label: 'VIP Signals Sent', color: 'text-yellow-400' },
            { icon: Crown, value: '4.9/5', label: 'Average Rating', color: 'text-orange-400' },
            { icon: Users, value: '50+', label: 'Countries', color: 'text-cyan-400' },
            { icon: BarChart3, value: '3+ Years', label: 'Experience', color: 'text-pink-400' },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#0a1f0e] rounded-2xl p-6 border border-green-900/40 min-w-[140px] xd-card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-2 border border-gray-600/50">
                  <IconComponent size={24} className={stat.color} />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300 text-center">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes sponsor-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-sponsor-marquee {
          display: flex;
          width: max-content;
          animation: sponsor-marquee 30s linear infinite;
        }
        .crypto-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
          animation: crypto-scale 2.5s ease-in-out infinite alternate;
        }
        .crypto-logo-wrapper:hover {
          transform: scale(0.92);
        }
        @keyframes crypto-scale {
          0% { transform: scale(1); }
          100% { transform: scale(0.92); }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
        @keyframes crypto-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }
        .animate-crypto-scroll {
          animation: crypto-scroll 20s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-crypto-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection; 