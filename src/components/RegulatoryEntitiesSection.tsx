import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PlayCircle, BookOpen, TrendingUp, Shield, Users, Award, Clock, Infinity, GraduationCap, MessageCircle } from 'lucide-react';
import VoletPaymentForm from './VoletPaymentForm';

const courseModules = [
  {
    id: 'fundamentals',
    icon: BookOpen,
    name: 'Fundamentals',
    title: 'Trading Fundamentals & Market Psychology',
    description: 'Master the basics of trading, understand market structure, and develop the winning mindset required for consistent profitability. Learn market cycles, economic indicators, and how to read market sentiment.',
    pages: 12
  },
  {
    id: 'analysis',
    icon: TrendingUp,
    name: 'Analysis',
    title: 'Technical & Fundamental Analysis',
    description: 'Advanced chart patterns, technical indicators, support/resistance levels, and fundamental analysis techniques. Learn to identify high-probability trading setups with precision.',
    pages: 18
  },
  {
    id: 'risk',
    icon: Shield,
    name: 'Risk Management',
    title: 'Professional Risk Management',
    description: 'Protect your capital like a professional trader. Advanced position sizing, stop-loss strategies, portfolio management, and how to minimize losses while maximizing profits.',
    pages: 10
  },
  {
    id: 'strategies',
    icon: Award,
    name: 'Strategies',
    title: 'Proven Trading Strategies',
    description: 'Time-tested trading strategies used by institutional investors. Scalping, swing trading, trend following, and mean reversion techniques with real market examples.',
    pages: 15
  },
  {
    id: 'psychology',
    icon: Users,
    name: 'Psychology',
    title: 'Trading Psychology & Discipline',
    description: 'Develop mental discipline and emotional control. Learn to manage fear, greed, and other emotions that can destroy trading accounts. Build consistency and confidence.',
    pages: 8
  },
  {
    id: 'advanced',
    icon: PlayCircle,
    name: 'Advanced',
    title: 'Advanced Techniques & Live Trading',
    description: 'Elite trading secrets, advanced market manipulation techniques, and live trading sessions. Learn strategies that 95% of traders never discover.',
    pages: 20
  },
];

const RegulatoryEntitiesSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState(courseModules[0].id);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const currentModule = courseModules.find(module => module.id === activeModule);

  return (
    <section className="py-16 px-4 gradient-bg2">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Complete <span className="gradient-text-green">XD Trading</span> Course
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Master professional trading with our comprehensive course. One-time payment, lifetime access to proven strategies used by institutional traders.
          </p>
          
          {/* Single CTA Box */}
          <div className="bg-gradient-to-br from-green-900/80 to-green-800/60 rounded-2xl p-8 border border-green-500/30 shadow-2xl max-w-lg mx-auto backdrop-blur-sm">
            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-green-400 mb-2">$350</div>
              <div className="text-gray-300 text-lg">One-time payment</div>
            </div>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <Infinity size={24} className="text-green-400 mr-3" />
                <span className="text-white font-semibold text-lg">Lifetime Access</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={() => setShowPaymentForm(true)}
                className="green-button text-black font-bold text-xl py-4 px-8 rounded-full transition-all hover:scale-105 shadow-xl inline-flex items-center"
              >
                <GraduationCap size={28} className="mr-3" />
                Get Course Access Now
              </button>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Course <span className="gradient-text-green">Modules</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {courseModules.map(module => {
              const IconComponent = module.icon;
              return (
                <button
                  key={module.id}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 
                    ${activeModule === module.id ? 'bg-green-500 text-black' : 'bg-[#0a1f0e] text-white hover:bg-green-500/20 border border-green-900/40'}`}
                  onClick={() => setActiveModule(module.id)}
                >
                  <IconComponent size={20} />
                  <span>{module.name}</span>
                </button>
              );
            })}
          </div>

        {currentModule && (
          <div className="bg-[#0a1f0e] rounded-xl shadow-lg p-8 text-left border border-green-900/40">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <currentModule.icon size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentModule.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-green-400 font-semibold">{currentModule.pages} pages</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-6">{currentModule.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowPaymentForm(true)}
                className="green-button text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all flex items-center justify-center"
              >
                <GraduationCap size={20} className="mr-2" />
                Access This Module
                <ChevronRight size={20} className="ml-2" />
              </button>
              <a href="https://discord.gg/cAqxqN4bUT" target="_blank" rel="noopener noreferrer" className="bg-[#0f2515] border border-green-500/50 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-500/20 transition-all flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Ask Questions on Discord
              </a>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Volet Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Complete Trading Course
                </h3>
                <button
                  onClick={() => setShowPaymentForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <VoletPaymentForm
                productType="course"
                onSuccess={() => setShowPaymentForm(false)}
                onError={() => setShowPaymentForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegulatoryEntitiesSection; 