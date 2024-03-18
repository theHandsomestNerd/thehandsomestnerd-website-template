import React, {FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme} from '@mui/material'
import {AnimatedServiceItemNoRefType, AnimatedServicesSectionType} from "../BlockContentTypes";
import PageContext from "../page-context/PageContext";
import AnimatedServiceItem from "./AnimatedServiceItem";
import BulletedHeader from "./BulletedHeader";
import AbstractShapesBackground from "./abstract-shapes-background/AbstractShapesBackground";
import {PlayArrow} from "@mui/icons-material";
import {motion} from 'framer-motion';
import FirebaseContext from "../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '56px',
        paddingBottom: '64px',
        overflow: "hidden",
        minWidth:"350px"
    },
}))


interface IProps {
    sectionData: AnimatedServicesSectionType
}

const AnimatedServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    const theme= useTheme()
    const sanityContext = useContext(SanityContext)

    const pageContext = useContext(PageContext)
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const firebaseContext = useContext(FirebaseContext)

    return (
        <Grid container item>
            <Grid container item className={classes.root} xs={12} alignItems='center' style={{
                position: "relative",
            }}>
                <Grid item container
                      style={{padding: theme?.spacing(8, 6), zIndex: 10}}
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
                            return <Grid key={`service-item-${index}`} item sm={6}><AnimatedServiceItem
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
                                onClick={() => {
                                    props.sectionData.ctaButtonText &&
                                    firebaseContext.analytics.ctaClick("animated-services-section", props.sectionData.ctaButtonText, pageContext.analyticsId,)
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
                <AbstractShapesBackground imagesArray={props.sectionData.imagesArray}/>
            </Grid>
            <Grid container item style={{
                position: "relative",
                backgroundRepeat: "repeat-x",
                backgroundSize: "256px",
                backgroundImage: `url(${sanityContext.placeholderOrImage(props.sectionData?.videoPreviewSectionBackgroundImageSrc, 230, 265)})`
            }} justifyContent='center' alignContent='center'>
                <Grid item container xs={12} justifyContent='center' style={{top: -64, position: "relative"}}>
                    <Grid item xs={12} sm={10} sx={{height: "100%", position: "relative"}}
                    >
                        <img height="100%" width="100%"

                             src={sanityContext.placeholderOrImage(props.sectionData?.videoPreviewImageSrc, 300, 500)}/>

                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={8} sx={{position: "absolute", height: "100%",}} justifyContent='center'
                      alignContent='center' alignItems='center'>
                    <Grid item container justifyContent='center' alignContent='center' alignItems='center'>
                        <Grid item container sx={{position: "relative"}} justifyContent='center'
                              alignContent='center' alignItems='center'>
                            <IconButton sx={{
                                width: 56,
                                height: 56,
                                position: "relative",
                                zIndex: 10,
                                backgroundColor: theme?.palette?.primary.main
                            }}>
                                        <PlayArrow style={{fontSize: "2.8rem"}} color='secondary'/>
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
                                <Typography color='secondary' variant={ 'h3'}
                                            gutterBottom align='center'>{props.sectionData?.videoPreviewText}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid></Grid>
    )
}

export default AnimatedServicesSection