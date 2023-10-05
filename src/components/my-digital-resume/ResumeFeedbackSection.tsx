import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from "@mui/material/styles";
import {Grid, Typography, useTheme} from '@mui/material'
import {ResumeFeedback, ResumeFeedbackSectionType} from "../BlockContentTypes";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {COLORS} from "../../theme/common/ColorPalette";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";


interface IProps {
    sectionData: ResumeFeedbackSectionType
}

const ResumeFeedbackSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    // const theme = useTheme()

    const mediaQueryContext = useContext(MediaQueriesContext)
    const xsOnly = mediaQueryContext.xsOnly



    return (
            <ThemeProvider theme={DigitalResumeTheme}><Grid
                container
                item
                style={{
                    padding: DigitalResumeTheme.spacing(4)
                }}
                className={globalClasses.resumeSection}
            >
                <Grid container item spacing={3}>
                    <Grid item container md={4} alignContent='flex-start' spacing={1}>
                        <Grid item container>
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
                    <Grid item container md={8} spacing={2} justifyContent={xsOnly?"center":"flex-start"}>
                        {
                            props.sectionData.feedbackEntries?.map((feedbackEntry: ResumeFeedback, index2: number) => {
                                return <Grid item container alignContent='flex-start'
                                             style={{
                                                 borderBottom: `1px solid ${index2 >= (props.sectionData.feedbackEntries?.length ?? 0) - 2 ? "transparent" : COLORS.LIGHTGRAY}`,
                                                 // padding: theme.spacing(1.75, 0)
                                             }} xs={12} spacing={2} justifyContent='flex-start'>
                                    <Grid item md={3} lg={2} xl={2} container>
                                        <img src={urlFor(feedbackEntry.imageSrc ?? "").url() ?? ""} height={50} style={{maxWidth:"100%"}}/>
                                    </Grid>
                                    <Grid item md={9} lg={10} xl={10} container>
                                        <Grid container item>
                                                <Typography display='inline'
                                                            variant='body2'>{feedbackEntry.customerName}</Typography>
                                        </Grid>
                                        <Grid container item>
                                            <Grid item>

                                                <Typography display='inline'
                                                            variant='subtitle1'>{feedbackEntry.customerTitle}</Typography>@
                                                <Typography display='inline'
                                                            variant='subtitle1'>{feedbackEntry.companyName}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container item>
                                            <Typography
                                                variant='body1' gutterBottom>"{feedbackEntry.quote}"</Typography>
                                        </Grid>
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

export default ResumeFeedbackSection