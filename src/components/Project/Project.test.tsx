import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from './Project';

describe('<Project />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Project />);
    const project = getByTestId('Project');

    expect(project).toBeInTheDocument();
  });
});