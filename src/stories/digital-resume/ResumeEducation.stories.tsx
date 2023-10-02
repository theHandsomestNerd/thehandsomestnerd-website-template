import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/my-digital-resume/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeExperienceSection from "../../components/my-digital-resume/ResumeExperienceSection";
import ResumeExperienceSectionData from "../data/ResumeExperienceSectionData";
import ResumeEducationSection from "../../components/my-digital-resume/ResumeEducationSection";
import ResumeEducationSectionData from "../data/ResumeEducationSectionData";

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

export const Primary: Story = {
    args:{
        sectionData: ResumeEducationSectionData
    },
    render: ({sectionData}) => <ResumeEducationSection sectionData={sectionData}></ResumeEducationSection>,
};
