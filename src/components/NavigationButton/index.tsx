import Image from 'next/image'
import React, { useState } from 'react'
import * as S from './styles'
import SignIn from 'pages/signin'
const NavigationButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <Image
        role="img"
        onClick={() => setIsOpen(true)}
        src="/img/account.svg"
        title="open sign in"
        width={24}
        height={24}
        data-testid="openModal"
      />
      <S.Modal aria-hidden={isOpen} isOpen={isOpen} role="navigation">
        <S.Content>
          <S.ButtonWrapper>
            <Image
              role="img"
              onClick={() => setIsOpen(false)}
              src="/img/closeModal.svg"
              title="close sign in"
              width={28}
              height={28}
              className="CloseModal"
              data-testid="closeModal"
            />
          </S.ButtonWrapper>
          <S.NonOpacity>
            <SignIn />
          </S.NonOpacity>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default NavigationButton
