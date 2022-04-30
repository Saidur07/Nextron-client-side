module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        realBlack: "#2b2d42",
        darkBlue: "#001845",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
  daisyui: {
    themes: false,
  },
};
