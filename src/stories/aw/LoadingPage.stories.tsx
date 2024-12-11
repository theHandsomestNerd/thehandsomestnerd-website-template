import type {Meta, StoryObj} from '@storybook/react';
import AWBallsPageData from "../data/AWBallsPageData";
import LoadingPage from "../../components/templates/mackenzies-mind/pages/loading-page/LoadingPage";

const meta: Meta<typeof LoadingPage> = {
    title: "Loading Page",
    component: LoadingPage,
};

export default meta;
type Story = StoryObj<typeof LoadingPage>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const BallToolsSectionComplete: Story = {
    args: {
        sectionData: AWBallsPageData,
    },
    render: () =>
        <LoadingPage/>
};