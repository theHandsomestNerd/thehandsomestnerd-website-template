import type {Meta, StoryObj} from '@storybook/react';
import LinkedExperiences from '../../components/templates/my-digital-resume/resume-skills-section/LinkedExperiences';
import ResumeSkillSectionData from "../data/ResumeSkillSectionData";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import ResumeExperiencesArrayData from "../data/ResumeExperiencesArrayData";
import {Grid, Tooltip, useTheme} from "@mui/material";

const meta: Meta<typeof LinkedExperiences> = {
    title: "Resume/Page Components/LinkedExperiences",
    component: LinkedExperiences,
};

export default meta;
type Story = StoryObj<typeof LinkedExperiences>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const LinkedExperiencesCompleteStory: Story = {
    args: {
        resumeSkill: ResumeSkillSectionData,

    },
    parameters: {
        fetchSkillExperiences: () => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },

        pageTheme: DigitalResumeThemeData
    },
    render: ({resumeSkill}) => {
        const theme = useTheme()
        return <Tooltip open={true} title={<Grid item bgcolor={theme.palette.primary.main} >
            <LinkedExperiences resumeSkill={resumeSkill}></LinkedExperiences>
        </Grid>} componentsProps={{
            tooltip:
                {
                    style:
                        {
                            color: theme.palette.text.secondary,
                            backgroundColor: theme.palette.primary.main
                        }
                }
        }} children={<Grid item>I have a tooltip</Grid>}>
        </Tooltip>
    }
};
