const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'sweep-up-in': 'cubic-bezier(0, 0, 0.1, 1)',
      },
      animation: {
        'sweepUp': 'sweepUp 1s',
        'chevronFadeDown':  'chevronFadeDown 2s infinite',
        'fadeInOrange': 'fadeInOrange 1s',
        'heroLogoFadeUp': 'heroLogoFadeUp 2s',
        'heroLogoSpin': 'heroLogoSpin 3s',
        'heroFirstNameFadeUp': 'heroFirstNameFadeUp 4s',
        'heroLastNameFadeUp': 'heroLastNameFadeUp 4s',
        'heroFrontEndFadeLeft': 'heroFrontEndFadeLeft 4s',
        'heroDeveloperFadeLeft': 'heroDeveloperFadeLeft 4s'
      },
      keyframes: {
        'sweepUp': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'chevronFadeDown': {
          '0%': { transform: 'translateY(0rem)', opacity: '0' },
          '50%': { transform: 'translateY(1rem)', opacity: '1' },
          '100%': { transform: 'translateY(2rem)', opacity: '0' },
        },
        'fadeInOrange': {
          '0%': { transform: 'translateY(0rem)', opacity: '0', color: 'white' },
          '100%': { transform: 'translateY(2rem)', opacity: '1', color: 'orange' },
        },
        'heroLogoFadeUp': {
          '0%': { transform: 'translateY(30rem)', opacity: '0' },
          '50%': { transform: 'translateY(0rem)', opacity: '1' },
          '100%': { transform: 'width: 100%' }
        },
        'heroLogoSpin': {
          '0%': { transform: 'rotate(0deg)', opacity: '0' },
          '50%': { transform: 'rotate(360deg)', opacity: '1' },
          '100%': { transform: 'rotate(360deg)', opacity: '0' },
        },
        'heroFirstNameFadeUp': {
          '0%': { transform: 'translateY(-2rem)', opacity: '0', color: 'white' },
          '33%': { transform: 'translateY(0rem)', opacity: '1', color: 'white' },
          '66%': { transform: 'translateY(0rem)', opacity: '1', color: 'white' },
          '100%': { transform: 'translateY(0rem)', opacity: '1', color: '#ed8936' }
        },
        'heroLastNameFadeUp': {
          '0%': { transform: 'translateY(2rem)', opacity: '0', color: 'white' },
          '33%': { transform: 'translateY(0rem)', opacity: '1', color: 'white' },
          '66%': { transform: 'translateY(0rem)', opacity: '1', color: 'white' },
          '100%': { transform: 'translateY(0rem)', opacity: '1', color: 'white' }
        },
        'heroFrontEndFadeLeft': {
          '0%': { transform: 'translateX(2rem)', opacity: '0', color: 'white' },
          '33%': { transform: 'translateX(2rem)', opacity: '0', color: 'white' },
          '66%': { transform: 'translateX(0rem)', opacity: '1', color: 'white' },
          '100%': { transform: 'translateX(0rem)', opacity: '1', color: '#ed8936' },
        },
        'heroDeveloperFadeLeft': {
          '0%': { transform: 'translateX(2rem)', opacity: '0', color: 'white' },
          '33%': { transform: 'translateX(2rem)', opacity: '0', color: 'white' },
          '66%': { transform: 'translateX(0rem)', opacity: '1', color: 'white' },
          '100%': { transform: 'translateX(0rem)', opacity: '1', color: 'white' },
        },
      },
      animationDelay: {
        1000: '1000ms',
        1500: '1500ms',
        1800: '1800ms',
        2000: '2000ms',
        3000: '3500ms',
        3150: '3700ms',
        3300: '3900ms',
        4500: '5000ms',

      },
      animationDuration: {
        1200: '1200ms',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"]
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}

