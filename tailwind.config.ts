import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suorin-style CTA: warm coral-orange
        primary: {
          DEFAULT: "#FF5C28",
          50: "#FFF1EB",
          100: "#FFE0D2",
          200: "#FFC1A5",
          300: "#FFA278",
          400: "#FF834B",
          500: "#FF5C28",
          600: "#E04B1E",
          700: "#B23B17",
          800: "#852C11",
          900: "#591D0B",
        },
        // White / off-white / warm grey surfaces
        bg: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F4",
          300: "#EDEDEB",
          400: "#E0E0DD",
        },
        // Warm paper / cream accent sections
        paper: {
          DEFAULT: "#F4F1EA",
          50: "#FBF9F3",
          100: "#F4F1EA",
          200: "#E8E4D9",
          300: "#D4D0C8",
        },
        // Ink scale — near black to subtle grey for body text
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3A3A3A",
          500: "#525252",
          400: "#6B6B6B",
          300: "#8A8A8A",
          200: "#B0B0B0",
        },
        // Hairline borders + dividers
        line: {
          DEFAULT: "#E8E8E8",
          100: "#F0F0EE",
          200: "#E8E8E8",
          300: "#D4D4D2",
        },
        // Minecraft brand accent — kept for product/logo moments only
        mc: {
          green: "#6CC04A",
          dirt: "#6B4A2A",
          torch: "#F5C84B",
          redstone: "#C7373A",
        },
        // Legacy aliases kept to avoid component churn
        stone: {
          DEFAULT: "#E8E8E8",
          900: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#525252",
          500: "#8A8A8A",
          400: "#B0B0B0",
          300: "#D4D4D2",
        },
        navy: {
          DEFAULT: "#FFFFFF",
          900: "#FFFFFF",
          800: "#FAFAFA",
          700: "#F5F5F4",
          600: "#EDEDEB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        minecraft: ["MinecraftTen", "var(--font-space)", "sans-serif"],
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        "radial-warm":
          "radial-gradient(ellipse at center, rgba(255,92,40,0.08) 0%, transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "scroll-x": "scrollX 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        card: "0 1px 2px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.06), 0 24px 60px rgba(0,0,0,0.12)",
        glow: "0 0 40px rgba(255,92,40,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
