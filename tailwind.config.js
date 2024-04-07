/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
    "primary": "#8764B8",
    "secondary": "#fde047",
    "accent": "#9ca3af",
    "neutral": "#1e3a8a",
    "base-100": "#1f2937",
    "info": "#000000",
    "success": "#000000",
    "warning": "#000000",
    "error": "#000000",
        },
      },
    ],
  },
};
