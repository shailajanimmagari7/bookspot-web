import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RegisterPage on the root route', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Register/i })).toBeInTheDocument();
});

test('renders LoginPage on the /login route', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
});
