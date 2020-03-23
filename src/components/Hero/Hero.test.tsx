import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from './Hero';

describe('<Hero />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Hero />);
    const hero = getByTestId('Hero');

    expect(hero).toBeInTheDocument();
  });
});