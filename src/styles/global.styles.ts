import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* mukta-mahee-regular - latin */
@font-face {
  font-family: 'Mukta Mahee';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Mukta Mahee Regular'), local('Mukta-Mahee-Regular'),
       url('../fonts/mukta-mahee-v13-latin-regular.woff2') format('woff2');
}
/* mukta-mahee-600 - latin */
@font-face {
  font-family: 'Mukta Mahee';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Mukta Mahee SemiBold'), local('Mukta-Mahee-SemiBold'),
       url('../fonts/mukta-mahee-v13-latin-600.woff2') format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
    list-style: none;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyle
