/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  //apply tailwind css to index.html and other
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#3983f6",
        secondary: "#ecc94b",
        // ...
      },
    },
  },
  plugins: [],
};
