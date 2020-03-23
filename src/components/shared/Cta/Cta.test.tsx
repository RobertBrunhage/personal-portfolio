import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cta from './Cta';

describe('<Cta />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Cta />);
    const cta = getByTestId('Cta');

    expect(cta).toBeInTheDocument();
  });
});