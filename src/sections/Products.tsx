import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Bell, Bot, Crown, Users, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const serviceCategories = [
  {
    id: 'courses',
    name: 'Trading Courses',
    description: 'Master trading with our comprehensive course covering market analysis, risk management, and proven strategies.',
    active: true,
    theme: 'green'
  },
  {
    id: 'vip-signals',
    name: 'VIP Signals',
    description: 'Get accurate, real-time trading signals with advanced techniques like layering and professional risk management.',
    active: false,
    theme: 'red'
  },
  {
    id: 'trading-bot',
    name: 'Trading Bot',
    description: 'Let our advanced trading bot execute trades for you based on our proven algorithms and signals.',
    active: false,
    theme: 'green'
  },
  {
    id: 'vip-management',
    name: 'VIP Management',
    description: 'Give us your funds and we\'ll trade for you. You keep the profits, we take a percentage of gains only.',
    active: false,
    theme: 'green'
  },
  {
    id: 'community',
    name: 'Discord Community',
    description: 'Join 2000+ active traders in our private Discord server. Get support, share strategies, and learn together.',
    active: false,
    theme: 'green'
  },
  {
    id: 'telegram',
    name: 'Free Telegram',
    description: 'Get free daily trading insights and basic signals on our public Telegram channels.',
    active: false,
    theme: 'green'
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('courses');
  const navigate = useNavigate();

  return (
    <div className="gradient-bg2">
      <section className="gradient-bg">
        <div className="section-container !pt-0 !pb-0">
          <div className="text-center mb-10">
            <h3 className="gradient-text-green uppercase font-semibold tracking-wider mb-2">OUR SERVICES</h3>
            <h2 className="section-heading">Elevate Your Trading Journey</h2>
            <p className="section-subheading">
              Discover our comprehensive suite of trading services designed to help you master the markets, 
              from professional education to VIP signals and community support.
            </p>
          </div>
          
          <div className="tab-list">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn${activeCategory === category.id ? ' active' : ''} ${category.theme === 'red' ? 'vip-tab' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>

          {activeCategory === 'courses' && (
            <div className="tab-content green-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Complete <span className="gradient-text-green">Trading Education</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Master trading with our comprehensive course covering market analysis, risk management, 
                    and proven strategies used by professional traders and institutional investors.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="product-feature-card">
                      <h3>$350</h3>
                      <p>One-time Payment</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Lifetime</h3>
                      <p>Access Forever</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Professional</h3>
                      <p>Expert Support</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="green-button text-black flex items-center justify-center" onClick={() => navigate('/courses')}>
                      Get Course Now ($350)
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="outline-button flex items-center justify-center" onClick={() => navigate('/community')}>
                      Join Discord Community
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-green-900/80 to-green-800/60 flex items-center justify-center border border-green-500/30 shadow-2xl">
                    <GraduationCap size={120} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeCategory === 'vip-signals' && (
            <div className="tab-content vip-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Professional <span className="gradient-text-red">VIP Trading Signals</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Get accurate, real-time trading signals with advanced techniques like layering and professional risk management. 
                    Our VIP signals include detailed entry zones, TP1/TP2, SL levels, and real-time updates for strategic adjustments.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="vip-feature-card">
                      <h3>$200/month</h3>
                      <p>Monthly VIP Access</p>
                    </div>
                    <div className="vip-feature-card">
                      <h3>$2500</h3>
                      <p>Lifetime Access</p>
                    </div>
                    <div className="vip-feature-card">
                      <h3>Real-time</h3>
                      <p>Live Updates</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="red-button text-white flex items-center justify-center" onClick={() => navigate('/vip-signals')}>
                      View VIP Plans
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="white-button border-red-500 hover:bg-red-500/10 flex items-center justify-center" onClick={() => window.open('https://t.me/xdtradingo', '_blank')}>
                      Free Telegram Signals
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-red-900/80 to-red-800/60 flex items-center justify-center border border-red-500/30 shadow-2xl">
                    <Bell size={120} className="text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeCategory === 'trading-bot' && (
            <div className="tab-content green-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Automated <span className="gradient-text-green">Trading Bot</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Let our advanced trading bot execute trades for you based on our proven algorithms and signals. 
                    The bot runs 24/7, never misses opportunities, and follows strict risk management protocols.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="product-feature-card">
                      <h3>24/7</h3>
                      <p>Always Trading</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Proven</h3>
                      <p>Algorithms</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Risk</h3>
                      <p>Controlled</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="green-button text-black flex items-center justify-center" onClick={() => navigate('/contact')}>
                      Contact for Pricing
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="outline-button flex items-center justify-center" onClick={() => navigate('/community')}>
                      Learn More on Discord
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-green-900/80 to-green-800/60 flex items-center justify-center border border-green-500/30 shadow-2xl">
                    <Bot size={120} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeCategory === 'vip-management' && (
            <div className="tab-content green-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    VIP <span className="gradient-text-green">Account Management</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Give us your funds and we'll trade for you using our proven strategies. You keep the profits, 
                    we only take a percentage of the gains. Zero risk to your principal - we only profit when you do.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="product-feature-card">
                      <h3>Professional</h3>
                      <p>Expert Trading</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Profit</h3>
                      <p>Sharing Model</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Zero</h3>
                      <p>Risk to Principal</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="green-button text-black flex items-center justify-center" onClick={() => navigate('/contact')}>
                      Become VIP Member
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="outline-button flex items-center justify-center" onClick={() => navigate('/community')}>
                      Learn More
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-green-900/80 to-green-800/60 flex items-center justify-center border border-green-500/30 shadow-2xl">
                    <Crown size={120} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeCategory === 'community' && (
            <div className="tab-content green-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Exclusive <span className="gradient-text-green">Discord Community</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Join our exclusive Discord server with 2000+ active traders. Get daily insights, share strategies, 
                    learn from professionals, and connect with like-minded traders from around the world.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="product-feature-card">
                      <h3>2000+</h3>
                      <p>Active Members</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Daily</h3>
                      <p>Market Insights</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Live</h3>
                      <p>Support 24/7</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="green-button text-black flex items-center justify-center" onClick={() => window.open('https://discord.gg/cAqxqN4bUT', '_blank')}>
                      Join Discord Now
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="outline-button flex items-center justify-center" onClick={() => navigate('/courses')}>
                      Get Course Access
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-green-900/80 to-green-800/60 flex items-center justify-center border border-green-500/30 shadow-2xl">
                    <Users size={120} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeCategory === 'telegram' && (
            <div className="tab-content green-page-bg rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Free <span className="gradient-text-green">Telegram Signals</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Get free daily trading insights and basic signals on our public Telegram channels. Perfect for beginners 
                    or anyone who wants to see our trading style before upgrading to VIP signals.
                  </p>
                  <div className="product-feature-grid mb-8">
                    <div className="product-feature-card">
                      <h3>Daily</h3>
                      <p>Free Updates</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>100%</h3>
                      <p>Free Forever</p>
                    </div>
                    <div className="product-feature-card">
                      <h3>Basic</h3>
                      <p>Market Analysis</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="green-button text-black flex items-center justify-center" onClick={() => window.open('https://t.me/xdtradingo', '_blank')}>
                      Join Telegram Channel
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="outline-button flex items-center justify-center" onClick={() => window.open('https://t.me/xdtradingacademy', '_blank')}>
                      Join Telegram Group
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-green-900/80 to-green-800/60 flex items-center justify-center border border-green-500/30 shadow-2xl">
                    <MessageCircle size={120} className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;