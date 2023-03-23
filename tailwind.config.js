const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
        delicious: ["var(--delicious-handrawn)"],
        cantarell: ["var(--font-cantarell)"],
      },
      switch: {
        styles: {
          base: {
            root: {
              display: "inline-flex",
              alignItems: "items-center",
              justifyContent: "space-between",
            },
          },
        },
      },
    },
  },
  plugins: [],
});
