"use client";

import React from "react";

export function PoojaThali() {
  return (
    <div className="relative w-44 h-44 mx-auto mb-4 animate-float">
      <svg viewBox="0 0 260 260" className="w-full h-full drop-shadow-xl">
        {/* Brass Thali Outer Plate */}
        <circle cx="130" cy="130" r="115" fill="#c99738" stroke="#f6d365" strokeWidth="6" />
        <circle cx="130" cy="130" r="105" fill="#a47220" />
        <circle
          cx="130"
          cy="130"
          r="95"
          fill="#e8bb59"
          stroke="#966114"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Marigold Petal Circle */}
        <g>
          {[
            [130, 48],
            [195, 85],
            [205, 155],
            [155, 210],
            [85, 195],
            [55, 125],
            [80, 65],
          ].map(([cx, cy], i) => (
            <React.Fragment key={i}>
              <circle cx={cx} cy={cy} r="12" fill={i % 2 === 0 ? "#ff7f11" : "#ff5400"} />
              <circle cx={cx} cy={cy} r="7" fill="#ffa737" />
            </React.Fragment>
          ))}
        </g>

        {/* Roli / Kumkum Katori */}
        <circle cx="88" cy="120" r="22" fill="#b3202e" stroke="#e8bb59" strokeWidth="3" />
        <circle cx="88" cy="120" r="14" fill="#880e1b" />
        <text x="88" y="125" textAnchor="middle" fontSize="14" fill="#fff">✨</text>

        {/* Akshat Rice Katori */}
        <circle cx="172" cy="120" r="22" fill="#f8f9fa" stroke="#e8bb59" strokeWidth="3" />
        <circle cx="172" cy="120" r="16" fill="#f1f3f5" />
        <text x="172" y="124" textAnchor="middle" fontSize="12" fill="#999">🍚</text>

        {/* Sweets (Laddoos & Kaju Katli) */}
        <g>
          <circle cx="130" cy="178" r="16" fill="#ff9900" stroke="#cc6600" strokeWidth="2" />
          <circle cx="130" cy="178" r="13" fill="#ffb833" />
          <circle cx="112" cy="165" r="13" fill="#ff9900" />
          <circle cx="148" cy="165" r="13" fill="#ff9900" />
          <polygon points="130,135 142,148 130,161 118,148" fill="#e9ecef" stroke="#ced4da" strokeWidth="1.5" />
          <polygon points="130,138 138,148 130,158 122,148" fill="#f8f9fa" />
        </g>

        {/* Golden Diya Lamp in Center */}
        <g>
          <ellipse cx="130" cy="98" rx="28" ry="14" fill="#b86b16" stroke="#f6d365" strokeWidth="2" />
          <ellipse cx="130" cy="95" rx="22" ry="9" fill="#e69500" />
          <ellipse cx="130" cy="92" rx="14" ry="5" fill="#ffc107" />
          {/* Diya Flame */}
          <path
            className="animate-flame"
            d="M130 92 C120 78, 122 62, 130 50 C138 62, 140 78, 130 92 Z"
            fill="url(#flameGrad)"
          />
        </g>

        <defs>
          <radialGradient id="flameGrad" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#ffeb3b" />
            <stop offset="70%" stopColor="#ff5722" />
            <stop offset="100%" stopColor="#d84315" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
