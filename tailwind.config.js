/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "text-clr": "#9A9999",
      "bleck-clr": "#0F0F0EDB",
      "orenj-clr": "#FFB224",
    },
  },
  plugins: [require("daisyui")],
};

