/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "none",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
        "50%": {
          transform: "translateY(25%)",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
