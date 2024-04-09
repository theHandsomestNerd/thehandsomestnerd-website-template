import type {Meta, StoryObj} from '@storybook/react';
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from '@mui/material/styles';
import ResumeSkillTooltipWrapper
    from "../../components/templates/my-digital-resume/resume-skills-section/ResumeSkillTooltipWrapper";
import {Typography} from "@mui/material";
import ResumeSkillData from "../data/ResumeSkillData";

const meta: Meta<typeof ResumeSkillTooltipWrapper> = {
    title: "Resume/Page Components/Skill Tooltip Wrapper",
    component: ResumeSkillTooltipWrapper,
};

export default meta;
type Story = StoryObj<typeof ResumeSkillTooltipWrapper>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeSkillTooltipWrapperCompleteStory: Story = {
    args: {
        resumeSkill: ResumeSkillData
    },
    render: ({resumeSkill}) =>
        <ThemeProvider
            theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <ResumeSkillTooltipWrapper resumeSkill={resumeSkill}>
                <Typography>I have a
                tooltip</Typography>
            </ResumeSkillTooltipWrapper></ThemeProvider>,
};
