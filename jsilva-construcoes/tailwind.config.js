/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta sincronizada com a logo (azul principal e vermelho tijolo)
        primary: '#0A3D7C',
        second: '#C1272D',
        third: '#4a527a',
      }
    },
  },
  plugins: [],
}