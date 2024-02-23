/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['data-theme', '[data-mode="dark"]'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl':'1920px',
    },
    fontFamily:{
      base: ['Poppins']
    },  
    extend: {
      backgroundImage:{
        herox: `url('/src/assets/hero/bg_hero.svg'),url('/src/assets/hero/Asset2.svg'),url('/src/assets/hero/WAVE.svg')`,
        
      },
      backgroundPosition:{
        herox: " bottom, right top, left -20px bottom 30%",
      },
      backgroundSize:{
        herox:"100%, 25%, 30%",
      },
      colors:{
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      },

      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": "#3B5FDF",        
          "secondary": "#F99746",                 
          "accent": "#1FB2A5",                 
          "neutral": "#191D24",                  
          "base-100": "#FFFFFF",                  
          "info": "#3ABFF8",                  
          "success": "#36D399",                  
          "warning": "#FBBD23",                 
          "error": "#F87272",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
            "primary": "#3B5FDF",
            "secondary": "#F99746",
            "neutral": "#2A303C",
            "base-100": "#121212",
        },
      },
    ],
  },
}