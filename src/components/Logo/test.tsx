import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', { name: 'Logo App Joga Fácil' })
    ).toBeInTheDocument()
  })
})
