import React, {FunctionComponent} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import AnimatedAboutUsItem from "./AnimatedAboutUsItem";
import {AnimatedAboutUsSectionType, AnimatedServiceItemNoRefType, ServiceAmenityType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {Circle} from "@mui/icons-material";
import {motion} from "framer-motion"
import BulletedHeader from "./BulletedHeader";
import HorizontalAmenity from "./HorizontalAmenity";
import imagePlaceholderClient from "../../utils/imagePlaceholderClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: '64px',
        backgroundColor: '#f6f6f6',
        position: "relative"
    },
}))


interface IProps {
    sectionData: AnimatedAboutUsSectionType
}

const AnimatedAboutUsSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))

    return (
            <Grid container item className={classes.root} xs={12} alignItems='center'>
                {!xsOnly && <motion.div style={{
                    opacity: .2,
                    width: 256,
                    height: 256,
                    bottom: 32,
                    left: 32,
                    // marginLeft: "-10px",
                    // marginTop: "-5px",
                    position: "absolute"
                }}
                             animate={{rotate: 360}}
                             transition={{ease: "linear", duration: 10, repeat: Infinity}}
                >

                    <img
                        width={256}
                        height={256}
                        src={urlFor(props.sectionData?.servicesMasonryAccentImageSrc ?? "").width(256).height(256).url() ?? imagePlaceholderClient.placeholderOrImage(props.sectionData?.servicesMasonryAccentImageSrc, 256, 256)}
                    />
                </motion.div>}
                <Grid item container justifyContent='center' spacing={2} px={4}>
                    {props.sectionData.servicesList?.map((service: AnimatedServiceItemNoRefType, index: number) => {
                        return <Grid item xs={12} sm={5} md={4} key={index} container justifyContent='center'><AnimatedAboutUsItem service={service}/></Grid>
                    })}
                </Grid>
                <Grid item container style={{padding: theme.spacing(8, 6)}}
                      spacing={2} >
                    <Grid item container xs={12} sm={12} md={6}><Grid item  container xs={12}>
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
                            <Grid item style={{padding: theme.spacing(4, 0)}}>
                                <Typography variant='h6'
                                            gutterBottom>{props.sectionData?.highlightedAmenitiesTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{paddingBottom: "32px"}} spacing={2}>
                            {props.sectionData.highlightedAmenities?.map((amenity: ServiceAmenityType, index: number) => {
                                return <Grid container item key={index} xs={12} sm={6}><HorizontalAmenity amenity={amenity} /></Grid>
                            })}
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.highlightedAmenitiesTexts?.map((segment: string, index: number) => (
                                <Grid item key={index} maxWidth={'700px'}>
                                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container style={{paddingLeft: theme.spacing(3)}}>
                            {props.sectionData?.highlightedAmenitiesBullets?.map((segment: string, index: number) => (
                                <Grid item container key={index} alignContent='center' spacing={1}>
                                    <Grid item><Circle style={{fontSize: "8px"}}/></Grid><Grid item><Typography
                                    variant='body1' gutterBottom>{segment}</Typography></Grid>
                                </Grid>))}
                        </Grid>
                    </Grid></Grid>

                    <Grid item xs={12} md={6} spacing={2} container justifyContent='center'>

                        <Grid container item spacing={1} style={{position: "relative"}} >
                            {
                                <Grid item container justifyContent='center' alignContent='center' alignItems='center' style={{
                                    left: "calc(50% - 45px)",
                                    top: "calc(50% - 8px)",
                                    // top: "50%",
                                    paddingTop: "8px",
                                    borderRadius: "50%",
                                    height: "90px",
                                    width: "90px",
                                    position: "absolute",
                                    backgroundColor: theme.palette.background.paper
                                }}>

                                    <Grid item>
                                        <motion.div style={{
                                            width: 64,
                                            height: 64,
                                            marginLeft: "-10px",
                                            marginTop: "-5px"
                                        }}
                                                    animate={{rotate: 360}}
                                                    transition={{ease: "linear", duration: 10, repeat: Infinity}}
                                        >

                                            <img
                                                width={64}
                                                height={64}
                                                src={urlFor(props.sectionData?.servicesMasonryAccentImageSrc ?? "").width(64).height(64).url() ?? imagePlaceholderClient.placeholderOrImage(props.sectionData?.servicesMasonryAccentImageSrc, 64, 64)}
                                            />
                                        </motion.div>
                                    </Grid>
                                    {/*</Card>*/}
                                </Grid>
                            }
                            {
                                props.sectionData?.servicesImageSrcArr &&
                                <Grid item container justifyContent='center' alignContent='flex-end' alignItems='flex-end'>
                                    <Grid item>
                                        <img
                                        src={(props.sectionData?.servicesImageSrcArr[0] ? urlFor(props.sectionData?.servicesImageSrcArr[0]).url() : imagePlaceholderClient.placeholderOrImage(props.sectionData?.servicesImageSrcArr[0], 485, 356)) ?? ""}/>
                                    </Grid>
                                </Grid>
                            }
                            {
                                props.sectionData?.servicesImageSrcArr &&
                                <Grid item container justifyContent='center' spacing={2}>
                                    <Grid item xs={6} container justifyContent='flex-end'>
                                        <Grid item><img
                                            src={urlFor(props.sectionData?.servicesImageSrcArr[1] ?? "").url() ?? imagePlaceholderClient.placeholderOrImage(props.sectionData?.servicesImageSrcArr[1], 230, 265)}/></Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid item>
                                            <img
                                                style={{maxWidth: "100%"}}
                                            src={urlFor(props.sectionData?.servicesImageSrcArr[2] ?? "").url() ?? imagePlaceholderClient.placeholderOrImage(props.sectionData?.servicesImageSrcArr[2], 260, 305)}/></Grid>
                                    </Grid>
                                </Grid>
                            }

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
    )
}

export default AnimatedAboutUsSection