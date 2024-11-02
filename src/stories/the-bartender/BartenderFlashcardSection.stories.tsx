import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import FlashCardsContentSection from "../../components/templates/cocktail-flash-cards/DrinkCardsContentSection";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import flashcardSectionData from "../data/FlashcardSectionData";
import SanityProvider from "../../common/sanityIo/sanity-context/SanityProvider";

const meta: Meta<typeof FlashCardsContentSection> = {
    title: "Bartending/Flashcards Section",
    component: FlashCardsContentSection,
};

export default meta;
type Story = StoryObj<typeof FlashCardsContentSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const FlashCardSectionComplete: Story = {
    args: {
        sectionData: flashcardSectionData,
    },
    render: ({sectionData, searchString, allCocktails}) =>
        <ThemeProvider
            theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <SanityProvider><FlashCardsContentSection searchString={searchString} sectionData={sectionData}
                                                      allCocktails={allCocktails}>
            </FlashCardsContentSection>
            </SanityProvider>
        </ThemeProvider>
};
export const DrinkCardSectionComplete: Story = {
    args: {
        sectionData: {...flashcardSectionData, isFlashCard: false},
    },
    render: ({sectionData, searchString, allCocktails}) =>
        <ThemeProvider
            theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <SanityProvider><FlashCardsContentSection searchString={searchString} sectionData={sectionData}
                                                      allCocktails={allCocktails}>
            </FlashCardsContentSection></SanityProvider>
        </ThemeProvider>
};
