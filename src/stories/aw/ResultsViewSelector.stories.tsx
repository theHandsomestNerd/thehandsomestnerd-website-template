import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import ViewChange from "../../components/templates/anybody-walking/view-change/ViewChange";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";

const meta: Meta<typeof ViewChange> = {
    title: "AW/Components/Ball Search View Selector",
    component: ViewChange,
};

export default meta;
type Story = StoryObj<typeof ViewChange>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AWViewChangeComplete: Story = {
    args: {},
    parameters: {
        pageTheme: AWThemeData,
        settings: settings
    },
    render: () => <BallSearchProvider balls={AwBallsArrayData}><ViewChange/></BallSearchProvider>

};