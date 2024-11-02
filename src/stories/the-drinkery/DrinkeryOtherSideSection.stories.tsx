import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
import TheDrinkeryOtherSideSection from "../../components/templates/the-drinkery/TheDrinkeryOtherSideSection";
import drinkeryTheOtherSideSectionData from "../data/DrinkeryTheOtherSideSectionData";

const meta: Meta<typeof TheDrinkeryOtherSideSection> = {
    title: "The Drinkery/The Other Side Section",
    component: TheDrinkeryOtherSideSection,
};

export default meta;
type Story = StoryObj<typeof TheDrinkeryOtherSideSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const DrinkeryTheOtherSideSectionComplete: Story = {
    args: {
        sectionData: drinkeryTheOtherSideSectionData,
    },
    render: ({sectionData}) =>
        <div style={{backgroundColor: "black"}}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <TheDrinkeryOtherSideSection sectionData={sectionData}/>
            </ThemeProvider>
        </div>
};