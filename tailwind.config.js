/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0b1b33',
          700: '#1c2f4a',
          800: '#12233f',
          900: '#081426',
        },
        accent: {
          DEFAULT: '#2563eb',
          600: '#1d4ed8',
          500: '#3b82f6',
          100: '#dbeafe',
          50: '#eff5ff',
        },
        ink: '#0b1b33',
        body: '#5a6b80',
        line: '#e6ebf3',
        page: '#f6f8fc',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,27,51,.04), 0 4px 14px rgba(11,27,51,.04)',
        'card-hover': '0 2px 6px rgba(11,27,51,.05), 0 18px 40px -12px rgba(11,27,51,.14)',
        btn: '0 6px 16px -6px rgba(37,99,235,.5)',
      },
      borderRadius: {
        card: '18px',
      },
      maxWidth: {
        page: '1140px',
      },
    },
  },
  plugins: [],
};
