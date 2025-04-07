/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        public: ['Public Sans', 'sans-serif'],
        dm: ['DM Serif Serif', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
        'custom-yellow': '#EAD61C', // Add your custom color here
      },
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [],
};

export default config;