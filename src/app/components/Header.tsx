'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo-FINISH.png"
              alt="Wolter Bau GmbH Logo"
              width={120}
              height={60}
              className="h-10 lg:h-12 w-auto transition-all duration-300"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50 flex items-center">
                Leistungen
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/leistungen/rohbau" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Rohbau
                    </div>
                  </Link>
                  <Link href="/leistungen/tiefbau" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                      Tiefbau
                    </div>
                  </Link>
                  <Link href="/leistungen/dachausbau" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      Dachausbau
                    </div>
                  </Link>
                  <Link href="/leistungen/maurerarbeiten" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Maurerarbeiten
                    </div>
                  </Link>
                  <Link href="/leistungen/elektroarbeiten" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Elektroarbeiten
                    </div>
                  </Link>
                  <Link href="/leistungen/hochbau" className="block px-4 py-3 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Hochbau
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#projects" className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50">
              Projekte
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50">
              Über uns
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-red-50">
              Kontakt
            </Link>
          </nav>
          
          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center space-x-6">
              <a href="tel:03093688102" className="flex items-center text-gray-700 hover:text-red-700 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">030 93688102</span>
              </a>
              <a href="mailto:info@wolter-bau.de" className="flex items-center text-gray-700 hover:text-red-700 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">info@wolter-bau.de</span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors duration-200">
                Home
              </Link>
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-500 text-sm font-medium">Leistungen</div>
                <Link href="/leistungen/rohbau" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Rohbau
                </Link>
                <Link href="/leistungen/tiefbau" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Tiefbau
                </Link>
                <Link href="/leistungen/dachausbau" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Dachausbau
                </Link>
                <Link href="/leistungen/maurerarbeiten" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Maurerarbeiten
                </Link>
                <Link href="/leistungen/elektroarbeiten" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Elektroarbeiten
                </Link>
                <Link href="/leistungen/hochbau" className="block px-6 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  Hochbau
                </Link>
              </div>
              <Link href="/#projects" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors duration-200">
                Projekte
              </Link>
              <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors duration-200">
                Über uns
              </Link>
              <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md font-medium transition-colors duration-200">
                Kontakt
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a href="tel:03093688102" className="flex items-center px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">030 93688102</span>
                </a>
                <a href="mailto:info@wolter-bau.de" className="flex items-center px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">info@wolter-bau.de</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}