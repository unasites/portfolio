/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        "bg-muted": "hsl(var(--color-bg-muted) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
        "text-muted": "hsl(var(--color-text-muted) / <alpha-value>)",
        gradient: {
          start: "hsl(var(--color-gradient-start) / <alpha-value>)",
          end: "hsl(var(--color-gradient-end) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, hsl(var(--color-gradient-end)), hsl(var(--color-gradient-start)))",
        "text-gradient":
          "linear-gradient(90deg, hsl(var(--color-text-gradient-start)), hsl(var(--color-text-gradient-middle)), hsl(var(--color-text-gradient-end)))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
