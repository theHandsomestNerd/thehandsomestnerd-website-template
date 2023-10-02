import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@material-ui/core";
import WebDevHeroContentSection from "../../components/web-dev-site/WebDevHeroContentSection";
import WebDevHeroSectionData from "../data/WebDevHeroContentSectionData";
import ThwHeroContentSection from "../../components/transform-hw/ThwHeroContentSection";


const meta: Meta<typeof WebDevHeroContentSection> = {
    title:"Web Development/Web Dev Hero Section",
    component: WebDevHeroContentSection,
};

export default meta;
type Story = StoryObj<typeof WebDevHeroContentSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    render: () => <WebDevHeroContentSection sectionData={WebDevHeroSectionData}></WebDevHeroContentSection>,
};
