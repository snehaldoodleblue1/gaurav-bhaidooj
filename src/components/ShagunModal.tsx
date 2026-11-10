"use client";

import React from "react";
import { X } from "lucide-react";

interface ShagunModalProps {
  isOpen: boolean;
  onClose: () => void;
  brotherName: string;
}

export function ShagunModal({ isOpen, onClose, brotherName }: ShagunModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#fffefb] border-2 border-amber-400 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-800"
        >
          <X size={20} />
        </button>

        <div className="bg-gradient-to-br from-[#9c1825] to-[#c0392b] border-2 border-amber-300 rounded-xl p-6 text-white mb-5 shadow-lg relative overflow-hidden">
          <div className="text-3xl mb-2">🪙</div>
          <span className="text-amber-200 text-lg font-serif">卐</span>
          <h3 className="font-serif text-xl font-bold text-amber-200 mt-1 mb-2">
            Official Bhai Shagun Voucher
          </h3>
          <div className="font-display text-2xl font-bold tracking-wide text-white mb-3">
            ₹ 1,001 + Infinite Blessings
          </div>
          <p className="text-xs text-rose-100 border-t border-rose-300/30 pt-3 leading-relaxed">
            *Issued specifically to <strong>{brotherName}</strong>. Redeemable for: 0 Complaints for 24 Hours,
            Unlimited Sister Support across all timezones, and Lifetime Immunity from all remote arguments!
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-900 font-bold shadow-md transition-transform hover:scale-[1.02]"
        >
          Claim Shagun with Love 🎁
        </button>
      </div>
    </div>
  );
}

