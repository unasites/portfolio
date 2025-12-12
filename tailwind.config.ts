import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg))",
        "bg-muted": "hsl(var(--color-bg-muted))",
        text: "hsl(var(--color-text))",
        "text-muted": "hsl(var(--color-text-muted))",
        gradient: {
          start: "hsl(var(--color-gradient-start))",
          end: "hsl(var(--color-gradient-end))",
        },
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, hsl(var(--color-gradient-start)), hsl(var(--color-gradient-end)))",
        "text-gradient":
          "linear-gradient(90deg, hsl(var(--color-text-gradient-start)), hsl(var(--color-text-gradient-middle)), hsl(var(--color-text-gradient-end)))",
      },
    },
  },
  plugins: [],
} satisfies Config;
