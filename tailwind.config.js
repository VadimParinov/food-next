/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '10px',
      center: true,
    },
    screens: {
      desktop: '768px',
      main: '1440px',
    },
    colors: {
      transparent: 'transparent',
      primary: 'rgb(var(--primary) / <alpha-value>)',
      secondary: 'rgb(var(--secondary) / <alpha-value>)',
      surface: 'rgb(var(--surface) / <alpha-value>)',
      'background-text': 'rgb(var(--background-text) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
      'surface-text': 'rgb(var(--surface-text) / <alpha-value>)',
      'primary-text': 'rgb(var(--primary-text) / <alpha-value>)',
      'secondary-text': 'rgb(var(--secondary-text) / <alpha-value>)',
      ligtest: 'rgb(var(--ligtest) / <alpha-value>)',
      light: 'rgb(var(--light) / <alpha-value>)',
      hard: 'rgb(var(--hard) / <alpha-value>)',
      hardest: 'rgb(var(--hardest) / <alpha-value>)',
      success: 'rgb(var(--success) / <alpha-value>)',
      info: 'rgb(var(--info) / <alpha-value>)',
      warning: 'rgb(var(--warning) / <alpha-value>)',
      error: 'rgb(var(--error) / <alpha-value>)',
      gray: 'rgb(var(--gray) / <alpha-value>)',
      lines: 'rgb(var(--lines) / <alpha-value>)',
      'background-primary': 'rgb(var(--background-primary) / <alpha-value>)',
      'background-secondary': 'rgb(var(--background-secondary) / <alpha-value>)',
      'background-hover': 'rgb(var(--background-hover) / <alpha-value>)',
      red: 'rgb(var(--red) / <alpha-value>)',
      white: 'rgb(var(--white) / <alpha-value>)',
      'button-press-primary': 'rgb(var(--button-press-primary) / <alpha-value>)',
      'button-press-secondary': 'rgb(var(--button-press-secondary) / <alpha-value>)',
      orange: 'rgb(var(--orange) / <alpha-value>)',
      green: 'rgb(var(--green) / <alpha-value>)',
      skeleton: 'rgb(var(--skeleton) / <alpha-value>)',
      'skeleton-highlight': 'rgb(var(--skeleton-highlight) / <alpha-value>)',
    },
    extend: {
      height: {
        small: '10px',
      },
      width: {
        small: '10px',
      },
      margin: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      padding: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      gap: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      minWidth: {
        base: '1440px',
      },
      borderRadius: {
        base: '10px',
        large: '20px',
      },
      cursor: {
        inherit: 'inherit',
      },
      boxShadow: {
        button: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        base: ['0 4px 4px rgba(0, 0, 0, 0.15)', '0 0px 30px rgba(0, 0, 0, 0.11)'],
      },
      fontSize: {
        smalltext: ['.8125rem', '140%'],
        subtext: ['.8125rem', '206%'],
        base: ['1rem', '158%'],
      },
    },
  },
}
