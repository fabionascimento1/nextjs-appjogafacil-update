import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render the Input', () => {
    renderWithTheme(
      <Input type="text" placeholder="Digite algo" title="Digite algo" />
    )

    expect(
      screen.getByRole('textbox', { name: 'Digite algo' })
    ).toBeInTheDocument()
  })

  it('Render Input with icon', () => {
    renderWithTheme(
      <Input
        type="password"
        icon="/img/icon.svg"
        placeholder="Digite algo"
        title="Digite algo"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Render icon Eye if type for equal password', () => {
    renderWithTheme(
      <Input type="password" placeholder="Digite algo" title="Digite algo" />
    )

    expect(
      screen.getByRole('img', { name: 'Mostrar senha' })
    ).toBeInTheDocument()
  })
})
