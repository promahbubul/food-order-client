/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    lineHeight: {
      "heading-1": "68px",
      "heading-2": "56px",
      "heading-3": "48px",
      "heading-4": "40px",
      "heading-5": "32px",
      "heading-6": "28px",
      "lg": "28px",
      "md": "26px",
      "normal": "24px",
      "small": "22px",
    },
    fontSize: {
      "heading-1": "60px",
      "heading-2": "48px",
      "heading-3": "40px",
      "heading-4": "32px",
      "heading-5": "24px",
      "heading-6": "20px",
      "lg": "20px",
      "md": "18px",
      "normal": "16px",
      "small": "14px",
    },
    fontFamily: {
      'inter': ['Inter', "sans - serif"],
      'geologica': ['Geologica', "sans - serif"],
      'heading-1': ['Geologica', "sans - serif"],
      'heading-2': ['Geologica', "sans - serif"],
      'heading-3': ['Geologica', "sans - serif"],
      'heading-4': ['Geologica', "sans - serif"],
      'heading-5': ['Geologica', "sans - serif"],
      'heading-6': ['Geologica', "sans - serif"],
      'great-vibes': ['Great Vibes', "cursive"],
    },
    colors: {
      "gray-1": "#333333",
      "gray-2": "#4F4F4F",
      "gray-3": "#828282",
      "gray-4": "#BDBDBD",
      "gray-5": "#E0E0E0",
      "black-1": "#1E1E1E",
      "black-2": "#1D1D1D",
      "black-3": "#828282",
      "white": "#FFFFFF",
      "info": "#2F80ED",
      "success": "#219653",
      "warning": "#E2B93B",
      "error": "#EB5757",
      "primary": "#195A00",
      "secondary": "#AF872F",
      "primary-1": "#BC9A6C",
      "secondary-1": "#EDEAE3",
      "primary-2": "#FF9F0D",
      "secondary-1": "#999966"
    }
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],

}

