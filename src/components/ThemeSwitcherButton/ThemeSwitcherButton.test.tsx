import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeSwitcherButton from './ThemeSwitcherButton';

describe('<ThemeSwitcherButton />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ThemeSwitcherButton />);
    const themeSwitcherButton = getByTestId('ThemeSwitcherButton');

    expect(themeSwitcherButton).toBeInTheDocument();
  });
});