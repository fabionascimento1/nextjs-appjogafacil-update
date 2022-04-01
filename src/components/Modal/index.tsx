import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './styles'
import { ModalProps } from './types'

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const handle = () => {
    router.push('/')
  }
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default Modal
