import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//TODO Mock out the video calls

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId("mainApp");
  expect(element).not.toEqual(null);
});
