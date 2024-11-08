import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from '../../components/templates/my-digital-resume/resume-skills-section/ResumeSkillsSection';
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";

const meta: Meta<typeof ResumeSkillsSection> = {
    title: "Resume/Section/Resume Skills Section",
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
    args: {
        sectionData: ResumeSkillSectionData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData}) =>
        <ResumeSkillsSection sectionData={sectionData}></ResumeSkillsSection>,
};
