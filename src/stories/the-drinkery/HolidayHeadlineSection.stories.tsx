import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
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
        <div>
            <ThemeProvider
                theme={getThemeFromSanity(DrinkeryThemeData)}>
                <HolidayHeadlineSection sectionData={sectionData}/>
            </ThemeProvider>
        </div>
};