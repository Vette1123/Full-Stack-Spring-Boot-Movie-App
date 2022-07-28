import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the word movie', () => {
  render(<Router><MovieDetails /></Router>);
  const movieDiv = screen.getByText(/Movie/i);
  expect(movieDiv).toBeInTheDocument();
});