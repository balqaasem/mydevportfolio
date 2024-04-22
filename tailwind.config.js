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
        primaryTurquoise: "#51ffe4", // 80,230,217 - Khalifa Turquoise
        primaryDark: "#843FC5", // Khalifa Purple
        yellow: "#FFE55E", // 255, 223, 56 - Khalifa Yellow
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }, backgroundImage:{
        radialShadeLight:
        "radial-gradient(circle, rgba(241,223,233,1) 0%, rgba(206,229,241,1) 25%, rgba(197,227,233,1) 50%, rgba(202,227,238,1) 75%, rgba(238,222,238,1) 100%)",
        radialMoonLight:
        "radial-gradient(circle, rgba(212,155,197,1) 0%, rgba(96,141,162,1) 25%, rgba(119,181,193,1) 50%, rgba(157,203,223,1) 75%, rgba(194,162,213,1) 100%)",
        radialMoonDark:
        "radial-gradient(circle, rgba(103,27,84,1) 0%, rgba(22,70,91,1) 25%, rgba(11,72,83,1) 50%, rgba(39,80,99,1) 75%, rgba(64,30,84,1) 100%)",
        radialSunLight:
        "radial-gradient(circle, rgba(246,191,231,1) 0%, rgba(206,229,241,1) 25%, rgba(197,227,233,1) 50%, rgba(202,227,238,1) 75%, rgba(226,193,246,1) 100%)",
        radialSunDark:
        "radial-gradient(circle, rgba(57,20,42,1) 0%, rgba(17,91,109,1) 50%, rgba(69,23,67,1) 100%)",
        radialAtmosphereLight:
          "radial-gradient(circle, rgba(232,191,197,1) 0%, rgba(218,206,242,1) 20%, rgba(229,195,226,1) 40%, rgba(232,177,255,1) 60%, rgba(216,218,255,1) 80%, rgba(228,224,255,1) 100%)",
        radialRingsDark:
        "radial-gradient(circle, rgba(43,40,44,1) 8%, rgba(43,40,44,1) 12%, rgba(44,40,44,1) 21%, rgba(43,40,44,1) 24%, rgba(41,35,42,1) 33%, rgba(19,18,22,1) 35%, rgba(70,58,73,1) 43%, rgba(74,58,84,1) 47%, rgba(66,52,75,1) 56%, rgba(57,53,59,1) 59%, rgba(91,79,95,1) 67%, rgba(84,49,98,1) 70%, rgba(58,45,75,1) 77%, rgba(76,64,80,1) 80%, rgba(79,46,104,1) 90%, rgba(78,60,90,1) 93%)",
        
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