import type {Meta, StoryObj} from '@storybook/react';
import ResumeContactUsSection from "../../components/templates/my-digital-resume/ResumeContactUsSection";
import ResumeContactSectionData from "../data/ResumeContactSectionData";
import {ResumeContactUsSectionType} from "../../components/BlockContentTypes";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import React from "react";
import {ThemeProvider} from "@mui/material/styles";

const meta: Meta<typeof ResumeContactUsSection> = {
    title:"Resume/Section/Resume Contact Us Section",
    component: ResumeContactUsSection,
};

export default meta;
type Story = StoryObj<typeof ResumeContactUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: ResumeContactSectionData
    },
    render: ({sectionData}:{sectionData: ResumeContactUsSectionType}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumeContactUsSection sectionData={sectionData}></ResumeContactUsSection></ThemeProvider>,
};
