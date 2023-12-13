import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevServicesSection from "../../components/templates/web-dev-site/WebDevServicesSection";
import WebDevServicesSectionData from "../data/WebDevServicesSectionData";


const meta: Meta<typeof WebDevServicesSection> = {
    title: "Web Development/Section/Web Dev Services Section",
    component: WebDevServicesSection,
};

export default meta;
type Story = StoryObj<typeof WebDevServicesSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        sectionData: WebDevServicesSectionData,
    },
    render: ({sectionData}) => <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
        <WebDevServicesSection sectionData={sectionData}></WebDevServicesSection>
    </ThemeProvider>,
};
