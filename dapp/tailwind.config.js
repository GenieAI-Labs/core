/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      midnight: '#ffffff',
      endnight: '#5D3FD3',
      redpraha: '#FFCF96',
      yellowpraha: '#F6FDC3',
      bluepraha: '#FF8080',
      electricblue: '#3137fd',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
