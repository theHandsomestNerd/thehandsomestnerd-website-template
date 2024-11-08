import type {Meta, StoryObj} from '@storybook/react';
import SimpleNumberedStringListPage from "../../components/dj-40-spades-rules/SimpleNumberedStringListPage";
import NumberedStringListPageData from "../data/NumberedStringListPageData";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";

const meta: Meta<typeof SimpleNumberedStringListPage> = {
    title: "NumberedStringListPage",
    component: SimpleNumberedStringListPage,
};

export default meta;
type Story = StoryObj<typeof SimpleNumberedStringListPage>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const NumberedStringListPageCompleteStory: Story = {
    args: {
        sectionData: NumberedStringListPageData
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData}) => {
        return <SimpleNumberedStringListPage sectionData={sectionData}></SimpleNumberedStringListPage>
    }
};
