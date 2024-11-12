"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import MusicPlayerBar from "../components/MusicPlayerBar";
import { FaCartPlus } from 'react-icons/fa';

export default function MusicPage() {
  const [cart, setCart] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const addToCart = (track) => {
    setCart([...cart, track]);
    console.log(`Added ${track.name} to cart`);
  };

  const togglePlay = (index) => {
    if (index !== undefined) {
      setCurrentTrackIndex(index);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (newTime) => {
    const audioElement = document.getElementById(`audio-${currentTrackIndex}`);
    if (audioElement) {
      audioElement.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (currentTrackIndex !== null) {
      const audioElement = document.getElementById(`audio-${currentTrackIndex}`);
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTrackIndex(null);
      };
      audioElement.addEventListener('ended', handleEnded);
      return () => {
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentTrackIndex]);

  const tracks = [
    {
      cover: '/TSUMIII.jpeg',
      name: 'Track One',
      album: 'Album One',
      artist: 'Artist One',
      duration: '3:45',
      genre: 'Pop',
      audioSrc: '/Yabba.mp3',
    },
    {
      cover: '/TSUMIII.jpeg',
      name: 'Track Two',
      album: 'Album Two',
      artist: 'Artist Two',
      duration: '4:00',
      genre: 'Rock',
      audioSrc: '/Yabba.mp3',
    },
    // ... more tracks
  ];

  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/album_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white p-6 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Music</h1>
        <div className="music-catalog space-y-4">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="track flex flex-row items-center bg-white p-4 rounded-lg transition relative"
            >
              <div className="relative">
                <Image
                  src={track.cover}
                  alt={`${track.name} cover`}
                  width={64}
                  height={64}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-md mr-4"
                />
              </div>
              <audio id={`audio-${index}`} src={track.audioSrc}></audio>
              <div className="w-full flex flex-row justify-between items-center ml-3">
                <div className="flex flex-col justify-center items-start text-left">
                  <h2 className="text-md md:text-lg text-black font-semibold text-left mb-0">
                    {track.name}
                  </h2>
                  <p className="text-sm md:text-lg text-black text-left mb-0">
                    {track.album ? `${track.album} - ` : ''}
                    {track.artist}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(track)}
                  className="ml-4 bg-purple text-white px-3 py-1 rounded hover:bg-purple-400 transition"
                >
                  <FaCartPlus className="inline-block text-lg" />
                </button>
              </div>
              <div className="play-icon absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={() => togglePlay(index)}
                  className="bg-black bg-opacity-50 p-2 rounded-full absolute left-7"
                >
                  {currentTrackIndex === index && isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-5.197-3.018A1 1 0 008 9.082v5.836a1 1 0 001.555.832l5.197-3.018a1 1 0 000-1.664z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        {currentTrackIndex !== null && (
          <MusicPlayerBar
            currentTrack={tracks[currentTrackIndex]}
            isPlaying={isPlaying}
            togglePlay={() => togglePlay(currentTrackIndex)}
            onSeek={handleSeek}
          />
        )}
        {/* Add Stripe integration here */}
      </div>
    </>
  );
}
