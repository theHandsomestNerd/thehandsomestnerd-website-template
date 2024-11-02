import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import TheDrinkerySpecials from "../../components/templates/the-drinkery/TheDrinkerySpecials";
import drinkerySpecialsSectionData from "../data/DrinkerySpecialsSectionData";
import DrinkeryThemeData from "../data/DrinkeryThemeData";

const meta: Meta<typeof TheDrinkerySpecials> = {
    title: "The Drinkery/Specials Section",
    component: TheDrinkerySpecials,
};

export default meta;
type Story = StoryObj<typeof TheDrinkerySpecials>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const DrinkerySpecialsSectionComplete: Story = {
    args: {
        sectionData: drinkerySpecialsSectionData,
    },
    render: ({sectionData, email}) =>
        <div style={{backgroundColor: "black"}}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <TheDrinkerySpecials sectionData={sectionData} email={email}/>
            </ThemeProvider>
        </div>
};