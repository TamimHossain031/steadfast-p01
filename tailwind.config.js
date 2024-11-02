/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", 'sans-serif'],
        fraunces:["Fraunces", 'serif'],
        workSans:["Work Sans", 'sans-serif']
      },
      colors: {
        white:'#ffffff',
        dark:'#0a0a0a',
        primary: "#a3a3a3",
        accent1: "#d7aa38",
        green:'#22C55E',
        red: "#ef4444",
        blue: "#3b82f6",
        bgDark: "#1E1B18",
        bgDark2: "#292827",
        bgHero: "#262422",
        bgSideProduct:'#35241D',
        darkGray:'#525252',
        gray:'#D4D4D4',
        lightGray:'#d4d4d4',
        cardTitle:'#e5e5e5',
        bullet:'#7B5444',
        starColor:'#F5B303',
        customerDesg:'#DFC9C0',
        fBtnBorder:'#9D9D9D',
        fBtnBg:'#F8F8F8',
        

      },
    },
    
  },
  plugins: [],
};
