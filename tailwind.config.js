/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        mdl: "868px",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times", "serif"],
        custom: ["Poppins", "Roboto", "sans-serif"],
      },
      backgroundColor: {
        defaultBackground: "#0d0e10",
        buttonBackground: "#d9008d",
      },
      textColor: {
        defaultTextColor: "#aaa",
        premiumColor: "rgb(193,163,98)",
      },
      borderColor: {
        premiumColor: "rgb(193,163,98)",
      },
      boxShadow: {
        featuredBoxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
      flex: {
        "1/4": "0 0 25%",
        "1/5": "0 0 20%",
      },
    },
  },
  plugins: [],
};
