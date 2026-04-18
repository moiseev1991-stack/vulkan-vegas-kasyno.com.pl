import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#C9000D", dark: "#7D000E", light: "#F50014" },
        gold: { DEFAULT: "#FFD900", light: "#FFC107" },
        surface: {
          DEFAULT: "#180003",
          light: "#1F0004",
          card: "#1A0003",
        },
        bgDark: "#090001",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
