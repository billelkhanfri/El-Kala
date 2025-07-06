import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3B68B3",
        coral: "#FF6F61",
        elkgreen: "#3CA879",
        offwhite: "#FAFAFA",
        blackText: "#1C1C1C",
        bgBeige: "#F5F2EA",
        inactifTag: "#E6E6E6",
        coal: "#333333",
        lightGray: "#B2AD99",
        darkGray: "#4A4A4A",
        lightWhite: "#FFFAF4",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Playfair Display", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
// 🟦 Couleurs :
// - Bleu principal : #3B68B3 (boutons, liens)
// - Beige de fond : #F5F2EA (arrière-plan global)
// - Noir doux (texte) : #1C1C1C
// - Gris clair pour les tags inactifs : #E6E6E6
// - Blanc pur pour les cartes : #FFFFFF

// 🔠 Typographies :
// - Titre : sans-serif (genre Inter, Nunito ou Roboto)
// - Texte : simple, lisible, spacing aéré

// 📐 Espacements :
// - Padding général : 1rem à 2rem
// - Cartes : bords arrondis, ombre légère
