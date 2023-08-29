/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        defaultBackground: "#0d0e10",
      },
      color: {
        defaultTextColor: "rgba(0,0,0,0.87)",
      },
    },
  },
  plugins: [],
};
