import Image from "next/image";
import Link from "next/link";

export default function Datenschutz() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
          <p className="text-gray-700 mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="text-gray-700 mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
          <p className="text-gray-700 mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. 
            um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="text-gray-700 mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h4>
          <p className="text-gray-700 mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="text-gray-700 mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
            oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
            haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
            Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
            zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="text-gray-700 mb-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Hosting</h2>
          <p className="text-gray-700 mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Externes Hosting</h3>
          <p className="text-gray-700 mb-4">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
            werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
            und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
          <p className="text-gray-700 mb-4">
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
            effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
          <p className="text-gray-700 mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
            dieser Datenschutzerklärung.
          </p>
          <p className="text-gray-700 mb-4">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, 
            wie und zu welchem Zweck das geschieht.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-gray-700 mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-gray-700 mb-4">
            Wolter Bau GmbH<br />
            Waldowstraße 9<br />
            13403 Berlin<br />
            Telefon: 030 93688102
          </p>
          <p className="text-gray-700 mb-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
            anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Speicherdauer</h3>
          <p className="text-gray-700 mb-4">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
            Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im 
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="text-gray-700 mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
            eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className="text-gray-700 mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet 
            anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
          <p className="text-gray-700 mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
          <p className="text-gray-700 mb-4">
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber 
            hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner 
            Website – hierzu müssen die Server-Log-Files erfasst werden.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
          <p className="text-gray-700 mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="text-gray-700 mb-4">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
            an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>
          <p className="text-gray-700 mb-4">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
            entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – 
            insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Ihre Rechte</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Auskunftsrecht</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Berichtigung</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger 
            personenbezogener Daten zu verlangen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Löschung</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die 
            Voraussetzungen des Art. 17 DSGVO erfüllt sind.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Einschränkung der Verarbeitung</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
            personenbezogenen Daten zu verlangen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Datenübertragbarkeit</h3>
          <p className="text-gray-700 mb-4">
            Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und 
            maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.
          </p>

          <p className="text-gray-700 mb-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die im Impressum angegebenen Kontaktdaten.
          </p>
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
                <Link href="/impressum" className="text-gray-400 hover:text-white block">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="text-orange-500 block">
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