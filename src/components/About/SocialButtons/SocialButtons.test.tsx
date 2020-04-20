import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialButtons from './SocialButtons';

describe('<SocialButtons />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SocialButtons />);
    const socialButtons = getByTestId('SocialButtons');

    expect(socialButtons).toBeInTheDocument();
  });
});