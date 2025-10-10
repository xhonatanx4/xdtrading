import React from 'react';
import { Link } from 'react-router-dom';

const CookieHinweis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <p className="text-gray-300">
              Our website uses cookies and similar technologies to provide the best experience for our visitors.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">What Are Cookies?</h2>
            <p className="text-gray-300">
              Cookies are small text files stored on your device when you visit a website. They help remember preferences and improve website functionality.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Functional Cookies:</strong> Help remember user preferences and enhance usability.</li>
              <li><strong>Analytics Cookies:</strong> Allow us to analyze traffic and improve our content (e.g. Google Analytics or similar tools).</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Managing Cookies</h2>
            <p className="text-gray-300">
              You can manage or disable cookies through your browser settings. However, some website features may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Consent</h2>
            <p className="text-gray-300">
              By continuing to use our website, you consent to the use of cookies in accordance with this policy. You can withdraw or modify your consent at any time via your browser or our cookie banner.
            </p>
            <p className="text-gray-300">
              For more information on how we handle data, please see our <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieHinweis;


