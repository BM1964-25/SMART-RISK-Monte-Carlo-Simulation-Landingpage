import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172338",
        graphite: "#554f49",
        paper: "#f7f4ee",
        mist: "#e4dbcf",
        gold: "#b8924a",
        sage: "#526f60",
        clay: "#8b5f48",
        ivory: "#fffdf9",
      },
      boxShadow: {
        panel: "0 24px 70px rgba(23, 35, 56, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
