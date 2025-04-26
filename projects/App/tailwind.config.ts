import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'turquoise-blue': {
          50: '#ebfffe',
          100: '#ceffff',
          200: '#a2fdff',
          300: '#63f9fd',
          400: '#1ceaf4',
          500: '#00dbe8', // primary
          600: '#03a4b7',
          700: '#0a8294',
          800: '#126878',
          900: '#145665',
          950: '#063a46',
        },

        java: {
          50: '#eefffd',
          100: '#c6fffc',
          200: '#8efffa',
          300: '#4dfbf8',
          400: '#19e6e8',
          500: '#00b9be', // primary
          600: '#009ca4',
          700: '#027b83',
          800: '#086067',
          900: '#0c5055',
          950: '#002e34',
        },

        shark: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d3dbe4',
          300: '#abbcce',
          400: '#7e98b2',
          500: '#5e7c99',
          600: '#4a637f',
          700: '#3d5067',
          800: '#354557',
          900: '#303b4a',
          950: '#1f2630', // primary
        },
      },
    },
  },
  plugins: [],
};
export default config;
