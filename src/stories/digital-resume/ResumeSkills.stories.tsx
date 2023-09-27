import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/my-digital-resume/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSection";

const meta: Meta<typeof ResumeSkillsSection> = {
    title:"Resume/Resume Skills Section",
    component: ResumeSkillsSection,
};

export default meta;
type Story = StoryObj<typeof ResumeSkillsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    render: () => <ResumeSkillsSection sectionData={ResumeSkillSectionData}></ResumeSkillsSection>,
};
