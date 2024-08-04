import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar, ThemeComponent, and AppRoutes', () => {
  render(<App />);
  expect(screen.getByText('Navbar')).toBeInTheDocument();
  expect(screen.getByText('ThemeComponent')).toBeInTheDocument();
  expect(screen.getByText('AppRoutes')).toBeInTheDocument();
});
