import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wolter Bau GmbH</h3>
            <p className="text-gray-700 mb-2">Waldowstraße 9</p>
            <p className="text-gray-700 mb-2">13403 Berlin</p>
            <p className="text-gray-700 mb-2">Deutschland</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h3>
            <p className="text-gray-700 mb-2">Telefon: 030 93688102</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vertretungsberechtigte Geschäftsführerin</h3>
            <p className="text-gray-700 mb-2">Jennifer Wolter</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Registereintrag</h3>
            <p className="text-gray-700 mb-2">Eintragung im Handelsregister</p>
            <p className="text-gray-700 mb-2">Registergericht: [Amtsgericht]</p>
            <p className="text-gray-700 mb-2">Registernummer: [HRB-Nummer]</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-ID</h3>
            <p className="text-gray-700 mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-gray-700 mb-2">[USt-IdNr.]</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Aufsichtsbehörde</h3>
            <p className="text-gray-700 mb-2">Handwerkskammer Berlin</p>
            <p className="text-gray-700 mb-2">Blücherstr. 68</p>
            <p className="text-gray-700 mb-2">10961 Berlin</p>
            <p className="text-gray-700 mb-2">E-Mail: info@hwk-berlin.de</p>
            <p className="text-gray-700 mb-2">
              Webseite: 
              <a href="https://www.hwk-berlin.de/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                https://www.hwk-berlin.de/
              </a>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p className="text-gray-700 mb-2">Berufsbezeichnung: Bauunternehmer</p>
            <p className="text-gray-700 mb-2">Zuständige Kammer: Handwerkskammer Berlin</p>
            <p className="text-gray-700 mb-2">Verliehen in: Deutschland</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-700 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-700 mb-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Links umgehend entfernen.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p className="text-gray-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-700 mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}