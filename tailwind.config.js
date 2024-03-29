/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(to bottom left, #BB65FF, #4C6FFF)",
      },
      colors: {
        primary: "#C1DCDC",
        "dark-two": "#1E1E1E",
        "gray-light": "rgb(0 0 0 / 87%)",
      },
      boxShadow: {
        "3xl": "0px 4px 4px #C1DCDC;",
      },
    },
  },
  plugins: [],
};
