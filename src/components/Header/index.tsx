import { Container } from 'components/Container'
import Logo from 'components/Logo'
import NavigationButton from 'components/NavigationButton'
import React from 'react'
import * as S from './styles'

const Header = () => (
  <Container>
    <S.Wrapper>
      <Logo />
      <NavigationButton />
    </S.Wrapper>
  </Container>
)

export default Header
