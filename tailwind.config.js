// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b2b3b", // Khalifa Dark
        light: "#e4f4f4", // Khalifa Light
        primary: "#45f383", // 27,243,258 - Khalifa Green
        primaryDark: "#51ffe4", // 80,230,217 - Khalifa Turquoise
        yellow: "#FFE55E", // 255, 223, 56 - Khalifa Yellow
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }, backgroundImage:{
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#e4f4f4 5px,#e4f4f4 100px)",
        
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b2b3b 8px,#1b2b3b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#e4f4f4 5px,#e4f4f4 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b2b3b 8px,#1b2b3b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#e4f4f4 5px,#e4f4f4 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b2b3b 6px,#1b2b3b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#e4f4f4 5px,#e4f4f4 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b2b3b 4px,#1b2b3b 40px)",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}