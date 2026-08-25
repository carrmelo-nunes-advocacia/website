/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Tokens definidos em src/app/globals.css (variáveis CSS). Referenciar via var().
    },
  },
  plugins: [],
};
