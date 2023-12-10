import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@mui/material";
import SocialMediaBlock from "../../components/templates/my-digital-resume/social-media-block/SocialMediaBlock";
import homePageResumeData from "../data/HomePageData";
import BusinessCard from "../../components/BusinessCard";
import React from "react";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";


const meta: Meta<typeof BusinessCard> = {
    title:"Resume/Page Components/Resume Business Card",
    component: BusinessCard,
};

export default meta;
type Story = StoryObj<typeof BusinessCard>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
// console.log(homePageResume.headerContent.content[0])
export const Primary: Story = {
    args:{
        homePage: homePageResumeData,
        anchor:'bottom'
    },
    render: ({homePage, anchor}) =>         <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <BusinessCard homePage={homePage} anchor={anchor}/></ThemeProvider>,
};