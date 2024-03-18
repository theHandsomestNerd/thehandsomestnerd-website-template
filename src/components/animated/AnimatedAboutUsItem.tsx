import React, {FunctionComponent, useContext} from 'react'
import {Card, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import {AnimatedServiceItemNoRefType} from "../BlockContentTypes";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {motion, useAnimationControls} from "framer-motion";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    service: AnimatedServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
}


const AnimatedAboutUsItem: FunctionComponent<IProps> = (props: IProps) => {

    // const customizedTheme = useContext(CustomizedThemeContext)
    const controls = useAnimationControls()
    const textColorControls = useAnimationControls()
    const overlayControl = useAnimationControls()
    const sanityContext = useContext(SanityContext)

    const theme = useTheme()

    const animateServiceHover = async () => {
        overlayControl.start({opacity: 1}, {duration: .5})
        controls.start({scale: 1}, {duration: .5})
        textColorControls.start({color: theme.palette.primary.main})
    }

    const animateServiceNoHover = async () => {
        controls.start({scale: 1.1}, {duration: .25})
        overlayControl.start({opacity: 0}, {duration: .5})
        textColorControls.start({color: theme.palette.text.primary})
    }

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <motion.div key={uuidv4()} onHoverStart={async () => {
            animateServiceHover()
        }} onHoverEnd={async () => {
            animateServiceNoHover()
        }}>
            <Grid item sx={{border: "1px solid #e6e6e6", position: "relative"}} maxWidth={smDown ? 550 : 450}>
                <Grid item>
                    <Grid item style={{position: "relative", overflow: "hidden"}}>
                        <ImageWIthButtonOverlay
                            source={props.service.slug?.current}
                            imageAltText={props.service.imageSrcAltText}
                            imageSrc={props.service.imageSrc} height={200}
                        />
                        <motion.div initial={{opacity: 0}} animate={overlayControl}>
                            <Grid item container
                                  style={{
                                      zIndex: 1,
                                      top: -4,
                                      backgroundColor: "rgba(0,0,0,.4)",
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%"
                                  }}>
                            </Grid>
                        </motion.div>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'
                          style={{position: "absolute", top: "154px"}}>
                        <Card elevation={0} style={{
                            borderRadius: "50%",
                            border: "1px solid #e6e6e6",
                            height: "90px",
                            width: "90px",
                            zIndex: 3
                        }}>
                            <Grid container justifyContent='center' alignItems='center'
                                  alignContent='center' style={{height: "100%"}}>
                                <motion.div animate={controls} initial={{scale: 1.1}}>
                                    <img style={{zIndex: 2}} width={64} height={64}
                                         src={sanityContext.urlFor(props.service.iconImageSrc ?? "").url() ?? sanityContext.placeholderOrImage(props.service.iconImageSrc, 64, 64)}/>
                                </motion.div>
                            </Grid>
                        </Card>
                        <Grid item container style={{
                            backgroundColor: theme.palette.primary.main,
                            height: "8px",
                            zIndex: 2,
                            position: "absolute"
                        }}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{
                    padding: theme.spacing(4, 4, 4, 4),
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundImage: `url(${sanityContext.urlFor(props.service.backgroundImageSrc ?? "").url() ?? ""})`,
                }} justifyContent='center'>
                    <Grid item>
                        <motion.div animate={textColorControls} initial={{color: 'initial'}}>
                            <Typography style={{marginTop: "16px", marginBottom: "16px",}}
                                        variant='h6' align='center' noWrap>{props.service.contentTitle}</Typography>
                        </motion.div>
                    </Grid>
                    <Grid item container justifyContent='center' minWidth={150}>
                        <Typography variant='body1' align='center'
                        >{props.service.contentText}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default AnimatedAboutUsItem