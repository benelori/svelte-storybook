module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C5FC3',
          light: '#978ed4',
          dark: '#393592'
        },
        secondary: '#F7931E',
        neutral: {
          DEFAULT: '#999999',
          light: '#E5E5E5',
        },
        error: 'red',
        success: 'green',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
