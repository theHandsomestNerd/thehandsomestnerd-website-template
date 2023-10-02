import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@material-ui/core";
import ResumeSocialMedia from "../../components/my-digital-resume/ResumeSocialMedia";
import homePageResume from "../data/HomePageData";
import BusinessCard from "../../components/BusinessCard";
import React from "react";


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
        homePage: homePageResume,
        anchor:'bottom'
    },
    render: ({homePage, anchor}) => <BusinessCard homePage={homePage} anchor={anchor}/>,
};