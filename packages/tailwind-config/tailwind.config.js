/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
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
    extend: {
      gap: {
        15: '3.750em',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          700: 'hsl(var(--primary-))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      wMainColor: {
        50: '#f4fbfb',
        100: '#edfaf9',
        200: '#b5f0ee',
        300: '#10cfc9',
        700: '#0da6a1',
      },
      spacing: {
        15: '3.750em',
        128: '32rem',
        144: '36rem',
        300: '36.250em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
