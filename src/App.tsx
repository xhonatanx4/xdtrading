import React, { useEffect, useState, Suspense } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Products from './sections/Products';
import AccountTypes from './sections/AccountTypes';
import LiquidityProviders from './sections/LiquidityProviders';
import Footer from './components/Footer';
import ContactSection from './sections/ContactSection';
import SponsorsSection from './sections/SponsorsSection';
import AwardsTimeline from './sections/AwardsTimeline';
import ParallaxVideoSection from './sections/ParallaxVideoSection';
import PageBanner from './components/PageBanner';
import GlobalPaymentOptions from './components/GlobalPaymentOptions';
import WhyXDTradingBanner from './components/WhyXDTradingBanner';
import RegulierungenBanner from './components/RegulierungenBanner';
import AuszeichnungenBanner from './components/AuszeichnungenBanner';
import KontenVergleichenBanner from './components/KontenVergleichenBanner';
import KontaktBanner from './components/KontaktBanner';
import KontaktInfoSection from './sections/KontaktInfoSection';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CookieConsent, { CookiePreferences } from './components/CookieConsent';
import CookieService from './services/cookieService';
import AnalyticsService from './services/analyticsService';
import { Fingerprint } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import MetaTags from './components/MetaTags';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import SkipNavigation from './components/SkipNavigation';
import CallToActionSection from './components/CallToActionSection';

// Lazy load pages for code splitting
const WhyXDTrading = React.lazy(() => import('./pages/WhyXDTrading'));
const Regulierungen = React.lazy(() => import('./pages/Regulierungen'));
const Auszeichnungen = React.lazy(() => import('./pages/Auszeichnungen'));
const KontenVergleichen = React.lazy(() => import('./pages/KontenVergleichen'));
const Datenschutzerklaerung = React.lazy(() => import('./pages/Datenschutzerklaerung'));
const Impressum = React.lazy(() => import('./pages/Impressum'));
const Risikohinweis = React.lazy(() => import('./pages/Risikohinweis'));
const CookieHinweis = React.lazy(() => import('./pages/CookieHinweis'));
const AGB = React.lazy(() => import('./pages/AGB'));
const SwapFreeHandelskontovereinbarung = React.lazy(() => import('./pages/SwapFreeHandelskontovereinbarung'));
const PaymentSuccess = React.lazy(() => import('./pages/PaymentSuccess'));
const PaymentFailed = React.lazy(() => import('./pages/PaymentFailed'));

// Loading component for lazy-loaded pages
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

function HomePage() {
  return (
    <ErrorBoundary>
      <HeroSlider />
      <ErrorBoundary>
        <SponsorsSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
      <ErrorBoundary>
        <AccountTypes />
      </ErrorBoundary>
      <ErrorBoundary>
        <ParallaxVideoSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AwardsTimeline />
      </ErrorBoundary>
      <ErrorBoundary>
        <CallToActionSection isHomePage={true} />
      </ErrorBoundary>
      <ErrorBoundary>
        <GlobalPaymentOptions isHomePage={true} />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

function App() {
  const location = useLocation();
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const cookieService = CookieService.getInstance();
    if (!cookieService.hasConsent()) {
      setIsCookieBannerVisible(true);
    } else {
      // Initialize analytics if consent was previously given
      const preferences = cookieService.getPreferences();
      if (preferences) {
        AnalyticsService.getInstance().initialize(preferences);
      }
    }
  }, []);

  const handleCookieConsent = (preferences: CookiePreferences) => {
    const cookieService = CookieService.getInstance();
    cookieService.setPreferences(preferences);
    AnalyticsService.getInstance().initialize(preferences);
    setIsCookieBannerVisible(false);
  };

  const handleRevokeConsent = () => {
    const cookieService = CookieService.getInstance();
    cookieService.clearAllCookies();
    cookieService.setPreferences({
      essential: true,
      statistics: false,
      marketing: false,
    });
    AnalyticsService.getInstance().initialize({
      essential: true,
      statistics: false,
      marketing: false,
    });
    setIsCookieBannerVisible(true);
  };

  const handleCloseCookieBanner = () => {
    setIsCookieBannerVisible(false);
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/why-xd-trading':
        return 'Why XD Trading';
      case '/courses':
        return 'Trading Courses';
      case '/vip-signals':
        return 'VIP Signals';
      case '/community':
        return 'Discord Community';
      case '/contact':
        return 'Contact';
      case '/privacy-policy':
        return 'Privacy Policy';
      case '/legal-notice':
        return 'Legal Notice';
      case '/risk-disclosure':
        return 'Risk Disclaimer';
      case '/cookie-notice':
        return 'Cookie Notice';
      case '/terms-and-conditions':
        return 'Terms and Conditions';
      case '/swap-free-handelskontovereinbarung':
        return 'Swap-Free-Handelskontovereinbarung';
      default:
        return '';
    }
  };

  const pageTitle = getPageTitle();

  return (
    <>
      <SkipNavigation />
      <MetaTags />
      <ScrollToTop />
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main 
        id="main-content"
        className={`overflow-x-hidden ${['/privacy-policy', '/legal-notice', '/risk-disclosure', '/cookie-notice', '/terms-and-conditions', '/swap-free-handelskontovereinbarung'].includes(location.pathname) ? 'pt-16' : ''}`}
        role="main"
      >
        {location.pathname === '/why-xd-trading' ? (
          <ErrorBoundary>
            <PageBanner title="Why XD Trading" />
          </ErrorBoundary>
        ) : location.pathname === '/courses' ? (
          <ErrorBoundary>
            <PageBanner title="Trading Courses" />
          </ErrorBoundary>
        ) : location.pathname === '/community' ? (
          <ErrorBoundary>
            <PageBanner title="Discord Community" />
          </ErrorBoundary>
        ) : (location.pathname !== '/' && 
             !['/privacy-policy', '/legal-notice', '/risk-disclosure', '/cookie-notice', '/terms-and-conditions', '/swap-free-handelskontovereinbarung', '/vip-signals', '/contact'].includes(location.pathname) && 
             pageTitle && 
             <ErrorBoundary>
               <PageBanner title={getPageTitle()} />
             </ErrorBoundary>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-xd-trading" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <WhyXDTrading />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/courses" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <Regulierungen />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/vip-signals" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <Auszeichnungen />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/community" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <KontenVergleichen />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/contact" element={
            <>
              <ErrorBoundary>
                <KontaktInfoSection />
              </ErrorBoundary>
              <ErrorBoundary>
                <ContactSection />
              </ErrorBoundary>
            </>
          } />
          <Route path="/privacy-policy" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <Datenschutzerklaerung />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/legal-notice" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <Impressum />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/risk-disclosure" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <Risikohinweis />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/cookie-notice" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <CookieHinweis />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/terms-and-conditions" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <AGB />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/swap-free-handelskontovereinbarung" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <SwapFreeHandelskontovereinbarung />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/payment/success" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <PaymentSuccess />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/payment/failed" element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoadingFallback />}>
                <PaymentFailed />
              </Suspense>
            </ErrorBoundary>
          } />
        </Routes>
      </main>
      {location.pathname !== '/' && 
       !['/privacy-policy', '/legal-notice', '/risk-disclosure', '/cookie-notice', '/terms-and-conditions', '/swap-free-handelskontovereinbarung', '/vip-signals', '/contact'].includes(location.pathname) && 
       <ErrorBoundary>
         <GlobalPaymentOptions />
       </ErrorBoundary>}
      <ErrorBoundary>
        <Footer isHomePage={location.pathname === '/'} />
      </ErrorBoundary>
      {isCookieBannerVisible && (
        <ErrorBoundary>
          <CookieConsent onAccept={handleCookieConsent} onRevoke={handleRevokeConsent} onClose={handleCloseCookieBanner} isVisible={isCookieBannerVisible} />
        </ErrorBoundary>
      )}
      <button
        onClick={() => setIsCookieBannerVisible(true)}
        className="fixed bottom-4 left-4 p-3 green-button text-black rounded-full shadow-lg transition-colors z-40"
        title="Cookie-Einstellungen öffnen"
        aria-label="Cookie-Einstellungen öffnen"
      >
        <Fingerprint size={24} />
      </button>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  );
}