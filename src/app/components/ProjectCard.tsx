'use client';

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tag: string;
  altText: string;
}

export default function ProjectCard({ imageSrc, title, description, tag, altText }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer" onClick={handleImageClick}>
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
              Klicken zum Vergrößern
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">
            {description}
          </p>
          <span className="inline-block bg-gradient-to-r from-red-100 to-red-50 text-red-800 text-xs lg:text-sm px-3 py-1.5 rounded-full font-medium shadow-sm">
            {tag}
          </span>
        </div>
      </div>
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        title={title}
        description={description}
      />
    </>
  );
}