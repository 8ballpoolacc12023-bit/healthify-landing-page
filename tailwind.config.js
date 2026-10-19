/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#142718',
          forest: '#264423',
          DEFAULT: '#2d4c24',
          hover: '#223d1b',
          light: '#f1f5ee',
          border: '#3b5f31',
          gold: '#c29a4a',
        },
        cream: {
          50: '#FBFBF7',
          100: '#F7F5EE',
          200: '#EFECE3',
          300: '#E4DFC7',
          card: '#F6F3EC',
          badge: '#F2EFE8',
        },
        charcoal: {
          900: '#141E16',
          800: '#232D25',
          700: '#3D493F',
          500: '#647266',
          400: '#8A978C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(20, 39, 24, 0.08)',
        'card': '0 8px 24px -4px rgba(0, 0, 0, 0.06)',
        'float': '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
