export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#01a7fb',
        },
        secondary: {
          300: '#5f35e7',
        },
        neutral: {
          100: '#F6F7F8',
        },
        red: {
          100: '#fb3748',
        }
      }
    },
  },
  plugins: [],
}