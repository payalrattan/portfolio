// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        // Core Colors
        darkGrey: '#343333',
        olive: '#8C8860',
        lightOlive: '#C3C186',
        beige: '#DED0C3',
        
        // Tints - Light Olive
        'lightOlive-80': 'rgba(195, 193, 134, 0.8)',
        'lightOlive-50': 'rgba(195, 193, 134, 0.5)',
        'lightOlive-30': 'rgba(195, 193, 134, 0.3)',
        'lightOlive-10': 'rgba(195, 193, 134, 0.1)',
        
        // Tints - Beige
        'beige-80': 'rgba(222, 208, 195, 0.8)',
        'beige-50': 'rgba(222, 208, 195, 0.5)',
        'beige-30': 'rgba(222, 208, 195, 0.3)',
        'beige-10': 'rgba(222, 208, 195, 0.1)',
        
        // Tints - Olive
        'olive-80': 'rgba(140, 136, 96, 0.8)',
        'olive-50': 'rgba(140, 136, 96, 0.5)',
        'olive-30': 'rgba(140, 136, 96, 0.3)',
        'olive-10': 'rgba(140, 136, 96, 0.1)',
      },
      
      // Font Families
      fontFamily: {
        manrope: ['Manrope', 'ui-sans-serif', 'system-ui'],
        ibm: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
        sans: ['ui-sans-serif', 'system-ui'],
      },
      
      // Custom Max Widths
      maxWidth: {
        xxs: '18rem',
      },
      
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(195, 193, 134, 0.15) 0%, rgba(195, 193, 134, 0) 50%), linear-gradient(141.27deg, rgba(140, 136, 96, 0) 50%, rgba(140, 136, 96, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
