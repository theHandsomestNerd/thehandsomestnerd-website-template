import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevAboutUsSection from "../../components/templates/web-dev-site/WebDevAboutUsSection";
import WebDevAboutUsSectionData from "../data/WebDevAboutUsSectionData";
import WebDevStatsCounterSection from "../../components/templates/web-dev-site/WebDevStatsCounterSection";
import WebDevStatsSectionData from "../data/WebDevStatsSectionData";


const meta: Meta<typeof WebDevStatsCounterSection> = {
    title:"Web Development/Section/Web Dev Stats Section",
    component: WebDevStatsCounterSection,
};

export default meta;
type Story = StoryObj<typeof WebDevStatsCounterSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: WebDevStatsSectionData,
    },
    render: ({sectionData}) =>  <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
    <WebDevStatsCounterSection sectionData={sectionData}></WebDevStatsCounterSection>
    </ThemeProvider>,
};
