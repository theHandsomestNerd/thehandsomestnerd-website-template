import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevPricingSection from "../../components/templates/web-dev-site/WebDevPricingSection";
import WebDevPricingSectionData from "../data/WebDevPricingSectionData";


const meta: Meta<typeof WebDevPricingSection> = {
    title: "Web Development/Section/Web Dev Pricing Section",
    component: WebDevPricingSection,
};

export default meta;
type Story = StoryObj<typeof WebDevPricingSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        sectionData: WebDevPricingSectionData,
    },
    render: ({sectionData}) => <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
        <WebDevPricingSection sectionData={sectionData}></WebDevPricingSection>
    </ThemeProvider>,
};
