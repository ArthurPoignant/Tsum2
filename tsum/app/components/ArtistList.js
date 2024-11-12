"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ArtistModal from './ArtistModal';

const ArtistList = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-black border border-white/15 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleArtistClick(artist)}
          >
            <div className="relative h-48">
              <Image
                src={artist.image}
                alt={artist.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white font-bold mb-2">{artist.name}</h2>
              <p className="text-gray-300">{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
      <ArtistModal artist={selectedArtist} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ArtistList;
