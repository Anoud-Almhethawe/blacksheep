import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          green: "#70C6B9",
          black: "#0F0F0F",
          white: "#fff",
          joinbg: "#AED8C7",
          gradient:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.59) 1.2%, rgba(0, 0, 0, 0.47) 12.37%, rgba(0, 0, 0, 0.00) 100%)",
        },
        dark: {},
        light: {},
      },
      fontFamily: {
        newsflashbb: ["var(--font-Newsflash_BB)"],
        roboto: ["var(--font-roboto)"],
        proximanova: ["var(--font-Proxima__Nova)"],
      },
      spacing: {
        s: "16.64rem",
      },
    },
  },

  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
