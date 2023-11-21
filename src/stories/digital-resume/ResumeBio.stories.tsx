import type {Meta, StoryObj} from '@storybook/react';
import ResumeBioSection from "../../components/templates/my-digital-resume/resume-bio-section/ResumeBioSection";
import homePageResumeData from "../data/HomePageData";
import ResumeBioSectionData from "../data/ResumeBioSectionData";

const meta: Meta<typeof ResumeBioSection> = {
    title:"Resume/Section/Resume Bio Section",
    component: ResumeBioSection,
};

export default meta;
type Story = StoryObj<typeof ResumeBioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const ResumeBioSectionComplete: Story = {
    args :{
      sectionData: ResumeBioSectionData,
        homePage: homePageResumeData
    },
    render: ({sectionData, homePage}) => <ResumeBioSection sectionData={sectionData} homePage={homePage}></ResumeBioSection>,
};
