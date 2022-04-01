import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from './types'

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};

    border-left: 0.7rem solid ${theme.colors.primary};
    padding-left: 1rem;

    ${media.lessThan('medium')`{
      font-size: ${theme.font.sizes.large};
      border-left: 0.5rem solid ${theme.colors.primary};
      padding-left: 0.8rem;
    }`}
  `}
`
