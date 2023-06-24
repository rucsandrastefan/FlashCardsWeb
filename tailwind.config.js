/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      transformOrigin: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
    },
  },
  variants: {
    transform: ['hover', 'focus'], 
  },
  plugins: [ 

  require('tailwind-scrollbar')({ nocompatible: true })],
};
