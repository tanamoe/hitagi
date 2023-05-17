import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#f8b60b",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        heading: "Reem Kufi Fun",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
