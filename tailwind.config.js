/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],//se usa para aplicar el css a los html con clases de utilidad
  theme: {
    extend: {

      colors: {
        "Dark_Blue": "hsl(233, 26%, 24%)",
        "Lime_Green": "hsl(136, 65%, 51%)",
        "Bright_Cyan": "hsl(192, 70%, 51%)",
        "Grayish_Blue": "hsl(233, 8%, 62%)",
        "Light_Grayish_Blue": "hsl(220, 16%, 96%)",
        "Very_Light_Gray": "hsl(0, 0%, 98%)",
        "White": "hsl(0, 0%, 100%)",
        "cambio-boton":"rgba(255, 255, 255, 0.4)"
      },

      backgroundImage : {
        "close-menu": "url(../images/icon-close.svg)",
        "open-menu": "url(../images/icon-hamburger.svg)"
      }

    },
  },
  plugins: [],
}

