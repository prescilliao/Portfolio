/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, #67B99A, #248277)",
      },
    },
  },
  plugins: [require("daisyui")],
};
