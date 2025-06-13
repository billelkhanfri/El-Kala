import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        frenchblue: "#007BFF",
        coral: "#FF6F61",
        elkgreen: "#3CA879",
        offwhite: "#FAFAFA",
        coal: "#2E2E2E",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Playfair Display", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
