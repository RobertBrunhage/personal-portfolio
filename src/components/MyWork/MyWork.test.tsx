import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyWork from './MyWork';

describe('<MyWork />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MyWork />);
    const myWork = getByTestId('MyWork');

    expect(myWork).toBeInTheDocument();
  });
});