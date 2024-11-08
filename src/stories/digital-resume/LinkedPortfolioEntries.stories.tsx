import type {Meta, StoryObj} from '@storybook/react';
import LinkedPortfolioEntries
    from '../../components/templates/my-digital-resume/resume-skills-section/LinkedPortfolioEntries';
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {Grid, Tooltip, useTheme} from "@mui/material";
import ResumePortfolioItemsArrayData from "../data/ResumePortfolioItemsArrayData";
import ResumeSkillData from "../data/ResumeSkillData";

const meta: Meta<typeof LinkedPortfolioEntries> = {
    title: "Resume/Page Components/LinkedPortfolioEntries",
    component: LinkedPortfolioEntries,
};

export default meta;
type Story = StoryObj<typeof LinkedPortfolioEntries>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const LinkedPortfolioEntriesCompleteStory: Story = {
    args: {
        resumeSkill: ResumeSkillData,

    },
    parameters: {
        fetchPortfolioItems: () => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },

        pageTheme: DigitalResumeThemeData
    },
    render: ({resumeSkill}) => {
        const theme = useTheme()
        return <Tooltip open={true} title={<Grid item bgcolor={theme.palette.primary.main} >
            <LinkedPortfolioEntries resumeSkill={resumeSkill}></LinkedPortfolioEntries>
        </Grid>} componentsProps={{
            tooltip:
                {
                    style:
                        {
                            color: theme.palette.text.secondary,
                            backgroundColor: theme.palette.primary.main
                        }
                }
        }} children={<Grid item>I have a tooltip Containing Portfolios</Grid>}>
        </Tooltip>
    }
};
