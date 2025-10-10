import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Legal Notice (Imprint)</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <p className="text-gray-300"><strong>Operator:</strong> XDTRADING</p>
            <p className="text-gray-300"><strong>Website:</strong> <a href="https://xdtradingacademy.com" className="text-blue-400 hover:text-blue-300">https://xdtradingacademy.com</a></p>
            <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:support@xdtradingacademy.com" className="text-blue-400 hover:text-blue-300">support@xdtradingacademy.com</a></p>
            <p className="text-gray-300">No physical office or telephone contact. We operate globally as an online educational service.</p>
            <p className="text-gray-300"><strong>Responsible Person:</strong> [Your Full Name]</p>
          </section>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 mb-2">Email: <a href="mailto:support@xdtradingacademy.com" className="text-blue-400 hover:text-blue-300">support@xdtradingacademy.com</a></p>
            <p className="text-gray-300">Website: <a href="https://xdtrading.com" className="text-blue-400 hover:text-blue-300">xdtrading.com</a> / <a href="https://xdtradingacademy.com" className="text-blue-400 hover:text-blue-300">xdtradingacademy.com</a></p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-300">
              All information on this website is provided for educational purposes only and does not constitute financial advice. We do not assume liability for the content of external links; the respective providers are responsible for their content.
            </p>
          </div>

          

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Liability for Content</h2>
            <p className="text-gray-300">
              We strive to keep all information on this website up to date and accurate. However, we do not assume liability for completeness, accuracy, or timeliness. All content is provided for educational purposes only and does not constitute financial advice.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Liability for External Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites. We have no control over the content of those sites and are not responsible for them. The respective operators are solely responsible for their content.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Copyright</h2>
            <p className="text-gray-300">
              All texts, graphics, images, and other materials on this website are the intellectual property of XDTRADING unless otherwise noted. Any reproduction, modification, or distribution requires prior written permission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 