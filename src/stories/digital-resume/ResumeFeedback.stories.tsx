import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/my-digital-resume/resume-skills-section/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeExperienceSection from "../../components/my-digital-resume/resume-experience-section/ResumeExperienceSection";
import ResumeExperienceSectionData from "../data/ResumeExperienceSectionData";
import ResumeFeedbackSection from "../../components/my-digital-resume/ResumeFeedbackSection";
import ResumeFeedbackSectionData from "../data/ResumeFeedbackSectionData";

const meta: Meta<typeof ResumeFeedbackSection> = {
    title:"Resume/Section/Resume Feedback Section",
    component: ResumeFeedbackSection,
};

export default meta;
type Story = StoryObj<typeof ResumeFeedbackSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: ResumeFeedbackSectionData
    },
    render: ({sectionData}) => <ResumeFeedbackSection sectionData={sectionData}></ResumeFeedbackSection>,
};
