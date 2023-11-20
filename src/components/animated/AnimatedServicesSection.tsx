import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Box, Button, Grid, IconButton, Typography, useMediaQuery} from '@mui/material'
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {AnimatedServiceItemNoRefType, AnimatedServicesSectionType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import AnimatedServiceItem from "./AnimatedServiceItem";
import BulletedHeader from "./BulletedHeader";
import AbstractShapesBackground from "./abstract-shapes-background/AbstractShapesBackground";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {PlayArrow} from "@mui/icons-material";
import {motion} from 'framer-motion';

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
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.customizedTheme?.breakpoints.down('sm'))

    const pageContext = useContext(PageContext)

    return (
        <ThemeProvider theme={customizedThemeContext.customizedTheme}>
            <Grid container item className={classes.root} xs={12} alignItems='center' style={{
                position: "relative",
                // backgroundColor:customizedThemeContext.customizedTheme.palette.primary.dark
            }}>
                <Grid item container
                      style={{padding: customizedThemeContext.customizedTheme?.spacing(8, 6), zIndex: 10}}
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
                <AbstractShapesBackground/>
            </Grid>
            <Grid container item style={{
                position: "relative",
                backgroundRepeat: "repeat-x",
                backgroundSize: "256px",
                backgroundImage: `url(${urlFor(props.sectionData?.videoPreviewSectionBackgroundImageSrc ?? "").url() ?? ""})`
            }} justifyContent='center' alignContent='center'>
                <Grid item container xs={12} justifyContent='center' style={{top: -64, position: "relative"}}>
                    <Grid item xs={12} sm={10} sx={{height: "100%", position: "relative"}}
                    >
                        <img height="100%" width="100%"
                             src={urlFor(props.sectionData?.videoPreviewImageSrc ?? "").url() ?? ""}/>

                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={8} sx={{position: "absolute", height: "100%",}} justifyContent='center'
                      alignContent='center' alignItems='center'>
                    <Grid item container sx={{}} justifyContent='center' alignContent='center' alignItems='center'>
                        <Grid item container style={{position: "relative"}} justifyContent='center'
                              alignContent='center'>
                            <IconButton size='large' sx={{
                                width: 96,
                                height: 96,
                                position: "relative",
                                zIndex: 10,
                                backgroundColor: customizedThemeContext.customizedTheme?.palette?.primary.main
                            }}>
                                <Grid
                                    item
                                    container
                                    justifyContent='center'
                                    style={{height: "100%",}}
                                    alignContent='center'>
                                    <Grid item>
                                        <PlayArrow style={{fontSize: "96px"}} color='secondary'/>
                                    </Grid>
                                </Grid>
                            </IconButton>
                            <Grid item style={{
                                position: "absolute", width: "100%", height: "100%", zIndex: 1,
                            }} container justifyContent='center' alignContent='center'>
                                <Grid item>
                                    <motion.div
                                        key={`play-circle-1`}
                                        initial={{scale: 1}}
                                        animate={{scale: 5, opacity: 0}}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 5
                                        }}>
                                        <Box sx={{
                                            borderRadius: "50%",
                                            width: 24,
                                            height: 24,
                                            backgroundColor: "transparent",
                                            border: `1px solid ${"white"}`
                                        }}>

                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                            <Grid justifyContent='center' alignContent='center' item
                                  style={{position: "absolute", width: "100%", height: "100%",}} container>
                                <Grid item>
                                    <motion.div
                                        key={`play-circle-2`}
                                        initial={{scale: 1}}
                                        animate={{scale: 5, opacity: 0}}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 5
                                        }}>
                                        <Box sx={{
                                            borderRadius: "50%",
                                            width: 32,
                                            height: 32,
                                            backgroundColor: "transparent",
                                            border: `1px solid ${"white"}`
                                        }}>

                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                            <Grid item justifyContent='center' alignContent='center'
                                  style={{position: "absolute", width: "100%", height: "100%",}} container>
                                <Grid item>
                                    <motion.div
                                        key={`play-circle-3`}
                                        initial={{scale: 1}}
                                        animate={{scale: 5, opacity: 0}}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 5
                                        }}>
                                        <Box sx={{
                                            borderRadius: "50%",
                                            width: 42,
                                            height: 42,
                                            backgroundColor: "transparent",
                                            border: `1px solid ${"white"}`
                                        }}>

                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center' style={{marginTop: smDown ? "12px" : "24px"}}>
                            <Grid item>
                                <Typography color='secondary' variant={smDown ? 'h5' : 'h3'}
                                            gutterBottom>{props.sectionData?.videoPreviewText}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default AnimatedServicesSection