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
        background: "#100F0F",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "past-work-gradient": "linear-gradient(180deg, #100F0F, #100F0F)",
        "portfolio-gradient": "linear-gradient(180deg, #100F0F, #505064)",
        "hero-gradient": "linear-gradient(180deg, #100F0F, #100F0F)",
        "mountains-image": "url('/assets/mountains.png')",
        "planets-image": "url('/assets/planets.png')",
        "sun-image": "url('/assets/sun.png')",
        "stars-image": "url('/assets/stars.png')",
      },
    },
  },
  plugins: [],
};
export default config;
