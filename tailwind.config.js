/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fieldwork: ['Fieldwork', 'sans-serif'],
      },
    },
    colors: {
      blue: {
        0: '#1476d1',
      },
      gray: {
        0: '#667085',
        1: '#101828',
        2: '#1d2939',
        3: '#313131',
      },
      yellow: {
        0: '#FFD13E',
      },
      white: {
        0: '#FFFFFF',
      },
      red: {
        0: '#D81B39',
        1: '#E33B32',
      },
    }
  },
  plugins: [],
};
