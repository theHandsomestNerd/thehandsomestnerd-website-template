/**
 * Testing our link component
 */

import React from 'react'
import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {AddCategoryEmpty} from '../../../../../stories/CategoryStepModal'

const categoryChangeSpy = jest.fn();

const renderComponent = () => ({
  closeCategoryButton: {
    get button() {
      return screen.queryByTestId('close-category-button');
    },
  },
  form: {
    get categoryGender() {
      return {
        get inputGroup() {
          return screen.getAllByTestId('category-gender-select-input-group');
        },
        get input() {
          return screen.getByTestId('category-gender-select-input');
        },
        getOption(option) {
          return screen.getAllByTestId(`categoryGender-${option}`);
        },
      };
    },
    get categoryName() {
      return {
        get inputGroup() {
          return screen.getAllByTestId('category-name-select-input-group');
        },
        get input() {
          return screen.getAllByTestId('category-name-select-input');
        },
        getOption(option) {
          return screen.getAllByTestId(`categoryName-${option}`);
        },
      };
    },
    get versusSwitch() {
      return screen.getByRole('checkbox', { name: /categoryVs/i });
    },
    get categoryVsGender() {
      return {
        get inputGroup() {
          return screen.queryByTestId('category-vs-gender-select-input-group');
        },
        get input() {
          return screen.getAllByTestId('category-vs-gender-select-input');
        },
        getOption(option) {
          return screen.getAllByTestId(`categoryVsGender-${option}`);
        },
      };
    },
    get categoryType() {
      return {
        get inputGroup() {
          return screen.queryByTestId('category-type-select-input-group');
        },
        get input() {
          return screen.getAllByTestId('category-type-select-input');
        },
        getOption(option) {
          return screen.getAllByTestId(`categoryType-${option}`);
        },
      };
    },
    get catDescription() {
      return screen.getByTestId('category-description-input');
    },
    get catPrize() {
      return {
        get inputGroup() {
          return screen.getAllByTestId('category-prize-select-input-group');
        },
        get input() {
          return screen.getAllByTestId('category-prize-select-input');
        },
        getOption(option) {
          return screen.getAllByTestId(`categoryPrize-${option}`);
        },
      };
    },
    get monetaryPrize() {
      return screen.getAllByTestId('monetary-prize-input');
    },
    get title() {
      return screen.getByText('The Category is...');
    },
  },
});

jest.setTimeout(30000);

describe('<CategoryStepComponent />', () => {
  it('component loads', () => {
    const { form } = renderComponent();
    render(<AddCategoryEmpty {...AddCategoryEmpty.args} />);

    expect(form.title).toBeInTheDocument();
    expect(form.categoryGender.input).toBeInTheDocument();
    expect(form.versusSwitch).toBeInTheDocument();
  });

  it('Form adds fields in order', async () => {
    const { closeCategoryButton, form } = renderComponent();
    render(
      <AddCategoryEmpty
        onCategoryChange={categoryChangeSpy}
        {...AddCategoryEmpty.args}
      />,
    );

    userEvent.click(form.categoryGender.input);
    userEvent.selectOptions(form.categoryGender.input, [
      form.categoryGender.getOption('BQ')[0],
    ]);
    expect(form.categoryGender.input).toHaveValue('BQ');

    userEvent.click(form.versusSwitch);

    await waitFor(() => {
      expect(form.categoryVsGender.inputGroup).toBeInTheDocument();
    });

    userEvent.click(form.categoryVsGender.input[0]);
    userEvent.selectOptions(form.categoryVsGender.input[0], [
      form.categoryVsGender.getOption('FQ')[0],
    ]);

    expect(form.categoryVsGender.input[0]).toHaveValue('FQ');

    await waitFor(() => {
      expect(form.categoryType.input[0]).toBeInTheDocument();
    });

    userEvent.click(form.categoryType.input[0]);
    userEvent.selectOptions(form.categoryType.input[0], [
      form.categoryType.getOption('GRANDPRIZE')[0],
    ]);
    expect(form.categoryType.input[0]).toHaveValue('GRANDPRIZE');

    await waitFor(() => {
      expect(form.categoryName.input[0]).toBeInTheDocument();
    });

    userEvent.click(form.categoryName.input[0]);
    userEvent.selectOptions(form.categoryName.input[0], [
      form.categoryName.getOption('REALNESS')[0],
    ]);

    expect(form.categoryName.input[0]).toHaveValue('REALNESS');

    await waitFor(() => {
      expect(form.catDescription).toBeInTheDocument();
    });

    userEvent.type(form.catDescription, 'category-description');

    expect(form.catDescription).toHaveValue('category-description');

    await waitFor(() => {
      expect(form.catPrize.input[0]).toBeInTheDocument();
    });
    userEvent.click(form.catPrize.input[0]);
    userEvent.selectOptions(form.catPrize.input[0], [
      form.catPrize.getOption('MONETARY')[0],
    ]);
    expect(form.catPrize.input[0]).toHaveValue('MONETARY');
    await waitFor(() => {
      expect(form.monetaryPrize[0]).toBeInTheDocument();
    });
    userEvent.type(form.monetaryPrize[0], '200');
    expect(form.monetaryPrize[0]).toHaveValue(200);

    await waitFor(() => {
      expect(closeCategoryButton.button).toBeInTheDocument();
    });

    userEvent.click(closeCategoryButton.button);

    await waitFor(() => {
      expect(categoryChangeSpy).toHaveBeenCalledTimes(1);
    });

    expect(categoryChangeSpy).toHaveBeenCalledWith({
      catDescription: 'category-description',
      catGender: 'BQ',
      catName: 'REALNESS',
      catPrize: 'MONETARY',
      catType: 'GRANDPRIZE',
      catVsGender: 'FQ',
      monetaryPrize: '200',
      versus: true,
    });

    await waitFor(() => {
      expect(closeCategoryButton.button).not.toBeInTheDocument();
    });
  });
});
