import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../../queryClient";
import BartenderHeroSection from "../../components/templates/my-digital-resume/the-bartender/BartenderHeroSection";
import bartenderHeroSectionData from "../data/BartenderHeroSectionData";

const meta: Meta<typeof BartenderHeroSection> = {
    title: "Bartending/Hero Section",
    component: BartenderHeroSection,
};

export default meta;
type Story = StoryObj<typeof BartenderHeroSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const BartenderHeroSectionComplete: Story = {
    args: {
        sectionData: bartenderHeroSectionData,
    },
    render: ({sectionData}) =>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                theme={getThemeFromSanity(DigitalResumeThemeData)}>
                <BartenderHeroSection sectionData={sectionData}>
                </BartenderHeroSection>
            </ThemeProvider>
        </QueryClientProvider>
};
// export const DrinkCardSectionComplete: Story = {
//     args: {
//         sectionData: {...flashcardSectionData, isFlashCard: false},
//     },
//     render: ({sectionData, searchString, allCocktails}) =>
//         <QueryClientProvider client={queryClient}>
//             <ThemeProvider
//                 theme={getThemeFromSanity(DigitalResumeThemeData)}>
//                 <SanityProvider><FlashCardsContentSection searchString={searchString} sectionData={sectionData}
//                                           allCocktails={allCocktails}>
//                 </FlashCardsContentSection></SanityProvider>
//             </ThemeProvider>
//         </QueryClientProvider>
// };
