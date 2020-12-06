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
          300: '#D5E5FF',
          700: '#0d48a5', //hsla(217, 85%, 35%, 1)
          800: '#0a3376', //hsla(217, 85%, 25%, 1)
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
