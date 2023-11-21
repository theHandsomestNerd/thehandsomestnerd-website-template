import React, {FunctionComponent, useContext} from 'react'
import {Card, Grid, ThemeProvider, Typography} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import {AnimatedServiceItemNoRefType} from "../BlockContentTypes";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import ColoredPng from "../colored-png/ColoredPng";
import {motion, useAnimationControls} from "framer-motion"

interface IProps {
    service: AnimatedServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
}

const AnimatedServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const customizedTheme = useContext(CustomizedThemeContext)
    const controls = useAnimationControls()

    const animateShrinkIcon = async () => {
        await controls.start({scale: 1})
    }

    const animateGrowIcon = async () => {
        await controls.start({scale: 1.1})
    }

    return (
        <ThemeProvider theme={customizedTheme.customizedTheme} key={uuidv4()}>
            <motion.div
                onHoverStart={async () => {
                    await animateShrinkIcon()
                }}
                onHoverEnd={() => {
                    animateGrowIcon()
                }}
            >
                <Card>
                    <Grid item container xs={12} md={6}
                          padding={customizedTheme.customizedTheme.spacing(3, 2)}
                          style={{backgroundColor: "#000000", position: "relative"}}
                          justifyContent='center'>
                        <Card  sx={{
                            display: {sm:'none', md:'block'},
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
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right",
                            backgroundImage: `url(${urlFor(props.service.backgroundImageSrc ?? "").url() ?? ""})`,
                        }} justifyContent='center'>
                            <Grid item>
                                <Typography color='textSecondary' style={{marginTop: "16px", marginBottom: "16px",}}
                                            variant='h6' align='center'>{props.service.contentTitle}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography color='textSecondary' variant='body1' align='center'
                                            maxWidth={350}>{props.service.contentText}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </motion.div>
        </ThemeProvider>
    )
}

export default AnimatedServiceItem