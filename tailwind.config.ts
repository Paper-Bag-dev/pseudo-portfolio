import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        openSans: ["var(--font-open-sans)"],
        joseSans: "var(--font-jose-sans)",
        merriWeather: "var(--font-merri-weather)",
      },
      colors: {
        homeBg: "#eaeaf3",
        homeHead: "#3d4048",
        homeText: "#6A6A6A",
        AboutBg: "#191416",
      },
    },
    
  },
  plugins: [],
};
export default config;
