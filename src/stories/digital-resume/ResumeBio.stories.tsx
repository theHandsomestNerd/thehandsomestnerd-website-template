import type {Meta, StoryObj} from '@storybook/react';
import ResumeBio from "../../components/my-digital-resume/ResumeBio";
import homePageResume from "../data/HomePage";
import ResumeBioSectionData from "../data/ResumeBioSection";

const meta: Meta<typeof ResumeBio> = {
    title:"Resume/Resume Bio Section",
    component: ResumeBio,
};

export default meta;
type Story = StoryObj<typeof ResumeBio>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const Primary: Story = {
    render: () => <ResumeBio sectionData={ResumeBioSectionData} homePage={homePageResume}></ResumeBio>,
};
