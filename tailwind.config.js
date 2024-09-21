/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car': "url('/src/assests/261906-3840x2160-desktop-4k-formula-1-wallpaper-image.jpg')"
      }
    },
  },
  plugins: [],
}