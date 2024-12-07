import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import {BallTypeEnum} from "../../components/templates/anybody-walking/enums/BallType.enum";
import BallDate from "../../components/templates/anybody-walking/ball-form-steps/BallDate";

const meta: Meta<typeof BallDate> = {
    title: "Anybody Walking/Steps/Ball Date",
    component: BallDate,
};

export default meta;
type Story = StoryObj<typeof BallDate>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWBallDateComplete: Story = {
    args: {

    },
    render: ({}) =>
        <BallSearchProvider balls={AwBallsArrayData}>
            <ThemeProvider
                theme={getThemeFromSanity(AWThemeData)}>
                <BallDate validateStep={()=>{}} stepComplete={()=>{}} newBallToAdd={{ballType: BallTypeEnum.BALL, }}/>
            </ThemeProvider>
        </BallSearchProvider>
};