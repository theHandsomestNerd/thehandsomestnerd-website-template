import type {Meta, StoryObj} from '@storybook/react';
import ThwMottoSection from "../../components/templates/transform-hw/ThwMottoSection";
import homePageResumeData from "../data/HomePageData";
import thwMottoData from "../data/ThwMottoData";


const meta: Meta<typeof ThwMottoSection> = {
    title:"THW/Section/THW Motto Section",
    component: ThwMottoSection,
};

export default meta;
type Story = StoryObj<typeof ThwMottoSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args:{
        sectionData:thwMottoData
    },
    render: ({sectionData}) => <ThwMottoSection sectionData={sectionData}></ThwMottoSection>,
};
