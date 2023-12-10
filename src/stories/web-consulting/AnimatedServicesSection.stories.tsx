import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";
import WebConsultingThemeData from "../data/WebConsultingThemeData";
import AnimatedHeroSectionData from "../data/AnimatedHeroSectionData";
import AnimatedAboutUsSection from "../../components/animated/AnimatedAboutUsSection";
import AnimatedAboutUsSectionData from "../data/AnimatedAboutUsSectionData";
import AnimatedServicesSection from "../../components/animated/AnimatedServicesSection";
import AnimatedServicesSectionData from "../data/AnimatedServicesSectionData";

const meta: Meta<typeof AnimatedServicesSection> = {
    title: "Web Consulting/Services Section",
    component: AnimatedServicesSection,
};

export default meta;
type Story = StoryObj<typeof AnimatedServicesSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const AnimatedServicesSectionComplete: Story = {
    args: {
        sectionData: AnimatedServicesSectionData,
    },
    render: ({sectionData,}) =>
        <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>
            <AnimatedServicesSection sectionData={sectionData}></AnimatedServicesSection>
        </ThemeProvider>,
};
