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
        brand: {
          bg: "#080810",
          surface: "#0F0F1A",
          border: "#1E1E2E",
          primary: "#7C6FF7",       // indigo suave — premium, tech
          "primary-dark": "#5B54D6",
          accent: "#E8B84B",        // âmbar dourado — mercado financeiro
          muted: "#4A4A6A",
          text: "#F0F0FA",
          subtle: "#9090B0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,111,247,0.25), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
