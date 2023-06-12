/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('tailwind-config/tailwind.config');

module.exports = {
  ...sharedConfig,
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
};
