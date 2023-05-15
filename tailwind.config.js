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
    transform: ['hover', 'focus'], // enable transform variants
  },
  plugins: [ 
  //   function ({ addUtilities }) {
  //   addUtilities({
  //     '.flip-card': {
  //       perspective: '1000px',
  //       cursor: 'pointer', // add cursor pointer to indicate clickable element
  //     },
  //     '.flip-card-inner': {
  //       position: 'relative',
  //       width: '100%',
  //       height: '100%',
  //       transformStyle: 'preserve-3d',
  //       transitionProperty: 'transform',
  //       transitionTimingFunction: 'ease-out',
  //       transform: 'rotateY(0deg)', // set initial state to front-facing
  //     },
  //     '.flip-card-front, .flip-card-back': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       backfaceVisibility: 'hidden',
  //       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  //     },
  //     '.flip-card-front': {
  //       transform: 'rotateY(0deg)',
  //     },
  //     '.flip-card-back': {
  //       transform: 'rotateY(180deg)',
  //     },
     
  //   });
  // },
  require('tailwind-scrollbar')({ nocompatible: true })],
};
