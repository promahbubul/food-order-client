/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  plugins: [require("daisyui")],
}

