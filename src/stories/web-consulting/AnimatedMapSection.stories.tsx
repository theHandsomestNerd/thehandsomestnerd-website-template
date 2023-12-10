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
import MapSection from "../../components/animated/MapSection";
import MapSectionData from "../data/MapSectionData";

const meta: Meta<typeof MapSection> = {
    title: "Web Consulting/Map Section",
    component: MapSection,
};

export default meta;
type Story = StoryObj<typeof MapSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const MapSectionComplete: Story = {
    args: {
        sectionData: MapSectionData,
    },
    render: ({sectionData,}) =>
        <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>
            <MapSection sectionData={sectionData}></MapSection>
        </ThemeProvider>,
};
