import type {Meta, StoryObj} from '@storybook/react';
import ThwServicesSection from "../../components/transform-hw/ThwServicesSection";
import thwServicesSectionData from "../data/ThwServicesSectionData";
import HomePageResumeData from "../data/HomePageData";
import PageProvider from "../../components/page-context/PageProvider";
import AmenityProvider from "../../components/amenity-context/AmenityProvider";
import ThwHomePageData from "../data/ThwHomePageData";
import ThwWhyChooseUsSection from "../../components/transform-hw/ThwWhyChooseUsSection";
import thwWhyChooseUsData from "../data/ThwWhyChooseUsData";
import ThwContactUsSection from "../../components/transform-hw/ThwContactUsSection";
import thwContactUsData from "../data/ThwContactUsData";


const meta: Meta<typeof ThwContactUsSection> = {
    title: "THW/Section/THW Contact Us Section",
    component: ThwContactUsSection,
};

export default meta;
type Story = StoryObj<typeof ThwContactUsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        sectionData: thwContactUsData
    },
    render: ({sectionData}) => <PageProvider page={ThwHomePageData}>
        <AmenityProvider>
            <ThwContactUsSection
                sectionData={sectionData}></ThwContactUsSection>
        </AmenityProvider>
    </PageProvider>,
};
