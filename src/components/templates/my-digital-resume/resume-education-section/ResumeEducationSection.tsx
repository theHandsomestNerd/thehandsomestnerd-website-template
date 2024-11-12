import {FunctionComponent} from 'react'
import {Divider, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumeEducationItemType, ResumeEducationSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import dateUtils from "../../../../utils/dateUtils";
import {COLORS} from "../../../../theme/common/ColorPalette";

interface IProps {
    sectionData: ResumeEducationSectionType
}

const ResumeEducationSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container item style={{padding: theme.spacing(4, smDown ? 1 : 4)}}
              className={globalClasses.resumeSection}>
            <Grid
                container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <Typography
                            variant='h6'
                        >{props.sectionData.title}</Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            display='inline'
                        >.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                {
                    props.sectionData.educationExperiences && props.sectionData.educationExperiences.length > 0 &&
                    <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                        {
                            props.sectionData.educationExperiences.map(
                                (experience: ResumeEducationItemType, index: number, educationExperiencesArr: ResumeEducationItemType[]) => {
                                    return <Grid key={index} item container alignContent='flex-start'
                                                 xs={12}>
                                        <Grid item>
                                            <Grid container item spacing={2}>
                                                <Grid item>
                                                    <Typography display='inline'
                                                                variant='body2'>{experience.institutionName}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container item spacing={2}>
                                                <Grid item>
                                                    <Typography display='inline'
                                                                variant='body1'>{experience.qualification}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container item>
                                                <Typography display='inline'
                                                            variant='body1'>
                                                    {dateUtils.monthYear(experience.dateStart)}
                                                </Typography>
                                                {
                                                    experience.dateStart && experience.dateEnd &&
                                                    <Typography display='inline'
                                                                variant='body1'
                                                                style={{margin: theme.spacing(0, 1)}}>
                                                        —
                                                    </Typography>
                                                }
                                                <Typography display='inline'
                                                            variant='body1'>
                                                    {dateUtils.monthYear(experience.dateEnd)}
                                                </Typography>
                                            </Grid>
                                            <Grid container item>
                                                <Typography
                                                    variant='body1' gutterBottom>{experience.description}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container item xs={12}>
                                            {
                                                index <= educationExperiencesArr.length - 2 &&
                                                <Divider role='education-divider'
                                                         sx={{
                                                             marginTop: "8px",
                                                             backgroundColor: COLORS.LIGHTGRAY,
                                                             width: "100%"
                                                         }}
                                                />
                                            }
                                        </Grid>
                                    </Grid>
                                })
                        }
                    </Grid>
                }
            </Grid>
        </Grid>
    );
}

export default ResumeEducationSection