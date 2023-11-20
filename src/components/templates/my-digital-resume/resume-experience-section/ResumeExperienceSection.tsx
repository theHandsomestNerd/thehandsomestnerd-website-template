import React, {FunctionComponent, useContext} from 'react'
import {Chip, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumeExperience, ResumeExperienceSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {COLORS} from "../../../../theme/common/ColorPalette";
import {ThemeProvider} from "@mui/material/styles";
import TheWebsiteTheme from "../../../../theme/Theme";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";

interface IProps {
    sectionData: ResumeExperienceSectionType
}

const ResumeExperienceSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const xsOnly = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.only('xs'))
    return (
        <ThemeProvider theme={TheWebsiteTheme
}><Grid
            container
            item
            style={{
                padding: theme.spacing(4)
            }}
            className={classes.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container><Typography variant='h6'>{props.sectionData.title}</Typography><Typography variant='h6'
                                                                                             color='primary'
                                                                                             display='inline'>.</Typography></Grid>
                    <Grid item><Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                    {
                        props.sectionData.experiences?.map((experience: ResumeExperience, index2: number) => {
                            return <Grid key={index2} item container alignContent='flex-start'
                                         role={'experiencedivider'}
                                         style={{
                                             borderBottom: `1px solid ${index2 >= (props.sectionData.experiences?.length ?? 0) - 1 ? "transparent" : COLORS.LIGHTGRAY}`,
                                             // padding: theme.spacing(1.75, 0)
                                         }} xs={12}>
                                <Grid container item role={'experienceheader'}>
                                    <Grid item xs={12} md={4}>
                                        <Typography display='inline'
                                                    variant='body2'>{experience.companyName}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={4}>

                                        <Typography display='inline'
                                                    variant='body1'>{experience.title}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={4}>

                                        <Typography display='inline'
                                                    variant='subtitle1'>{experience.companySubtitle}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item>


                                    <Grid item sm={4}>
                                        <Typography display='inline'
                                                    variant='body1'>{experience.dateStart?.toString().replaceAll('-', '.')}</Typography>

                                        {/*</Grid>*/}
                                        {/*<Grid item xs={1} container justifyContent='center'>*/}
                                        <Typography display='inline'
                                                    variant='body1' style={{margin: theme.spacing(0, 1)}}>—</Typography>

                                        {/*</Grid>*/}
                                        {/*<Grid item xs={2} container>*/}
                                        <Typography display='inline'
                                                    variant='body1'>{experience.dateEnd?.toString().replaceAll('-', '.')}</Typography>

                                    </Grid>

                                </Grid>
                                <Grid container item>
                                    <Typography
                                        variant='body1' gutterBottom>{experience.description}</Typography>
                                </Grid>
                                <Grid container item spacing={1}
                                      style={{overflowX: "scroll", paddingBottom: theme.spacing(1)}} wrap='nowrap'>
                                    {
                                        experience.skillsUsed?.map((skill, index) => {
                                            return <Grid item key={index}><Chip role={'experienceskill'} size='small' color='primary'
                                                                                label={skill.title}/></Grid>
                                        })
                                    }
                                </Grid>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}

export default ResumeExperienceSection