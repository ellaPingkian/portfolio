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
      },
      fontFamily: {
        "main": ["Fraunces", "serif"],
        "secondary": ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

