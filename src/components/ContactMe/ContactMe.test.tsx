import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactMe from './ContactMe';

describe('<ContactMe />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ContactMe />);
    const contactMe = getByTestId('ContactMe');

    expect(contactMe).toBeInTheDocument();
  });
});