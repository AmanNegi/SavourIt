import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#ff785c",
        bgColor: "#f2eeeb"
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
      themes: [
      {
        mytheme: {
          accent: "#ff785c",
          primary: "#ff785c",
          secondary: "#f6d860",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
    // themes: ["light"],
  },
};
