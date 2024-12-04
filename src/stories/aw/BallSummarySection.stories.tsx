import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import AWBallsPageData from "../data/AWBallsPageData";
import AwBallsArrayData from "../data/AwBallsArrayData";
import {Typography} from "@mui/material";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import AWBallSummarySection from "../../components/templates/anybody-walking/AWBallSummarySection";
import Grid from "@mui/material/Grid2";

const meta: Meta<typeof AWBallSummarySection> = {
    title: "AW/Pages/BallSummary",
    component: AWBallSummarySection,
};

export default meta;
type Story = StoryObj<typeof AWBallSummarySection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AWBallSummarySectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
        balls: AwBallsArrayData
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: settings
    },
    render: ({sectionData, balls}) =>

        <Grid container>
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
            <AWBallSummarySection balls={balls} sectionData={sectionData}/>
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