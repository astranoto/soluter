/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/resources/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        "soluter-purple": {
          500: "#7B3483",
        },
        "soluter-blue": {
          500: "#1C5BA7",
        },
        "soluter-green": {
          500: "#41A46C",
        },
        "soluter-orange": {
          500: "#EE7838",
        },
        "soluter-red": {
          500: "#C22C3E",
        },
        "soluter-gray": {
          500: "#F5F5F5",
        },
      },
    },
  },
};
