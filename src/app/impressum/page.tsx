import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/Logo-FINISH.png"
                  alt="Wolter Bau GmbH Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#home" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-orange-600 font-medium">
                Leistungen
              </Link>
              <Link href="/#projects" className="text-gray-700 hover:text-orange-600 font-medium">
                Projekte
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-orange-600 font-medium">
                Über uns
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/Logo-FINISH.png"
                alt="Wolter Bau GmbH Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400">
                Ihr zuverlässiger Partner für alle Bauvorhaben in Berlin und Umgebung.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p>Waldowstraße 9, 13403 Berlin</p>
                <p>Tel: 030 93688102</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
              <div className="space-y-2">
                <Link href="/impressum" className="text-orange-500 block">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white block">
                  Datenschutzerklärung
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wolter Bau GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}