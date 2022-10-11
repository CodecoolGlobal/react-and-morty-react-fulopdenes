import React from 'react';
import { getByText, render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('loads page successfully', () => {
//   render(<App />);
//   const landingImage = screen.getAllByRole("img");
//    expect(landingImage).toHaveLength(1);
// });

// test('more character info shows up on click', () => {

// })
