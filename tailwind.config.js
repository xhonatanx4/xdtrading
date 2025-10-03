/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // XD Trading Green Theme
        'xd-green': {
          50: '#E5FFE5',
          100: '#CCFFCC',
          200: '#99FF99',
          300: '#66FF66',
          400: '#33FF33',
          500: '#00FF88', // primary-green
          600: '#00CC6A', // secondary-green
          700: '#009944',
          800: '#006622',
          900: '#003311',
          950: '#051008', // dark-green
        },
        // VIP Signals Red Theme  
        'xd-red': {
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0040', // primary-red
          600: '#CC0033', // secondary-red
          700: '#990022',
          800: '#660011',
          900: '#330008',
          950: '#1A0A0F', // dark-red
        },
        // XD Accent Colors
        'xd-accent': {
          green: '#39FF14',
          red: '#FF1744',
        }
      }
    },
  },
  plugins: [],
};
