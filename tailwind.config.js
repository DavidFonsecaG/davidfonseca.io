/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    purge: [],
    darkMode: false, // or 'media' or 'class' 
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    variants: {},
    plugins: [],
}