import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

const wrapperProps = {
  fullWith: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, fullWidth }) => css`
    border-radius: 2rem;
    background: linear-gradient(90deg, #52c1ff 11.43%, #51ffff 89.48%);
    padding: 1.3rem 4.9rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${!!fullWidth && wrapperProps.fullWith}
  `}
`
