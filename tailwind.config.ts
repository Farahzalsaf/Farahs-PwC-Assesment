import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      dark: "#1b1b1b",
      light: "#fff",
      accent: "#0066CC", 
      gray: "#747474",
      grayDark: "#1b1b1b",
      grayLight: "#f5f5f5",
      primary: "#FF6600", 
      primaryDark: "#FF6600",
      "primary-foreground": "#FFFFFF", 
      secondary: "#FFD700", 
      "secondary-foreground": "#000000",
      destructive: "#FF0000",
      "destructive-foreground": "#FFFFFF", 
      background: "#F0F0F0",
      input: "#CCCCCC",
    fontFamily: {
      mr: ["var(--font-mr)"],
      in: ["var(--font-in)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6600", // PwC Orange
          foreground: "#FFFFFF", // White
        },
        secondary: {
          DEFAULT: "#FFD700", // PwC Gold
          foreground: "#000000", // Black
        },
        destructive: {
          DEFAULT: "#FF0000", // Red
          foreground: "#FFFFFF", // White
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#0066CC", // PwC Blue
          foreground: "#FFFFFF", // Adjust if needed
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
