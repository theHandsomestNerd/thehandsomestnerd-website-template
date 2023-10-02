import type {Meta, StoryObj} from '@storybook/react';
import homePageResume from "../data/HomePageData";
import Header from "../../components/mackenzies-mind/header/Header";


const meta: Meta<typeof Header> = {
    title: "Resume/Page Components/Resume Header",
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
    args: {
        pageHeader: homePageResume.headerContent.content[0].headerMenuRef
    },
    render: ({pageHeader}) => <Header pageHeader={pageHeader}></Header>,
};