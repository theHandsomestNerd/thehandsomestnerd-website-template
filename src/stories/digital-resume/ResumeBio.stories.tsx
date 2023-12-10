import type {Meta, StoryObj} from '@storybook/react';
import ResumeBioSection from "../../components/templates/my-digital-resume/resume-bio-section/ResumeBioSection";
import homePageResumeData from "../data/HomePageData";
import ResumeBioSectionData from "../data/ResumeBioSectionData";
import {ThemeProvider} from "@mui/material/styles";
import WebDevThemeData from "../data/WebDevThemeData";
import CustomizedThemeProvider from "../../components/customized-theme-provider/CustomizedThemeProvider";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import calculatedHomePageResumeData from "../data/CalculatedHomePageData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";

const meta: Meta<typeof ResumeBioSection> = {
    title:"Resume/Section/Resume Bio Section",
    component: ResumeBioSection,
};

export default meta;
type Story = StoryObj<typeof ResumeBioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const ResumeBioSectionComplete: Story = {
    args :{
      sectionData: ResumeBioSectionData,
        homePage: homePageResumeData
    },
    render: ({sectionData, homePage}) =>
        <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <ResumeBioSection sectionData={sectionData} homePage={calculatedHomePageResumeData(WebDevThemeData)}></ResumeBioSection>
        </ThemeProvider> ,
};
