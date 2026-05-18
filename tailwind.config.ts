import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131417",
        graphite: "#2f343b",
        paper: "#f7f5f1",
        mist: "#e8e2d9",
        copper: "#b66a43",
        moss: "#607466",
        ocean: "#3f6673",
      },
      boxShadow: {
        panel: "0 24px 70px rgba(19, 20, 23, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
