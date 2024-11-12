/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#172A3A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
    },
  },
  plugins: [],
};
