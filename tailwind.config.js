import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        // Soft, Figma-style pastel and neutral tones
        lightyellow: "#FFF9DB",
        softwhite: "#FAFAFA",
        ivory: "#FFFFF0",
        snow: "#FFFAFA",
        mist: "#F4F4F4",
        linen: "#F5F5DC",
        peach: "#FFE5B4",
        mint: "#E6FFFA",
        lilac: "#F3E8FF",
        blush: "#FFE4E6",
        ashgray: "#B2BEB5", // Your earlier custom color
        brand: {
        light: "#E0F2FE",
        DEFAULT: "#3B82F6", // blue-500
        dark: "#1E40AF"
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        sacramento: ['"Sacramento"', 'cursive'],
      },
      
    },
  },
  plugins: [flowbiteReact],
  plugins: [
    require('flowbite-typography'),
    ("flowbite/plugin")]
}
