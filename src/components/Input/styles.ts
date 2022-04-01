import styled, { css } from 'styled-components'
import { InputProps } from './types'

type IconProps = Pick<InputProps, 'icon'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.boxBg};
    border: 2px solid #1ac79d;
    border-radius: 20px;
    padding-left: 1.2rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`

export const Eye = styled.div`
  margin-top: 5px;
  margin-right: 15px;
`

export const Error = styled.div``

export const Input = styled.input<IconProps>`
  ${({ theme }) => css`
    color: ${theme.colors.formLabel};
    font-size: 15px;
    line-height: 18px;
    width: 100%;
    height: 1.7rem;
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      color: ${theme.colors.formLabel};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
      &::first-line {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const Wrapper = styled.div``
