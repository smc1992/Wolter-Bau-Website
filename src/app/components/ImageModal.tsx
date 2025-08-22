'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, title, description }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative h-[60vh] md:h-[70vh] bg-gray-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="tel:03093688102" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Jetzt anrufen: 030 93688102
            </a>
            <a 
              href="mailto:info@wolter-bau.de" 
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}