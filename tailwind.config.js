/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(14 165 233 / var(--tw-text-opacity))",
        secondary: "#AFEAFF",
        secondary2: "#F4FCFF",
        tet: "#7E7E7E",
      },
    },
  },
  plugins: [],
};
