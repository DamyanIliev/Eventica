/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'evening':'#192231',
        'eventica-red' : '#610c27',
        'eventica-white' : '#efece9',
        'eventica-black' : '#050505',
        'eventica-yellow' : '#a67d44',
        'eventica-blue' : '#313CA0',
        'eventica-pine' : '#34675c',
      },
    },
  },
  plugins: [],
};
