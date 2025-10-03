import React from 'react';
import stripedBgAlt from '../assets/striped-bg-alt.webp';
import uberPageBanner from '../assets/uber/banner.webp';

const RegulierungenBanner: React.FC = () => {
  return (
    <div 
      className="relative w-full min-h-[500px] flex items-center py-16 px-4 pt-32 gradient-bg"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="lg:w-1/2 text-left mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-blue">Regulations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Die MultiBank Group besteht aus mehreren Einheiten, die von mehr als 17+ 
            Finanzaufsichtsbehörden auf 5 Kontinenten streng reguliert werden. Dadurch wird 
            sichergestellt, dass unsere Kunden volle Transparenz und Sicherheit für ihre Gelder erhalten.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Erfahren Sie mehr über unsere verschiedenen regulierten Einheiten.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={uberPageBanner}
            alt="Regulations Banner Icon" 
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

export default RegulierungenBanner; 