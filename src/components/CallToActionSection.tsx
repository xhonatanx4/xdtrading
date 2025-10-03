import React from 'react';
import whyMultibank from '../assets/uber/1/why-multibank.webp';
import accountFunding from '../assets/uber/1/account-funding.webp';
import support from '../assets/uber/1/support.webp';
import rocket from '../assets/uber/1/rocket.webp';
import bmwBackground from '../assets/bmw/2.jpg';
import bmwSponsor from '../assets/bmw-sponsor.svg';
import { ChevronRight, BookOpen, Bell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const XDTradingLogo = ({ size = 'large' }: { size?: 'large' | 'medium' }) => (
  <div className={`flex flex-col items-center justify-center ${size === 'large' ? 'scale-150' : ''}`}>
    <div className="bg-gradient-to-br from-green-400 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
      <span className="text-black font-bold text-xl">XD</span>
    </div>
    <span className="gradient-text-green font-bold text-lg whitespace-nowrap">TRADING</span>
  </div>
);

interface CallToActionSectionProps {
  isHomePage?: boolean;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ isHomePage = false }) => {
  return (
    <section className={`px-4 ${isHomePage ? 'gradient-bg' : 'py-16 gradient-bg2'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Choose Your Path to Trading Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Learn Trading */}
          <Link to="/courses" className="flex flex-col items-center p-6 bg-[#0a1f0e] rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-80 group border border-green-900/40">
            <div className="h-24 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-600/50">
                <BookOpen size={32} className="text-blue-400 group-hover:text-blue-300" />
              </div>
            </div>
            <p className="text-white text-lg font-semibold group-hover:text-green-400">Learn Trading</p>
            <p className="text-gray-300 text-sm mt-2 text-center">Master professional strategies with our comprehensive course</p>
          </Link>

          {/* Card 2: VIP Signals */}
          <Link to="/vip-signals" className="flex flex-col items-center p-6 bg-[#0a1f0e] rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-80 group border border-red-900/40">
            <div className="h-24 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-600/50">
                <Bell size={32} className="text-red-400 group-hover:text-red-300" />
              </div>
            </div>
            <p className="text-white text-lg font-semibold group-hover:text-red-400">VIP Signals</p>
            <p className="text-gray-300 text-sm mt-2 text-center">Get accurate real-time trading signals with advanced strategies</p>
          </Link>

          {/* Card 3: Join Community */}
          <a href="https://discord.gg/cAqxqN4bUT" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-[#0a1f0e] rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-80 group border border-green-900/40">
            <div className="h-24 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-600/50">
                <Users size={32} className="text-green-400 group-hover:text-green-300" />
              </div>
            </div>
            <p className="text-white text-lg font-semibold group-hover:text-green-400">Join Community</p>
            <p className="text-gray-300 text-sm mt-2 text-center">Connect with 2000+ traders on Discord and Telegram</p>
          </a>
        </div>

        {/* Large Banner at the bottom */}
        <div 
          className="relative bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden mx-auto shadow-2xl border border-green-500/30"
          style={{ 
            maxWidth: '880px',
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 106, 0.3) 100%), linear-gradient(to right, rgba(5, 16, 8, 0.8), rgba(10, 31, 14, 0.9))'
          }}
        >
          <div className="relative z-10 text-left md:w-3/4">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-gray-200 mb-6">Join thousands of successful traders in our community. Start your journey today!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://discord.gg/cAqxqN4bUT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center green-button text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl py-3 px-6 text-sm md:text-base">
                Join Discord Community
                <ChevronRight size={16} className="ml-2" />
              </a>
              <Link to="/vip-signals" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl py-3 px-6 border border-red-500/50 text-sm md:text-base">
                Get VIP Signals
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 md:relative md:w-1/4 flex justify-center items-center">
            <div className="opacity-30">
              <XDTradingLogo size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 