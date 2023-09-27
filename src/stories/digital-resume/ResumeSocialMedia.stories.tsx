import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@material-ui/core";
import ResumeSocialMedia from "../../components/my-digital-resume/ResumeSocialMedia";
import homePageResume from "../data/HomePage";


const meta: Meta<typeof ResumeSocialMedia> = {
    title:"Resume/Components/Resume Social Media",
    component: ResumeSocialMedia,
};

export default meta;
type Story = StoryObj<typeof ResumeSocialMedia>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const Primary: Story = {
    render: () => <ResumeSocialMedia homePage={homePageResume}></ResumeSocialMedia>,
};