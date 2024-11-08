import {FunctionComponent} from 'react'
import {CircularProgress, Grid, Link, Typography} from "@mui/material";
import {ResumeExperienceType, ResumeSkillType} from "../../../BlockContentTypes";
import dateUtils from "../../../../utils/dateUtils";
import {useCommonStyles} from "../../../../common/sanityIo/CommonStyles";
import useSkillExperiences from './useSkillExperiences';

interface LinkedExperiencesProps {
    resumeSkill: ResumeSkillType
}

const LinkedExperiences: FunctionComponent<LinkedExperiencesProps> = ({resumeSkill}: LinkedExperiencesProps) => {
    const classes = useCommonStyles()
    const {data: skillExperiences, loading, error} = useSkillExperiences(resumeSkill);
    // const sanityContext = useContext(SanityContext)

    const skillNumYears = skillExperiences?.length
        ? dateUtils.getLengthOfTime(skillExperiences[skillExperiences.length - 1].dateStart, skillExperiences[0].dateEnd).result
        : undefined;

    if (loading) return <CircularProgress/>;
    if (error) return <Typography color="error">Error loading experiences.</Typography>;
    return (<Grid container item paddingBottom={1}>
        {skillNumYears && <Typography variant='caption' color='whitesmoke'>{skillNumYears}</Typography>}

        {
            skillExperiences?.map((experience: ResumeExperienceType) => {
            return <Grid item container key={experience._id}>
                <Grid item xs={3}>
                    <Link href={`#${experience._id}`} className={classes.toolTiplink}>
                        <Typography
                            variant='caption'
                            color='whitesmoke'>{dateUtils.YearNumeric(experience.dateStart)}</Typography>
                    </Link>
                </Grid>
                <Grid item xs={9}>
                    <Link href={`#${experience._id}`} className={classes.toolTiplink}>
                        <Typography
                            lineHeight={.5}
                            variant='caption'
                            color='whitesmoke'>{experience.title}</Typography>
                    </Link>
                </Grid>
            </Grid>
        })}
    </Grid>)
}

export default LinkedExperiences