module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ffe031",
        secondary: "#8bd2bd",
      },
      textColor: {
        primary: "#ffe031",
        secondary: "#8bd2bd",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "custom-blue-500": "#21313D",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
