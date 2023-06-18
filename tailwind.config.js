/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0c0802",
        background: "#E6FAFB",
        primary: "#f0af63",
        secondary: "#f0af63",
        light: "#f5f8fa",
        hightlight: "#ca9613",
        darkBlue: "#6477B8",
        brown: "#534D3D",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
