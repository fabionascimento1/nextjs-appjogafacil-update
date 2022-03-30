import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import Banner from '.'

const props = {
  title: 'Facilitar a locação de horários de quadras esportivas',
  description:
    'Mudou de cidade? Encontre polos esportivos, times e peladas perto de você e saia para o abraço.',
  image: '/img/player-1.svg'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', {
        name: 'Facilitar a locação de horários de quadras esportivas'
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: 'Facilitar a locação de horários de quadras esportivas'
      })
    ).toBeInTheDocument()

    expect(screen.getByTestId('content')).toHaveStyleRule(
      'flex-direction',
      'column',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
