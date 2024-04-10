import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import AWBallSearchSection from "../../components/templates/anybody-walking/AWBallSearchSection";
import AWBallsPageData from "../data/AWBallsPageData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import BallSearchBox from "../../components/templates/anybody-walking/ball-search-box/BallSearchBox";

const meta: Meta<typeof BallSearchBox> = {
    title: "Anybody Walking/Components/Ball Search Box",
    component: BallSearchBox,
};

export default meta;
type Story = StoryObj<typeof BallSearchBox>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWBallSearchBoxComplete: Story = {
    args: {
    },
    render: () =>
        <BallSearchProvider balls={AwBallsArrayData}>
            <ThemeProvider
                theme={getThemeFromSanity(AWThemeData)}>
                <BallSearchBox />
            </ThemeProvider>
        </BallSearchProvider>
};