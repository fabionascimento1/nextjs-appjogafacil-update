export default {
  grid: {
    container: '130rem', // 1300px
    gutter: '3.2rem' // 32px
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    familySaira:
      "'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    familyPoppins:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bold: 800,
    semi: 600,
    normal: 400,
    light: 200,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
      xxlarge: '2.8rem',
      huge: '4.5rem'
    }
  },
  colors: {
    primary: '#1AC79D',
    secondary: '#2FB8FF',
    tertiary: '#51FFFF',
    mainBg: '#2F37F7',
    boxBg: '#C8E3FF',
    border: '#eee',
    formLabel: '#585858',
    white: '#EDEBF5',
    black: '#0A0D27',
    lightGray: '#CECECE',
    gray: '#B5B5B5',
    darkGray: '#767676',
    red: '#FF4F4F'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  breakpoints: {
    mobile: '400',
    phablet: '550',
    tablet: '750',
    desktop: '1000',
    hd: '1300'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
