import React from 'react';
import { Rocket, TrendingUp, Gem, BookOpen, Bell } from 'lucide-react';

const ParallaxVideoSection: React.FC = () => {
  const successStories = [
    {
      name: "Alex M.",
      story: "Started with $1,000, now managing $50,000+ portfolio",
      profit: "+4,900% ROI",
      timeframe: "18 months",
      avatar: Rocket,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "Maria S.",
      story: "From complete beginner to consistent monthly profits",
      profit: "+$12,500",
      timeframe: "8 months", 
      avatar: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      name: "John D.",
      story: "VIP signals helped me quit my day job",
      profit: "+$85,000",
      timeframe: "2 years",
      avatar: Gem,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section className="relative py-20 gradient-bg2 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="gradient-text-green uppercase font-semibold tracking-wider mb-2">SUCCESS STORIES</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Results from Real Students</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of traders who transformed their lives with XD Trading education and signals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => {
            const AvatarComponent = story.avatar;
            return (
              <div key={index} className="bg-[#0a1f0e] rounded-2xl p-8 border border-green-900/40 text-center xd-card-hover">
                <div className={`w-16 h-16 rounded-full ${story.bgColor} flex items-center justify-center mb-4 mx-auto border border-gray-600/50`}>
                  <AvatarComponent size={32} className={story.color} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{story.name}</h4>
                <p className="text-gray-300 mb-4 min-h-[50px]">{story.story}</p>
                <div className="border-t border-green-900/40 pt-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">{story.profit}</div>
                  <div className="text-sm text-gray-400">in {story.timeframe}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-[#0a1f0e] rounded-2xl p-8 border border-green-900/40 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Join our community of successful traders. Start with our comprehensive course or jump straight into VIP signals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="green-button text-black font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 flex items-center justify-center">
                <BookOpen size={20} className="mr-2" />
                Start Learning Today
              </a>
              <a href="/vip-signals" className="red-button text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 flex items-center justify-center">
                <Bell size={20} className="mr-2" />
                Get VIP Signals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxVideoSection;