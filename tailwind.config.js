/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideBounce: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in-out forwards var(--delay, 0)",
        slideBounce: "slideBounce 1s ease-in-out forwards var(--delay, 0)",
      },
    },
  },
  plugins: [],
};
