/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
    },

    extend: {
      screens: {
        'phone': { 'min': '0px', 'max': '639px' },
        'tablet': { 'min': '640px', 'max': '1023px' },
        'desktop': { 'min': '1024px', 'max': '1279px' },
        'widescreen': { 'min': '1280px' },
      },

      colors: {
        "bg": "#141C21",
        "accent": "#E76A50",
        "neutral": "#C2C2C2",
        "case-study": "#ECECEC",
        "neutrals": {
          "dark":{
            750: '#0a0f14',
            700: '#111921',
            650: '#18222e',
            600: '#1b2735',
            550: '#223142',
          },
          "mid":{
            500: '#223142',
            450: '#384655',
            400: '#4E5A68',
            350: '#646F7B',
            300: '#7a838e',
          },
          "light":{
            250: '#9198a1',
            200: '#a7adb3',
            150: '#bdc1c6',
            100: '#d3d6d9',
            50: '#e9eaec',
          }
        },
      },
      fontFamily: {
        "main": ["Fraunces", "serif"],
        "secondary": ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

