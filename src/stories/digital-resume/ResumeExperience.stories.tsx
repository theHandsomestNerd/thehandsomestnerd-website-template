import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/my-digital-resume/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeExperienceSection from "../../components/my-digital-resume/ResumeExperienceSection";
import ResumeExperienceSectionData from "../data/ResumeExperienceSectionData";

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

export const Primary: Story = {
    args:{
        sectionData: ResumeExperienceSectionData
    },
    render: ({sectionData}) => <ResumeExperienceSection sectionData={sectionData}></ResumeExperienceSection>,
};
