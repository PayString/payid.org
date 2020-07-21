/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindGradients = require('tailwindcss-gradients')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      orange: {
        50: '#FFF2E5',
        100: '#FFDFCC',
        200: '#FFBE99',
        300: '#FF9E66',
        400: '#FF7D33',
        500: '#FF5D00',
        600: '#CC4A00',
        700: '#993800',
        800: '#662500',
        900: '#331300',
      },
      'orange-dark': {
        50: '#FFEBE5',
        100: '#FFD7CC',
        200: '#FFAE99',
        300: '#FF8666',
        400: '#FF5E33',
        500: '#FF3600',
        600: '#CC2B00',
        700: '#992000',
        800: '#661500',
        900: '#330B00',
      },
      'orange-light': {
        50: '#FFF2E5',
        100: '#FFE6CC',
        200: '#FFCD99',
        300: '#FFB366',
        400: '#FF9A33',
        500: '#FF8100',
        600: '#CC6700',
        700: '#994E00',
        800: '#663400',
        900: '#331A00',
      },
      blue: {
        50: '#E5F3FF',
        100: '#CCE7FF',
        200: '#99CFFF',
        300: '#66B7FF',
        400: '#339FFF',
        500: '#0087FF',
        600: '#006CCC',
        700: '#005199',
        800: '#003666',
        900: '#001B33',
      },
      'blue-dark': {
        50: '#E5ECFF',
        100: '#CCDAFF',
        200: '#99B4FF',
        300: '#668FFF',
        400: '#3369FF',
        500: '#0044FF',
        600: '#0036CC',
        700: '#002999',
        800: '#001B66',
        900: '#000E33',
      },
      'blue-light': {
        50: '#E5FAFF',
        100: '#CCF4FF',
        200: '#99EAFF',
        300: '#66DFFF',
        400: '#33D5FF',
        500: '#00CAFF',
        600: '#00A2CC',
        700: '#007999',
        800: '#005166',
        900: '#002833',
      },
      green: {
        50: '#EEFCE9',
        100: '#DDF9D2',
        200: '#BBF2A6',
        300: '#99EC79',
        400: '#77E54D',
        500: '#55DF20',
        600: '#44B21A',
        700: '#338613',
        800: '#22590D',
        900: '#112D06',
      },
      'green-dark': {
        50: '#E7FEEA',
        100: '#CFFCD4',
        200: '#9EFAAA',
        300: '#6EF77F',
        400: '#3DF555',
        500: '#0DF22A',
        600: '#0AC222',
        700: '#089119',
        800: '#056111',
        900: '#033008',
      },
      'green-light': {
        50: '#F5FFE6',
        100: '#EBFFCC',
        200: '#D8FF99',
        300: '#C4FF66',
        400: '#B0FF33',
        500: '#9DFF00',
        600: '#7DCC00',
        700: '#5E9900',
        800: '#3F6600',
        900: '#1F3300',
      },
      purple: {
        50: '#F6E6FF',
        100: '#EECDFE',
        200: '#DC9AFE',
        300: '#CB68FD',
        400: '#B935FD',
        500: '#A803FC',
        600: '#8602CA',
        700: '#650297',
        800: '#430165',
        900: '#220132',
      },
      'purple-dark': {
        50: '#F3E6FF',
        100: '#E7CCFF',
        200: '#CF99FF',
        300: '#B766FF',
        400: '#9F33FF',
        500: '#8700FF',
        600: '#6C00CC',
        700: '#510099',
        800: '#360066',
        900: '#1B0033',
      },
      'purple-light': {
        50: '#FAE6FE',
        100: '#F4CDFE',
        200: '#E99BFD',
        300: '#DE69FC',
        400: '#D338FA',
        500: '#C906F9',
        600: '#A005C7',
        700: '#780396',
        800: '#500264',
        900: '#280132',
      },
      gray: {
        50: '#EFEFF2',
        100: '#E3E3E6',
        200: '#C9C9CC',
        300: '#B0B0B3',
        400: '#979799',
        500: '#7E7E80',
        600: '#656566',
        700: '#4C4C4D',
        800: '#323233',
        900: '#19191A',
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
    linearGradientColors: (theme) => {
      return {
        orange: [
          theme('colors.orange-dark.500'),
          theme('colors.orange-light.500'),
        ],
        'orange-dark': [
          theme('colors.orange-dark.600'),
          theme('colors.orange-light.600'),
        ],
        blue: [theme('colors.blue-dark.500'), theme('colors.blue-light.500')],
        'blue-dark': [
          theme('colors.blue-dark.600'),
          theme('colors.blue-light.600'),
        ],
        green: [
          theme('colors.green-dark.500'),
          theme('colors.green-light.500'),
        ],
        'green-dark': [
          theme('colors.green-dark.600'),
          theme('colors.green-light.600'),
        ],
        purple: [
          theme('colors.purple-dark.500'),
          theme('colors.purple-light.500'),
        ],
        'purple-dark': [
          theme('colors.purple-dark.600'),
          theme('colors.purple-light.600'),
        ],
      }
    },
    extend: {
      spacing: {
        '7': '1.75rem',
        '10-5': '2.625rem',
        '12-5': '3.125rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '36': '9rem',
        '45': '11.25rem',
        '52': '13rem',
        '70': '17.5rem',
        '74': '18.5rem',
      },
      boxShadow: {
        logo: '0px 24px 48px rgba(0, 0, 0, 0.08)',
      },
      lineHeight: {
        tightest: 1.15,
        tighter: 1.2,
      },
      fontSize: {
        h1: '4.5rem',
      },
      borderRadius: {
        xl: '0.75rem',
      },
      inset: {
        '-3': '-0.75rem',
        '4': '1rem',
        '20': '5rem',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last', 'first'],
    linearGradients: ['responsive', 'hover', 'focus'],
  },
  plugins: [tailwindGradients],
}
