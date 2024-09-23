/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebarBackground: 'var(--sidebar-background)',
        sidebarForeground: 'var(--sidebar-foreground)',
        mainBackground: 'var(--main-background)',
        mainForeground: 'var(--main-foreground)',
        divider: 'var(--divider)',
      },
    },
  },
  plugins: [],
}

