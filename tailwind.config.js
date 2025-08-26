/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3668', // Navy blue from logo
        secondary: '#2A3447', // Complementary dark blue
        accent: '#D4A84B', // Logo gold
        'accent-light': '#E6B94F', // Lighter gold for gradients
        'accent-dark': '#B08A3E', // Darker gold
        heritage: {
          100: '#F7EDD7', // Light gold
          200: '#E6D5B3', // Warm gold
          700: '#2F4668', // Medium navy
          800: '#1B3668', // Dark navy
          900: '#152850', // Deepest navy
          950: '#0F1D3A', // Darkest navy for gradients
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-clash-display)'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
      }
    },
  },
  plugins: [],
}
