import styled, { css } from 'styled-components'
import { InputProps } from './types'

type IconProps = Pick<InputProps, 'icon'>

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.gray};
    position: relative;
    left: 32px;
    z-index: ${theme.layers.modal};

    & > img {
      width: 2.2rem;
      height: 100%;
    }
  `}
`

export const Eye = styled.div`
  position: relative;
  right: 38px;
  top: 0.3rem;
`

export const Error = styled.div``

export const Input = styled.input<IconProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.boxBg};
    border: 2px solid #1ac79d;
    border-radius: 20px;
    padding 0.8rem 0 0.8rem 1.2rem;
    color: ${theme.colors.formLabel};
    font-size: 15px;
    line-height: 18px;
    position: relative;
    width: 100%;

    &::placeholder { 
      color: ${theme.colors.formLabel};
    }

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

const wrapperModifiers = {
  icon: () => css`
    ${Input} {
      padding-left: 3.5rem;
    }
  `
}

export const Wrapper = styled.div<IconProps>`
  ${({ icon }) => css`
    position: absolute;
    max-width: 30rem;
    width: 100%;
    ${!icon && wrapperModifiers.icon};
  `}
`
