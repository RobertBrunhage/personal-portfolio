import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('given hero when page is loaded then hero is displayed', () => {
  // ARRANGE
  const { getByTestId } = render(<App />);
  const hero = getByTestId("Hero");

  // ACT
  //ASSERT
  expect(hero).toBeInTheDocument();
});

test('given navigationbar when page is loaded then navigationbar is displayed', () => {
  // ARRANGE
  const { getByTestId } = render(<App />);
  const navigationBar = getByTestId("NavigationBar");

  // ACT
  //ASSERT
  expect(navigationBar).toBeInTheDocument();
});

test('given contact me section when page is loaded then contact me section is displayed', () => {
  // ARRANGE
  const { getByTestId } = render(<App />);
  const contactMe = getByTestId("ContactMe");

  // ACT
  //ASSERT
  expect(contactMe).toBeInTheDocument();
});
