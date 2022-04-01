import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })

  it('should render the heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      color: '#1AC79D',
      'font-size': '2.8rem',
      'border-left': '0.7rem solid #1AC79D'
    })
  })
})
