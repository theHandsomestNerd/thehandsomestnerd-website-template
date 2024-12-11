import type {Meta, StoryObj} from '@storybook/react';
import AWThemeData from "../data/AWThemeData";
import AWContactUs from "../../components/templates/anybody-walking/AWContactUs";
import {awSettings, SitePage, storybookDelay} from "../../utils/storybookUtils";
import AWContactUsData from "../data/AWContactUsData";

const meta: Meta<typeof AWContactUs> = {
    title: "AW/Pages/Contact Us",
    component: AWContactUs,
};

export default meta;
type Story = StoryObj<typeof AWContactUs>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWContactUsSuccessComplete: Story = {
    args: {
        sectionData: AWContactUsData,
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings.ballStepsSetting,
        createContactUs: async () => {
            await storybookDelay(1000);
            return Promise.resolve({status: 200});
        }
    },
    render: ({sectionData}) => <SitePage><AWContactUs sectionData={sectionData}/></SitePage>

};

export const AWContactUsFailedComplete: Story = {
    args: {
        sectionData: AWContactUsData,
    },
    parameters: {
        pageTheme: AWThemeData,
        settings: awSettings,
        createContactUs: async () => {
            await storybookDelay(1000);
            return Promise.resolve({status: 400});
        }
    },
    render: ({sectionData}) => <SitePage><AWContactUs sectionData={sectionData}/></SitePage>

};