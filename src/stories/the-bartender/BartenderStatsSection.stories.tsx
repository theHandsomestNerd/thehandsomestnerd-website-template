import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import WebDevStatsSectionData from "../data/WebDevStatsSectionData";
import BartenderStatsCounterSection
    from "../../components/templates/my-digital-resume/the-bartender/BartenderStatsCounterSection";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";


const meta: Meta<typeof BartenderStatsCounterSection> = {
    title: "Bartending/Section/Bartender Stats Section",
    component: BartenderStatsCounterSection,
};

export default meta;
type Story = StoryObj<typeof BartenderStatsCounterSection>;

export const Primary: Story = {
    args: {
        sectionData: WebDevStatsSectionData,
    },
    render: ({sectionData}) => <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
        <BartenderStatsCounterSection sectionData={sectionData}></BartenderStatsCounterSection>
    </ThemeProvider>,
};
