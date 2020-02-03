import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App function', () => {
  it('renders headline', () => {
      const {getByText} = render(<App />);
      expect(getByText(/MLB Data Page/i)).toBeInTheDocument();
  });
});

