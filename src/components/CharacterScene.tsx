"use client";

import React from "react";

interface CharacterSceneProps {
  rasam: "aarti" | "tilak" | "mithai" | "shagun" | "hug";
}

export function CharacterScene({ rasam }: CharacterSceneProps) {
  const imageMap = {
    aarti: { src: "/assets/aarti.jpg", alt: "Aarti Ceremony" },
    tilak: { src: "/assets/tilak.jpg", alt: "Tilak Ceremony" },
    mithai: { src: "/assets/mithai.jpg", alt: "Mithai Ceremony" },
    shagun: { src: "/assets/shagun.jpg", alt: "Shagun Ceremony" },
    hug: { src: "/assets/hug.jpg", alt: "Sibling Hug" },
  };

  const item = imageMap[rasam];

  return (
    <div className="relative w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover rounded-t-[140px] rounded-b-xl"
      />
    </div>
  );
}
