import type {Meta, StoryObj} from '@storybook/react';
import thwMottoData from "../data/ThwMottoData";
import ThwPositivePsychology from "../../components/transform-hw/ThwPositivePsychology";
import thwPositivePsychologyData from "../data/ThwPositivePsychologyData";
import AboutTheProprietorSection from "../../components/transform-hw/AboutTheProprietorSection";
import thwAboutProprietorData from "../data/ThwAboutTheProprietorData";


const meta: Meta<typeof AboutTheProprietorSection> = {
    title:"THW/Section/THW About the Proprietor Section",
    component: AboutTheProprietorSection,
};

export default meta;
type Story = StoryObj<typeof AboutTheProprietorSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData:thwAboutProprietorData
    },
    render: ({sectionData}) => <AboutTheProprietorSection sectionData={sectionData}></AboutTheProprietorSection>,
};
