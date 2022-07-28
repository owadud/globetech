module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      blue:'#000633',
      gray:'#0096C7',
      indigo:'#2397CD',
      white:'#FFFFFF'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}