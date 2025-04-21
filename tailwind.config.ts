
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        background: "#1a1a1a",
        accent: {
          DEFAULT: "#8AE68A",
          dark: "#7CFC00",
        },
        text: {
          DEFAULT: "#fff",
          muted: "#d1d5db",
          secondary: "#9ca3af",
        },
        navbar: {
          DEFAULT: "#232323"
        },
      },
      borderRadius: {
        xl: "1rem",
        lg: "0.75rem",
        md: "0.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px 0 rgba(40,255,101,0.05)",
        card: "0 3px 8px 1px rgba(0,0,0,0.12)",
        accent: "0 0 8px 2px #8AE68A80"
      },
      keyframes: {
        "scale-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        "scale-pop": "scale-pop 0.18s cubic-bezier(0.16,1,0.3,1)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
