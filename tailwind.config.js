/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '481px',
      md: '768px',
      lg: '1050px',
      xl: '1200px',
      '2xl': '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/svg/bg.svg')",
        'custom-gradient': 'linear-gradient(to right, #737373, #404040)',
        'custom-gradient-text': 'linear-gradient(to right, #e5e5e5, #a3a3a3)',
      },

      fontFamily: {
        logo: ['Sour Gummy', 'sans-serif'],
      },
      colors: {
        bgGradient:
          'bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500',
      },
    },
  },
  plugins: [],
};
