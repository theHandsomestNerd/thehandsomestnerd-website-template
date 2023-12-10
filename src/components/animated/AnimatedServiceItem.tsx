import React, {FunctionComponent} from 'react'
import {Card, Grid, Typography, useTheme} from '@mui/material'
import {AnimatedServiceItemNoRefType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import ColoredPng from "../colored-png/ColoredPng";
import {motion, useAnimation, useAnimationControls} from "framer-motion"
import {useInView} from "react-intersection-observer";
import imagePlaceholderClient from "../../utils/imagePlaceholderClient";

interface IProps {
    service: AnimatedServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
}

const AnimatedServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const controls = useAnimationControls()
    const theme = useTheme()
    const animateShrinkIcon = async () => {
        await controls.start({scale: 1})
    }

    const animateGrowIcon = async () => {
        await controls.start({scale: 1.1})
    }

    const shapeControls = useAnimation();
    const [shapeRef, shapeInView] = useInView();

    React.useEffect(() => {
        if (shapeInView) {
            shapeControls.start("onScreen");
        } else {
            shapeControls.start("offScreen");
        }
    }, [shapeControls, shapeInView]);

    const variants = {
        onScreen: {opacity: 1, transition: {duration: 2.5}},
        offScreen: {opacity: 0, transition: {duration: 1}}
    };

    return (
        <motion.div
            ref={shapeRef}
            variants={variants}
            initial="offScreen"
            animate={shapeControls}
            onHoverStart={async () => {
                await animateShrinkIcon()
            }}
            onHoverEnd={() => {
                animateGrowIcon()
            }}
        >
            <Card>
                <Grid container item
                      padding={theme.spacing(3, 2)}
                      style={{backgroundColor: "#000000", position: "relative"}}
                      justifyContent='center'>
                    <Card sx={{
                        display: {sm: 'none', md: 'block'},
                        position: "absolute",
                        bottom: -180,
                        width: "200px",
                        height: "200px",
                        backgroundColor: "#294856",
                        borderRadius: "50%"
                    }}></Card>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Grid item style={{position: "relative"}}>
                            <Card style={{
                                position: "absolute",
                                bottom: -8,
                                right: -8,
                                opacity: .5,
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#294856",
                                borderRadius: "50%"
                            }}></Card>
                            <motion.div
                                animate={controls}
                                initial={{scale: 1.15}}
                                // whileHover={{scale: 1}}
                                transition={{
                                    duration: .5,
                                }}
                            >
                                <ColoredPng size={64} color={'#01ecfd'}
                                            maskAsset={props.service.iconImageSrc ?? ""}/>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <Grid item style={{
                        // backgroundSize: "contain",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "right",
                        // backgroundImage: `url(${urlFor(props.service.backgroundImageSrc ?? "").url() ?? imagePlaceholderClient.placeholderOrImage(props.service.backgroundImageSrc, 300, 500)})`,
                    }} justifyContent='center'>
                        <Grid item>
                            <Typography fontSize={24} color='textSecondary'
                                        style={{marginTop: "16px", marginBottom: "16px",}}
                                        variant='body2' align='center'>{props.service.contentTitle}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='textSecondary' variant='body1' align='center'
                                        maxWidth={350}>{props.service.contentText}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </motion.div>
    )
}

export default AnimatedServiceItem