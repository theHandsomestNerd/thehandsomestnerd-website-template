import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import AWBallsPageData from "../data/AWBallsPageData";
import AppSettingsProvider from "../../components/templates/anybody-walking/app-settings/AppSettingsProvider";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import BallToolsSection from "../../components/templates/anybody-walking/BallToolsSection";
import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";
import AWBallSummarySection from "../../components/templates/anybody-walking/AWBallSummarySection";

const meta: Meta<typeof BallToolsSection> = {
    title: "AW/Pages/Ball Tools",
    component: BallToolsSection,
};

export default meta;
type Story = StoryObj<typeof BallToolsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const BallToolsSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    parameters:{
        pageTheme: AWThemeData,
        settings
    },
    render: ({sectionData}) => <Grid container>
        <Grid container alignItems='center' justifyContent='center'
              style={{
                  width: "100%",
                  height: "90px",
                  border: "1px solid #333333",
                  backgroundColor: "#DDDDDD"
              }}>
            <Typography variant='h6'>The header goes here</Typography>
        </Grid>
        <Grid container>
            <BallToolsSection sectionData={sectionData}/>
        </Grid>
        <Grid container alignItems='center' justifyContent='center'
              style={{
                  width: "100%",
                  height: "120px",
                  border: "1px solid #333333",
                  backgroundColor: "#DDDDDD"
              }}>
            <Typography variant='h6'>The footer goes here</Typography>
        </Grid>
    </Grid>
};