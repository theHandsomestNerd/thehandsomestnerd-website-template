import type {Meta, StoryObj} from '@storybook/react';
import ThwServicesSection from "../../components/transform-hw/ThwServicesSection";
import thwServicesSectionData from "../data/ThwServicesSectionData";
import HomePageResumeData from "../data/HomePageData";
import PageProvider from "../../components/page-context/PageProvider";
import AmenityProvider from "../../components/amenity-context/AmenityProvider";
import ThwHomePageData from "../data/ThwHomePageData";


const meta: Meta<typeof ThwServicesSection> = {
    title: "THW/Section/THW Services Section",
    component: ThwServicesSection,
};

export default meta;
type Story = StoryObj<typeof ThwServicesSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        sectionData: thwServicesSectionData
    },
    render: ({sectionData}) => <PageProvider page={ThwHomePageData}>
        <AmenityProvider>
            <ThwServicesSection
                sectionData={sectionData}></ThwServicesSection>
        </AmenityProvider>
    </PageProvider>,
};
