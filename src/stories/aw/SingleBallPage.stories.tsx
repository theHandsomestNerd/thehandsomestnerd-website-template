import type {Meta, StoryObj} from '@storybook/react';
import AWSingleBallPageSection from "../../components/templates/anybody-walking/AWSingleBallPageSection";
import awSingleBallData from "../data/AwSingleBallData";
import AWThemeData from "../data/AWThemeData";
import AWSingleBallPageData from "../data/AWSingleBallPageData";
import {SitePage} from "../../utils/storybookUtils";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";

const meta: Meta<typeof AWSingleBallPageSection> = {
    title: "AW/Pages/Single Ball Page",
    component: AWSingleBallPageSection,
};

export default meta;
type Story = StoryObj<typeof AWSingleBallPageSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}

export const AWSingleBallPageSectionComplete: Story = {
    args: {
        sectionData: AWSingleBallPageData
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: settings
    },
    render: ({sectionData}) =>
        <SitePage>
            <AWSingleBallPageSection sectionData={sectionData} ball={awSingleBallData}/>
        </SitePage>
};