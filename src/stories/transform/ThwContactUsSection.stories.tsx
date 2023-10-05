import type {Meta, StoryObj} from '@storybook/react';
import PageProvider from "../../components/page-context/PageProvider";
import AmenityProvider from "../../components/amenity-context/AmenityProvider";
import ThwHomePageData from "../data/ThwHomePageData";
import ThwContactUsSection from "../../components/transform-hw/ThwContactUsSection";
import thwContactUsData from "../data/ThwContactUsData";
import CustomizedThemeProvider from "../../components/customized-theme-provider/CustomizedThemeProvider";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";


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
        <CustomizedThemeProvider pageTheme={DigitalResumeThemeData}>
        <AmenityProvider>
            <ThwContactUsSection
                sectionData={sectionData}></ThwContactUsSection>
        </AmenityProvider>
        </CustomizedThemeProvider>
    </PageProvider>,
};
