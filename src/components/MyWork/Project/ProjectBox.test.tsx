import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectBox from './ProjectBox';

describe('<Project />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ProjectBox title={""} image={""} onClick={() => { }} />);
    const project = getByTestId('Project');

    expect(project).toBeInTheDocument();
  });
});