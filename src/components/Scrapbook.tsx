"use client";

import React, { useState } from "react";

interface ScrapbookProps {
  brotherName: string;
}

const defaultMemories = [
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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {defaultMemories.map((mem) => {
          const isFlipped = !!flipped[mem.id];
          return (
            <div
              key={mem.id}
              onClick={() => toggleFlip(mem.id)}
              className={`perspective-1000 cursor-pointer ${mem.tilt} transition-transform hover:scale-105`}
            >
              <div
                className={`relative w-full aspect-[4/5] transition-transform duration-500 preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-white p-2 pb-3 rounded shadow-md backface-hidden flex flex-col justify-between">
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
                <div className="absolute inset-0 bg-[#fffef7] border-2 border-amber-300/70 p-3 rounded shadow-md backface-hidden rotate-y-180 flex flex-col justify-between text-left">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-amber-300/80 shadow-sm z-10" />
                  <div className="flex items-center gap-1 text-rose-800 text-[10px] font-bold pb-1 border-b border-amber-200/60 uppercase tracking-wider">
                    <span>💌</span>
                    <span>Secret Note for {brotherName || "Gaurav"}</span>
                  </div>
                  <p className="font-handwriting text-stone-800 text-xs sm:text-sm leading-relaxed my-auto">
                    &ldquo;{mem.note}&rdquo;
                  </p>
                  <div className="flex justify-between items-center text-[10px] text-amber-700/80 pt-1 border-t border-amber-200/50 font-medium">
                    <span>— Snehal ❤️</span>
                    <span className="italic text-[9px] text-stone-400">↺ tap to flip</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center p-2.5 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs font-serif italic text-amber-900">
        ❤️ &ldquo;God gave me just one brother, and He made sure you were the absolute best, {brotherName || "Gaurav"}.&rdquo;
      </div>
    </div>
  );
}
