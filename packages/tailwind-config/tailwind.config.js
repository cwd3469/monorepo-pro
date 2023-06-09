/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      blue: {
        50: '#e6f5fc',
        100: '#d9f0fa',
        300: '#3da1ff',
      },
      red: {
        50: '#fff3f4',
        300: '#fc5935',
        500: '#ed271e',
      },
      yellow: {
        50: '#fdf8e8',
        300: '#ffda56',
        500: '#edc63d',
      },
      gray: {
        50: '#f8f8f8',
        100: '#ebeced',
        200: '#d8d8d8',
        300: '#cccccc',
        400: '#999999',
        500: '#666666',
        700: '#565e65',
      },
      white: '#ffffff',
      black: {
        300: '#525362',
        400: '#3c3d47',
        500: '#333333',
        Default: '#000000',
      },
      teal: {
        50: '#f4fbfb',
        100: '#edfaf9',
        200: '#b5f0ee',
        300: '#10cfc9',
        700: '#0da6a1',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      wMainColor: {
        50: '#f4fbfb',
        100: '#edfaf9',
        200: '#b5f0ee',
        300: '#10cfc9',
        700: '#0da6a1',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
