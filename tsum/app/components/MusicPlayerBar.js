import { useEffect, useRef } from "react";

export default function MusicPlayerBar({ currentTrack, isPlaying, togglePlay, onSeek }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrack, isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      document.getElementById("progress-bar").style.width = `${progress}%`;
      document.getElementById("progress-indicator").style.left = `calc(${progress}% - 5px)`;
    }
  };

  const handleSeek = (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    const clickRatio = clickPosition / progressBar.offsetWidth;
    const newTime = clickRatio * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    onSeek(newTime);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => togglePlay()}
      />
      <div className="flex items-center">
        <div>
          <h3 className="text-lg font-semibold">{currentTrack.name}</h3>
          <p className="text-sm text-gray-400">{currentTrack.artist}</p>
        </div>
      </div>
      <div className="flex-grow mx-4 relative">
        <div
          className="bg-gray-600 h-2 rounded cursor-pointer"
          onClick={handleSeek}
        >
          <div id="progress-bar" className="bg-purple-500 h-2 rounded" style={{ width: '0%' }}></div>
          <div id="progress-indicator" className="absolute top-0 w-4 h-4 bg-white rounded-full" style={{ left: '-5px', top: '-6px' }}></div>
        </div>
      </div>
      <button onClick={togglePlay} className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-400 transition">
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
} 