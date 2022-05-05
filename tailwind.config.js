module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        realBlack: "#2b2d42",
        darkBlue: "#001845",
        darka: "#023047",
        darku: "#203354",
        darki: "#013560",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        open: {
          "0%": { marginTop: "-60vh", marginLeft: "-30vw" },
          "100%": { marginTop: "0px", marginLeft: "0vw" },
        },
        left: {
          "0%": { marginLeft: "-30vw" },
          "100%": { marginLeft: "0vw" },
        },
        right: {
          "0%": { marginRight: "-30vw" },
          "100%": { marginRight: "0vw" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        open: "open .5s ease-in-out forwards",
        left: "left .5s ease-in-out forwards",
        right: "right .5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
  daisyui: {
    themes: false,
  },
};
