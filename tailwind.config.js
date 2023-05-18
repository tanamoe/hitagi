import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#f8b60b",
      },
      boxShadow: {
        offset: "0.5rem 0.5rem 0 var(--tw-shadow-color)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: "Alexandria",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
