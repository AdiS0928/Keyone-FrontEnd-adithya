import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#ff0000",
          200: "#ffd0cc",
          300: "#99becd",
        },
        secondary: {
          100: "#F1F1F1",
          200: "#181610",
          300: "#323232",
        }
      },
      screens: {
        'custom-lg': '1230px',
        'custom-lg2': '1073px',
        'custom-lg3': '1080px',
        'custom-lg4': '767px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
