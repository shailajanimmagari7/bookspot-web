import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders LoginPage component', () => {
  render(<App />);
  const loginPageHeading = screen.getByRole("heading", { name: /login/i }); 
  expect(loginPageHeading).toBeInTheDocument();
});
