import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NavigationButton from '.'

describe('<NavigationButton />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavigationButton />)

    expect(
      screen.getByRole('img', { name: 'open sign in' })
    ).toBeInTheDocument()
  })

  it('should handle the open/close modal', () => {
    renderWithTheme(<NavigationButton />)

    const fullElement = screen.getByRole('navigation', { hidden: true })

    expect(fullElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByTestId('openModal'))
    expect(fullElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByTestId('closeModal'))
    expect(fullElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullElement).toHaveStyle({ opacity: 0 })
  })
})
