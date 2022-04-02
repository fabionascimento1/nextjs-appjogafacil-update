import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'
import { ModalProps } from './types'

const Modal = ({ children }: ModalProps) => {
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()
  const handle = () => {
    setFadeOut(true)
    setTimeout(() => {
      router.push('/')
    }, 200)
  }
  return (
    <S.Wrapper>
      <S.ContentFadeOut fadeOut={fadeOut}>
        <S.Content>
          <S.ButtonWrapper>
            <Image
              role="img"
              onClick={() => handle()}
              src="/img/closeModal.svg"
              title="close sign in"
              width={28}
              height={28}
              className="CloseModal"
              data-testid="closeModal"
            />
          </S.ButtonWrapper>
          {children}
        </S.Content>
      </S.ContentFadeOut>
    </S.Wrapper>
  )
}

export default Modal
