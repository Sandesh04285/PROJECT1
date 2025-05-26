/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
      },
      backgroundColor: {
        'custom-dark': '#121212',
        'custom-darker': '#0a0a0a',
      },
      textColor: {
        'glow-white': '#ffffff',
      },
    },
  },
  plugins: [],
};