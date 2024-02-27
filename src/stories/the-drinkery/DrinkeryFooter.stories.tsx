import type {Meta, StoryObj} from '@storybook/react';
import homePageResumeData from "../data/HomePageData";
import Header from "../../components/templates/mackenzies-mind/header/Header";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";
import DrinkeryThemeData from "../data/DrinkeryThemeData";
import drinkeryHeaderData from "../data/DrinkeryHeaderData";
import Footer from "../../components/templates/mackenzies-mind/footer/Footer";
import drinkeryFooterData from "../data/DrinkeryFooterData";
import PageProvider from "../../components/page-context/PageProvider";
import DrinkeryHomePageData from "../data/DrinkeryHomePageData";


const meta: Meta<typeof Footer> = {
    title: "The Drinkery/Page Components/Footer",
    component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const PageFooter: Story = {
    args: {
        pageFooter: drinkeryFooterData
    },
    render: ({pageFooter}) =>         <PageProvider page={DrinkeryHomePageData}><ThemeProvider theme={getThemeFromSanity(DrinkeryThemeData)}>
        <Footer backgroundColor={"WHITESMOKE"} pageFooter={pageFooter}></Footer></ThemeProvider></PageProvider>,
};