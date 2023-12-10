import type {Meta, StoryObj} from '@storybook/react';
import homePageResumeData from "../data/HomePageData";
import Header from "../../components/templates/mackenzies-mind/header/Header";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";
import WebConsultingThemeData from "../data/WebConsultingThemeData";
import consultingHeaderSectionData from "../data/ConsultingHeaderSectionData";
import EnhancedHeader from "../../components/templates/mackenzies-mind/header/EnhancedHeader";
import {HeaderSectionType} from "../../components/BlockContentTypes";
import FooterMenuContainer from "../../components/templates/mackenzies-mind/footer/FooterMenuContainer";
import FooterSectionData from "../data/ConsultingFooterSectionData";
import FooterBlockContentLayoutContainer from "../../components/FooterBlockContentLayoutContainer";


const meta: Meta<typeof FooterBlockContentLayoutContainer> = {
    title: "Web Consulting/Page Components/Footer Section",
    component: FooterBlockContentLayoutContainer,
};

export default meta;
type Story = StoryObj<typeof FooterBlockContentLayoutContainer>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        content: FooterSectionData
    },
    render: ({content}) => <ThemeProvider theme={getThemeFromSanity(WebConsultingThemeData)}>
        <FooterBlockContentLayoutContainer content={[content]}></FooterBlockContentLayoutContainer>
    </ThemeProvider>,
};