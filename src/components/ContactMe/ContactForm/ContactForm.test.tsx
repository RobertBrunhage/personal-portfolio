import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';

describe('<ContactForm />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ContactForm />);
    const contactForm = getByTestId('ContactForm');

    expect(contactForm).toBeInTheDocument();
  });
});