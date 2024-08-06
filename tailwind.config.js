/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'md-bg': '#282c34',
        'md-text': '#abb2bf',
        'md-yellow': '#e5c07b',
        'md-blue': '#61afef',
        'md-green': '#98c379',
        'md-red': '#e06c75',
        'md-purple': '#c678dd',
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
