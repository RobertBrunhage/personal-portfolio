import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationBar from './NavigationBar';

describe('<NavigationBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    // ARRANGE
    const { getByTestId } = render(<NavigationBar />);
    const navigationBar = getByTestId('NavigationBar');

    // ACT
    //ASSERT
    expect(navigationBar).toBeInTheDocument();
  });

  test('given burger menu when page renders then display burger menu', () => {
    // ARRANGE
    const { getByTestId } = render(<NavigationBar />);
    const burgerButton = getByTestId('BurgerButton');

    // ACT
    //ASSERT
    expect(burgerButton).toBeInTheDocument();
  });

  test('given menu choices when page renders then display menu choices', async () => {
    // ARRANGE
    const { findByText } = render(<NavigationBar />);
    const homeText = await waitForElement(() => findByText('home'.toUpperCase()));
    const aboutText = await waitForElement(() => findByText('about'.toUpperCase()));
    const myWorkText = await waitForElement(() => findByText('my work'.toUpperCase()));
    const contactText = await waitForElement(() => findByText('contact'.toUpperCase()));

    // ACT
    //ASSERT
    expect(homeText).toBeInTheDocument();
    expect(aboutText).toBeInTheDocument();
    expect(myWorkText).toBeInTheDocument();
    expect(contactText).toBeInTheDocument();
  });
});