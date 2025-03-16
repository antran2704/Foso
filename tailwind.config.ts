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

        // Custom blue colors
        "blue-50": "#E2F0FE",
        "blue-100": "#0F4F9E",

        // Custom gray colors
        "gray-50": "#667F93",
      },
    },
    fontFamily: {
      raleway: ["var(--font-raleway)"],
    },
  },
  plugins: [],
};
export default config;
