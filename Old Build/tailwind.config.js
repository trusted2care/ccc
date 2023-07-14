/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear'
      },
      
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "100%": {
            transform: "rotate(-2deg)",
          },
        },
      },
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        dark_purple: "#000235",
        btn_primary: "#7e7ee3",
        heading_color: "#abd9d9",
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'},
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
