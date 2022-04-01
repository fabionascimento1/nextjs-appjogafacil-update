import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'

const NavigationButton = () => {
  const router = useRouter()

  const handle = () => {
    router.push('/?modal=signin')
  }
  return (
    <S.Wrapper>
      <Image
        role="img"
        onClick={() => handle()}
        src="/img/account.svg"
        title="open sign in"
        width={24}
        height={24}
        data-testid="openModal"
      />
    </S.Wrapper>
  )
}

export default NavigationButton
