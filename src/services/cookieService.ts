import { CookiePreferences } from '../components/CookieConsent';

type CookieType = 'essential' | 'statistics' | 'marketing';

class CookieService {
  private static instance: CookieService;
  private cookiePreferences: CookiePreferences | null = null;

  private constructor() {
    this.loadPreferences();
  }

  public static getInstance(): CookieService {
    if (!CookieService.instance) {
      CookieService.instance = new CookieService();
    }
    return CookieService.instance;
  }

  private loadPreferences(): void {
    try {
      const storedPreferences = localStorage.getItem('cookieConsent');
      if (storedPreferences) {
        this.cookiePreferences = JSON.parse(storedPreferences);
      }
    } catch (error) {
      console.error('Failed to load cookie preferences:', error);
      this.cookiePreferences = null;
    }
  }

  public setPreferences(preferences: CookiePreferences): void {
    try {
      this.cookiePreferences = preferences;
      localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save cookie preferences:', error);
    }
  }

  public getPreferences(): CookiePreferences | null {
    return this.cookiePreferences;
  }

  public hasConsent(): boolean {
    return this.cookiePreferences !== null;
  }

  public canSetCookie(type: CookieType): boolean {
    if (!this.cookiePreferences) return false;
    return this.cookiePreferences[type];
  }

  public setCookie(name: string, value: string, type: CookieType, days: number = 365): void {
    if (!this.canSetCookie(type)) return;

    try {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    } catch (error) {
      console.error(`Failed to set cookie ${name}:`, error);
    }
  }

  public getCookie(name: string): string | null {
    try {
      const nameEQ = `${name}=`;
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    } catch (error) {
      console.error(`Failed to get cookie ${name}:`, error);
      return null;
    }
  }

  public deleteCookie(name: string): void {
    try {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    } catch (error) {
      console.error(`Failed to delete cookie ${name}:`, error);
    }
  }

  public clearAllCookies(): void {
    try {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        this.deleteCookie(name.trim());
      }
    } catch (error) {
      console.error('Failed to clear all cookies:', error);
    }
  }

  public clearPreferences(): void {
    try {
      localStorage.removeItem('cookieConsent');
      this.cookiePreferences = null;
    } catch (error) {
      console.error('Failed to clear cookie preferences:', error);
    }
  }
}

export default CookieService; 