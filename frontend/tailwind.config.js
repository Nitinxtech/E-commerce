// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // custom blue
        secondary: "#F59E0B", // custom amber
        danger: "#DC2626", // custom red
        brand: {
          light: "#E0F2FE",
          DEFAULT: "#3B82F6",
          dark: "#1E3A8A"
        }
      }
    }
  },
  plugins: [],
}
