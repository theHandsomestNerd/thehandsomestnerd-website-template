import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {AnimatedServiceItemNoRefType, AnimatedServicesSectionType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import AnimatedServiceItem from "./AnimatedServiceItem";
import BulletedHeader from "./BulletedHeader";
import shape2 from "./abstract-shapes-background/services-v1-shape2-dark-blue.png"
import shape3 from "./abstract-shapes-background/services-v1-shape3-dark-blue.png"
import shape4 from "./abstract-shapes-background/services-v1-shape4-cyan.png"
import shape5 from "./abstract-shapes-background/services-v1-shape5-dark-blue.png"
import shape6 from "./abstract-shapes-background/services-v1-shape6-dark-blue.png"
import shape7 from "./abstract-shapes-background/services-v1-shape7-dark-blue.png"
import shape8 from "./abstract-shapes-background/services-v1-shape8-cyan.png"
import shape9 from "./abstract-shapes-background/services-v1-shape9-dark-blue.png"
import shape10 from "./abstract-shapes-background/services-v1-shape10-dark-blue.png"
import shape11 from "./abstract-shapes-background/services-v1-shape11-dark-blue.png"
import AbstractShapesBackground from "./abstract-shapes-background/AbstractShapesBackground";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: '56px',
        paddingBottom: '64px',
        overflow: "hidden"
    },
}))


interface IProps {
    sectionData: AnimatedServicesSectionType
}

const AnimatedServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()

    const pageContext = useContext(PageContext)
    // const mdDown = widthUtils.useIsWidthDown('md')
    const customizedThemeContext = useContext(CustomizedThemeContext)

    return (
        <ThemeProvider theme={customizedThemeContext.customizedTheme}>
            <Grid container item className={classes.root} xs={12} alignItems='center' style={{
                position: "relative",
                // backgroundColor:customizedThemeContext.customizedTheme.palette.primary.dark
            }}>
                <Grid item container style={{padding: customizedThemeContext.customizedTheme.spacing(8, 6), zIndex: 10}}
                      spacing={2} justifyContent='center'>
                    <Grid item xs={12}>
                        <Grid item container>
                            <BulletedHeader isCenter={true} color='secondary'
                                            textContent={props.sectionData?.contentPreTitle}
                                            heroBullet={props.sectionData?.heroBullet}/>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item container justifyContent='center' maxWidth={800}>
                                <Grid item>
                                    <Typography color='textSecondary' style={{fontSize: "48px"}} gutterBottom
                                                variant='h2'
                                                align='center'>{props.sectionData.contentTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item container justifyContent='center' maxWidth={640}>
                                {props.sectionData?.contentTexts?.map((segment: string, index: number) => (
                                    <Grid item key={`content-text-${index}`}>
                                        <Typography color='textSecondary' align='center' variant='body1'
                                                    gutterBottom>{segment}</Typography>
                                    </Grid>))}
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item container justifyContent='center' spacing={2}>
                        {props.sectionData.servicesList?.map((service: AnimatedServiceItemNoRefType, index: number) => {
                            return <Grid key={`service-item-${index}`} item xs={6}><AnimatedServiceItem
                                service={service}/></Grid>
                        })}
                    </Grid>
                    <Grid item container justifyContent='center' spacing={2}>
                        <Grid item container justifyContent='center' style={{marginTop: "32px"}}>
                            <Grid item maxWidth={800}>
                                <Typography style={{fontSize: "48px"}} gutterBottom color='textSecondary' variant='h2'
                                            align='center'>{props.sectionData.contentSummaryTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            {props.sectionData?.contentSummaryTexts?.map((segment: string, index: number) => (
                                <Grid item key={index} maxWidth={640}>
                                    <Typography color='textSecondary' align='center' variant='body1'
                                                gutterBottom>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <Button
                                onClick={(e: any) => {
                                    props.sectionData.ctaButtonText &&
                                    firebaseAnalyticsClient.ctaClick("animated-services-section", props.sectionData.ctaButtonText, pageContext.analyticsId,)
                                }}
                                component='div'
                                variant={'contained'}
                                color={'primary'}
                                href={props.sectionData.ctaButtonLink ?? ''}
                                style={{
                                    marginTop: "18px",
                                    border: "1px solid #FAFAFA"
                                }}
                            >
                                <Typography
                                    variant='button'
                                    color='secondary'>
                                    {props.sectionData.ctaButtonText}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <AbstractShapesBackground />
            </Grid>
        </ThemeProvider>
    )
}

export default AnimatedServicesSection