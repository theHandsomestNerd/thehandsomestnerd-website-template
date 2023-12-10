import type {Meta, StoryObj} from '@storybook/react';
import ResumeFeedbackSection from "../../components/templates/my-digital-resume/resume-feedback-section/ResumeFeedbackSection";
import ResumeFeedbackSectionData from "../data/ResumeFeedbackSectionData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import { ThemeProvider } from '@mui/material/styles';

const meta: Meta<typeof ResumeFeedbackSection> = {
    title: "Resume/Section/Resume Feedback Section",
    component: ResumeFeedbackSection,
};

export default meta;
type Story = StoryObj<typeof ResumeFeedbackSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeFeedbackSectionStory: Story = {
    args: {
        sectionData: ResumeFeedbackSectionData
    },
    render: ({sectionData}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <ResumeFeedbackSection sectionData={sectionData}></ResumeFeedbackSection></ThemeProvider>,
};
