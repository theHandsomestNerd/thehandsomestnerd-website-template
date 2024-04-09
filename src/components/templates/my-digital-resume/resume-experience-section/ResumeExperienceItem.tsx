import {FunctionComponent, useState} from 'react'
import {Chip, Grid, Typography, useTheme} from "@mui/material";
import {ResumeExperienceType} from "../../../BlockContentTypes";
import dateUtils from "../../../../utils/dateUtils";
import ResumeSkillTooltipWrapper from "../resume-skills-section/ResumeSkillTooltipWrapper";
import textProcessingUtils from "../../../../utils/textProcessingUtils";


interface IProps {
    experience: ResumeExperienceType
}

const ResumeExperienceItem: FunctionComponent<IProps> = (props: IProps) => {

    const theme = useTheme()
    const [isTooltipOpen, setIsToolTipOpen] = useState<number>()

    return (<Grid item container alignContent='flex-start'
                  role={'experiencedivider'}
        // style={{
        //     borderBottom: `1px solid ${index2 >= (props.sectionData.experiences?.length ?? 0) - 1 ? "transparent" : COLORS.LIGHTGRAY}`,
        //     // padding: theme.spacing(1.75, 0)
        // }}
                  xs={12}>
        <Grid container item role={'experienceheader'} alignContent='center' alignItems='center'>
            <Grid item xs={12} md={4}>
                <Typography display='inline'
                            variant='body2'>{props.experience.companyName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} container sx={{paddingTop: "4px", paddingBottom: "4px"}}>
                <Typography variant='subtitle1'>{props.experience.companySubtitle}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography
                    variant='body1'>{props.experience.title}</Typography>
            </Grid>
        </Grid>
        <Grid container item>


            <Grid item sm={4}>
                <Typography display='inline'
                            variant='body1'
                            fontWeight={'bold'}>{dateUtils.YearMonth(new Date(props.experience.dateStart as string))}</Typography>

                <Typography fontWeight={'bold'} display='inline'
                            variant='body1' style={{margin: theme.spacing(0, 1)}}>—</Typography>

                <Typography fontWeight={'bold'} display='inline'
                            variant='body1'>{dateUtils.YearMonth(new Date(props.experience.dateEnd as string))}</Typography>

            </Grid>

        </Grid>
        <Grid container item>
            <Typography
                variant='body1'
                fontStyle={'italic'}>{dateUtils.getLengthOfTime(new Date(props.experience.dateStart ?? ""), new Date(props.experience.dateEnd ?? '')).result}</Typography>
        </Grid>
        <Grid container item>
            <Typography
                variant='body1' gutterBottom>{props.experience.description}</Typography>
        </Grid>
        <Grid container item spacing={1}
              style={{overflowX: "scroll", paddingBottom: theme.spacing(1)}} wrap='nowrap'>
            {
                props.experience
                && props.experience.skillsUsed
                && textProcessingUtils
                    .sortByTitle(props.experience.skillsUsed)?.map((skill, index) => {
                        return <Grid item key={index} onClick={() => {
                            setIsToolTipOpen(index)
                        }}>
                            <ResumeSkillTooltipWrapper resumeSkill={skill} isTipOpen={index === isTooltipOpen}>
                                <Chip role='experienceskill' size='small'
                                      color='primary'
                                      label={skill.title}/>
                            </ResumeSkillTooltipWrapper>
                        </Grid>
                    })
            }
        </Grid>
    </Grid>)
}

export default ResumeExperienceItem