import React from 'react';
import { Mail, MessageCircle, Send, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  isHomePage?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isHomePage = false }) => {
  // XD Trading Logo Component
  const XDTradingLogo = () => (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
        <span className="text-black font-bold text-xl">XD</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold gradient-text-green">TRADING</span>
        <span className="text-xs text-gray-400">Professional Trading Excellence</span>
      </div>
    </div>
  );

  return (
    <footer className={`${isHomePage ? 'gradient-bg' : 'gradient-bg2'} pt-12 pb-8 border-t border-gray-700/50`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/">
                <XDTradingLogo />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Join over 2000+ traders in our community. Get access to professional trading education, 
              VIP signals with 85% win rate, and connect with like-minded traders on Discord and Telegram.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/why-xd-trading" className="block text-gray-300 hover:text-green-400 transition-colors">Why XD Trading</Link>
              <Link to="/courses" className="block text-gray-300 hover:text-green-400 transition-colors">Trading Course</Link>
              <Link to="/vip-signals" className="block text-gray-300 hover:text-green-400 transition-colors">VIP Signals</Link>
              <Link to="/community" className="block text-gray-300 hover:text-green-400 transition-colors">Community</Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="space-y-3">
              <a href="https://discord.gg/cAqxqN4bUT" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition-colors">
                <MessageCircle size={16} />
                <span>Discord Server</span>
              </a>
              <a href="https://t.me/xdtradingo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Send size={16} />
                <span>Telegram Channel</span>
              </a>
              <a href="https://t.me/xdtradingoo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Users size={16} />
                <span>Telegram Group</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact & Email */}
        <div className="border-t border-gray-700/50 pt-6 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-green-400 w-5 h-5" />
            <span className="text-lg font-medium text-white">support@xdtradingacademy.com</span>
          </div>
        </div>
        {/* Legal Links */}
        <div className="border-t border-gray-700/50 pt-4 mb-6">
          <div className="flex flex-wrap gap-4 text-xs justify-center items-center text-gray-300">
            <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-500">|</span>
            <Link to="/legal-notice" className="hover:text-green-400 transition-colors">Legal Notice</Link>
            <span className="text-gray-500">|</span>
            <Link to="/risk-disclosure" className="hover:text-green-400 transition-colors">Risk Disclaimer</Link>
            <span className="text-gray-500">|</span>
            <Link to="/cookie-notice" className="hover:text-green-400 transition-colors">Cookie Policy</Link>
            <span className="text-gray-500">|</span>
            <Link to="/terms-and-conditions" className="hover:text-green-400 transition-colors">Terms and Conditions</Link>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700/30">
          <p className="text-gray-300 text-xs text-center leading-relaxed">
            ⚠️ <strong>Risk Warning:</strong> Trading signals and educational content provided by XD Trading are for informational purposes only. 
            Trading involves substantial risk of loss and may not be suitable for all investors. Past performance does not guarantee future results. 
            Please trade responsibly and never risk more than you can afford to lose.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            Copyright © 2025 XD Trading. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Educational content and trading signals | Professional trading community | Discord & Telegram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;