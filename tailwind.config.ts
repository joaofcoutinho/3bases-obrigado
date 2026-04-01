import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        coral: "#C84B1F",
        "coral-hover": "#B33F18",
        "blue-brand": "#4B8EDB",
        "purple-brand": "#9B4CB8",
        "bg-hero": "#111111",
        "bg-dark": "#0D0D0D",
        "bg-footer": "#0A0A0A",
      },
    },
  },
  plugins: [],
};

export default config;
