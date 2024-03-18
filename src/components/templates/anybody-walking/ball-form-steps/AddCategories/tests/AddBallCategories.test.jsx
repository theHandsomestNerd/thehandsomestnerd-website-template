/**
 * Testing our link component
 */

import React from 'react'
import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {
  CategoriesNoMonetaryValue,
  CategoriesStepEmpty,
  CategoriesStepFull,
  CategoriesVsNotChecked
} from '../../../../../stories/AddBallCategories'

jest.mock('firebase/app', () => {
  const app = {
    auth: {
      FacebookAuthProvider: jest.fn(() => ({
        PROVIDER_ID: 'providerID',
        FACEBOOK_SIGN_IN_METHOD: 'sign-in-method,',
      })),
    },
    initializeApp: () => Promise.resolve(),
    database: () => Promise.resolve(),
    storage: () => Promise.resolve(),
    provider: () => Promise.resolve(),
    analytics: jest.fn().mockImplementation(() => ({
      logEvent: () => Promise.resolve(),
    })),
  };

  return app;
});

jest.mock('Firebase/firebase', () => {
  const Firebase = {
    auth: jest.fn(() => ({
      FacebookAuthProvider: () => ({
        PROVIDER_ID: 'providerID',
        FACEBOOK_SIGN_IN_METHOD: 'sign-in-method,',
      }),
    })),
  };

  return Firebase;
});

const renderComponent = () => ({
  addCategoryButton: {
    get button() {
      return screen.queryByTestId('add-category-button');
    },
  },
  closedCategories: {
    get container() {
      return screen.queryByTestId('category-0-closed-container');
    },
    get categoryGender() {
      return {
        get text() {
          return screen.getByTestId('category-0-closed-catGender');
        },
      };
    },
    get categoryVsGender() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-catVsGender');
        },
      };
    },
    get versus() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-versus');
        },
      };
    },
    get catType() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-catType');
        },
      };
    },
    get catName() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-catName');
        },
      };
    },
    get catPrize() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-catPrize');
        },
      };
    },
    get monetaryPrize() {
      return {
        get text() {
          return screen.queryByTestId('category-0-closed-monetaryPrize');
        },
      };
    },
    get editButton() {
      return {
        get button() {
          return screen.queryByTestId('category-0-closed-editButton');
        },
      };
    },
    get deleteButton() {
      return {
        get button() {
          return screen.queryByTestId('category-0-closed-deleteButton');
        },
      };
    },
    get saveButton() {
      return {
        get button() {
          return screen.queryByTestId('close-category-button');
        },
      };
    },
  },
});

describe('<CategoryStepComponent />', () => {
  it('if no categories dont display category closed container', () => {
    const { addCategoryButton, closedCategories } = renderComponent();
    render(<CategoriesStepEmpty {...CategoriesStepEmpty} />);

    expect(closedCategories.container).not.toBeInTheDocument();
    expect(addCategoryButton.button).toBeInTheDocument();
  });

  it('component loads with categories', async () => {
    const { addCategoryButton, closedCategories } = renderComponent();
    render(<CategoriesStepFull {...CategoriesStepFull.args} />);
    expect(closedCategories.container).toBeInTheDocument();
    expect(addCategoryButton.button).toBeInTheDocument();
  });

  it('The closed categories display', async () => {
    const { addCategoryButton, closedCategories } = renderComponent();

    render(<CategoriesStepFull {...CategoriesStepFull.args} />);

    await waitFor(() => {
      expect(closedCategories.container).toBeInTheDocument();
    });

    expect(closedCategories.categoryGender.text).toHaveTextContent('FQ');
    expect(closedCategories.versus.text).toHaveTextContent('versus');
    expect(closedCategories.categoryVsGender.text).toHaveTextContent('BQ');
    expect(closedCategories.catName.text).toHaveTextContent('Realness');
    expect(closedCategories.catType.text).toHaveTextContent('GrandPrize');
    expect(closedCategories.catPrize.text).toHaveTextContent('Monetary');
    expect(closedCategories.monetaryPrize.text).toHaveTextContent('200');

    expect(addCategoryButton.button).toBeInTheDocument();
  });

  it('The closed categories display when vs not checked', async () => {
    const { addCategoryButton, closedCategories } = renderComponent();
    render(<CategoriesVsNotChecked {...CategoriesVsNotChecked.args} />);

    await waitFor(() => {
      expect(closedCategories.container).toBeInTheDocument();
    });

    expect(closedCategories.versus.text).not.toBeInTheDocument();

    expect(addCategoryButton.button).toBeInTheDocument();
  });

  it('The closed categories does not display monetary value if not type of category', async () => {
    const { addCategoryButton, closedCategories } = renderComponent();

    render(<CategoriesNoMonetaryValue {...CategoriesNoMonetaryValue.args} />);

    expect(closedCategories.container).toBeInTheDocument();

    expect(closedCategories.monetaryPrize.text).not.toBeInTheDocument();

    expect(addCategoryButton.button).toBeInTheDocument();
  });

  it('A category can be edited', async () => {
    const { closedCategories } = renderComponent();
    render(<CategoriesStepFull {...CategoriesStepFull.args} />);

    expect(closedCategories.container).toBeInTheDocument();
    expect(closedCategories.editButton.button).toBeInTheDocument();

    // TODO: add tests for checking the orginal value and then make a change and check result
    userEvent.click(closedCategories.editButton.button);

    await waitFor(() => {
      expect(screen.getByText('The Category is...')).toBeInTheDocument();
    });

    expect(closedCategories.saveButton.button).toHaveTextContent('Save');
  });

  it('A category can be deleted', async () => {
    const { closedCategories } = renderComponent();
    render(<CategoriesVsNotChecked {...CategoriesVsNotChecked.args} />);

    expect(closedCategories.container).toBeInTheDocument();
    expect(closedCategories.deleteButton.button).toBeInTheDocument();

    userEvent.click(closedCategories.deleteButton.button);
    await waitFor(() => {
      expect(closedCategories.container).not.toBeInTheDocument();
    });
  });
});
