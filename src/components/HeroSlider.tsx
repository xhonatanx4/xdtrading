import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Bell, MessageCircle } from 'lucide-react';
import headerMain from '../assets/bg1.jpg';
import headerIo from '../assets/bg3.jpg';
import headerMexExchange from '../assets/bg2.jpg';
import mbPlusLogo from '../assets/mb-plus-logo.webp';
import meta4 from '../assets/meta-4.svg';
import meta5 from '../assets/meta-5.svg';

// Pagination icons now use Lucide React SVG components
import { useMediaQuery } from 'react-responsive';

const slides = [
  {
    id: 1,
    heading: (
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Master Trading with <span className="gradient-text-green">XD Trading</span> Professional Courses
      </h1>
    ),
    subheading: "Learn from years of experience with our comprehensive trading course. One-time payment, lifetime access for just $350.",
    backgroundImage: headerMain,
    theme: 'green',
  },
  {
    id: 2,
    heading: (
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Professional <span className="gradient-text-red">VIP Trading</span> Signals
      </h1>
    ),
    subheading: "Get accurate, real-time trading signals with advanced techniques like layering. Choose your plan from $200/month to lifetime access.",
    backgroundImage: headerIo,
    theme: 'red',
  },
  {
    id: 3,
    heading: (
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Join <span className="gradient-text-green">2000+ Active Traders</span> Community
      </h1>
    ),
    subheading: "Connect with professional traders on Discord and Telegram. Get daily insights, support, and exclusive content.",
    backgroundImage: headerMexExchange,
    theme: 'green',
  },
];

const paginationItems = [
  { id: 1, label: 'Courses', icon: GraduationCap, color: 'text-blue-400' },
  { id: 2, label: 'VIP Signals', icon: Bell, color: 'text-red-400' },
  { id: 3, label: 'Community', icon: MessageCircle, color: 'text-green-400' },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000); // 5 seconds for manual interaction before autoplay resumes
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const autoplayDuration = 6000; // 6 seconds
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoplayDuration);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, autoplay]);

  // Responsive hook for mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className={`text-center max-w-4xl mx-auto animate-fadeInUp ${slide.theme === 'red' ? 'vip-page-bg rounded-2xl p-8' : ''}`}>
                {slide.heading}
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">{slide.subheading}</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  {index === 0 ? (
                    <>
                      <button className="green-button text-black font-bold" onClick={() => navigate('/courses')}>
                        Get Course ($350)
                      </button>
                      <button className="white-button border-green-500 hover:bg-green-500/10" onClick={() => navigate('/community')}>
                        Join Discord Community
                      </button>
                    </>
                  ) : index === 1 ? (
                    <>
                      <button className="red-button text-white font-bold" onClick={() => navigate('/vip-signals')}>
                        View VIP Plans
                      </button>
                      <button className="white-button border-red-500 hover:bg-red-500/10" onClick={() => window.open('https://t.me/xdtradingo', '_blank')}>
                        Free Telegram Signals
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="green-button text-black font-bold" onClick={() => window.open('https://discord.gg/cAqxqN4bUT', '_blank')}>
                        Join Discord
                      </button>
                      <button className="white-button border-green-500 hover:bg-green-500/10" onClick={() => window.open('https://t.me/xdtradingo', '_blank')}>
                        Telegram Channel
                      </button>
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination for Desktop */}
      <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center space-x-4 z-10">
        {paginationItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`relative flex flex-col items-center justify-center w-32 h-[70px] p-2 rounded-xl transition-all duration-300
                bg-[rgba(10,31,14,.8)] text-white overflow-hidden border-2
                ${index === currentSlide ? 'border-green-500 bg-green-500/20' : 'border-green-500/30 hover:border-green-500/60'}
              `}
              onClick={() => goToSlide(index)}
            >
              <div className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center mb-2 border border-gray-600/50">
                <IconComponent size={16} className={item.color} />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-400">{item.label}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pagination for Mobile */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors
              ${index === currentSlide ? 'bg-xd-green-500' : 'bg-white/50'}
            `}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;