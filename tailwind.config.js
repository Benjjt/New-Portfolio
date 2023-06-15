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
        background: "#E6FAFB",
        primary: "#f0af63",
        secondary: "#f0af63",
        light: "#9AF0FA",
        hightlight: "#f4a261",
        darkBlue: "#6477B8",
        brown: "#534D3D",
      },
      fontFamily: {
        Moiser: ["VT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
