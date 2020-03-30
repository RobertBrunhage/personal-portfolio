import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullscreenModal from './FullscreenModal';
import { initialProjectState } from '../Project/Project';


describe('<FullscreenModal />', () => {
  afterEach(cleanup);

  test('given isOpen when passed true then display modal', () => {
    const { getByTestId } = render(<FullscreenModal isOpen={true} project={initialProjectState} setModalState={() => undefined} />);
    const fullscreenModal = getByTestId('FullscreenModal');

    expect(fullscreenModal).toBeInTheDocument();
  });

  test('given isOpen when passed false then modal is not displayed', () => {
    const { queryByTestId } = render(<FullscreenModal isOpen={false} project={initialProjectState} setModalState={() => undefined} />);
    const fullscreenModal = queryByTestId('FullscreenModal');

    expect(fullscreenModal).toBeNull();
  });
});