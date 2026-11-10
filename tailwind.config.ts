import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        festive: {
          dark: "#05231e",
          emerald: "#093730",
          accent: "#0f4f45",
          gold: "#d4af37",
          goldLight: "#f3e5ab",
          saffron: "#f26419",
          marigold: "#f6ae2d",
          crimson: "#851322",
          cream: "#fbf8f1",
          creamDark: "#f0e9d8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
