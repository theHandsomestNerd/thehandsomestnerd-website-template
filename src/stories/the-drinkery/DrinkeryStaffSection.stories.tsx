import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../../queryClient";
import TheDrinkerySpecials from "../../components/templates/the-drinkery/TheDrinkerySpecials";
import drinkerySpecialsSectionData from "../data/DrinkerySpecialsSectionData";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
import TheDrinkeryAlbumSection from "../../components/templates/the-drinkery/TheDrinkeryAlbumSection";
import drinkeryAlbumData from "../data/DrinkeryAlbumSectionData";
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
        <div style={{backgroundColor:"black"}}><QueryClientProvider client={queryClient}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <TheDrinkeryStaffSection sectionData={sectionData}/>
            </ThemeProvider>
        </QueryClientProvider></div>
};