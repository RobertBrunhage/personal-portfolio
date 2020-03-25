import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';

describe('<About />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<About />);
    const about = getByTestId('About');

    expect(about).toBeInTheDocument();
  });
});