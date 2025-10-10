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
  const [activeTab, setActiveTab] = useState<'Consent' | 'Details' | 'About Cookies'>('Consent');
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
    setActiveTab('Consent');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'Consent' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('Consent')}
          >
            Consent
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'Details' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('Details')}
          >
            Details
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === 'About Cookies' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('About Cookies')}
          >
            About Cookies
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'Consent' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">This website uses cookies</h3>
              <p className="text-gray-300 text-sm mb-6">
                We use cookies to personalize content, improve site performance, and analyze traffic. You can manage your preferences below. Essential cookies are always on for security and basic functionality.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <label className="inline-flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={preferences.essential}
                    disabled
                  />
                  <span className="ml-2 text-gray-300">Essential</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={preferences.statistics}
                    onChange={() => handleTogglePreference('statistics')}
                  />
                  <span className="ml-2 text-gray-300">Analytics</span>
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
                  Allow selected
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Details' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Privacy overview</h3>
              <p className="text-gray-300 text-sm mb-4">
                This website uses cookies to improve your experience. Essential cookies are required for core functionality. Analytics and marketing cookies are optional and only set with your consent.
              </p>
            </div>
          )}

          {activeTab === 'About Cookies' && (
            <div>
              <h3 className="text-2xl font-bold mb-4">About cookies</h3>
              <p className="text-gray-300 text-sm mb-4">
                Cookies are small text files used by websites to make the user experience more efficient. We only use non-essential cookies with your consent. You can change or withdraw your consent at any time via this banner.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal-notice" className="text-blue-400 hover:underline">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-notice" className="text-blue-400 hover:underline">
                    Full Cookie Notice
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleRevokeConsent}
                className="mt-6 px-4 py-2 text-sm bg-red-600 rounded hover:bg-red-700 transition-colors"
              >
                <X className="inline-block mr-2" size={16} />
                Withdraw consent
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 