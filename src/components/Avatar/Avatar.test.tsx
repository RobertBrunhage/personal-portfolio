import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Avatar background="" />);
    const avatar = getByTestId('Avatar');

    expect(avatar).toBeInTheDocument();
  });
});