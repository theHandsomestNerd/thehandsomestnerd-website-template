import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@mui/material";
import SocialMediaBlock from "../../components/templates/my-digital-resume/social-media-block/SocialMediaBlock";
import homePageResumeData from "../data/HomePageData";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";


const meta: Meta<typeof SocialMediaBlock> = {
    title:"Resume/Components/Resume Social Media",
    component: SocialMediaBlock,
};

export default meta;
type Story = StoryObj<typeof SocialMediaBlock>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const SocialMediaBlockFromHomepage: Story = {
    args:{
        facebook:homePageResumeData.businessContact?.facebook,
        twitter:homePageResumeData.businessContact?.twitter,
        linkedIn:homePageResumeData.businessContact?.linkedIn,
        github:homePageResumeData.businessContact?.github,
        instagram: "thehandsomestNerd"
    },
    render: ({facebook,twitter, linkedIn, instagram, github}) => <SocialMediaBlock facebook={facebook} twitter={twitter} linkedIn={linkedIn} github={github} instagram={instagram}></SocialMediaBlock>,
};

export const SocialMediaBlockOnlyFacebook: Story = {
    args:{
        facebook:homePageResumeData.businessContact?.facebook,
    },
    render: ({facebook}) => <SocialMediaBlock facebook={facebook}></SocialMediaBlock>,
};

export const SocialMediaBlockOnly3: Story = {
    args:{
        facebook:homePageResumeData.businessContact?.facebook,
        twitter:homePageResumeData.businessContact?.twitter,
        instagram: "thehandsomestNerd"
    },
    render: ({facebook, twitter, instagram}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <SocialMediaBlock facebook={facebook} instagram={instagram} twitter={twitter}></SocialMediaBlock></ThemeProvider>,
};