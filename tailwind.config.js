/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'], 
        roboto: ['var(--font-roboto)', 'sans-serif'], 
        robotocondensed: ['var(--font-robotocondensed)', 'sans-serif'], 
        merriweather: ['var(--font-merriweather)', 'sans-serif'], 
        nunitosans: ['Nunito Sans', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      maxWidth: {
        '1100': '1100px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
      },
      colors: {
        primary: '#16377d',
        secondary: '#003049',
        tertiary: '#f9f5ed',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        bounce: 'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUp: 'slideUp 0.5s',
        slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animationDelay: {
        '0': '0s',
        '2': '0.2s',
        '4': '0.4s',
        '6': '0.6s',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // you can add more plugins here as needed
  ],
  variants: {
    extend: {
      backgroundColor: ['before', 'after'],
      // add other variant extensions here
    },
  },
};
