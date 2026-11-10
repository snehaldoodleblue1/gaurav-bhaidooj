"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  brotherName: string;
  sisterName: string;
  occasion: string;
  date: string;
  letterText: string;
  onSave: (data: {
    brotherName: string;
    sisterName: string;
    occasion: string;
    date: string;
    letterText: string;
  }) => void;
}

export function PersonalizeModal({
  isOpen,
  onClose,
  brotherName,
  sisterName,
  occasion,
  date,
  letterText,
  onSave,
}: PersonalizeModalProps) {
  const [bName, setBName] = useState(brotherName);
  const [sName, setSName] = useState(sisterName);
  const [occ, setOcc] = useState(occasion);
  const [dt, setDt] = useState(date);
  const [msg, setMsg] = useState(letterText);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      brotherName: bName,
      sisterName: sName,
      occasion: occ,
      date: dt,
      letterText: msg,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#fffefb] border-2 border-amber-400 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-800"
        >
          <X size={20} />
        </button>

        <div className="mb-4">
          <span className="text-[11px] font-bold text-amber-700 tracking-wider uppercase flex items-center gap-1">
            <Sparkles size={13} /> Personalize Celebration Book
          </span>
          <h3 className="font-serif text-2xl font-bold text-teal-950 mt-1">
            Edit Sibling Details
          </h3>
          <p className="text-xs text-stone-500">
            Changes will update live across the entire digital gift book.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Brother&apos;s Name
              </label>
              <input
                type="text"
                value={bName}
                onChange={(e) => setBName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:border-teal-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Sister&apos;s Name
              </label>
              <input
                type="text"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:border-teal-700 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Occasion / Festival
              </label>
              <select
                value={occ}
                onChange={(e) => setOcc(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:border-teal-700 focus:outline-none bg-white"
              >
                <option value="Bhai Dooj">Bhai Dooj</option>
                <option value="Raksha Bandhan">Raksha Bandhan</option>
                <option value="Brother's Birthday">Brother&apos;s Birthday</option>
                <option value="Special Celebration">Special Celebration</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Date
              </label>
              <input
                type="text"
                value={dt}
                onChange={(e) => setDt(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:border-teal-700 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Heartfelt Letter
            </label>
            <textarea
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs leading-relaxed focus:border-teal-700 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-900 text-xs font-bold shadow transition-transform hover:scale-[1.02]"
            >
              Save &amp; Update ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

