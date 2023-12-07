import React, {FunctionComponent} from 'react'
import {StyledEngineProvider, Theme, ThemeProvider} from "@mui/material/styles";
import {Grid, Typography, useTheme} from '@mui/material'
import {WebDevTestimonialsSectionType, WebDevTestimonialsType} from "../../BlockContentTypes";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import {COLORS} from "../../../theme/common/ColorPalette";





interface IProps {
    sectionData: WebDevTestimonialsSectionType
}

const WebDevTestimonialsSection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={WebDevSiteTheme}><Grid
                container
                item
                style={{
                    paddingTop: theme.spacing(8),
                    paddingBottom: theme.spacing(8),
                    backgroundImage: `url('${urlFor(props.sectionData.backgroundImage ?? "").url() ?? ""}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#1F1F1F"
                }}
                justifyContent='center'
            >
                <Grid container item spacing={3} xs={11}>
                    <Grid item container alignContent='flex-start' spacing={1}>
                        <Grid container item>
                            <Grid item container>
                                <Typography variant='subtitle2'
                                            color='secondary'
                                            style={{color: COLORS.AQUA}}
                                >{props.sectionData?.preTitle}</Typography>
                            </Grid>
                            <Grid item container wrap='nowrap'>
                                <Grid item>
                                    <Typography color='primary' variant='h2' align='center'
                                                display='inline'>{props.sectionData?.title}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography color='primary' variant='body1'
                                        style={{fontFamily: "Raleway"}}>{props.sectionData.introduction}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        {
                            props.sectionData.feedbackEntries?.map((feedbackEntry: WebDevTestimonialsType, index2: number) => {
                                return <Grid item container alignContent='space-between'
                                             key={index2}
                                             style={{
                                                 border: `1px solid black`,
                                                 backgroundColor: "white",
                                                 padding: theme.spacing(4),
                                                 margin: theme.spacing(2)
                                             }} md={5} spacing={2}>
                                    <Grid item container>
                                        <Grid container item>
                                            <Typography
                                                color='textSecondary'
                                                variant='h6' gutterBottom>{feedbackEntry.quoteSummary}</Typography>
                                        </Grid>
                                        <Grid container item>
                                            <Typography
                                                color='textSecondary'
                                                variant='body1' gutterBottom>"{feedbackEntry.quote}"</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container>
                                        <Grid item container xs={3}>

                                            <img src={urlFor(feedbackEntry.imageSrc ?? "").url() ?? ""} height={50}
                                                 style={{maxWidth: "100%"}}/>
                                        </Grid>
                                        <Grid item container xs={9}>
                                            <Grid container item>
                                                <Typography display='inline'
                                                            color='textSecondary'
                                                            variant='body2'>{feedbackEntry.customerName}</Typography>
                                            </Grid>
                                            <Grid item container style={{color: COLORS.AQUA}}>
                                                <Typography display='inline'
                                                            color='inherit'
                                                            variant='subtitle2'>{feedbackEntry.customerTitle}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                <Typography display='inline'
                                                            color='textSecondary'
                                                            variant='body1'>{feedbackEntry.companyName}</Typography>
                                            </Grid>
                                        </Grid>
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

export default WebDevTestimonialsSection