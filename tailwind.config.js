module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.html',
      './src/**/*.md',
      './src/**/*.njk',
    ],
  },
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        brown: {
          50: '#FFFCFA',
          100: '#F9F4EF',
        },
        lightblue: {
          300: 'hsla(217, 100%, 92%, 1)', //#d5e5ff
          600: 'hsla(217, 65%, 50%, 1)', 
          700: 'hsla(217, 60%, 45%, 1)',
          800: 'hsla(217, 55%, 40%, 1)',
          900: 'hsla(217, 50%, 35%, 1)',
        }
      },
    },
    fontFamily: {
      'sans': ['Jost', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
      'serif': ['Sorts Mill Goudy','Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'display': ['Righteous', 'ET Book','Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
    },
  },
  variants: {},
  plugins: [],
}
