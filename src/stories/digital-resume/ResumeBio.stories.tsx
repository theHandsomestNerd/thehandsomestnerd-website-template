import type {Meta, StoryObj} from '@storybook/react';
import ResumeBioSection from "../../components/templates/my-digital-resume/resume-bio-section/ResumeBioSection";
import HomePageData from "../data/HomePageData";
import ResumeBioSectionData from "../data/ResumeBioSectionData";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";

const meta: Meta<typeof ResumeBioSection> = {
    title: "Resume/Section/Resume Bio Section",
    component: ResumeBioSection,
};

export default meta;
type Story = StoryObj<typeof ResumeBioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeBioSectionComplete: Story = {
    args: {
        sectionData: ResumeBioSectionData,
        homePage: HomePageData.homePageResumeData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ResumeBioSection isHideButtons={isHideButtons} isHideEmail={isHideEmail} sectionData={sectionData}
                          homePage={homePage}></ResumeBioSection>
};

export const ResumeBioSectionSearchResult: Story = {
    args: {
        sectionData: ResumeBioSectionData,
        homePage: HomePageData.homePageResumeData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ResumeBioSection isHideButtons={isHideButtons} isHideEmail={isHideEmail} sectionData={sectionData}
                          homePage={homePage}></ResumeBioSection>
};