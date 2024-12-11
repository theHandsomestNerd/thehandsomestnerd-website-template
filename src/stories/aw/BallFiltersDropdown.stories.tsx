import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import FiltersMenu from "../../components/templates/cocktail-flash-cards/FiltersMenu";
import SearchFilterDropDown
    from "../../components/templates/anybody-walking/search-filter-dropdown/SearchFilterDropDown";
import {awSettings} from "../../utils/storybookUtils";

const meta: Meta<typeof FiltersMenu> = {
    title: "AW/Components/Ball Search Filters Dropdown",
    component: FiltersMenu,
};

export default meta;
type Story = StoryObj<typeof FiltersMenu>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWFiltersMenuComplete: Story = {
    args: {},
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings.ballStepsSetting
    },
    render: () =>
        <BallSearchProvider balls={AwBallsArrayData}>
            <SearchFilterDropDown/>
        </BallSearchProvider>
};