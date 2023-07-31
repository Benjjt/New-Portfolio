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
        tailwindColor: "#0ba5e9",
        typescriptColor: "#3077c6",
        nextjsColor: "#ededed",
        reactColor: "#0a7ea3",
        threeColor: "#1a82c3",
        sassColor: "#bf4080",
        htmlColor: "#e54b20",
        javascriptColor: "#f7e017",
        cssColor: "#264de3",
        background: "#E6FAFB",
        primary: "#f0af63",
        secondary: "#f0af63",
        light: "#f5f8fa",
        highlight: "#FFC700",
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
