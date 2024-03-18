import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebConsultingThemeData from "../data/WebConsultingThemeData";
import AnimatedAboutUsSection from "../../components/animated/AnimatedAboutUsSection";
import AnimatedAboutUsSectionData from "../data/AnimatedAboutUsSectionData";

const meta: Meta<typeof AnimatedAboutUsSection> = {
    title: "Web Consulting/About Us Section",
    component: AnimatedAboutUsSection,
};

export default meta;
type Story = StoryObj<typeof AnimatedAboutUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AnimatedAboutUsSectionComplete: Story = {
    args: {
        sectionData: AnimatedAboutUsSectionData,
    },
    render: ({sectionData,}) =>
        <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>
            <AnimatedAboutUsSection sectionData={sectionData}></AnimatedAboutUsSection>
        </ThemeProvider>,
};
