import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/templates/my-digital-resume/resume-skills-section/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeExperienceSection from "../../components/templates/my-digital-resume/resume-experience-section/ResumeExperienceSection";
import ResumeExperienceSectionData from "../data/ResumeExperienceSectionData";
import ResumeEducationSection from "../../components/templates/my-digital-resume/resume-education-section/ResumeEducationSection";
import ResumeEducationSectionData from "../data/ResumeEducationSectionData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";

const meta: Meta<typeof ResumeEducationSection> = {
    title:"Resume/Section/Resume Education Section",
    component: ResumeEducationSection,
};

export default meta;
type Story = StoryObj<typeof ResumeEducationSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeEducationSectionStory: Story = {
    args:{
        sectionData: ResumeEducationSectionData
    },
    render: ({sectionData}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumeEducationSection sectionData={sectionData}></ResumeEducationSection></ThemeProvider>,
};
