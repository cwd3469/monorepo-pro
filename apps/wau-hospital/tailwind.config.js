/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config');
module.exports = {
  ...sharedConfig,
  content: [
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentational/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
