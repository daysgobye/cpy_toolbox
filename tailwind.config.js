/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui"),
  require('tailwindcss-animatecss'),

  ],
  darkMode: 'class',

  theme: {
    animatedSettings: {

      classes: ['bounce', 'heartBeat', 'animatedSpeed', 'infinite']
    }
  },

};
