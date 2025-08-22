import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ClientScripts from "./components/ClientScripts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Parallax Effect */}
       <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 parallax-bg">
           <Image
             src="/herosektion wolter bau startseite.webp"
             alt="Wolter Bau Baustelle"
             fill
             className="object-cover scale-110 transition-transform duration-1000 ease-out"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
         </div>
         <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">QUALITÄTSBAU</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 tracking-wide drop-shadow-lg">
                DAUERHAFTE IMPRESSIONEN
              </h2>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed font-light">
                Ihr zuverlässiger Partner für professionelle Baudienstleistungen
              </p>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Rohbau • Tiefbau • Dachausbau • Maurerarbeiten • Elektroarbeiten • Hochbau
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group bg-red-700 hover:bg-red-800 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 border-2 border-red-600 hover:border-red-400">
                  <span className="flex items-center">
                    Jetzt Kontakt aufnehmen
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <div className="flex items-center space-x-6">
                  <a href="tel:03093688102" className="group flex items-center text-white hover:text-red-300 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/20">
                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold text-lg">030 93688102</span>
                  </a>
                  
                  <a href="mailto:info@wolter-bau.de" className="group flex items-center text-white hover:text-red-300 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/20">
                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold text-lg">E-Mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
         </div>
       </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als erfahrenes Bauunternehmen bieten wir Ihnen ein umfassendes Spektrum an Bauleistungen
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Link href="/leistungen/rohbau" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                   <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                     <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                     </svg>
                   </div>
                   <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Rohbau</h3>
                   <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                     Professionelle Rohbauarbeiten für Wohn- und Gewerbeobjekte. Von der Fundamentlegung bis zur Dachkonstruktion.
                   </p>
                   <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                     <span className="text-sm font-medium">Mehr erfahren</span>
                     <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </div>
               </Link>
              <Link href="/leistungen/tiefbau" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Tiefbau</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      Erdarbeiten, Kanalbau und Fundamentarbeiten. Wir schaffen die solide Basis für Ihr Bauvorhaben.
                    </p>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                </Link>
                 <Link href="/leistungen/dachausbau" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Dachausbau</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      Dachsanierung, Dachausbau und Dacheindeckung. Schutz und zusätzlicher Wohnraum unter einem Dach.
                    </p>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/leistungen/maurerarbeiten" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Maurerarbeiten</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      Mauerwerk, Verputzarbeiten und Sanierungen. Traditionelles Handwerk mit modernen Techniken.
                    </p>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/leistungen/elektroarbeiten" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Elektroarbeiten</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      Elektroinstallationen und Elektrotechnik. Sichere und normgerechte Elektroarbeiten für Ihr Projekt.
                    </p>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/leistungen/hochbau" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-red-200 block cursor-pointer">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-red-700 transition-colors duration-300">Hochbau</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                      Komplette Hochbauprojekte von der Planung bis zur Fertigstellung. Ihr Partner für anspruchsvolle Bauvorhaben.
                    </p>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
            </div>
          </div>
         </section>

         {/* Projects Section */}
         <section id="projects" className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Projekte</h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Entdecken Sie eine Auswahl unserer erfolgreich realisierten Bauprojekte
               </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <ProjectCard
                   imageSrc="/Projekt Bürogebäude, Kurt Wagener Str, 25227 Elmshorn, Rohbauarbeiten.webp"
                   title="Bürogebäude Elmshorn"
                   description="Rohbauarbeiten für ein modernes Bürogebäude in der Kurt Wagener Straße, Elmshorn."
                   tag="Rohbau"
                   altText="Bürogebäude Rohbau Elmshorn"
                 />
               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                 <div className="relative h-64">
                   <Image
                     src="/Rohbauarbeiten REWE, Leipziger Alee, 17389 Anklam.webp"
                     alt="REWE Rohbau Anklam"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">REWE Markt Anklam</h3>
                   <p className="text-gray-600 mb-4">
                     Rohbauarbeiten für einen REWE Supermarkt in der Leipziger Allee, Anklam.
                   </p>
                   <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                     Rohbau
                   </span>
                 </div>
               </div>
               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                 <div className="relative h-64">
                   <Image
                     src="/Rohbauarbeiten, Dacharbeiten Kaffetwiete, 25436 Tornesch.webp"
                     alt="Dacharbeiten Tornesch"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Wohngebäude Tornesch</h3>
                   <p className="text-gray-600 mb-4">
                     Rohbau- und Dacharbeiten in der Kaffetwiete, Tornesch.
                   </p>
                   <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full mr-2">
                     Rohbau
                   </span>
                   <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                     Dachbau
                   </span>
                 </div>
               </div>
               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                 <div className="relative h-64">
                   <Image
                     src="/Rohbauarbeiten, Erweiterung Marie Curie Schule,Am Sportpark 1, 30952 Ronnenberg (1).webp"
                     alt="Marie Curie Schule Ronnenberg"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Marie Curie Schule</h3>
                   <p className="text-gray-600 mb-4">
                     Erweiterung der Marie Curie Schule am Sportpark, Ronnenberg.
                   </p>
                   <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                     Rohbau
                   </span>
                 </div>
               </div>
               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                 <div className="relative h-64">
                   <Image
                     src="/Rohbauarbeiten, REWE sierksdorfer Str  , 23730 Neustadt in Holstein.webp"
                     alt="REWE Neustadt Holstein"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">REWE Neustadt</h3>
                   <p className="text-gray-600 mb-4">
                     Rohbauarbeiten REWE Sierksdorfer Straße, Neustadt in Holstein.
                   </p>
                   <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                     Rohbau
                   </span>
                 </div>
               </div>
             </div>
           </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-4xl font-bold text-gray-900 mb-6">Über Wolter Bau GmbH</h2>
                   <p className="text-lg text-gray-600 mb-6">
                     Mit jahrelanger Erfahrung im Baugewerbe sind wir Ihr zuverlässiger Partner für alle Arten von Bauvorhaben. 
                     Von der ersten Planung bis zur finalen Übergabe stehen wir Ihnen mit unserem Fachwissen zur Seite.
                   </p>
                   <p className="text-lg text-gray-600 mb-6">
                      Unter der Leitung von Geschäftsführerin <strong className="text-red-700">Jennifer Wolter</strong> sorgt unser erfahrenes Team aus qualifizierten Fachkräften dafür, dass Ihre Projekte termingerecht, 
                      budgetkonform und in höchster Qualität realisiert werden.
                    </p>
                   <div className="grid grid-cols-2 gap-6">
                     <div className="text-center">
                       <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                       <div className="text-gray-600">Jahre Erfahrung</div>
                     </div>
                     <div className="text-center">
                       <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                       <div className="text-gray-600">Projekte realisiert</div>
                     </div>
                   </div>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/2.png"
                    alt="Wolter Bau Team"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein unverbindliches Angebot? 
                  Kontaktieren Sie uns gerne!
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-red-500 mt-1 mr-4">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Adresse</h4>
                        <p className="text-gray-600">
                          Waldowstraße 9<br />
                          13403 Berlin
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-red-500 mt-1 mr-4">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefon</h4>
                        <p className="text-gray-600">
                          <a href="tel:03093688102" className="hover:text-red-500">
                            030 93688102
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-red-500 mt-1 mr-4">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Aufsichtsbehörde</h4>
                        <p className="text-gray-600">
                          Handwerkskammer Berlin<br />
                          Blücherstr. 68<br />
                          10961 Berlin<br />
                          E-Mail: info@hwk-berlin.de<br />
                          <a href="https://www.hwk-berlin.de/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600">
                            www.hwk-berlin.de
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktformular</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                      Nachricht senden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <Footer />
           <ClientScripts />
     </div>
   );
 }
