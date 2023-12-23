/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "base-100": "#000000",
          "base-200": "#00021a",
          "base-300": "#08081c",
          accent: "#f68067"
        },
      },
    ],
  },
}

