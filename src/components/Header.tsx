import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import bmwImg from '../assets/bmw.webp';

// XD Trading Logo Placeholder (SVG inline per ora)
const XDTradingLogo = ({ isVipPage = false }: { isVipPage?: boolean }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
      isVipPage ? 'bg-gradient-to-br from-red-400 to-red-600' : 'bg-gradient-to-br from-green-400 to-green-600'
    }`}>
      <span className="text-black font-bold text-lg">XD</span>
    </div>
    <span className={`text-xl font-bold ${isVipPage ? 'vip-gradient-text' : 'gradient-text-green'}`}>Trading</span>
  </div>
);

const Header: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // IB Disclosure Bar state
  const [showIBDisclosure, setShowIBDisclosure] = useState(() => {
    // Optionally, use sessionStorage to persist close state for the session
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hideIBDisclosure') !== 'true';
    }
    return true;
  });

  const handleCloseIBDisclosure = () => {
    setShowIBDisclosure(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hideIBDisclosure', 'true');
    }
  };

  const ibDisclosure = showIBDisclosure && (
    <div className="ib-disclosure sticky top-0 left-0 w-full bg-green-400 text-black text-center py-2 px-4 text-sm font-medium shadow z-[100] flex items-center justify-center">
      <p className="flex-1"><strong>Welcome to XD Trading!</strong> Join our exclusive trading community with professional signals and advanced courses. Over 2000+ members!</p>
      <button
        className="ml-4 text-black hover:text-gray-700 text-lg font-bold px-2 focus:outline-none"
        aria-label="Close XD Trading Banner"
        onClick={handleCloseIBDisclosure}
        type="button"
      >
        ×
      </button>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = useMemo(() => [
    { name: 'Why XD Trading', href: '/why-xd-trading' },
    { name: 'Courses', href: '/courses' },
    { name: 'VIP Signals', href: '/vip-signals' },
    { name: 'Discord Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ], []);

  return (
    <>
      {ibDisclosure}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[rgb(11,17,32)] shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-8">
                <Link to="/" aria-label="Back to Homepage">
                  <XDTradingLogo isVipPage={location.pathname === '/vip-signals'} />
                </Link>
              </div>
            </div>
            
            <nav className="hidden xl:flex items-center space-x-6" role="navigation" aria-label="Hauptnavigation">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href 
                      ? (link.href === '/vip-signals' ? 'text-red-400' : 'text-green-400')
                      : (link.href === '/vip-signals' ? 'hover:text-red-400' : 'hover:text-green-400')
                  }`}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <button
              className="xl:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-[#0f2515] z-50 transition-all duration-500 ease-in-out xl:hidden ${
            mobileMenuOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95 pointer-events-none'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobilmenü"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <Link to="/" className="text-2xl font-bold" aria-label="Back to Homepage">
                <XDTradingLogo isVipPage={location.pathname === '/vip-signals'} />
              </Link>
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4" role="navigation" aria-label="Mobilnavigation">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`block text-lg text-white transition-colors mb-4 ${
                    location.pathname === link.href 
                      ? (link.href === '/vip-signals' ? 'text-red-400' : 'text-green-400')
                      : (link.href === '/vip-signals' ? 'hover:text-red-400' : 'hover:text-green-400')
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col items-center gap-4 mb-6">
              {/* Discord Community */}
              <div className="text-center p-4 bg-[#0a1f0e] rounded-xl border border-green-500/30">
                <h3 className="text-lg font-bold gradient-text-green mb-2">Join Our Community</h3>
                <p className="text-gray-300 text-sm mb-4">Over 2000+ active traders on Discord and Telegram</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://discord.gg/cAqxqN4bUT" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="green-button text-black font-bold py-2 px-4 rounded-lg transition-all hover:scale-105"
                  >
                    📱 Discord Community
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href="https://t.me/xdtradingacademy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-lg transition-all text-sm"
                    >
                      📢 TG Group
                    </a>
                    <a 
                      href="https://t.me/xdtradingo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-all text-sm"
                    >
                      📊 TG Channel
                    </a>
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="green-button mb-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;