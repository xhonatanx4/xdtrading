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
    let pageTitle = 'MultiBank Europe - Der größte und am stärksten regulierte FX-Broker der Welt';
    let pageDescription = 'MultiBank Europe ist Ihr vertrauenswürdiger Partner für Forex-Handel, CFDs und Kryptowährungen. Profitieren Sie von niedrigen Spreads, schneller Ausführung und erstklassigem Kundenservice.';

    // Update title and description based on the current route
    switch (location.pathname) {
      case '/warum-multibank':
        pageTitle = 'Warum MultiBank - Ihr vertrauenswürdiger Forex-Broker';
        pageDescription = 'Entdecken Sie die Vorteile von MultiBank Europe: Regulierte Handelsplattform, wettbewerbsfähige Spreads und professioneller Kundenservice für Ihren erfolgreichen Handel.';
        break;
      case '/regulierungen':
        pageTitle = 'Regulierungen - MultiBank Europe';
        pageDescription = 'MultiBank Europe ist durch renommierte Finanzaufsichtsbehörden reguliert. Erfahren Sie mehr über unsere regulatorischen Standards und Ihr geschütztes Handelserlebnis.';
        break;
      case '/auszeichnungen':
        pageTitle = 'Auszeichnungen - MultiBank Europe';
        pageDescription = 'Sehen Sie die zahlreichen Auszeichnungen und Anerkennungen, die MultiBank Europe für Exzellenz im Forex-Handel und Kundenservice erhalten hat.';
        break;
      case '/konten-vergleichen':
        pageTitle = 'Konten vergleichen - MultiBank Europe';
        pageDescription = 'Vergleichen Sie unsere Handelskonten und finden Sie die perfekte Lösung für Ihre Handelsbedürfnisse. Von Standard- bis zu ECN-Konten mit wettbewerbsfähigen Konditionen.';
        break;
      case '/kontakt':
        pageTitle = 'Kontakt - MultiBank Europe';
        pageDescription = 'Kontaktieren Sie unser professionelles Support-Team für alle Ihre Fragen zum Handel, Kontoeröffnung oder technische Unterstützung.';
        break;
      case '/datenschutzerklaerung':
        pageTitle = 'Datenschutzerklärung - MultiBank Europe';
        pageDescription = 'Lesen Sie unsere Datenschutzerklärung und erfahren Sie, wie MultiBank Europe Ihre persönlichen Daten schützt und verarbeitet.';
        break;
      case '/impressum':
        pageTitle = 'Impressum - MultiBank Europe';
        pageDescription = 'Offizielle Unternehmensinformationen, rechtliche Details und Kontaktinformationen von MultiBank Europe.';
        break;
      case '/risikohinweis':
        pageTitle = 'Risikohinweis - MultiBank Europe';
        pageDescription = 'Wichtige Informationen zu den Risiken des Handels mit Finanzinstrumenten. Bitte lesen Sie unseren Risikohinweis sorgfältig durch.';
        break;
      case '/cookie-hinweis':
        pageTitle = 'Cookie-Hinweis - MultiBank Europe';
        pageDescription = 'Informationen über die Verwendung von Cookies auf unserer Website und wie Sie Ihre Cookie-Einstellungen verwalten können.';
        break;
      case '/agb':
        pageTitle = 'Allgemeine Geschäftsbedingungen - MultiBank Europe';
        pageDescription = 'Unsere Allgemeinen Geschäftsbedingungen (AGB) mit allen wichtigen Informationen zu Ihrem Handelskonto und unseren Dienstleistungen.';
        break;
      case '/swap-free-handelskontovereinbarung':
        pageTitle = 'Swap-Free Handelskontovereinbarung - MultiBank Europe';
        pageDescription = 'Informationen zu unseren Swap-Free Handelskonten, die speziell für islamische Händler entwickelt wurden und den islamischen Finanzprinzipien entsprechen.';
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
    ogUrl.setAttribute('content', `https://multibankeurope.com${location.pathname}`);

  }, [location.pathname, title, description]);

  return null;
};

export default MetaTags; 