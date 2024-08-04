// src/index.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './Redux/store';

test('renders the App component with routing and Redux store provider', () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByText('Navbar')).toBeInTheDocument();
  expect(screen.getByText('ThemeComponent')).toBeInTheDocument();
  expect(screen.getByText('AppRoutes')).toBeInTheDocument();
});
