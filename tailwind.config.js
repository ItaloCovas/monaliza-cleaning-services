/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        room: "url('./src/assets/room.png')"
      },
      colors: {
        gray: {
          0: '#E5E4E4'
        },
        pink: {
          0: '#E941A1'
        }
      }
    }
  },
  plugins: []
};
