import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/templates/my-digital-resume/resume-skills-section/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeBioSectionData from "../data/ResumeBioSectionData";
import homePageResumeData from "../data/HomePageData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import { ThemeProvider } from '@mui/material/styles';

const meta: Meta<typeof ResumeSkillsSection> = {
    title:"Resume/Section/Resume Skills Section",
    component: ResumeSkillsSection,
};

export default meta;
type Story = StoryObj<typeof ResumeSkillsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeSkillsSectionCompleteStory: Story = {
    args :{
        sectionData: ResumeSkillSectionData,
    },
    render: ({sectionData}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumeSkillsSection sectionData={sectionData}></ResumeSkillsSection></ThemeProvider>,
};
