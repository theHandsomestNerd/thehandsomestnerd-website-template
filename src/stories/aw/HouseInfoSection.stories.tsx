import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import {AppSettingsType} from "../../components/templates/anybody-walking/ballroomTypes";
import AWHouseInfoSection from "../../components/templates/anybody-walking/AWHouseInfoSection";
import AwVerifiedHousesArrayData from "../data/AwVerifiedHousesArrayData";
import {SitePage} from "../../utils/storybookUtils";

const meta: Meta<typeof AWHouseInfoSection> = {
    title: "AW/Pages/House Info Section",
    component: AWHouseInfoSection,
};

export default meta;
type Story = StoryObj<typeof AWHouseInfoSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const settings: AppSettingsType = {
    newAddBallStepsFlow: true
}
export const AboutSectionComplete: Story = {
    args: {
        sectionData: {
            name: "AW House Info Section",
        },
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: settings,
        fetchVerifiedHouses: ()=>{
            return Promise.resolve(AwVerifiedHousesArrayData)
        }
    },
    render: ({sectionData}) => <SitePage><AWHouseInfoSection sectionData={sectionData}/></SitePage>

};