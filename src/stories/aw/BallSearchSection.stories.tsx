import type {Meta, StoryObj} from '@storybook/react';
import AWBallsSearchSection from "../../components/templates/anybody-walking/AWBallSearchSection";
import AWBallsPageData from "../data/AWBallsPageData";
import AwBallsArrayData from "../data/AwBallsArrayData";
import {awSettings, SitePage} from "../../utils/storybookUtils";
import AWThemeData from "../data/AWThemeData";

const meta: Meta<typeof AWBallsSearchSection> = {
    title: "AW/Pages/Balls Search Page",
    component: AWBallsSearchSection,
};

export default meta;
type Story = StoryObj<typeof AWBallsSearchSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWBallsSearchSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings.ballStepsSetting,
        fetchAllApprovedBalls: async (queryString, limit) => {
            console.log("fetchAllApproved", queryString);
            return Promise.resolve(AwBallsArrayData);
        }
    },
    render: ({sectionData}) =>
        <SitePage><AWBallsSearchSection balls={AwBallsArrayData} sectionData={sectionData}/></SitePage>

};