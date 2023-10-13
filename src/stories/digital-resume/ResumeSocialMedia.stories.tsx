import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@mui/material";
import ResumeSocialMedia from "../../components/my-digital-resume/ResumeSocialMedia";
import homePageResumeData from "../data/HomePageData";


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

export const SocialMediaBlockFromHomepage: Story = {
    args:{
        facebook:homePageResumeData.facebook,
        twitter:homePageResumeData.twitter,
        linkedIn:homePageResumeData.linkedIn,
        github:homePageResumeData.github,
        instagram: "thehandsomestNerd"
    },
    render: ({facebook,twitter, linkedIn, instagram, github}) => <ResumeSocialMedia facebook={facebook} twitter={twitter} linkedIn={linkedIn} github={github} instagram={instagram}></ResumeSocialMedia>,
};

export const SocialMediaBlockOnlyFacebook: Story = {
    args:{
        facebook:homePageResumeData.facebook,
    },
    render: ({facebook}) => <ResumeSocialMedia facebook={facebook}></ResumeSocialMedia>,
};

export const SocialMediaBlockOnly3: Story = {
    args:{
        facebook:homePageResumeData.facebook,
        twitter:homePageResumeData.twitter,
        instagram: "thehandsomestNerd"
    },
    render: ({facebook, twitter, instagram}) => <ResumeSocialMedia facebook={facebook} instagram={instagram} twitter={twitter}></ResumeSocialMedia>,
};