import { CookiePreferences } from '../components/CookieConsent';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private isInitialized = false;
  private isLoading = false;

  private constructor() {
    // Initialize dataLayer immediately
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public initialize(preferences: CookiePreferences): void {
    if (preferences.statistics && !this.isInitialized && !this.isLoading) {
      this.isLoading = true;
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PSN8DRQRXV';
      
      script.onload = () => {
        try {
          // Configure Google Analytics
          window.gtag('config', 'G-PSN8DRQRXV', {
            'send_page_view': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
          this.isInitialized = true;
        } catch (error) {
          console.error('Failed to initialize Google Analytics:', error);
        } finally {
          this.isLoading = false;
        }
      };

      script.onerror = (error) => {
        console.error('Failed to load Google Analytics script:', error);
        this.isLoading = false;
      };

      document.head.appendChild(script);
    } else if (!preferences.statistics && this.isInitialized) {
      // Remove Google Analytics script and cookies
      const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
      scripts.forEach(script => script.remove());
      
      // Clear Google Analytics cookies
      document.cookie.split(';').forEach(cookie => {
        if (cookie.includes('_ga') || cookie.includes('_gid')) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      });

      this.isInitialized = false;
    }
  }

  public isAnalyticsLoading(): boolean {
    return this.isLoading;
  }
}

export default AnalyticsService; 