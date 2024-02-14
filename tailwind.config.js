/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A9A5B",
        secondary: "#fada50",
        tertiary: "	#899499",
        primaryhover: "#6E7A48",
        primarylight: "#EBEEE2",
      },

      fontFamily: {
        GeneralSans: ["GeneralSans", "sans-serif"],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        vmd: "930px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
