/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        // Diambil langsung dari logo resmi PT Pelabuhan Ocean Persada
        navy: {
          50: '#F1F6FC',
          100: '#DCE8F7',
          200: '#B7CEEE',
          300: '#88ADDE',
          400: '#4E80C4',
          500: '#1F57A0',
          600: '#123E7C',
          700: '#0A2C60',
          800: '#001848', // warna inti brand
          900: '#001233',
          950: '#000A1F',
        },
        gold: {
          50: '#FDF9E9',
          100: '#FAEFC2',
          200: '#F2DC85',
          300: '#E8C64A',
          400: '#D8A818', // warna inti brand
          500: '#BC8D0F',
          600: '#946D0B',
          700: '#6E5008',
        },
        sea: {
          300: '#6FD3F0',
          400: '#38BCE4',
          500: '#18A8D8', // warna inti brand
          600: '#0B86B2',
          700: '#0A6A8D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['5.75rem', { lineHeight: '1.02' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,18,51,.05), 0 12px 32px -14px rgba(0,18,51,.20)',
        'card-lg': '0 2px 6px rgba(0,18,51,.06), 0 28px 56px -20px rgba(0,18,51,.32)',
        gold: '0 10px 30px -12px rgba(216,168,24,.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.08) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.16) translate3d(-1.5%,-1.5%,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.16,.84,.44,1) both',
        'fade-in': 'fade-in .9s ease both',
        'slow-pan': 'slow-pan 24s ease-in-out infinite alternate',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
