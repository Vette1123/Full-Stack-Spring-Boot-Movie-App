import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders The word Popular', () => {
  render(<Home />);
  const titleOfCards = screen.getByText(/Popular/i);
  expect(titleOfCards).toBeInTheDocument();
});