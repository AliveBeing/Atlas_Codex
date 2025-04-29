/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // your React components
    "./public/index.html"            // your HTML template
  ],
  theme: { extend: {} },
  plugins: [],
}


