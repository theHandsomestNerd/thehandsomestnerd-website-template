/**
 * Testing our link component
 */

import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {screen} from '@testing-library/dom'
import {
  ClosedCategoryAllUI,
  ClosedCategoryNoVs,
  ClosedCategoryShowDescription,
  ClosedCategoryShowMenu
} from '../../../../../stories/Elements/ClosedCategory'

describe('<ClosedCategory />', () => {
  it('should render all parts of UI', () => {
    render(<ClosedCategoryAllUI {...ClosedCategoryAllUI.args} />);
    expect(screen.getByText('FQ')).toBeInTheDocument();
    expect(screen.getByText('versus')).toBeInTheDocument();
    expect(screen.getByText('BQ')).toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Face')).toBeInTheDocument();
    expect(screen.getByText('Prize: Monetary')).toBeInTheDocument();
    expect(screen.getByText('$ 2000')).toBeInTheDocument();
    expect(screen.getByTestId('category-1-description')).toBeInTheDocument();
    expect(screen.getByTestId('category-1-menu')).toBeInTheDocument();
  });

  it('show description', () => {
    render(
      <ClosedCategoryShowDescription {...ClosedCategoryShowDescription.args} />,
    );
    expect(screen.getByText('FQ')).toBeInTheDocument();
    expect(screen.getByText('versus')).toBeInTheDocument();
    expect(screen.getByText('BQ')).toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Face')).toBeInTheDocument();
    expect(screen.getByText('Prize: Monetary')).toBeInTheDocument();
    expect(screen.getByText('$ 2000')).toBeInTheDocument();
    expect(screen.getByTestId('category-1-description')).toBeInTheDocument();
    expect(screen.queryByTestId('category-1-menu')).not.toBeInTheDocument();
  });

  it('show menu', () => {
    render(<ClosedCategoryShowMenu {...ClosedCategoryShowMenu.args} />);

    expect(screen.getByText('FQ')).toBeInTheDocument();
    expect(screen.getByText('versus')).toBeInTheDocument();
    expect(screen.getByText('BQ')).toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Face')).toBeInTheDocument();
    expect(screen.getByText('Prize: Monetary')).toBeInTheDocument();
    expect(screen.getByText('$ 2000')).toBeInTheDocument();
    expect(
      screen.queryByTestId('category-1-description'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('category-1-menu')).toBeInTheDocument();
  });

  it('show no VS', () => {
    render(<ClosedCategoryNoVs {...ClosedCategoryNoVs.args} />);
    expect(screen.getByText('FQ')).toBeInTheDocument();
    expect(screen.queryByText('versus')).not.toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Face')).toBeInTheDocument();
    expect(screen.getByText('Prize: Monetary')).toBeInTheDocument();
    expect(screen.getByText('$ 2000')).toBeInTheDocument();
    expect(screen.getByTestId('category-1-description')).toBeInTheDocument();
    expect(screen.queryByTestId('category-1-menu')).not.toBeInTheDocument();
  });
});
