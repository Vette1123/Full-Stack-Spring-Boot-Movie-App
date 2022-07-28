import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Part of the home page', () => {
  render(<App />);
  const partOfHomePage = screen.getByText(/Popular/i);
  expect(partOfHomePage).toBeInTheDocument();
});
