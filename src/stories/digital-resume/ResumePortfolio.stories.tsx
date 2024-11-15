import type {Meta, StoryObj} from '@storybook/react';
import ResumePortfolioSectionData from "../data/ResumePortfolioSectionData";
import ResumePortfolioSection
    from '../../components/templates/my-digital-resume/resume-portfolio-section/ResumePortfolioSection';
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import ResumeExperiencesArrayData from "../data/ResumeExperiencesArrayData";
import ResumePortfolioItemsArrayData from "../data/ResumePortfolioItemsArrayData";

const meta: Meta<typeof ResumePortfolioSection> = {
    title: "Resume/Section/Resume Portfolio Section",
    component: ResumePortfolioSection,
};

export default meta;
type Story = StoryObj<typeof ResumePortfolioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumePortfolioSectionStory: Story = {
    args: {
        sectionData: ResumePortfolioSectionData
    },
    parameters: {
        pageTheme: DigitalResumeThemeData,
        fetchSkillExperiences: () => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: () => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
    },
    render: ({sectionData}) =>
        <ResumePortfolioSection sectionData={sectionData}></ResumePortfolioSection>
};
