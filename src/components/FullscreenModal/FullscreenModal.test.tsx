import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullscreenModal from './FullscreenModal';


describe('<FullscreenModal />', () => {
  afterEach(cleanup);

  test('given isOpen when passed true then display modal', () => {
    const { getByTestId } = render(<FullscreenModal isOpen={true} setModalState={() => undefined} title={""} />);
    const fullscreenModal = getByTestId('FullscreenModal');

    expect(fullscreenModal).toBeInTheDocument();
  });

  test('given isOpen when passed false then modal is not displayed', () => {
    const { queryByTestId } = render(<FullscreenModal isOpen={false} setModalState={() => undefined} title={""} />);
    const fullscreenModal = queryByTestId('FullscreenModal');

    expect(fullscreenModal).toBeNull();
  });
});