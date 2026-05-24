import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172338",
        graphite: "#41516a",
        paper: "#eef3f8",
        mist: "#d8e2ec",
        gold: "#b8924a",
        sage: "#3f6b65",
        clay: "#8b5f48",
        ivory: "#f7faff",
      },
      boxShadow: {
        panel: "0 24px 70px rgba(23, 35, 56, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
