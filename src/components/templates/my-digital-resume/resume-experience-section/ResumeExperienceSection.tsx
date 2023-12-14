import React, {FunctionComponent} from 'react'
import {Chip, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumeExperience, ResumeExperienceSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {COLORS} from "../../../../theme/common/ColorPalette";
import ResumeExperienceItem from "./ResumeExperienceItem";

interface IProps {
    sectionData: ResumeExperienceSectionType
}

const ResumeExperienceSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))
    return (
        <Grid
            container
            item
            style={{padding: theme.spacing(4,smDown?1:4)}}
            className={classes.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container><Typography variant='h6'>{props.sectionData.title}</Typography><Typography
                        variant='h6'
                        color='primary'
                        display='inline'>.</Typography></Grid>
                    <Grid item><Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                    {
                        props.sectionData.experiences?.map((experience: ResumeExperience, index2: number) => {
                            return <ResumeExperienceItem experience={experience} key={index2}/>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeExperienceSection