/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'cursive'],
        'amatic-sc': ['"Amatic SC"', 'cursive'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'shadows-into-light': ['"Shadows Into Light"', 'cursive'],
      },
    },
  },
  plugins: [],
}