import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-gray-300 text-sm">
            (Standortabhängige Transparenz- und Lizenzangaben nach § 5 TMG & § 2 DL-InfoV)
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">MEX Asset Management GmbH</h2>
            <p className="text-gray-300 mb-2">Wertpapierinstitut gemäß §15 WpIG</p>
            <address className="text-gray-300 not-italic">
              Alfred-Herrhausen-Allee 3–5<br />
              65760 Eschborn, Taunus<br />
              Deutschland
            </address>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>Telefon: [bitte ergänzen]</p>
              <p>E-Mail: <a href="mailto:cs@multibankeurope.com" className="text-blue-400 hover:text-blue-300">cs@multibankeurope.com</a></p>
              <p>Web: <a href="https://multibankeurope.com" className="text-blue-400 hover:text-blue-300">multibankeurope.com</a></p>
            </div>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>Vertretungsberechtigte Geschäftsführer: [Namen eintragen]</p>
              <p>Handelsregister: Amtsgericht Frankfurt am Main</p>
              <p>BaFin-ID: 10119375</p>
              <p>Bank-Nr.: 119375</p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">MEX Atlantic Corporation</h2>
            <p className="text-gray-300 mb-2">Registriert unter der Firmennummer: 354945</p>
            <address className="text-gray-300 not-italic">
              Sitz: 4th Floor, Harbour Place,<br />
              103 South Church Street<br />
              PO Box 10240<br />
              Grand Cayman KY1-1002<br />
              Cayman Islands
            </address>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Zuständige Aufsichtsbehörde für MEX Asset Management GmbH:</h2>
            <p className="text-gray-300 mb-2">Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</p>
            <address className="text-gray-300 not-italic">
              Graurheindorfer Straße 108<br />
              53117 Bonn, Deutschland
            </address>
            <p className="mt-2">
              <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">www.bafin.de</a>
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Haftungsausschluss:</h2>
            <p className="text-gray-300 mb-4">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            <p className="text-gray-300">
              Die Informationen auf dieser Website dienen ausschließlich Informationszwecken und stellen keine Anlageberatung oder Aufforderung zum Handel mit Finanzinstrumenten dar.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Urheberrecht:</h2>
            <p className="text-gray-300">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum; 