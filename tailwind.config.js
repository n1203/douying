module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulseSlow: 'pulseSlow ease-in 3s forwards',
      },
      // 过渡持续时间
      transitionDuration: {
        '5000': '5000ms',
        '10000': '10000ms',
      },
      keyframes: {
        pulseSlow: {
          from: { opacity: 1 },
          to: { opacity: 10 }
        },

      }
    }
  },
  variants: {
    extend: { animation: ['hover'], },
  },
  plugins: [],
}
