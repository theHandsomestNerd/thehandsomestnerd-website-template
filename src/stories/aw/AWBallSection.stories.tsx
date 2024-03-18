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

const meta: Meta<typeof AWBallsSearchSection> = {
    title: "Anybody Walking/Balls Search Section",
    component: AWBallsSearchSection,
};

export default meta;
type Story = StoryObj<typeof AWBallsSearchSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings:AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AWBallsSearchSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    render: ({sectionData}) =>
        <AppSettingsProvider settings={settings}><ThemeProvider
            theme={getThemeFromSanity(AWThemeData)}>
            {/*<BallSearchProvider balls={AwBallsArrayData}>*/}
            <AWBallsSearchSection balls={AwBallsArrayData} sectionData={sectionData}/>
            <Grid container alignItems='center' justifyContent='center'
                  style={{
                      width: "100%",
                      height: "120px",
                      top: 0,
                      left: 0,
                      position: "fixed",
                      border: "1px solid #333333",
                      backgroundColor: "#DDDDDD"
                  }}>
                <Typography variant='h6'>The header goes here</Typography>
            </Grid>
            <Grid container alignItems='center' justifyContent='center'
                  style={{
                      width: "100%",
                      height: "120px",
                      // top: 0,
                      // left: 0,
                      // position: "fixed",
                      border: "1px solid #333333",
                      backgroundColor: "#DDDDDD"
                  }}>
                <Typography variant='h6'>The footer goes here</Typography>
            </Grid>
            {/*</BallSearchProvider>*/}
        </ThemeProvider></AppSettingsProvider>
};