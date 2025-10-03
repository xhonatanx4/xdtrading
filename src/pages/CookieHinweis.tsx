import React from 'react';
import { useNavigate } from 'react-router-dom';
import CookieService from '../services/cookieService';

const CookieHinweis: React.FC = () => {
  const navigate = useNavigate();

  const handleResetCookies = () => {
    // Clear all cookies
    document.cookie.split(";").forEach(function(c) { 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    // Clear localStorage preferences
    CookieService.getInstance().clearPreferences();
    // Reload the page to apply changes
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Cookie-Hinweis</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-gray-300">
            Diese Cookie-Richtlinie erläutert, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie lesen, um zu
            verstehen, welche Art von Cookies wir verwenden oder welche Informationen wir mithilfe von Cookies sammeln und wie diese
            Informationen verwendet werden. Außerdem wird beschrieben, wie Sie die Cookie-Einstellungen kontrollieren können. Weitere
            Informationen darüber, wie wir Ihre personenbezogenen Daten verwenden, speichern und schützen, finden Sie in unserer
            Datenschutzrichtlinie.
          </p>
          <p className="text-gray-300">
            Ihre Einwilligung gilt für die folgende Domäne: <span className="text-blue-400">multibankeurope.com</span>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Was sind Cookies?</h2>
          <p className="text-gray-300">
            Cookies sind kleine Textdateien, die verwendet werden, um kleine Informationsmengen zu speichern. Sie werden auf Ihrem Gerät
            gespeichert, wenn die Website in Ihrem Browser geladen wird. Diese Cookies helfen uns, die Website ordnungsgemäß
            funktionieren zu lassen, sie sicherer zu machen, eine bessere Benutzererfahrung zu bieten, zu verstehen, wie die Website
            funktioniert, und zu analysieren, was funktioniert und wo Verbesserungen nötig sind.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Wie verwenden wir Cookies?</h2>
          <p className="text-gray-300">
            Wie die meisten Online-Dienste verwendet unsere Website Erstanbieter- und Drittanbieter-Cookies für verschiedene Zwecke.
            Erstanbieter-Cookies sind hauptsächlich notwendig, damit die Website richtig funktioniert, und sie sammeln keine Ihrer
            personenbezogenen Daten. Die auf unserer Website verwendeten Drittanbieter-Cookies dienen hauptsächlich dazu, zu verstehen,
            wie die Website funktioniert, wie Sie mit unserer Website interagieren, unsere Dienste sicher zu halten, für Sie relevante
            Anzeigen zu schalten und Ihnen insgesamt eine bessere und verbesserte Benutzererfahrung zu bieten und Ihre zukünftigen
            Interaktionen mit unserer Website zu beschleunigen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Welche Arten von Cookies verwenden wir?</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Essentiell:</h3>
              <p className="text-gray-300">
                Einige Cookies sind unerlässlich, damit Sie die volle Funktionalität unserer Website nutzen können. Sie ermöglichen es uns,
                Benutzersitzungen aufrechtzuerhalten und Sicherheitsrisiken zu verhindern. Sie sammeln oder speichern keine
                personenbezogenen Informationen. Zum Beispiel ermöglichen Ihnen diese Cookies, sich in Ihr Konto einzuloggen und Produkte
                sicher in Ihren Warenkorb zu legen und sicher auszuchecken.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Statistik:</h3>
              <p className="text-gray-300">
                Diese Cookies speichern Informationen wie die Anzahl der Besucher der Website, die Anzahl der einzelnen Besucher, welche
                Seiten der Website besucht wurden, die Quelle des Besuchs usw. Diese Daten helfen uns zu verstehen und zu analysieren,
                wie gut die Website funktioniert und wo Verbesserungsbedarf besteht.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Marketing:</h3>
              <p className="text-gray-300">
                Unsere Website zeigt Anzeigen an. Diese Cookies werden verwendet, um die Anzeigen, die wir Ihnen zeigen, so zu
                personalisieren, dass sie für Sie sinnvoll sind. Diese Cookies helfen uns auch dabei, die Effizienz dieser Werbekampagnen zu
                verfolgen.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Funktionell:</h3>
              <p className="text-gray-300">
                Dies sind die Cookies, die bestimmte nicht-essentielle Funktionen auf unserer Website unterstützen. Diese Funktionen
                umfassen das Einbetten von Inhalten wie Videos oder das Teilen von Inhalten auf der Website auf Social-Media-Plattformen.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Einstellungen:</h3>
              <p className="text-gray-300">
                Diese Cookies helfen uns, Ihre Einstellungen und Browsing-Präferenzen zu speichern, wie z. B. Ihre Spracheinstellungen,
                damit Sie bei zukünftigen Besuchen der Website eine bessere und effizientere Erfahrung haben.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Wie kann ich die Cookie-Einstellungen kontrollieren?</h2>
          <p className="text-gray-300">
            Wenn Sie Ihre Präferenzen später während Ihrer Browsing-Sitzung ändern möchten, können Sie auf den "Datenschutz- und
            Cookie-Hinweis" auf Ihrem Bildschirm klicken. Dadurch wird der Einwilligungshinweis erneut angezeigt, sodass Sie Ihre
            Präferenzen ändern oder Ihre Einwilligung vollständig widerrufen können.
          </p>
          <p className="text-gray-300">
            Darüber hinaus bieten verschiedene Browser unterschiedliche Methoden zum Blockieren und Löschen von Cookies, die von
            Websites verwendet werden. Sie können die Einstellungen Ihres Browsers ändern, um die Cookies zu blockieren/löschen. Weitere
            Informationen zum Verwalten und Löschen von Cookies finden Sie unter <a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">wikipedia.org</a> oder <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">allaboutcookies.org</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies zurücksetzen</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              Sie können alle Cookies, die auf dieser Website gesetzt wurden, mit einem Klick zurücksetzen. Dies wird alle Ihre Cookie-Präferenzen löschen und Sie müssen Ihre Cookie-Einstellungen erneut bestätigen.
            </p>
            <button
              onClick={handleResetCookies}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Alle Cookies zurücksetzen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieHinweis; 