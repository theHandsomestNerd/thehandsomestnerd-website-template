import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../../queryClient";
import TheDrinkerySpecials from "../../components/templates/the-drinkery/TheDrinkerySpecials";
import drinkerySpecialsSectionData from "../data/DrinkerySpecialsSectionData";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
import AWSingleBallPageSection from "../../components/templates/anybody-walking/AWSingleBallPageSection";
import SanityProvider from "../../common/sanityIo/sanity-context/SanityProvider";
import awSingleBallData from "../data/AwSingleBallData";
import AWThemeData from "../data/AWThemeData";
import AWSingleBallPageData from "../data/AWSingleBallPageData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";

const meta: Meta<typeof AWSingleBallPageSection> = {
    title: "Anybody Walking/Single Ball Page Section",
    component: AWSingleBallPageSection,
};

export default meta;
type Story = StoryObj<typeof AWSingleBallPageSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWSingleBallPageSectionComplete: Story = {
    args: {
        sectionData: AWSingleBallPageData
    },
    render: ({sectionData}) =>
            <BallSearchProvider><ThemeProvider
                theme={getThemeFromSanity(AWThemeData)}>
                <AWSingleBallPageSection sectionData={sectionData} ball={awSingleBallData}/>
            </ThemeProvider></BallSearchProvider>
};