import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
import TheDrinkeryStaffSection from "../../components/templates/the-drinkery/TheDrinkeryStaffSection";
import drinkeryStaffSectionData from "../data/DrinkeryStaffSectionData";

const meta: Meta<typeof TheDrinkeryStaffSection> = {
    title: "The Drinkery/Staff Section",
    component: TheDrinkeryStaffSection,
};

export default meta;
type Story = StoryObj<typeof TheDrinkeryStaffSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const DrinkeryAlbumSectionComplete: Story = {
    args: {
        sectionData: drinkeryStaffSectionData,
    },
    render: ({sectionData}) =>
        <div style={{backgroundColor:"black"}}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <TheDrinkeryStaffSection sectionData={sectionData}/>
            </ThemeProvider>
        </div>
};