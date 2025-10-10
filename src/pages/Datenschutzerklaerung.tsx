import React from 'react';

const Datenschutzerklaerung: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <p className="text-gray-300">
              We at <strong>XDTRADING</strong> (“we,” “our,” “us”) respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our services.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">1. Controller</h2>
            <p className="text-gray-300">XDTRADING</p>
            <p className="text-gray-300">Email: <a href="mailto:support@xdtradingacademy.com" className="text-blue-400 hover:text-blue-300">support@xdtradingacademy.com</a></p>
            <p className="text-gray-300">No physical business address – we operate digitally worldwide.</p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">2. Data We Collect and How We Use It</h2>
            <p className="text-gray-300">We collect and process data only as necessary to provide and improve our services.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">a) When you visit our website:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Accessed pages</li>
            </ul>
            <p className="text-gray-300 mt-2">This data is used for website security, stability, and performance analytics.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">b) When you contact us or register:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>Name and email address</li>
              <li>Payment details (if applicable)</li>
              <li>Other voluntary information you provide</li>
            </ul>
            <p className="text-gray-300 mt-2">We use this data to deliver purchased services, communicate with you, and improve our content.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">c) Cookies and Analytics:</h3>
            <p className="text-gray-300">We use cookies and similar technologies to enhance your user experience. Cookies may be:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>Essential (for site functionality)</li>
              <li>Functional (for remembering preferences)</li>
              <li>Analytical (to improve performance)</li>
            </ul>
            <p className="text-gray-300 mt-2">You can disable cookies in your browser settings, but some functions may be affected.</p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">3. Legal Basis for Processing</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>Your consent (Art. 6 (1) a GDPR, if applicable)</li>
              <li>Contractual necessity (Art. 6 (1) b GDPR)</li>
              <li>Legitimate interest (Art. 6 (1) f GDPR) such as analytics or fraud prevention</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">4. Data Sharing</h2>
            <p className="text-gray-300">We only share your information when:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>It’s legally required,</li>
              <li>It’s necessary for providing our services (e.g. payment processors, hosting providers), or</li>
              <li>You have given explicit consent.</li>
            </ul>
            <p className="text-gray-300 mt-2">All partners are contractually bound to handle data securely.</p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">5. International Transfers</h2>
            <p className="text-gray-300">If data is transferred outside your country, we ensure appropriate safeguards, such as standard contractual clauses, are in place.</p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">6. Data Retention</h2>
            <p className="text-gray-300">Your personal data is stored only as long as needed for its intended purpose or as required by law. It is then deleted or anonymized.</p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">7. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>File a complaint with a supervisory authority</li>
              </ul>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">8. Updates</h2>
            <p className="text-gray-300">We may update this Privacy Policy periodically. The current version is always available on our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutzerklaerung; 


