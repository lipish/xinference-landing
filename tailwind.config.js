module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors from Xinference.svg
        'brand-orange': '#E9A85E',
        'brand-pink': '#F52B76', 
        'brand-purple': '#6A0CF5',
        'brand-light-purple': '#AB66F3',
        'brand-text-purple': '#781FF5',
        
        // Dark theme colors inspired by the reference image
        'dark-bg': '#0B0D17',
        'dark-surface': '#151829', 
        'dark-card': '#1A1D35',
        'dark-border': '#2A2F4A',
        'dark-text-primary': '#FFFFFF',
        'dark-text-secondary': '#94A3B8',
        'dark-text-muted': '#64748B',
        
        // Accent colors based on brand palette
        'accent-primary': '#6A0CF5',
        'accent-secondary': '#F52B76',
        'accent-tertiary': '#E9A85E',
        'accent-light': '#AB66F3',
        
        // Status colors
        'success': '#10B981',
        'warning': '#F59E0B', 
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(106, 12, 245, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(106, 12, 245, 0.6), 0 0 60px rgba(245, 43, 118, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/grid-pattern.svg')",
        'dot-pattern': 'radial-gradient(rgba(233, 168, 94, 0.15) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(233, 168, 94, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(233, 168, 94, 0.05) 1px, transparent 1px)',
        'xinference-gradient': 'linear-gradient(135deg, #E9A85E 0%, #F52B76 100%)',
        'xinference-purple-gradient': 'linear-gradient(135deg, #6A0CF5 0%, #AB66F3 100%)',
        'xinference-main-gradient': 'linear-gradient(135deg, #E9A85E 0%, #F52B76 50%, #6A0CF5 100%)',
        'orange-gradient': 'linear-gradient(to right, #E9A85E, #F52B76)',
        'purple-gradient': 'linear-gradient(to right, #6A0CF5, #AB66F3)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'feature': '0 8px 30px rgba(0, 120, 231, 0.12)',
      },
    },
  },
  plugins: [],
}
