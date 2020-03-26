import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkillBar from './SkillBar';

describe('<SkillBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SkillBar />);
    const skillBar = getByTestId('SkillBar');

    expect(skillBar).toBeInTheDocument();
  });
});