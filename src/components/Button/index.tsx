import React from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({
  children,
  background = 'gradient',
  fullWidth,
  size = 'medium',
  textColor = 'black',
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    textColor={textColor}
    size={size}
    fullWidth={fullWidth}
    background={background}
    disabled={disabled}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Button
