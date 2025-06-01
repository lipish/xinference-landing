module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0078E7',
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0078E7',
          600: '#0060b9',
          700: '#00488b',
          800: '#00305c',
          900: '#00182e',
        },
        xinference: {
          blue: '#0078E7',
          darkblue: '#00488b',
          lightblue: '#99cfff',
          gradient: {
            start: '#0078E7',
            end: '#6d4aff',
          }
        },
        dark: '#111827',
        light: '#f9fafb',
        anythingllm: {
          primary: '#0078E7',
          secondary: '#6d4aff',
          accent: '#f3f4f6',
          dark: '#111827',
          light: '#f9fafb',
        },
      },
      animation: {
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        slideUp: "slideUp 1s ease-in-out forwards",
        slideRight: "slideRight 1s ease-in-out forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/grid-pattern.svg')",
        'dot-pattern': 'radial-gradient(rgba(156, 39, 176, 0.15) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(156, 39, 176, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 39, 176, 0.05) 1px, transparent 1px)',
        'purple-gradient': 'linear-gradient(to right, #9c27b0, #7c4dff)',
        'red-gradient': 'linear-gradient(to right, #f50057, #ff4081)',
        'orange-gradient': 'linear-gradient(to right, #ff9800, #ff5722)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'feature': '0 8px 30px rgba(0, 120, 231, 0.12)',
      },
    },
  },
  plugins: [],
}
