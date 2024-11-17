/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        open_sans: ['Open Sans, sans-serif'],
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))'
      }
    },
    screens: {
      'xsm': '340px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1' : { fontSize: theme('fontSize.2xl') }, 
        'h2' : { fontSize: theme('fontSize.xl') }, 
        'h3' : { fontSize: theme('fontSize.lg') }, 
        'h4' : { fontSize: theme('fontSize.md') }, 
        'h5' : { fontSize: theme('fontSize.sm') }, 
      })
    }),
  ],
}
