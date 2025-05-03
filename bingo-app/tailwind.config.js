/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue': {
          DEFAULT: '#152789',
          50: '#091246',
        },
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}