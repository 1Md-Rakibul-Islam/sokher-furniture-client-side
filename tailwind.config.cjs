/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        medicaretheme: {     
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",     
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
