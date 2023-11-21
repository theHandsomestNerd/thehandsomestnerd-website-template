import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Card, Grid, Typography} from '@mui/material'
import AnimatedAboutUsItem from "./AnimatedAboutUsItem";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {AnimatedAboutUsSectionType, AnimatedServiceItemNoRefType, ServiceAmenityType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {Circle} from "@mui/icons-material";
import {motion, useAnimationControls} from "framer-motion"
import BulletedHeader from "./BulletedHeader";
import HorizontalAmenity from "./HorizontalAmenity";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: '64px',
        backgroundColor: '#f6f6f6'
    },
}))


interface IProps {
    sectionData: AnimatedAboutUsSectionType
}

const AnimatedAboutUsSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    // const mdDown = widthUtils.useIsWidthDown('md')
    const customizedThemeContext = useContext(CustomizedThemeContext)


    return (
        <ThemeProvider theme={customizedThemeContext.customizedTheme}>
            <Grid container item className={classes.root} xs={12} alignItems='center'>
                <Grid item container justifyContent='center' spacing={2}>
                    {props.sectionData.servicesList?.map((service: AnimatedServiceItemNoRefType, index: number) => {
                        return <Grid item xs={12} sm={3} key={index}><AnimatedAboutUsItem service={service}/></Grid>
                    })}
                </Grid>
                <Grid item container style={{padding: customizedThemeContext.customizedTheme.spacing(8, 6)}}
                      spacing={2} justifyContent='center'>
                    <Grid item xs={12} sm={6}>
                        <Grid item container>
                            <BulletedHeader textContent={props.sectionData?.contentPreTitle} heroBullet={props.sectionData?.heroBullet} />
                        </Grid>
                        <Grid container item>
                            <Grid item container wrap='nowrap' maxWidth={'600px'}>
                                <Grid item>
                                    <Typography style={{fontSize: "48px"}} gutterBottom color='primary' variant='h2'
                                                align='center'
                                                display='inline'>{props.sectionData.contentTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.contentTexts?.map((segment: string, index: number) => (
                                <Grid item key={index} maxWidth={'700px'}>
                                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container>
                            <Grid item style={{padding: customizedThemeContext.customizedTheme.spacing(4, 0)}}>
                                <Typography variant='h6'
                                            gutterBottom>{props.sectionData?.highlightedAmenitiesTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{paddingBottom: "32px"}}>
                            {props.sectionData.highlightedAmenities?.map((amenity: ServiceAmenityType, index: number) => {
                                return <Grid item key={index}><HorizontalAmenity amenity={amenity} /></Grid>
                            })}
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.highlightedAmenitiesTexts?.map((segment: string, index: number) => (
                                <Grid item key={index} maxWidth={'700px'}>
                                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container style={{paddingLeft: customizedThemeContext.customizedTheme.spacing(3)}}>
                            {props.sectionData?.highlightedAmenitiesBullets?.map((segment: string, index: number) => (
                                <Grid item container key={index} alignContent='center' spacing={1}>
                                    <Grid item><Circle style={{fontSize: "8px"}}/></Grid><Grid item><Typography
                                    variant='body1' gutterBottom>{segment}</Typography></Grid>
                                </Grid>))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} spacing={2} style={{position: "relative"}}>
                        {
                            <Grid item container justifyContent='center' alignContent='center'>
                                <Grid
                                    container
                                    item
                                    style={{
                                        left: "200px",
                                        top: "50%",
                                        paddingTop: "8px",
                                        borderRadius: "50%",
                                        height: "90px",
                                        width: "90px",
                                        position: "absolute",
                                        backgroundColor: customizedThemeContext.customizedTheme.palette.background.paper
                                    }}
                                >
                                    <Grid item>
                                        <motion.div style={{
                                            width: 64,
                                            height: 64,
                                            marginLeft: "12px",
                                            marginTop: "6px"
                                        }}
                                                    animate={{rotate: 360}}
                                                    transition={{ease: "linear", duration: 10, repeat: Infinity}}
                                        >

                                            <img
                                                width={64}
                                                height={64}
                                                src={urlFor(props.sectionData?.servicesMasonryAccentImageSrc ?? "").width(64).height(64).url() ?? ""}
                                            />
                                        </motion.div>
                                    </Grid>
                                </Grid>
                                {/*</Card>*/}
                            </Grid>
                        }
                        {
                            props.sectionData?.servicesImageSrcArr &&
                            <Grid item container xs={12} justifyContent='center'>
                                <Grid item style={{marginBottom: "8px",}}><img
                                    src={urlFor(props.sectionData?.servicesImageSrcArr[0] ?? "").url() ?? ""}/></Grid>
                            </Grid>
                        }
                        {
                            props.sectionData?.servicesImageSrcArr &&
                            <Grid item container spacing={2} justifyContent='center' xs={12} minWidth={522}
                                  maxWidth={"100%"}>
                                <Grid item xs={6}>
                                    <img src={urlFor(props.sectionData?.servicesImageSrcArr[1] ?? "").url() ?? ""}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={urlFor(props.sectionData?.servicesImageSrcArr[2] ?? "").url() ?? ""}/>
                                </Grid>
                            </Grid>
                        }

                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default AnimatedAboutUsSection