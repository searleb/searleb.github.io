/* eslint-disable global-require */
module.exports = {
  theme: {
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      },
      borderRadius: {
        xl: '1.5rem',
      },
      colors: {
        'dark-mode': '#151515',
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
};
