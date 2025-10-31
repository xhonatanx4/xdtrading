import React from 'react';
import stripedBgAlt from '../assets/striped-bg-alt.webp';

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div 
      className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center text-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${stripedBgAlt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Overlay for better text readability */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto px-4">
        {title.split(' ').map((word, index) => (
          word.toLowerCase() === 'xd' || word.toLowerCase() === 'trading' ? 
            <span key={index} className="gradient-text-green">{word} </span> : 
            <span key={index}>{word} </span>
        ))}
      </h1>
    </div>
  );
};

export default PageBanner; 