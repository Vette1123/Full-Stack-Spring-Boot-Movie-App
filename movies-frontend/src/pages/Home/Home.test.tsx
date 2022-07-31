import { render, screen } from '@testing-library/react'
import Home from '.'

test('renders The word Popular', () => {
  render(<Home />)
  const titleOfCards = screen.getByText(/Popular/i)
  expect(titleOfCards).toBeInTheDocument()
})
