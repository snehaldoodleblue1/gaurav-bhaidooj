"use client";

import React, { useState } from "react";
import { PoojaThali } from "@/components/PoojaThali";
import { CharacterScene } from "@/components/CharacterScene";
import { AudioPlayer } from "@/components/AudioPlayer";
import { PetalCanvas } from "@/components/PetalCanvas";
import { Scrapbook } from "@/components/Scrapbook";
import { ShagunModal } from "@/components/ShagunModal";
import { PersonalizeModal } from "@/components/PersonalizeModal";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCcw,
  Edit3,
} from "lucide-react";

type RasamType = "aarti" | "tilak" | "mithai" | "shagun" | "hug";

const rasamMeta: Record<
  RasamType,
  { name: string; icon: string; desc: string; caption: (bName: string) => string }
> = {
  aarti: {
    name: "Begin Aarti",
    icon: "🪔",
    desc: "Wave the thali & ward off evil eyes",
    caption: (b) => `"Aarti utaar di hai! May all evil eyes, worries, and troubles stay far away from you, ${b}."`,
  },
  tilak: {
    name: "Apply Tilak ❤️",
    icon: "🔴",
    desc: "Kumkum & Akshat on your forehead",
    caption: (b) => `"Tilak lag gaya! All my prayers and best wishes are now on your forehead, ${b}. Please take good care of it!"`,
  },
  mithai: {
    name: "Share Mithai",
    icon: "🍬",
    desc: "Sweeten your mouth with laddoos",
    caption: (b) => `"Muh meetha karo, ${b}! Calories don't count on Bhai Dooj. One laddoo for being sweet, and one for tolerating me!"`,
  },
  shagun: {
    name: "Give Shagun",
    icon: "✉️",
    desc: "Envelope of blessing & brother tax",
    caption: (b) => `"Aashirvaad is 100% free ${b}, par Shagun ka lifafa is mandatory! Click below to collect your official voucher!"`,
  },
  hug: {
    name: "Send a Big Hug",
    icon: "🫂",
    desc: "Warmest hug for the best brother",
    caption: (b) => `"Distance, silly fights, and differences can never change our bond. Sending you the biggest, warmest sister hug, ${b}!"`,
  },
};

export default function Home() {
  const [page, setPage] = useState(0); // 0: Cover, 1: Rasmein, 2: Scrapbook, 3: Letter, 4: Finale
  const [activeRasam, setActiveRasam] = useState<RasamType>("aarti");
  const [isShagunOpen, setIsShagunOpen] = useState(false);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  // Editable state
  const [brotherName, setBrotherName] = useState("Gaurav");
  const [sisterName, setSisterName] = useState("Snehal");
  const [occasion, setOccasion] = useState("Bhai Dooj");
  const [date, setDate] = useState("Wednesday, 11 November 2026");
  const [letterText, setLetterText] = useState(`To my partner in crime, my biggest headache, and my one and only brother on earth.

We fight over silly things, argue over the TV remote, steal each other's food, and pretend we don't care.

Even if distance or busy schedules stand in between, every prayer in my aarti and every blessing in my heart is always for you, Gaurav.

Missing our little childhood fights, silly jokes, and all those goofy moments we grew up sharing.

Thank you for always protecting me, tolerating all my drama, and being the best brother I could ever ask for!

Happy Bhai Dooj, Gaurav! ❤️`);

  const totalPages = 5;

  const handlePageChange = (newPage: number) => {
    if (newPage === 1) {
      setActiveRasam("aarti");
    }
    setPage(newPage);
  };

  const handleRasamClick = (r: RasamType) => {
    setActiveRasam(r);
    if (r === "shagun") {
      setTimeout(() => setIsShagunOpen(true), 600);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-between relative pb-36 sm:pb-28">
      <PetalCanvas />

      {/* Top Toran & Hanging Bells */}
      <div className="w-full h-8 bg-gradient-to-r from-orange-600 via-amber-500 to-green-700 shadow-lg flex justify-between items-end px-10 relative z-30">
        <span className="text-2xl -mb-4 animate-sway-left drop-shadow-md">🔔</span>
        <span className="text-2xl -mb-4 animate-sway-right drop-shadow-md">🔔</span>
      </div>

      {/* Header */}
      <header className="max-w-5xl w-full mx-auto px-4 py-4 flex justify-center items-center z-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-200 shadow-sm">
          <span>🪔</span>
          <span>{occasion} Virtual Celebration • Dedicated to {brotherName} ❤️</span>
        </div>
      </header>

      {/* Main Book Stage */}
      <div className="max-w-4xl w-full mx-auto px-4 my-auto relative z-20">
        <div className="bg-[#fbf8f1] rounded-2xl border-4 sm:border-8 border-[#1a3832] outline outline-2 outline-amber-400 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden min-h-[560px] flex flex-col justify-between">
          
          {/* SPREAD 0: COVER */}
          {page === 0 && (
            <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center my-auto">
              <div className="max-w-md w-full border-2 border-amber-400/60 rounded-t-[180px] rounded-b-2xl p-8 bg-white/70 shadow-inner">
                <PoojaThali />
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-teal-950 mb-2">
                  Ek Tilak, Hazaar Yaadein <span className="animate-heart">❤️</span>
                </h1>
                <p className="text-xs sm:text-sm text-stone-600 mb-4 max-w-xs mx-auto">
                  Because no matter how much we fight, you&apos;ll always be my one and only brother, Gaurav.
                </p>

                <div className="inline-flex items-center gap-2 bg-[#fdf5e2] border border-amber-300 px-4 py-1.5 rounded-full text-sm font-display font-bold text-rose-800 mb-2">
                  <span>{sisterName}</span>
                  <span className="text-red-500">❤️</span>
                  <span>{brotherName}</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-6">
                  {date}
                </div>

                <button
                  onClick={() => handlePageChange(1)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#09473d] to-[#0d5f52] hover:from-[#0d5f52] hover:to-[#127969] text-amber-200 border border-amber-400 text-sm font-bold shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Open Your {occasion} Surprise ✨
                </button>
              </div>
            </div>
          )}

          {/* SPREAD 1: 5 INTERACTIVE RASMEIN */}
          {page === 1 && (
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 min-h-[540px]">
              {/* Left Column: Visual Scene */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#fdfbf7]">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 tracking-wider uppercase block mb-1">
                    PAANCH RASMEIN, EK THALI
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-teal-950">
                    Aaj ki rasmein, sirf tumhare liye
                  </h2>
                </div>

                <div className="my-auto flex flex-col items-center">
                  <div className="w-full max-w-[280px] h-52 rounded-t-[120px] rounded-b-xl bg-gradient-to-b from-amber-50 to-orange-100/60 border-2 border-amber-300 shadow-inner overflow-hidden flex items-end justify-center">
                    <CharacterScene rasam={activeRasam} />
                  </div>
                  <div className="mt-4 p-3 bg-amber-50/80 border-l-4 border-amber-400 rounded-r-lg max-w-[300px]">
                    <p className="font-serif italic text-xs text-stone-700">
                      {rasamMeta[activeRasam].caption(brotherName)}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-stone-400 text-center">Page 2</div>
              </div>

              {/* Right Column: Menu checklist */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#fdfbf7]">
                <div>
                  <span className="text-[11px] font-bold text-teal-800 tracking-wider uppercase block mb-1">
                    RASAM CHUNO
                  </span>
                  <h2 className="font-serif text-xl font-bold text-teal-950 mb-3">
                    Touch to perform each rasam
                  </h2>

                  <div className="space-y-2">
                    {(Object.keys(rasamMeta) as RasamType[]).map((key) => {
                      const item = rasamMeta[key];
                      const isActive = activeRasam === key;
                      return (
                        <button
                          key={key}
                          onClick={() => handleRasamClick(key)}
                          className={`w-full p-2.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                            isActive
                              ? "bg-teal-900 border-amber-400 text-white shadow-md"
                              : "bg-white border-stone-200 hover:border-amber-400 text-stone-800"
                          }`}
                        >
                          <span className="text-xl w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            {item.icon}
                          </span>
                          <div className="flex-1">
                            <span className="block text-xs font-bold">{item.name}</span>
                            <span className={`block text-[10px] ${isActive ? "text-teal-200" : "text-stone-500"}`}>
                              {item.desc}
                            </span>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                              isActive ? "bg-amber-400 text-teal-950 border-amber-400" : "border-stone-300 text-transparent"
                            }`}
                          >
                            ✓
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => handlePageChange(2)}
                    className="text-xs font-bold text-teal-800 hover:text-rose-800 flex items-center gap-1 transition-colors"
                  >
                    <span>Turn to Memory Scrapbook</span>
                    <ChevronRight size={14} />
                  </button>
                  <div className="text-[11px] text-stone-400">Page 3</div>
                </div>
              </div>
            </div>
          )}

          {/* SPREAD 2: SCRAPBOOK */}
          {page === 2 && (
            <div className="p-3.5 sm:p-8 flex flex-col justify-between min-h-[540px] bg-[#faf6ee]">
              <div>
                <span className="text-[11px] font-bold text-amber-700 tracking-wider uppercase block mb-1">
                  SIBLING SCRAPBOOK
                </span>
                <h2 className="font-handwriting text-2xl sm:text-3xl font-bold text-stone-800 mb-3">
                  Little Moments, Big Memories with {brotherName}
                </h2>
                <Scrapbook brotherName={brotherName} />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-200 mt-4 mb-2">
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-3.5 py-1.5 rounded-full bg-stone-200/90 hover:bg-stone-300 text-stone-700 text-xs font-bold flex items-center gap-1 transition-all"
                >
                  <ChevronLeft size={14} />
                  <span>Back</span>
                </button>
                <div className="text-[11px] font-medium text-stone-500">Page 4 &amp; 5</div>
                <button
                  onClick={() => handlePageChange(3)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-850 hover:to-teal-750 text-amber-200 font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                >
                  <span>Read My Letter ➔</span>
                </button>
              </div>
            </div>
          )}

          {/* SPREAD 3: DISTANCE & LETTER */}
          {page === 3 && (
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 min-h-[540px]">
              {/* Distance Theme */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#092e27] to-[#145348] text-white">
                <div>
                  <span className="text-[11px] font-bold text-amber-300 tracking-wider uppercase block mb-1">
                    MILES APART, STILL CONNECTED
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-amber-200 mb-2">
                    Kaash Aaj Saath Hote...
                  </h2>
                  <p className="text-xs text-teal-100/80 leading-relaxed">
                    Some celebrations feel incomplete without your favourite person beside you.
                  </p>
                </div>

                <div className="my-auto py-6">
                  <div className="flex justify-between items-center px-4 mb-4">
                    <div className="text-center p-3 rounded-xl bg-white/10 border border-amber-400/30">
                      <span className="text-2xl block mb-1">👧🪔</span>
                      <span className="text-[11px] font-bold text-amber-200 uppercase">{sisterName}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-amber-300 font-bold block mb-1">✨ Same Love ✨</span>
                      <div className="w-20 h-0.5 border-t-2 border-dashed border-amber-300 mx-auto" />
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/10 border border-amber-400/30">
                      <span className="text-2xl block mb-1">👦✈️</span>
                      <span className="text-[11px] font-bold text-amber-200 uppercase">{brotherName}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-black/25 border-l-4 border-amber-400 rounded-r-lg text-xs italic text-teal-100">
                    &ldquo;Even if miles stand between us, every prayer in my aarti reaches your forehead first.&rdquo;
                  </div>
                </div>

                <div className="text-[11px] text-teal-200/50 text-center">Page 6</div>
              </div>

              {/* Letter */}
              <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#fffefb]">
                <div className="font-serif">
                  <h3 className="text-lg font-bold text-teal-950 mb-3">
                    Dear {brotherName}, A Little Something From Me...
                  </h3>
                  <div className="text-xs leading-relaxed text-stone-700 space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                    {letterText.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-4 font-handwriting text-stone-800">
                    <span className="text-sm block">With all my love,</span>
                    <span className="text-xl font-bold text-rose-800">{sisterName}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-[11px] text-stone-400">Page 7</div>
                  <button
                    onClick={() => handlePageChange(4)}
                    className="text-xs font-bold text-teal-800 hover:text-rose-800 flex items-center gap-1"
                  >
                    <span>Grand Celebration Finale</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SPREAD 4: FINALE CELEBRATION */}
          {page === 4 && (
            <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center my-auto">
              <div className="max-w-md w-full">
                <div className="text-3xl mb-3 flex justify-center gap-3">
                  <span>🪔</span>
                  <span>🌼</span>
                  <span>🌸</span>
                  <span>🪔</span>
                </div>

                <h2 className="font-serif text-3xl font-bold text-teal-950 mb-3">
                  Happy {occasion}, Mere Favourite Insaan! <span className="animate-heart">❤️</span>
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                  May your life always be filled with boundless happiness, radiant health, huge success, and endless reasons to smile.
                </p>

                <div className="inline-flex items-center gap-2 bg-[#fdf5e2] border border-amber-300 px-5 py-2 rounded-full text-base font-display font-bold text-rose-800 mb-2">
                  <span>{sisterName}</span>
                  <span className="text-red-500">❤️</span>
                  <span>{brotherName}</span>
                </div>
                <p className="text-[11px] text-stone-500 mb-6">Made with endless love, just for you.</p>

                <div className="flex justify-center mb-5">
                  <button
                    onClick={() => handlePageChange(0)}
                    className="py-2.5 px-6 rounded-full bg-[#09473d] hover:bg-[#0d5f52] text-amber-200 text-xs font-bold shadow-md inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-105"
                  >
                    <RotateCcw size={14} />
                    <span>Replay Celebration 🔄</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Page Dots & Navigation */}
        <div className="flex justify-between items-center mt-4 px-2">
          <button
            disabled={page === 0}
            onClick={() => handlePageChange(Math.max(0, page - 1))}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-amber-200 border border-amber-400/30 flex items-center gap-1"
          >
            <ChevronLeft size={14} /> Prev
          </button>

          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  page === idx ? "bg-amber-400 scale-125 shadow-md" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            disabled={page === totalPages - 1}
            onClick={() => handlePageChange(Math.min(totalPages - 1, page + 1))}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-amber-200 border border-amber-400/30 flex items-center gap-1"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Persistent Audio Player Bar */}
      <AudioPlayer />

      {/* Shagun Voucher Modal */}
      <ShagunModal
        isOpen={isShagunOpen}
        onClose={() => setIsShagunOpen(false)}
        brotherName={brotherName}
      />

      {/* Personalize Details Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        brotherName={brotherName}
        sisterName={sisterName}
        occasion={occasion}
        date={date}
        letterText={letterText}
        onSave={(d) => {
          setBrotherName(d.brotherName);
          setSisterName(d.sisterName);
          setOccasion(d.occasion);
          setDate(d.date);
          setLetterText(d.letterText);
        }}
      />
    </main>
  );
}

