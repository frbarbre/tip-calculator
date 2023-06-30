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
        "tip-cyan": "hsl(172, 67%, 45%)",
        "tip-dark-cyan": "hsl(183, 100%, 15%)",
        "tip-dark-gray": "hsl(184, 14%, 56%)",
        "tip-medium-gray": "hsl(185, 41%, 84%)",
        "tip-light-gray": "hsl(189, 41%, 97%)",
      },
      width: {
        max: "max-content",
        screenCalc: "calc(100vw - 64px)",
      },
    },
    screens: {
      md: "800px",
    },
  },
  plugins: [],
};
