import CryptoJS from 'crypto-js';

export interface VoletPaymentData {
  ac_account_email: string;
  ac_sci_name: string;
  ac_amount: string;
  ac_currency: string;
  ac_order_id: string;
  ac_sign?: string;
  ac_ps?: string;
  ac_protocol?: string;
  ac_comments?: string;
  ac_success_url?: string;
  ac_success_url_method?: 'GET' | 'POST';
  ac_fail_url?: string;
  ac_fail_url_method?: 'GET' | 'POST';
  ac_status_url?: string;
  ac_status_url_method?: 'GET' | 'POST';
  ac_client_lang?: string;
  ac_submerchant_url?: string;
  [key: string]: string | undefined; // For custom fields
}

export interface VoletConfig {
  accountEmail: string;
  sciName: string;
  sciPassword: string;
  successUrl: string;
  failUrl: string;
  statusUrl: string;
  baseUrl: string;
}

class VoletService {
  private config: VoletConfig;

  constructor() {
    try {
      const env: any = (import.meta as any).env || {};
      this.config = {
        // Prefer VITE_* (Vite standard), fallback to legacy REACT_APP_* if set
        accountEmail: env.VITE_VOLET_ACCOUNT_EMAIL || env.REACT_APP_VOLET_ACCOUNT_EMAIL || 'test@example.com',
        sciName: env.VITE_VOLET_SCI_NAME || env.REACT_APP_VOLET_SCI_NAME || 'test-store',
        sciPassword: env.VITE_VOLET_SCI_PASSWORD || env.REACT_APP_VOLET_SCI_PASSWORD || 'test-password',
        successUrl: typeof window !== 'undefined' ? `${window.location.origin}/payment/success` : '/payment/success',
        failUrl: typeof window !== 'undefined' ? `${window.location.origin}/payment/failed` : '/payment/failed',
        statusUrl: typeof window !== 'undefined' ? `${window.location.origin}/.netlify/functions/voletWebhook` : '/.netlify/functions/voletWebhook',
        baseUrl: 'https://account.volet.com/sci/'
      };
    } catch (error) {
      console.error('Error initializing VoletService:', error);
      // Fallback configuration
      this.config = {
        accountEmail: 'test@example.com',
        sciName: 'test-store',
        sciPassword: 'test-password',
        successUrl: '/payment/success',
        failUrl: '/payment/failed',
        statusUrl: '/.netlify/functions/voletWebhook',
        baseUrl: 'https://account.volet.com/sci/'
      };
    }
  }

  /**
   * Generate SHA-256 signature for payment request
   */
  generateSignature(paymentData: VoletPaymentData): string {
    const signatureString = [
      paymentData.ac_account_email,
      paymentData.ac_sci_name,
      paymentData.ac_amount,
      paymentData.ac_currency,
      this.config.sciPassword,
      paymentData.ac_order_id
    ].join(':');

    return CryptoJS.SHA256(signatureString).toString();
  }

  /**
   * Generate SHA-256 hash for webhook verification
   */
  generateWebhookHash(data: any): string {
    const hashString = [
      data.ac_transfer,
      data.ac_start_date,
      data.ac_sci_name,
      data.ac_src_wallet,
      data.ac_dest_wallet,
      data.ac_order_id,
      data.ac_amount,
      data.ac_merchant_currency,
      this.config.sciPassword
    ].join(':');

    return CryptoJS.SHA256(hashString).toString();
  }

  /**
   * Create payment form data for courses
   */
  createCoursePayment(orderId: string, amount: string = '350'): VoletPaymentData {
    const paymentData: VoletPaymentData = {
      ac_account_email: this.config.accountEmail,
      ac_sci_name: this.config.sciName,
      ac_amount: amount,
      ac_currency: 'USD',
      ac_order_id: orderId,
      ac_ps: 'VOLET',
      ac_comments: 'Trading Course - Lifetime Access',
      ac_success_url: this.config.successUrl,
      ac_success_url_method: 'GET',
      ac_fail_url: this.config.failUrl,
      ac_fail_url_method: 'GET',
      ac_status_url: this.config.statusUrl,
      ac_status_url_method: 'POST',
      ac_client_lang: 'en',
      course_type: 'trading_course',
      product_name: 'Complete Trading Course'
    };

    // Generate signature
    paymentData.ac_sign = this.generateSignature(paymentData);
    
    return paymentData;
  }

  /**
   * Create payment form data for VIP signals
   */
  createVipSignalsPayment(orderId: string, plan: 'monthly' | '6months' | 'yearly' | 'lifetime'): VoletPaymentData {
    const plans = {
      monthly: { amount: '200', period: '1 Month' },
      '6months': { amount: '1000', period: '6 Months' },
      yearly: { amount: '1500', period: '1 Year' },
      lifetime: { amount: '2500', period: 'Lifetime' }
    };

    const selectedPlan = plans[plan];
    
    const paymentData: VoletPaymentData = {
      ac_account_email: this.config.accountEmail,
      ac_sci_name: this.config.sciName,
      ac_amount: selectedPlan.amount,
      ac_currency: 'USD',
      ac_order_id: orderId,
      ac_ps: 'VOLET',
      ac_comments: `VIP Signals - ${selectedPlan.period}`,
      ac_success_url: this.config.successUrl,
      ac_success_url_method: 'GET',
      ac_fail_url: this.config.failUrl,
      ac_fail_url_method: 'GET',
      ac_status_url: this.config.statusUrl,
      ac_status_url_method: 'POST',
      ac_client_lang: 'en',
      vip_plan: plan,
      product_name: 'VIP Trading Signals'
    };

    // Generate signature
    paymentData.ac_sign = this.generateSignature(paymentData);
    
    return paymentData;
  }

  /**
   * Submit payment form to Volet
   */
  submitPayment(paymentData: VoletPaymentData): void {
    // Check if we're in development mode with test credentials
    if (this.config.accountEmail === 'test@example.com') {
      console.warn('⚠️ Volet credentials not configured. Using test mode.');
      alert('⚠️ Modalità test: Le credenziali Volet non sono configurate. Configura le variabili ambiente per testare i pagamenti reali.');
      return;
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = this.config.baseUrl;
    form.style.display = 'none';

    // Add all form fields
    Object.entries(paymentData).forEach(([key, value]) => {
      if (value !== undefined) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  /**
   * Generate unique order ID
   */
  generateOrderId(): string {
    return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(data: any): boolean {
    const receivedHash = data.ac_hash;
    const calculatedHash = this.generateWebhookHash(data);
    return receivedHash === calculatedHash;
  }
}

export default new VoletService();
