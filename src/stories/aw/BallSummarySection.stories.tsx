import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import AWBallsPageData from "../data/AWBallsPageData";
import AwBallsArrayData from "../data/AwBallsArrayData";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import AWBallSummarySection from "../../components/templates/anybody-walking/AWBallSummarySection";
import {SitePage} from "../../utils/storybookUtils";

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
    render: ({sectionData, balls}) => <SitePage>
        <AWBallSummarySection balls={balls} sectionData={sectionData}/>
    </SitePage>
};