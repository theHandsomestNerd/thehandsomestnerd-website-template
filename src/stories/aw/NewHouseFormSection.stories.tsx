import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import AWBallsPageData from "../data/AWBallsPageData";
import {SanityHouse} from "../../components/templates/anybody-walking/ballroomTypes";
import AWNewHouseFormSection from "../../components/templates/anybody-walking/AWNewHouseFormSection";
import {awSettings, SitePage, storybookDelay} from "../../utils/storybookUtils";

const meta: Meta<typeof AWNewHouseFormSection> = {
    title: "AW/Pages/New House Form",
    component: AWNewHouseFormSection,
};

export default meta;
type Story = StoryObj<typeof AWNewHouseFormSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWNewHouseFormSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings.ballStepsSetting,
        getSanityDocumentRef: () => {
            return {}
        },
        createHouse: async (house: SanityHouse) => {
            alert("create this house " + JSON.stringify(house),)
            await storybookDelay(1000)
            return Promise.resolve({status: 200, email: "success@email.com"})
        }
    },
    render: ({sectionData}) =>
        <SitePage>
            <AWNewHouseFormSection sectionData={sectionData}/>
        </SitePage>
};

export const AWNewHouseFormSectionFail: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings.ballStepsSetting,
        getSanityDocumentRef: () => {
            return {}
        },
        createHouse: async (house: SanityHouse) => {
            alert("create this house " + JSON.stringify(house),)
            await storybookDelay(1000)
            return Promise.reject({status: 400, e: "There was an error"})
        }
    },
    render: ({sectionData}) =>
        <SitePage>
            <AWNewHouseFormSection sectionData={sectionData}/>
        </SitePage>

};