import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "../../components/my-digital-resume/ResumeSkillsSection";
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import ResumeBioSectionData from "../data/ResumeBioSectionData";
import homePageResumeData from "../data/HomePageData";

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

export const Primary: Story = {
    args :{
        sectionData: ResumeSkillSectionData,
    },
    render: ({sectionData}) => <ResumeSkillsSection sectionData={sectionData}></ResumeSkillsSection>,
};
