import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* saira-extra-condensed-200 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-style: normal;
  font-weight: 200;
  src: local('Saira Extra Condensed Light'), local('Saira-Extra-Condensed-Light'),
       url('/fonts/saira-extra-condensed-v9-latin-200.woff2') format('woff2');
}
/* saira-extra-condensed-regular - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-style: normal;
  font-weight: 400;
   src: local('Saira Extra Condensed Regular'), local('Saira-Extra-Condensed-Regular'),
       url('../fonts/saira-extra-condensed-v9-latin-regular.woff2') format('woff2');
}
/* saira-extra-condensed-600 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-style: normal;
  font-weight: 600;
  src: local('Saira Extra Condensed SemiBold'), local('Saira-Extra-Condensed-SemiBold'),
       url('../fonts/saira-extra-condensed-v9-latin-600.woff2') format('woff2');
}
/* saira-extra-condensed-800 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-style: normal;
  font-weight: 800;
  src: local('Saira Extra Condensed Bold'), local('Saira-Extra-Condensed-Bold'),
       url('../fonts/saira-extra-condensed-v9-latin-800.woff2') format('woff2');
}

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v19-latin-300.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v9-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v19-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
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
      font-family: ${theme.font.familyPoppins};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyle
