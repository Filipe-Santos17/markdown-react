/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0 0 5px rgba(81, 203, 238, 1)",
      },
      borderColor: {
        input: "rgba(81, 203, 238, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
