import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#f8b60b",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: "Alexandria",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
