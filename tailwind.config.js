/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      // Quella, poppins
      colors: {
        primary: "#C1DCDC",
        "dark-two": "#1E1E1E",
      },
      boxShadow: {
        min: "0px 1px 3px 0px rgba(50, 50, 71, 0.10), 0px 0px 1px 0px rgba(12, 26, 75, 0.20)",
        "3xl":
          " 0px 0px 1px 0px rgba(50, 50, 71, 0.20), 0px 1px 2px 0px rgba(50, 50, 71, 0.08);",
      },
    },
  },
  plugins: [],
};
