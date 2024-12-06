import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import AWBallsPageData from "../data/AWBallsPageData";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import BallToolsSection from "../../components/templates/anybody-walking/BallToolsSection";
import {SitePage} from "../../utils/storybookUtils";

const meta: Meta<typeof BallToolsSection> = {
    title: "AW/Pages/Ball Tools",
    component: BallToolsSection,
};

export default meta;
type Story = StoryObj<typeof BallToolsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const BallToolsSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    parameters:{
        pageTheme: AWThemeData,
        settings
    },
    render: ({sectionData}) => <SitePage><BallToolsSection sectionData={sectionData}/></SitePage>
};