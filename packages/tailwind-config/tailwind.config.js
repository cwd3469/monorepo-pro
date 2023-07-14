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
        50: 'hsl(var(--blue-50))',
        100: 'hsl(var(--blue-100))',
        300: 'hsl(var(--blue-300))',
      },
      red: {
        50: 'hsl(var(--red-50))',
        300: 'hsl(var(--red-300))',
        500: 'hsl(var(--red-500))',
      },
      yellow: {
        50: 'hsl(var(--yellow-50))',
        300: 'hsl(var(--yellow-300))',
        500: 'hsl(var(--yellow-500))',
      },
      gray: {
        50: 'hsl(var(--gray-50))',
        100: 'hsl(var(--gray-100))',
        200: 'hsl(var(--gray-200))',
        300: 'hsl(var(--gray-300))',
        400: 'hsl(var(--gray-400))',
        500: 'hsl(var(--gray-500))',
        700: 'hsl(var(--gray-700))',
        Default: 'hsl(var(--gray))',
      },
      white: 'hsl(var(--white))',
      black: {
        300: 'hsl(var(--black-300))',
        400: 'hsl(var(--black-400))',
        500: 'hsl(var(--black-500))',
        Default: 'hsl(var(--black))',
      },
      teal: {
        Default: 'hsl(var(--teal-300))',
        50: 'hsl(var(--teal-50))',
        100: 'hsl(var(--teal-100))',
        200: 'hsl(var(--teal-200))',
        300: 'hsl(var(--teal-300))',
        700: 'hsl(var(--teal-700))',
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
