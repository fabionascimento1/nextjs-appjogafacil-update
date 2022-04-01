import React from 'react'
import * as S from './styles'
import { HeadingProps } from './types'

const Heading = ({
  color = 'primary',
  children,
  size = 'large'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
