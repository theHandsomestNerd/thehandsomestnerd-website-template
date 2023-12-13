import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevAboutUsSection from "../../components/templates/web-dev-site/WebDevAboutUsSection";
import WebDevAboutUsSectionData from "../data/WebDevAboutUsSectionData";


const meta: Meta<typeof WebDevAboutUsSection> = {
    title:"Web Development/Section/Web Dev About Us Section",
    component: WebDevAboutUsSection,
};

export default meta;
type Story = StoryObj<typeof WebDevAboutUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: WebDevAboutUsSectionData,
    },
    render: ({sectionData}) =>  <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
    <WebDevAboutUsSection sectionData={sectionData}></WebDevAboutUsSection>
    </ThemeProvider>,
};
