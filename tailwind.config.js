/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/src/assets/pursuit_headshot.png')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      }
    },
    colors: {
      dark: "#021d28",
      primary: "#1F7A8C",
      secondary: "#D1E3DD",
      blue: "#BFDBF7",
      gray: "#E1E5F2",
      white: "#FFFFFF",
      red: "#E73B3B",
      light: {
        background: "##D1E3DD",
        text: "#021d28",
        // Add more light mode colors
      },
      dark_mode: {
        background: "#021d28",
        text: "#BFDBF7",
        // Add more dark mode colors
      },
    },
  },
  plugins: [],
};
