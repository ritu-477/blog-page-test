import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },

      colors: {
        "light-green": "#71ced0",
        "light-black": "#0f0d10",
        "light-white": "#434143",
        "dark-black": "#232224",
        "custom-gray": "#4C4C4C",
        "custom-red": "#D01314",
        "custom-green": "#00C11F",
      },

      fontSize: {
        "custom-2xl": "64.09px",
      },

      lineHeight: {
        "custom-sm": "121%",
        "custom-md": "121.02%",
        "custom-lg": "121.19%",
        "custom-xl": "150%",
      },

      backgroundImage: {
        "footer-bg": "url('/public/assets/images/webp/footer-bg.webp')",
    },
  },
},
  plugins: [],
} satisfies Config;
