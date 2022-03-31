import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      padding: '1.3rem 4.9rem',
      'font-size': '1.8rem'
    })
  })

  it('should render fullWith', () => {
    renderWithTheme(<Button fullWidth>Comprar agora</Button>)
    expect(screen.getByRole('button', { name: /Comprar agora/i })).toHaveStyle({
      width: '100%'
    })
  })
})
