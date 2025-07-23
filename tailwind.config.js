/// <reference types="react-scripts" />

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#0A192F',
        primaryColor: '#64FFDA',
        textColor: '#8892B0'
      },
      animation: {
        'background-position-spin': 'background-position-spin 2500ms infinite alternate',
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      }
    },

    screens: {
      'xms': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px', 
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'xms-mx': { 'max': '349px' },
      'xs-mx': { 'max': '475px' },
      'sm-mx': { 'max': '639px' },
      'md-mx': { 'max': '767px' },
      'bs-mx': { 'max': '899px' },
      'lg-mx': { 'max': '1023px' },
      'xl-mx': { 'max': '1279px' },
      '2xl-mx': { 'max': '1535px' },
    }
  },
  plugins: [],
}