"use client";

import React, { useState } from "react";

interface ScrapbookProps {
  brotherName: string;
}

interface MemoryItem {
  id: number;
  title: string;
  icon: string;
  hint: string;
  tilt: string;
  image: string;
  note: string;
}

const defaultMemories: MemoryItem[] = [
  {
    id: 1,
    title: "Partner in Every Celebration 🎈",
    icon: "🎂💐",
    hint: "Always celebrating together",
    tilt: "-rotate-2",
    image: "/assets/art_celebration.jpg",
    note: "No matter how many miles or timezones stand between us today, you will always be the first person I want to celebrate every happiness with. Missing you so much this Bhai Dooj, Gaurav! ❤️",
  },
  {
    id: 2,
    title: "My favourite driver 🚲",
    icon: "🚲💨",
    hint: "Free 24/7 ride service",
    tilt: "rotate-2",
    image: "/assets/art_tricycle.jpg",
    note: "You wouldn't let anyone in the world touch your yellow tricycle, but you always let me ride in the back! Best 24/7 chauffeur service since childhood. 🛵💨",
  },
  {
    id: 3,
    title: "When you were tiny 👶",
    icon: "🧒✨",
    hint: "Smaller than me back then",
    tilt: "-rotate-1",
    image: "/assets/art_toddler.jpg",
    note: "Look at how tiny you were! I still have photographic evidence that I was taller and bossier than you. Who knew this little guy would grow up to be my biggest protector? 🥺",
  },
  {
    id: 4,
    title: "My first tilak on you ❤️",
    icon: "🧒✨",
    hint: "Tiny us in festive clothes",
    tilt: "rotate-3",
    image: "/assets/childhood_tilak.jpg",
    note: "From our very first tilak in festive clothes to celebrating across continents today, my prayers for your happiness and success have only grown stronger with every year. ✨",
  },
  {
    id: 5,
    title: "Our goofy best side 🤪",
    icon: "🤪📸",
    hint: "Zero civilized photos",
    tilt: "-rotate-2",
    image: "/assets/childhood_toys.jpg",
    note: "You were so suspicious of that giant stuffed tiger until I held your hand! We have never taken a single civilized photo together, and I wouldn't have it any other way. 😂",
  },
  {
    id: 6,
    title: "My forever protector 🛡️",
    icon: "🛡️🤝",
    hint: "Always having my back",
    tilt: "rotate-1",
    image: "/assets/memory_real_storybook.jpg",
    note: "God gave me just one brother, and He made sure he was the absolute best. Thank you for always having my back, Gaurav. Happy Bhai Dooj! 💖",
  },
];

export function Scrapbook({ brotherName }: ScrapbookProps) {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full">
      <div className="text-center mb-2.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300/60 text-[11px] font-semibold text-amber-900 shadow-sm animate-pulse">
          <span>💡</span>
          <span>Tap any polaroid to flip &amp; read my secret memory note!</span>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-4">
        {defaultMemories.map((mem) => {
          const isFlipped = !!flipped[mem.id];
          return (
            <div
              key={mem.id}
              onClick={() => toggleFlip(mem.id)}
              className={`perspective-1000 cursor-pointer ${mem.tilt} transition-transform hover:scale-105`}
            >
              <div
                className={`relative w-full aspect-[3/4.6] sm:aspect-[4/5] min-h-[245px] sm:min-h-[265px] transition-transform duration-500 preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-white p-2 pb-2.5 rounded-lg shadow-md backface-hidden flex flex-col justify-between">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-amber-200/80 shadow-sm z-10" />
                  <div className="w-full aspect-square bg-[#ede3cc] rounded overflow-hidden relative shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mem.image}
                      alt={mem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1 flex items-center justify-between px-0.5">
                    <p className="font-handwriting text-xs sm:text-sm font-bold text-stone-800 leading-tight truncate">
                      {mem.title}
                    </p>
                    <span className="text-[10px] text-amber-600/70 shrink-0">🔄</span>
                  </div>
                </div>

                {/* BACK SIDE (SECRET NOTE) */}
                <div className="absolute inset-0 bg-[#fffef7] border-2 border-amber-300/80 p-2.5 sm:p-3 rounded-lg shadow-md backface-hidden rotate-y-180 flex flex-col justify-between text-left">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-amber-300/80 shadow-sm z-10" />
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between text-rose-800 text-[10px] font-bold pb-1 border-b border-amber-200/60 uppercase tracking-wider shrink-0">
                    <span className="flex items-center gap-1 truncate">
                      <span>💌</span>
                      <span className="truncate">Secret Note</span>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMemory(mem);
                      }}
                      className="text-[9px] bg-amber-100 hover:bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded border border-amber-300 font-sans font-semibold shrink-0"
                      title="Read in Full Screen"
                    >
                      🔍 Zoom
                    </button>
                  </div>

                  {/* Card Body - Guaranteed visible text */}
                  <div className="my-auto py-1.5 overflow-y-auto max-h-[145px] pr-0.5">
                    <p className="font-serif italic font-semibold text-stone-900 text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed text-left">
                      &ldquo;{mem.note}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center text-[10px] text-amber-800 pt-1 border-t border-amber-200/50 font-medium shrink-0">
                    <span className="font-bold">— Snehal ❤️</span>
                    <span className="italic text-[9px] text-stone-500">↺ tap to flip</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm font-serif italic text-amber-900 shadow-sm">
        ❤️ &ldquo;God gave me just one brother, and He made sure you were the absolute best, {brotherName || "Gaurav"}.&rdquo;
      </div>

      {/* FULL-SCREEN ZOOM MODAL FOR MOBILE COMFORT */}
      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-[#fffef9] border-2 border-amber-400 rounded-2xl max-w-sm w-full p-5 text-left relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-3 right-3 text-stone-600 hover:text-stone-900 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-amber-200 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              <span>💌</span>
              <span>Secret Memory Note</span>
            </div>

            <p className="font-serif italic font-medium text-stone-900 text-sm sm:text-base leading-relaxed mb-4 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/70">
              &ldquo;{selectedMemory.note}&rdquo;
            </p>

            <div className="flex justify-between items-center text-xs font-semibold text-stone-700 border-t border-amber-200/80 pt-2.5">
              <span>With all my love, Snehal ❤️</span>
              <button
                onClick={() => setSelectedMemory(null)}
                className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-full font-bold text-xs shadow"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
