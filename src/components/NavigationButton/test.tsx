import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NavigationButton from '.'

describe('<NavigationButton />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavigationButton />)

    expect(
      screen.getByRole('img', { name: 'open sign in' })
    ).toBeInTheDocument()
  })
})
