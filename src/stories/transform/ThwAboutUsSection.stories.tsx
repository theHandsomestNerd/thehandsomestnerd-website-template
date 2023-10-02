import type {Meta, StoryObj} from '@storybook/react';
import thwMottoData from "../data/ThwMottoData";
import ThwPositivePsychology from "../../components/transform-hw/ThwPositivePsychology";
import thwPositivePsychologyData from "../data/ThwPositivePsychologyData";


const meta: Meta<typeof ThwPositivePsychology> = {
    title:"THW/Section/THW About Us Section",
    component: ThwPositivePsychology,
};

export default meta;
type Story = StoryObj<typeof ThwPositivePsychology>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData:thwPositivePsychologyData
    },
    render: ({sectionData}) => <ThwPositivePsychology sectionData={sectionData}></ThwPositivePsychology>,
};
