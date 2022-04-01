import React, { forwardRef } from 'react'
import * as S from './styles'
import { ButtonProps, WrapperButtonProps } from './types'

const Button: React.ForwardRefRenderFunction<
  WrapperButtonProps,
  ButtonProps
> = (
  {
    children,
    background = 'gradient',
    fullWidth,
    size = 'medium',
    textColor = 'black',
    disabled = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    textColor={textColor}
    size={size}
    fullWidth={fullWidth}
    background={background}
    disabled={disabled}
    ref={ref}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default forwardRef(Button)
