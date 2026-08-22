import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel2)",
        border: "var(--border)",
        blue: "var(--blue)",
        bluedim: "var(--blue-dim)",
        lime: "var(--lime)",
        limedim: "var(--lime-dim)",
        ink: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: "var(--font-bebas)",
        body: "var(--font-inter)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
