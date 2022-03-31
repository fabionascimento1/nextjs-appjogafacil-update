import React from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({
  children,
  background = 'gradient',
  fullWidth,
  size = 'medium',
  textColor = 'black',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    textColor={textColor}
    size={size}
    fullWidth={fullWidth}
    background={background}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Button
