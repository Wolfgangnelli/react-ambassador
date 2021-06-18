module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["focus-visible", "first"],
      textColor: ["visited"],
    },
  },
  plugins: [],
};
