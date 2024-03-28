/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        pinkText: "#B809C3",
      },
      backgroundImage: {
        workBG: "url('./assets/site-bg.jpg')",
        exp: "url('./assets/t1.jpeg')",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideBounce: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "75%": { opacity: 0.7 },
          "100%": { opacity: 0.9 },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in-out forwards var(--delay, 0)",
        slideBounce: "slideBounce 4s ease-in-out forwards ",
      },
    },
  },
  plugins: [],
};
