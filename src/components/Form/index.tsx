import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/Input/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: red;
    font-size: ${theme.font.sizes.small};

    svg {
      width: 1.6rem;
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.semi};
    text-align: center;
    margin-top: 2rem;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;

      color: ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`

export const FormSuccess = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    svg {
      color: ${theme.colors.secondary};
      width: 2.4rem;
    }
  `}
`
