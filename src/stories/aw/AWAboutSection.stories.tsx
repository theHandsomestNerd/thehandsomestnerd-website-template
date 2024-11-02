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
import BallToolsSection from "../../components/templates/anybody-walking/BallToolsSection";
import AWAboutSection from "../../components/templates/anybody-walking/AWAboutSection";

const meta: Meta<typeof AWAboutSection> = {
    title: "Anybody Walking/About Section",
    component: AWAboutSection,
};

export default meta;
type Story = StoryObj<typeof AWAboutSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings:AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AboutSectionComplete: Story = {
    args: {
        sectionData: {
            contentTitle: "About",
            name: "AW About Section",
            contentText:[
                "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using","'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ],
        },
    },
    render: ({sectionData}) =>
        <AppSettingsProvider settings={settings}><ThemeProvider
            theme={getThemeFromSanity(AWThemeData)}>
            {/*<BallSearchProvider balls={AwBallsArrayData}>*/}
            <AWAboutSection sectionData={sectionData}/>
            {/*<Grid container alignItems='center' justifyContent='center'*/}
            {/*      style={{*/}
            {/*          width: "100%",*/}
            {/*          height: "120px",*/}
            {/*          top: 0,*/}
            {/*          left: 0,*/}
            {/*          position: "fixed",*/}
            {/*          border: "1px solid #333333",*/}
            {/*          backgroundColor: "#DDDDDD"*/}
            {/*      }}>*/}
            {/*    <Typography variant='h6'>The header goes here</Typography>*/}
            {/*</Grid>*/}
            {/*<Grid container alignItems='center' justifyContent='center'*/}
            {/*      style={{*/}
            {/*          width: "100%",*/}
            {/*          height: "120px",*/}
            {/*          // top: 0,*/}
            {/*          // left: 0,*/}
            {/*          // position: "fixed",*/}
            {/*          border: "1px solid #333333",*/}
            {/*          backgroundColor: "#DDDDDD"*/}
            {/*      }}>*/}
            {/*    <Typography variant='h6'>The footer goes here</Typography>*/}
            {/*</Grid>*/}
            {/*</BallSearchProvider>*/}
        </ThemeProvider></AppSettingsProvider>
};