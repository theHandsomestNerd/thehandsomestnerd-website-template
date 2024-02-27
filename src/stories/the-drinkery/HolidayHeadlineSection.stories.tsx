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
import HolidayHeadlineSection from "../../components/holiday-headline-section/HolidayHeadlineSection";
import HolidayHeadlineSectionData from "../data/HolidayHeadlineSectionData";

const meta: Meta<typeof HolidayHeadlineSection> = {
    title: "The Drinkery/Holiday Headline Section",
    component: HolidayHeadlineSection,
};

export default meta;
type Story = StoryObj<typeof HolidayHeadlineSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const DrinkeryHolidayHeadlineSectionComplete: Story = {
    args: {
        sectionData: HolidayHeadlineSectionData,
    },
    render: ({sectionData}) =>
        <div><QueryClientProvider client={queryClient}>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <HolidayHeadlineSection sectionData={sectionData}/>
            </ThemeProvider>
        </QueryClientProvider></div>
};