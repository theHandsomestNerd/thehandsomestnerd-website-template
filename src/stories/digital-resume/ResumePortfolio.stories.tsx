import type {Meta, StoryObj} from '@storybook/react';
import ResumePortfolioSectionData from "../data/ResumePortfolioSectionData";
import ResumePortfolioSection from '../../components/my-digital-resume/ResumePortfolioSection';

const meta: Meta<typeof ResumePortfolioSection> = {
    title:"Resume/Section/Resume Portfolio Section",
    component: ResumePortfolioSection,
};

export default meta;
type Story = StoryObj<typeof ResumePortfolioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData: ResumePortfolioSectionData
    },
    render: ({sectionData}) => <ResumePortfolioSection sectionData={sectionData}></ResumePortfolioSection>,
};
