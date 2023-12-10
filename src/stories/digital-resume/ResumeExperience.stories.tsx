import type {Meta, StoryObj} from '@storybook/react';
import ResumeExperienceSection
    from "../../components/templates/my-digital-resume/resume-experience-section/ResumeExperienceSection";
import ResumeExperienceSectionData from "../data/ResumeExperienceSectionData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import { ThemeProvider } from '@mui/material/styles';

const meta: Meta<typeof ResumeExperienceSection> = {
    title:"Resume/Section/Resume Experience Section",
    component: ResumeExperienceSection,
};

export default meta;
type Story = StoryObj<typeof ResumeExperienceSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeExperienceSectionComplete: Story = {
    args:{
        sectionData: ResumeExperienceSectionData
    },
    render: ({sectionData}) =>  <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumeExperienceSection sectionData={sectionData}></ResumeExperienceSection></ThemeProvider>,
};
