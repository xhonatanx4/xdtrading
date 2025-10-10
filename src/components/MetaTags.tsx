import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    // Get the default title and description
    let pageTitle = 'XD Trading — Courses, VIP Signals, and Community for Traders';
    let pageDescription = 'XD Trading offers trading courses, VIP signals, and an active community. Trade smarter with fast execution and global payment options.';

    // Update title and description based on the current route
    switch (location.pathname) {
      case '/why-xd-trading':
        pageTitle = 'Why XD Trading — Our Mission and Advantages';
        pageDescription = 'Why XD Trading? Modern trading education, tools, and community support for your success.';
        break;
      case '/courses':
        pageTitle = 'Trading Courses — From Beginner to Advanced';
        pageDescription = 'Structured trading courses from fundamentals to advanced strategies. Learn hands-on and application-focused.';
        break;
      case '/vip-signals':
        pageTitle = 'VIP Signals — Curated Real-Time Market Setups';
        pageDescription = 'Receive curated trading setups, risk levels, and execution plans from our analyst team.';
        break;
      case '/community':
        pageTitle = 'Discord Community — Learn and Trade Together';
        pageDescription = 'Join the XD Trading community: live streams, feedback, discussion, and growing together.';
        break;
      case '/contact':
        pageTitle = 'Contact — Talk to XD Trading';
        pageDescription = 'Questions about courses, VIP signals, or the community? Our team is happy to help.';
        break;
      case '/privacy-policy':
        pageTitle = 'Privacy Policy — XD Trading';
        pageDescription = 'Read our privacy policy to learn how XD Trading protects and processes your personal data.';
        break;
      case '/legal-notice':
        pageTitle = 'Imprint — XD Trading';
        pageDescription = 'Official company information, legal details, and contact information for XD Trading.';
        break;
      case '/risk-disclosure':
        pageTitle = 'Risk Disclosure — XD Trading';
        pageDescription = 'Important information about the risks of trading financial instruments. Please read our risk disclosure carefully.';
        break;
      case '/cookie-notice':
        pageTitle = 'Cookie Notice — XD Trading';
        pageDescription = 'Information about how we use cookies on our website and how you can manage your cookie preferences.';
        break;
      case '/terms-and-conditions':
        pageTitle = 'Terms and Conditions — XD Trading';
        pageDescription = 'Our Terms and Conditions with key information about your trading account and our services.';
        break;
      case '/swap-free-handelskontovereinbarung':
        pageTitle = 'Swap-Free Trading Account Agreement — XD Trading';
        pageDescription = 'Information about our swap-free trading accounts, designed for Islamic traders and compliant with Islamic finance principles.';
        break;
    }

    // Update meta tags
    document.title = title || pageTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || pageDescription);

    // Add Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title || pageTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description || pageDescription);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', `https://xdtrading.com${location.pathname}`);

  }, [location.pathname, title, description]);

  return null;
};

export default MetaTags; 