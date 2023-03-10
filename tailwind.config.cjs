/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Cabinet Grotesk"', "sans-serif"],
    },
    backgroundImage: {
      card: "url(./src/assets/card-mesh.png)",
    },
  },
  daisyui: {
    themes: [
      {
        creditBuddyTheme: {
          primary: "#0033E8",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#121212",
          "base-100": "#FFFFFF",
          "base-200": "#8C8C8C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
