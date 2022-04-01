import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} auto;
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    border: 0;

    width: 18rem;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.small} * 1.3) auto ${theme.spacings.small};
    `}
  `}
`
