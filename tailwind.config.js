/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': "900px"
    },
    extend: {
      backgroundImage: {
        'main-aside': "url('./src/assets/bg-sidebar-desktop.svg')",
        'mobile-aside': "url(./src/assets/bg-sidebar-mobile.svg)"
      },
      colors: {
        "neutral-cool-gray": "#9699ab",
        "neutral-light-gray": "#d5d8e5",
        "neutral-mangolia": "#eff5ff",
        "neutral-alabaster": "#f9faff",
        "primary-marine-blue": "#012959",
        "primary-purplish-blue": "#463dff",
        "primary-pastel-blue": "#adbdfe",
        "primary-light-blue": "#bee2fd",
        "primary-straberry-red": "#ed3547"
      }
    },
  },
  plugins: [],
}

