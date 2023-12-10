import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";
import WebConsultingThemeData from "../data/WebConsultingThemeData";
import AnimatedHeroSectionData from "../data/AnimatedHeroSectionData";

const meta: Meta<typeof HeroAnimatedContentSection> = {
    title: "Web Consulting/Hero Content Section",
    component: HeroAnimatedContentSection,
};

export default meta;
type Story = StoryObj<typeof HeroAnimatedContentSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const ResumeBioSectionComplete: Story = {
    args: {
        sectionData: AnimatedHeroSectionData,
    },
    render: ({sectionData,}) =>
        <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>
            <HeroAnimatedContentSection sectionData={sectionData}></HeroAnimatedContentSection>
        </ThemeProvider>,
};
