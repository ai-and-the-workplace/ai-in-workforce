/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        3.5: '14px',
        4.5: '18px',
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '30px'],
      lg: ['18px', '36px'],
      xl: ['20px', '40px'],
      '2xl': ['24px', '44px'],
      '3xl': ['28px', '44px'],
      '4xl': ['36px', '52px'],
      '5xl': ['40px', '56px'],
      '6xl': ['48px', '57px'],
      '7xl': ['56px', '66px'],
      '8xl': ['64px', '76px'],
    },
    fontFamily: {
      sans: ['Spline Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      darkBlue: '#001C3C',
      lightBlue: '#004BA0',
      white: '#EBEBEB',
      grey: '#DFDFDF',
      greyBlue: '#707E8D',
      green: '#5CBD52',
      red: '#ED6E6E',
    },
    screens: {
      '2xs': '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
