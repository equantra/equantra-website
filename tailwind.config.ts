import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          50: "#eef1f6",
          100: "#d4dae6",
          200: "#a9b5cd",
          300: "#7e90b4",
          400: "#536b9b",
          500: "#2d4a7a",
          600: "#1e3460",
          700: "#162848",
          800: "#0f1c32",
          900: "#0a1120",
          950: "#060b14",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        xl: "0px 5px 15px rgba(76, 2, 224, 0.15)",
        hover_xl: "0px 10px 25px rgba(76, 2, 224, 0.25)",
        glow: "0px 0px 20px rgba(76, 2, 224, 0.3)",
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#d1d5db",
            "--tw-prose-headings": "#fff",
            "--tw-prose-lead": "#d1d5db",
            "--tw-prose-links": "#a78bfa",
            "--tw-prose-bold": "#fff",
            "--tw-prose-counters": "#9ca3af",
            "--tw-prose-bullets": "#7c3aed",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.1)",
            "--tw-prose-quotes": "#e5e7eb",
            "--tw-prose-quote-borders": "#7c3aed",
            "--tw-prose-code": "#a78bfa",
            "--tw-prose-pre-code": "#d1d5db",
            "--tw-prose-pre-bg": "rgba(15, 23, 42, 0.6)",
            "--tw-prose-th-borders": "rgba(255, 255, 255, 0.1)",
            "--tw-prose-td-borders": "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
