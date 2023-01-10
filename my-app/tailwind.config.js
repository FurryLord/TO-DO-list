/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple1': '#10002B',
        'purple2': '#240046',
        'purple3': '#3C096C',
        'purple4': '#5A189A',
        'tag_yellow': '#FFD166',
        'tag_pink': '#EF476F',
        'tag_green': '#06D6A0',
      },
      fontFamily: {
        'body': ['Lato', 'sans-serif'],
        'logo': ['Bebas Neue', 'cursive'],
        'group': ['Merriweather', 'serif'],
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    "postcss-preset-env",
    {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    },
  ],
}