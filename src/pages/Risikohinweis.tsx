import React from 'react';

const Risikohinweis: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Risk Disclaimer</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg shadow-lg shadow-black/20">
            <p className="text-gray-300">
              Trading foreign exchange (Forex), CFDs, or other leveraged instruments involves a high level of risk. You may lose part or all of your invested capital.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg border border-white/10 shadow-lg shadow-black/20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 pb-2 border-b border-white/10">Important Information:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>All information, signals, and educational materials provided by XDTRADING are for <strong>educational and informational purposes only</strong>.</li>
              <li>We do <strong>not</strong> provide investment or financial advice.</li>
              <li>Past performance is not indicative of future results.</li>
              <li>You are solely responsible for any trading decisions or financial outcomes based on our materials.</li>
              <li>You should never trade with money you cannot afford to lose.</li>
              <li>Please consult an independent financial advisor if you are unsure about trading risks.</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg">
            <p className="text-gray-300">
              By using our services or website, you confirm that you understand and accept these risks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Risikohinweis;


