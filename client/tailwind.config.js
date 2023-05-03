/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        lightred: 'hsl(var(--lightred) / <alpha-value>)',
        orangeyellow: 'hsl(var(--orangeyellow) / <alpha-value>)',
        greenteal: 'hsl(var(--greenteal) / <alpha-value>)',
        cobaltblue: 'hsl(var(--cobaltblue) / <alpha-value>)',
        slateblue: 'hsl(var(--slateblue) / <alpha-value>)',
        royalblue: 'hsl(var(--royalblue) / <alpha-value>)',
        violetblue: 'hsla(256, 72%, 46%, 1)',
        persianblue: 'hsla(241, 72%, 46%, 0)',
        paleblue: 'hsl(var(--paleblue) / <alpha-value>)',
        lightlavender: 'hsl(var(--lightlavender) / <alpha-value>)',
        darkgrayblue: 'hsl(var(--darkgrayblue) / <alpha-value>)',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'icon-memory': "url('./assets/icon-memory.svg')",
        'icon-reaction': "url('./assets/icon-reaction.svg')",
        'icon-verbal': "url('./assets/icon-verbal.svg')",
        'icon-visual': "url('./assets/icon-visual.svg')",
      },
    },
  },
}

