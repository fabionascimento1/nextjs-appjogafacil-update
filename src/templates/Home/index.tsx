import React from 'react'

import * as S from './styles'

export type AuthProps = {
  children: React.ReactNode
}

export default function Home({ children }: AuthProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
