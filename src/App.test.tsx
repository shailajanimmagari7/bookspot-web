import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login page and check the login button', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument(); 
});
