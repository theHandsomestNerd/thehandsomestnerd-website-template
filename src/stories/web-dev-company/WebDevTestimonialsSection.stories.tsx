import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevThemeData from "../data/WebDevThemeData";
import WebDevTestimonialsSection from "../../components/templates/web-dev-site/WebDevTestimonialsSection";
import WebDevTestimonialsSectionData from "../data/WebDevTestimonialsSectionData";


const meta: Meta<typeof WebDevTestimonialsSection> = {
    title:"Web Development/Section/Web Dev Testimonials Section",
    component: WebDevTestimonialsSection,
};

export default meta;
type Story = StoryObj<typeof WebDevTestimonialsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: WebDevTestimonialsSectionData,
    },
    render: ({sectionData}) =>  <ThemeProvider theme={getThemeFromSanity(WebDevThemeData)}>
    <WebDevTestimonialsSection sectionData={sectionData}></WebDevTestimonialsSection>
    </ThemeProvider>,
};
