import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import BasicBallInfo from "../../components/templates/anybody-walking/ball-form-steps/BasicBallInfo";
import {BallTypeEnum} from "../../components/templates/anybody-walking/enums/BallType.enum";

const meta: Meta<typeof BasicBallInfo> = {
    title: "Anybody Walking/Steps/Ball Info",
    component: BasicBallInfo,
};

export default meta;
type Story = StoryObj<typeof BasicBallInfo>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWBasicBallInfoComplete: Story = {
    args: {

    },
    render: ({}) =>
        <BallSearchProvider balls={AwBallsArrayData}>
            <ThemeProvider
                theme={getThemeFromSanity(AWThemeData)}>
                <BasicBallInfo stepComplete={()=>{}} newBallToAdd={{ballType: BallTypeEnum.BALL, }}/>
            </ThemeProvider>
        </BallSearchProvider>
};