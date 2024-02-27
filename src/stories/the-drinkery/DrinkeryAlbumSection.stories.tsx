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

const meta: Meta<typeof TheDrinkeryAlbumSection> = {
    title: "The Drinkery/Album Section",
    component: TheDrinkeryAlbumSection,
};

export default meta;
type Story = StoryObj<typeof TheDrinkeryAlbumSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const DrinkeryAlbumSectionComplete: Story = {
    args: {
        sectionData: drinkeryAlbumData,
    },
    render: ({sectionData}) =>
        <div style={{backgroundColor:"black"}}><QueryClientProvider client={queryClient}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <TheDrinkeryAlbumSection sectionData={sectionData}/>
            </ThemeProvider>
        </QueryClientProvider></div>
};