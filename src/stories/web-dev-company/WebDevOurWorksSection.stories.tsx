import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevAboutUsSection from "../../components/templates/web-dev-site/WebDevAboutUsSection";
import WebDevAboutUsSectionData from "../data/WebDevAboutUsSectionData";
import WebDevTestimonialsSection from "../../components/templates/web-dev-site/WebDevTestimonialsSection";
import WebDevTestimonialsSectionData from "../data/WebDevTestimonialsSectionData";
import WebDevPortfolioSection from "../../components/templates/web-dev-site/WebDevPortfolioSection";
import WebDevPortfolioSectionData from "../data/WebDevPortfolioSectionData";


const meta: Meta<typeof WebDevPortfolioSection> = {
    title:"Web Development/Section/Web Dev Portfolio Section",
    component: WebDevPortfolioSection,
};

export default meta;
type Story = StoryObj<typeof WebDevPortfolioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: WebDevPortfolioSectionData,
    },
    render: ({sectionData}) =>  <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
    <WebDevPortfolioSection sectionData={sectionData}></WebDevPortfolioSection>
    </ThemeProvider>,
};
