import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationBar from './NavigationBar';

describe('<NavigationBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<NavigationBar />);
    const navigationBar = getByTestId('NavigationBar');

    expect(navigationBar).toBeInTheDocument();
  });
});