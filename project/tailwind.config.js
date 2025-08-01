/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Define 'Inter' como a fonte padrão para a classe 'font-sans'
        sans: ['Inter', 'sans-serif'],
        // Cria a classe utilitária 'font-orbitron'
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};