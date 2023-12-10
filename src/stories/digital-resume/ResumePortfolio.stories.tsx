import type {Meta, StoryObj} from '@storybook/react';
import ResumePortfolioSectionData from "../data/ResumePortfolioSectionData";
import ResumePortfolioSection from '../../components/templates/my-digital-resume/resume-portfolio-section/ResumePortfolioSection';
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";

const meta: Meta<typeof ResumePortfolioSection> = {
    title:"Resume/Section/Resume Portfolio Section",
    component: ResumePortfolioSection,
};

export default meta;
type Story = StoryObj<typeof ResumePortfolioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumePortfolioSectionStory: Story = {
    args:{
        sectionData: ResumePortfolioSectionData
    },
    render: ({sectionData}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumePortfolioSection sectionData={sectionData}></ResumePortfolioSection></ThemeProvider>,
};
