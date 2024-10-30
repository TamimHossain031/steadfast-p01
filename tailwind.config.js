/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white:'#ffffff',
        primary: "#a3a3a3",
        accent1: "#d7aa38",
        red: "#ef4444",
        blue: "#3b82f6",
        bgDark: "#1E1B18",
        bgDark2: "#292827",
        bgHero: "#262422",
        bgSideProduct:'#35241D',
        darkGray:'#525252',
        lightGray:'#d4d4d4'
      },
    },
    
  },
  plugins: [],
};
