/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          // header
          borderDrop: '#d6d9df',
          borderBg: '#eff1f3',
          borderClr: '#e5e7eb',
          socials: '#f7f8f9',
          textGray: '#525a69',
          introBg: '#f2f2ed',
          dropdownSubhead: '#6f7787',
          // intro
          introTextColor: '#5d5f44',
          introTextBg: '#dcddd0',
          introTextBorder: '#c2c2ad',
          //features
          inactiveTabsBorder:'#e6e8ec',
          featureGrey: '#717989',
          listBg: '#fcfcfc',
          //footer
          imgGradient: '#0000003d',
          link:'#e7e8ec99'

        },
        fontSize: {
          small: ['11px', '11px'],
        },
        keyframes: {
          InAnimation: {
            '0%': { transform: 'translateY(-410px)' },
            '100%': { transform: 'translateY(0px)' },
          },
          OutAnimation: {
            '0%': { transform: 'translateY(0px)' },
            '100%': { transform: 'translateY(-410px)' },
          },
          FadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '100%' },
          },
          FadeOut: {
            '0%': { opacity: '100%' },
            '100%': { opacity: '0' },
          }
        },
        animation: {
          InAnimation: 'InAnimation 200ms ease-out forwards',
          OutAnimation: 'OutAnimation 200ms ease-in forwards',
          FadeIn: 'FadeIn 500ms ease-in forwards',
          FadeOut: 'FadeOut 500ms ease-out forwards',
        },
    },
  },
  plugins: [],
};

