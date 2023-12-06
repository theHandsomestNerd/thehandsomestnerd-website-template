import React, {FunctionComponent} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumeEducation, ResumeEducationSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
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
        <Grid container item style={{padding: theme.spacing(4,smDown?1:4)}} className={globalClasses.resumeSection}>
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
                <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                    {
                        props.sectionData.educationExperiences?.map((experience: ResumeEducation, index2: number) => {
                            return <Grid key={index2} item container alignContent='flex-start'
                                         style={{
                                             borderBottom: `1px solid ${index2 >= (props.sectionData.educationExperiences?.length ?? 0) - 2 ? "transparent" : COLORS.LIGHTGRAY}`,
                                             // padding: theme.spacing(1.75, 0)
                                         }} xs={12}>
                                <Grid container item spacing={2}>
                                    <Grid item>
                                        <Typography role={'educationheader'} display='inline'
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
                                    <Grid item md={4}>
                                        <Typography display='inline'
                                                    variant='body1'
                                        >{experience.dateStart?.toString().replaceAll('-', '.')}</Typography>
                                        <Typography display='inline'
                                                    variant='body1'
                                                    style={{
                                                        margin: theme.spacing(0, 1)
                                                    }}>—</Typography>
                                        <Typography display='inline'
                                                    variant='body1'
                                        >{experience.dateEnd?.toString().replaceAll('-', '.')}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item>
                                    <Typography
                                        variant='body1' gutterBottom>{experience.description}</Typography>
                                </Grid>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeEducationSection