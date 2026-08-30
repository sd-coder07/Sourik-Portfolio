import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#12110F",
        surface: {
          DEFAULT: "#1B1A17",
          elevated: "#23221E",
          hover: "#282622",
        },
        border: {
          DEFAULT: "#2A2823",
          subtle: "#38352F",
          accent: "#F2603D",
        },
        accent: {
          DEFAULT: "#F2603D",
          hover: "#FF6F4C",
          muted: "rgba(242, 96, 61, 0.12)",
          subtle: "rgba(242, 96, 61, 0.06)",
        },
        text: {
          primary: "#F5F1EA",
          muted: "#A8A29B",
          subtle: "#736E67",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 10px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px 0 rgba(242, 96, 61, 0.15)",
        "glow-accent": "0 0 25px -3px rgba(242, 96, 61, 0.35)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
