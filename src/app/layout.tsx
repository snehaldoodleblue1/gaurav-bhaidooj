import type { Metadata } from "next";
import { Playfair_Display, Outfit, Cinzel, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Ek Tilak, Hazaar Yaadein ❤️ | For Gaurav from Snehal",
  description: "A heartfelt interactive Bhai Dooj virtual celebration book created with love for Gaurav by Snehal.",
  openGraph: {
    title: "Ek Tilak, Hazaar Yaadein ❤️ | For Gaurav",
    description: "Snehal has prepared a special Bhai Dooj virtual celebration book for you, Gaurav! Touch to open your surprise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${cinzel.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased min-h-screen relative flex flex-col selection:bg-amber-400 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
