/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1100px'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        room: "url('/src/assets/room.png')"
      },
      colors: {
        gray: {
          0: '#E5E4E4'
        },
        blue: {
          0: '#41ADD9'
        }
      }
    }
  },
  plugins: []
};
