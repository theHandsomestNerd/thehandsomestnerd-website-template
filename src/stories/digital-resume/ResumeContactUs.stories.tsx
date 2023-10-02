import type {Meta, StoryObj} from '@storybook/react';
import ResumePortfolioSectionData from "../data/ResumePortfolioSectionData";
import ResumePortfolioSection from '../../components/my-digital-resume/ResumePortfolioSection';
import ResumeContactUsSection from "../../components/my-digital-resume/ResumeContactUsSection";
import ResumeContactSectionData from "../data/ResumeContactSectionData";

const meta: Meta<typeof ResumeContactUsSection> = {
    title:"Resume/Section/Resume Contact Us Section",
    component: ResumeContactUsSection,
};

export default meta;
type Story = StoryObj<typeof ResumeContactUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: ResumeContactSectionData
    },
    render: ({sectionData}) => <ResumeContactUsSection sectionData={sectionData}></ResumeContactUsSection>,
};
