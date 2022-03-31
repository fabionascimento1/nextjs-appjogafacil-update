import Banner from 'components/Banner'
import Header from 'components/Header'
import type { NextPage } from 'next'

import Home from 'templates/Home'

const props = {
  title: 'Facilitar a locação de horários de quadras esportivas',
  description:
    'Mudou de cidade? Encontre polos esportivos, times e peladas perto de você e <strong>saia para o abraço</strong>.',
  image: '/img/player-1.svg'
}

const Index: NextPage = () => {
  return (
    <Home>
      <Header />
      <Banner {...props} />
    </Home>
  )
}

export default Index
