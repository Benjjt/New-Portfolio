/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typingForward:
          "typingForward 2s steps(1) forwards, blink 0.7s infinite",
        delete: "delete 1s steps(1) forwards, blink 0.7s infinite ",
      },
      keyframes: {
        typingForward: {
          "0%": { width: "0" },
          "10%": { width: "0" },
          "20%": { width: "1ch" },
          "30%": { width: "2ch" },
          "40%": { width: "3ch" },
          "50%": { width: "4ch" },
          "60%": { width: "5ch" },
          "70%": { width: "6ch" },
          "80%": { width: "7ch" },
          "90%": { width: "8ch" },
          "95%": { width: "9ch" },
          "100%": { width: "fit" },
        },
        delete: {
          "0%": { width: "fit" },
          "10%": { width: "9ch" },
          "20%": { width: "8ch" },
          "30%": { width: "7ch" },
          "40%": { width: "6ch" },
          "50%": { width: "5ch" },
          "60%": { width: "4ch" },
          "70%": { width: "3ch" },
          "80%": { width: "2ch" },
          "90%": { width: "1ch" },
          "100%": { width: "0ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "darkBlue" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#E6FAFB",
        primary: "#f0af63",
        secondary: "#f0af63",
        light: "#9AF0FA",
        hightlight: "#f4a261",
        darkBlue: "#6477B8",
      },
      fontFamily: {
        Moiser: ["VT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
