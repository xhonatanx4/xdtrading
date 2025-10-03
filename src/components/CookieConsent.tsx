import React, { useState, useEffect } from 'react';
import { X, Check, Settings, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
  onRevoke: () => void;
  onClose: () => void;
  isVisible: boolean;
}

export interface CookiePreferences {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onRevoke, onClose, isVisible }) => {
  const [activeTab, setActiveTab] = useState<'Zustimmung' | 'Details' | 'Über Cookies'>('Zustimmung');
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    if (isVisible) {
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        setPreferences(JSON.parse(consent));
      } else {
        setPreferences({
          essential: true,
          statistics: false,
          marketing: false,
        });
      }
    }
  }, [isVisible]);

  const handleAcceptAll = () => {
    const allEnabled = {
      essential: true,
      statistics: true,
      marketing: true,
    };
    setPreferences(allEnabled);
    onAccept(allEnabled);
    localStorage.setItem('cookieConsent', JSON.stringify(allEnabled));
    onClose();
  };

  const handleAllowSelected = () => {
    onAccept(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    onClose();
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleRevokeConsent = () => {
    localStorage.removeItem('cookieConsent');
    setPreferences({
      essential: true,
      statistics: false,
      marketing: false,
    });
    onRevoke();
    setActiveTab('Zustimmung');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'Zustimmung' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('Zustimmung')}
          >
            Zustimmung
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'Details' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('Details')}
          >
            Details
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'Über Cookies' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('Über Cookies')}
          >
            Über Cookies
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'Zustimmung' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Diese Webseite verwendet Cookies</h3>
              <p className="text-gray-300 text-sm mb-6">
                Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.
                Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter.
                Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen ihrer Nutzung der Dienste gesammelt haben.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <label className="inline-flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={preferences.essential}
                    disabled
                  />
                  <span className="ml-2 text-gray-300">Notwendig</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={preferences.statistics}
                    onChange={() => handleTogglePreference('statistics')}
                  />
                  <span className="ml-2 text-gray-300">Statistiken</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={preferences.marketing}
                    onChange={() => handleTogglePreference('marketing')}
                  />
                  <span className="ml-2 text-gray-300">Marketing</span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAllowSelected}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded text-sm font-semibold transition-colors"
                >
                  Auswahl erlauben
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Details' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Datenschutz Übersicht</h3>
              <p className="text-gray-300 text-sm mb-4">
                Diese Website verwendet Cookies, um Ihre Erfahrung beim Navigieren durch die Website zu verbessern. Von diesen werden die nach Bedarf kategorisierten Cookies in Ihrem Browser gespeichert, da sie für das Funktionieren der Grundfunktionen der Website unerlässlich sind. Wir verwenden auch Cookies von Drittanbietern, die uns helfen zu analysieren und zu verstehen, wie Sie diese Website nutzen. Diese Cookies werden nur mit Ihrer Zustimmung in Ihrem Browser gespeichert. Sie haben auch die Möglichkeit, diese Cookies abzulehnen. Wenn Sie sich jedoch von einigen dieser Cookies abmelden, kann dies Ihr Surferlebnis beeinträchtigen.
              </p>
            </div>
          )}

          {activeTab === 'Über Cookies' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Cookies sind kleine Textdateien</h3>
              <p className="text-gray-300 text-sm mb-4">
                Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um die Benutzererfahrung effizienter zu gestalten.
                Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen wir Ihre Erlaubnis.
                Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies werden von Drittparteien platziert, die auf unseren Seiten erscheinen.
                Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf unserer Website ändern oder widerrufen.
                Erfahren Sie in unserer Datenschutzrichtlinie mehr darüber, wer wir sind, wie Sie uns kontaktieren können und wie wir personenbezogene Daten verarbeiten.
                Bitte geben Sie Ihre Einwilligungs-ID und das Datum an, wenn Sie uns bezüglich Ihrer Einwilligung kontaktieren.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/datenschutzerklaerung" className="text-blue-400 hover:underline">
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link to="/impressum" className="text-blue-400 hover:underline">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-hinweis" className="text-blue-400 hover:underline">
                    Vollständiger Cookie-Hinweis
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleRevokeConsent}
                className="mt-6 px-4 py-2 text-sm bg-red-600 rounded hover:bg-red-700 transition-colors"
              >
                <X className="inline-block mr-2" size={16} />
                Einwilligung widerrufen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 