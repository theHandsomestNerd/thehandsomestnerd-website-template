import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import AWBallsSearchSection from "../../components/templates/anybody-walking/AWBallSearchSection";
import AWBallsPageData from "../data/AWBallsPageData";
import AwBallsArrayData from "../data/AwBallsArrayData";
import {Grid, Typography} from "@mui/material";
import AppSettingsProvider from "../../components/templates/anybody-walking/app-settings/AppSettingsProvider";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AWContactUs from "../../components/templates/anybody-walking/AWContactUs";

const meta: Meta<typeof AWContactUs> = {
    title: "Anybody Walking/Contact Us Section",
    component: AWContactUs,
};

export default meta;
type Story = StoryObj<typeof AWContactUs>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings:AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AWContactUsComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    render: ({sectionData}) =>
        <AppSettingsProvider settings={settings}><ThemeProvider
            theme={getThemeFromSanity(AWThemeData)}>
            {/*<BallSearchProvider balls={AwBallsArrayData}>*/}
            <AWContactUs sectionData={sectionData}/>
            {/*</BallSearchProvider>*/}
        </ThemeProvider></AppSettingsProvider>
};