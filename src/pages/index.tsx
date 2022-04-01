import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Home from 'templates/Home'

import Signin from 'pages/signin'
import Signup from 'pages/signup'

import Banner from 'components/Banner'
import Header from 'components/Header'
import Modal from 'components/Modal'

const props = {
  title: 'Facilitar a locação de horários de quadras esportivas',
  description:
    'Mudou de cidade? Encontre polos esportivos, times e peladas perto de você e <strong>saia para o abraço</strong>.',
  image: '/img/player-1.svg'
}

const Index: NextPage = () => {
  const router = useRouter()
  const { modal } = router.query

  return (
    <>
      {modal === 'signin' && (
        <Modal>
          <Signin />
        </Modal>
      )}

      {modal === 'signup' && (
        <Modal>
          <Signup />
        </Modal>
      )}

      <Home>
        <Header />
        <Banner {...props} />
      </Home>
    </>
  )
}

export default Index
