import type {Meta, StoryObj} from '@storybook/react';
import homePageResume from "../data/HomePageData";
import Header from "../../components/mackenzies-mind/header/Header";
import Footer from "../../components/mackenzies-mind/footer/Footer";


const meta: Meta<typeof Footer> = {
    title: "Resume/Page Components/Resume Footer",
    component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        pageFooter: homePageResume.footerContent.content[0].footerMenuRef
    },
    render: ({pageFooter}) => <Footer pageFooter={pageFooter}></Footer>,
};