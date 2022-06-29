/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#448AB6",
        secondary: "#212529",
        input: "#f3f6f9",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
