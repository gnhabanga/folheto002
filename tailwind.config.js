/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#080A1A',
        subMain: '#F2000D',
        dry: '#0B0F29',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
        main2: 'linear-gradient(90deg, #ff1fa3, #f0e803)'
      },
      height: {
        header: '560px',
        rate: '400px'
      },
      fontSize: {
        h1: '2.6rem',
      },
      screen: {
        xs: '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}