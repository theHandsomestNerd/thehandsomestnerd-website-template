import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import BallSearchBox from "../../components/templates/anybody-walking/ball-search-box/BallSearchBox";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";

const meta: Meta<typeof BallSearchBox> = {
    title: "AW/Components/Ball Search Box",
    component: BallSearchBox,
};

export default meta;
type Story = StoryObj<typeof BallSearchBox>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AWBallSearchBoxComplete: Story = {
    args: {},
    parameters: {
        pageTheme: AWThemeData,
        settings: settings
    },
    render: () =>
        <BallSearchProvider balls={AwBallsArrayData}>
                <BallSearchBox/>
        </BallSearchProvider>
};