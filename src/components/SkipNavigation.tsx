import React, { useState } from 'react';

const SkipNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      setIsVisible(true);
    }
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className={`fixed top-4 left-4 z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      >
        <a
          href="#main-content"
          className="green-button text-black px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          tabIndex={0}
        >
          Zum Hauptinhalt springen
        </a>
      </div>
      
      {/* Add focus trap for keyboard navigation */}
      <div
        className="sr-only"
        tabIndex={0}
        onFocus={() => setIsVisible(true)}
        onBlur={handleBlur}
      />
    </>
  );
};

export default SkipNavigation; 