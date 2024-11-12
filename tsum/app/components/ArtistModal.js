"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaTimes } from 'react-icons/fa';

const ArtistModal = ({ artist, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !artist) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative w-full sm:w-3/4 md:w-1/2 h-3/4">
        <button 
          onClick={onClose} 
          className="text-black absolute top-2 right-2 hover:text-gray-600 transition-colors p-6 mb-12"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
        {artist.image && (
          <div className="relative w-full h-48 my-4 mt-12">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4">{artist.name}</h2>
        <p className="text-gray-700 mb-2">Genre: {artist.genre}</p>
        {artist.description && (
          <p className="text-gray-600 mb-4">{artist.description}</p>
        )}
        <div className="flex space-x-4">
          {artist.facebook && (
            <Link href={artist.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-blue-600 text-xl hover:text-blue-700 transition-colors" />
            </Link>
          )}
          {artist.twitter && (
            <Link href={artist.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-blue-400 text-xl hover:text-blue-500 transition-colors" />
            </Link>
          )}
          {artist.instagram && (
            <Link href={artist.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 text-xl hover:text-pink-600 transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistModal;