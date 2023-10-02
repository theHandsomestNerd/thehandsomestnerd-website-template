import React, {FunctionComponent, useContext} from 'react'
import { Theme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography, useTheme} from '@mui/material'
import {ResumeEducation, ResumeEducationSectionType} from "../BlockContentTypes";
import DigitalResumeTheme, {COLORS} from "../../theme/DigitalResumeTheme";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeEducationSectionType
}

const ResumeEducationSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    const mediaQueryContext = useContext(MediaQueriesContext)
    const xsOnly = mediaQueryContext.xsOnly


    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={DigitalResumeTheme}>
                <Grid container item style={{padding: theme.spacing(4)}} className={globalClasses.resumeSection}>
                    <Grid
                        container item spacing={3}>
                        <Grid item container md={4} alignContent='flex-start' spacing={1}>
                            <Grid item>
                                <Typography
                                    variant='h6'
                                >{props.sectionData.title}
                                    <Typography
                                        variant='h6'
                                        color='primary'
                                        display='inline'
                                    >.</Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                        </Grid>
                        <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                            {
                                props.sectionData.educationExperiences?.map((experience: ResumeEducation, index2: number) => {
                                    return <Grid item container alignContent='flex-start'
                                                 style={{
                                                     borderBottom: `1px solid ${index2 >= (props.sectionData.educationExperiences?.length ?? 0) - 2 ? "transparent" : COLORS.LIGHTGRAY}`,
                                                     // padding: theme.spacing(1.75, 0)
                                                 }} xs={12}>
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
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ResumeEducationSection