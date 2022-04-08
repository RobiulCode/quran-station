module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bangla : ['Noto Serif Bengali', 'serif'],
        arabic : ['Noto Naskh Arabic', 'serif'],
        english: ['Sanchez', 'serif']
      }
    },
  },
  plugins: [],
}