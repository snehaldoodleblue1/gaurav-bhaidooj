"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;
      audioRef.current.play().catch((e) => console.log("Audio play error:", e));
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#05231e]/90 backdrop-blur-md border-t border-amber-500/30 px-6 py-2.5 flex items-center justify-between z-50 text-white">
      <audio ref={audioRef} src="/Sang-Rahiyo.mp3" loop preload="auto" />

      <div className="flex items-center gap-3">
        <button
          onClick={toggleMusic}
          className="w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 flex items-center justify-center font-bold transition-transform hover:scale-105 shadow-md"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-amber-200">Sang Rahiyo (Sang Rakhna)</span>
          <span className="text-[10px] text-teal-200/70">Jasleen Royal • Soulful Sibling Melody</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1 h-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <span
            key={i}
            className={`w-[3px] bg-amber-400 rounded-full transition-all ${
              isPlaying ? `wave-bar-${(i % 4) + 1}` : "h-1 opacity-40"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setVolume((v) => (v > 0 ? 0 : 0.7))}
          className="text-amber-300 hover:text-amber-100"
        >
          {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20 accent-amber-400 cursor-pointer h-1.5"
        />
      </div>
    </footer>
  );
}
