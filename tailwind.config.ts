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
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Custom green colors
        "green-50": "#D1F7EA",
        "green-100": "#1AD598",
        "green-200": "#15AA7A",

         // Custom dark colors
        "dark-50": "#25272A",
        "dark-100": "#050505",
        "dark-200": "#33404A",
        "dark-300": "#052B1E",

        // Custom blue colors
        "blue-50": "#E2F0FE",
        "blue-100": "#0F4F9E",

        // Custom gray colors
        "gray-50": "#667F93",
        "gray-100": "#B3C5D4",
        "gray-200": "#4D5F6E",
        "gray-300": "#809FB8",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      padding: "20px",
    },
    fontFamily: {
      raleway: ["var(--font-raleway)"],
    },
    
  },
  plugins: [],
};
export default config;
