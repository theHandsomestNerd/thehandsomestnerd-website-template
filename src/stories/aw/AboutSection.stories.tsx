import type {Meta, StoryObj} from '@storybook/react';
import AWAboutSection from "../../components/templates/anybody-walking/AWAboutSection";
import AWThemeData from "../data/AWThemeData";
import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";

const meta: Meta<typeof AWAboutSection> = {
    title: "AW/Pages/About Page",
    component: AWAboutSection,
};

export default meta;
type Story = StoryObj<typeof AWAboutSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AboutSectionComplete: Story = {
    args: {
        sectionData: {
            contentTitle: "About",
            name: "AW About Section",
            contentText: [
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using", "'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            ],
        },
    },
    parameters: {
        pageTheme: AWThemeData
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
            <AWAboutSection sectionData={sectionData}/>
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