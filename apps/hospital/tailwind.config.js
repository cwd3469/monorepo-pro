/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config');
module.exports = {
  ...sharedConfig,
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
