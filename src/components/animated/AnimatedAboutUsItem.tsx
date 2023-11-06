import React, {FunctionComponent, useContext} from 'react'
import {Card, Grid, ThemeProvider, Typography} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import {AnimatedServiceItemNoRefType} from "../BlockContentTypes";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";


interface IProps {
    service: AnimatedServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
}

const AnimatedAboutUsItem: FunctionComponent<IProps> = (props: IProps) => {
    const customizedTheme = useContext(CustomizedThemeContext)
    return (
        <ThemeProvider theme={customizedTheme.customizedTheme} key={uuidv4()}>
            <Card>
                <Grid item style={{position: "relative"}}>
                    <Grid item>
                        <ImageWIthButtonOverlay
                            source={props.service.slug?.current}
                            imageAltText={props.service.imageSrcAltText}
                            imageSrc={props.service.imageSrc} height={200}
                        />

                        <Grid container item justifyContent='center' alignItems='center'
                              style={{position: "absolute", top: "154px"}}>
                            <Card elevation={0} style={{
                                borderRadius: "50%",
                                border: "1px solid #e6e6e6",
                                height: "90px",
                                width: "90px",
                                zIndex: 1
                            }}>
                                <Grid container justifyContent='center' alignItems='center'
                                      alignContent='center' style={{height: "100%"}}>
                                    <img style={{zIndex: 2}} width={64} height={64}
                                         src={urlFor(props.service.iconImageSrc ?? "").url() ?? ""}/>
                                </Grid>
                            </Card>
                            <Grid item container style={{
                                backgroundColor: customizedTheme.customizedTheme.palette.primary.main,
                                height: "8px",
                                position: "absolute"
                            }}>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{
                        padding: customizedTheme.customizedTheme.spacing(4, 4, 4, 4),
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right",
                        backgroundImage: `url(${urlFor(props.service.backgroundImageSrc ?? "").url() ?? ""})`,
                    }} justifyContent='center'>
                        <Grid item>
                            <Typography style={{marginTop: "16px", marginBottom: "16px",}}
                                        variant='h6' align='center'>{props.service.contentTitle}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' align='center' style={{maxWidth: "220px"}}
                            >{props.service.contentText}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </ThemeProvider>
    )
}

export default AnimatedAboutUsItem