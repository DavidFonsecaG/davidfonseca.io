import type { Config } from "tailwindcss";

const config: Config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: false, 
    plugins: [],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        keyframes: {
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
          },
        },
        animation: {
          gradient: 'gradient 6s linear infinite',
        },
      },
    },
};
export default config;