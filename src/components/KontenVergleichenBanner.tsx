import React from 'react';
import stripedBgAlt from '../assets/striped-bg-alt.webp';
import uberBanner from '../assets/uber/banner.webp';

const KontenVergleichenBanner: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-[500px] flex items-center py-16 px-4 pt-32 gradient-bg"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="lg:w-1/2 text-left mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-blue">Konten vergleichen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Vergleichen Sie unsere verschiedenen Kontotypen, um denjenigen zu finden, der am besten zu Ihren Handelsanforderungen passt. Wir bieten Optionen für alle Erfahrungsstufen, von Anfängern bis hin zu professionellen Tradern.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={uberBanner}
            alt="Konten Vergleichen Banner Icon" 
            className="max-w-full h-auto object-contain animate-fadeInUp"
            style={{ maxWidth: '500px' }}
          />
        </div>
      </div>
      <img 
        src={stripedBgAlt}
        alt="Striped Background"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 'auto',
          opacity: 0.91,
          mixBlendMode: 'hard-light',
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: '20% 50%'
        }}
      />
    </div>
  );
};

export default KontenVergleichenBanner; 