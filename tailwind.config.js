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
    }
  },
  plugins: [],
};