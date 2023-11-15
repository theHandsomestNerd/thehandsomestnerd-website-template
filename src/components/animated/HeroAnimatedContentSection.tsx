import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from "@mui/material/styles";
import {Button, Grid, Typography} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {HeroAnimatedContentSectionType, SanityHeroContentSlide} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import PageContext, {PageContextType} from "../page-context/PageContext";
import useCustomStyles from "../templates/mackenzies-mind/pages/Styles";
import clsx from "clsx";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {motion} from "framer-motion"

interface IProps {
    sectionData: HeroAnimatedContentSectionType
}

interface CSSProps {
    heroBaseImageUrl?: string,
    heroOverlay?: string | null
}

export const useStyles = makeStyles((theme: Theme) => ({
    contentSection: {
        height: '700px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
// minWidth:"350px"
    },
    divContainer: {
        width: '65vmin', height: '65vmin'
        //box-shadow: 0 0 0 1px;
    },

    // octagon: {overflow: 'hidden'},

    inner: {
        transform: 'rotate(45deg)',
        background: '#ee8c25'
    }
}))

const HeroAnimatedContentSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    const globalClasses = useCustomStyles({})

    const [pageNumber, setPageNumber] = React.useState<number>(0)
    const [contentSlide, setContentSlide] = React.useState<SanityHeroContentSlide | undefined>()
    const themeContext = useContext(CustomizedThemeContext)
    const pageContext: PageContextType = useContext(PageContext)

    React.useEffect(() => {
        if (props.sectionData.contentSlides[pageNumber])
            setContentSlide(props.sectionData.contentSlides[pageNumber])
    }, [props.sectionData.contentSlides, pageNumber])

    return (
        <ThemeProvider theme={themeContext.customizedTheme}>
            <Grid container item style={{overflow: "hidden", paddingTop: "148px"}}>
                <motion.div
                    animate={{scale: 1}}
                    initial={{scale: 1.1}}
                    transition={{
                        // ease: "linear",
                        duration: 2,
                        // scale: {duration: 3},
                        // opacity: {duration: .5}
                    }}
                >
                    <Grid container item style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: contentSlide?.heroImage ? `url('${urlFor(contentSlide?.heroImage).url() ?? ''}'), url('${urlFor(contentSlide?.heroImageBackground ?? "").url()}')` : "",
                        backgroundSize: 'cover, contain',
                        backgroundPosition: "center",
                        minHeight: '700px',
                        backgroundColor: 'transparent',
                        position: "relative"
                    }}>
                        <Grid container item
                              className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
                        </Grid>
                        <Grid container item wrap='nowrap' justifyContent='space-between' style={{zIndex: 2}}
                              alignItems={'center'}>
                            <Grid item>

                                <Button variant='contained'
                                        color='secondary'
                                        style={{
                                            // backgroundColor: themeContext.customizedTheme.palette.primary.main,
                                            padding: themeContext.customizedTheme.spacing(.75, 1.5),
                                            marginLeft: "8px", border: 0, borderRadius: "2px"
                                        }}
                                        onClick={() => {
                                            if (pageNumber === 0) {
                                                setPageNumber(props.sectionData.contentSlides.length - 1)
                                            } else {

                                                setPageNumber((state) => (state - 1))
                                            }
                                            firebaseAnalyticsClient.ctaClick("hero-section-slider", "back slide", pageContext.analyticsId,)
                                        }}
                                >
                                    <ArrowBack/>
                                </Button>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid item>
                                    <Grid container className={classes.contentSection} item>
                                        <Grid container justifyContent='center' alignContent={'center'}>
                                            <Grid item container justifyContent='center'>


                                            </Grid>


                                            <Grid item>
                                                <motion.div
                                                    key={pageNumber}
                                                    animate={{y: 0, opacity: 1}}
                                                    initial={{y: -400, opacity: 0}}
                                                    transition={{
                                                        // ease: "linear",
                                                        duration: 2,
                                                        y: {duration: 1},
                                                        // opacity: {duration: .5}

                                                    }}

                                                >
                                                    <Grid container item justifyContent='center'>
                                                        <Grid item container justifyContent='center' spacing={1}
                                                              wrap='nowrap'>
                                                            <Grid item>
                                                                {contentSlide?.heroBullet && <img width={12}
                                                                                                  src={urlFor(contentSlide?.heroBullet).url() ?? ""}/>}
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body1' alignContent='center'
                                                                            noWrap
                                                                            style={{
                                                                                textTransform: "uppercase",
                                                                                color: themeContext.customizedTheme.palette.text.secondary,
                                                                                fontWeight: "700",
                                                                                letterSpacing: 4.3
                                                                            }}>{contentSlide?.contentWelcomeMessage}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item container justifyContent='center'>

                                                            <Typography variant='h1' align={'center'}
                                                                        style={{
                                                                            // marginBottom: "32px",
                                                                            fontWeight: "700",
                                                                            lineHeight: ".98em",
                                                                            maxWidth: "700px",
                                                                            fontFamily: themeContext.customizedTheme.typography.fontFamily.split(',')[1]
                                                                        }}
                                                                        color={'textSecondary'}>{contentSlide?.contentTitle}</Typography>
                                                        </Grid>

                                                    </Grid>
                                                </motion.div>
                                            </Grid>
                                            <Grid item style={{marginTop: "32px"}}>
                                                <motion.div
                                                    key={pageNumber}
                                                    animate={{y: 0, opacity: 1}}
                                                    initial={{y: 400, opacity: 0}}
                                                    transition={{
                                                        // ease: "linear",
                                                        duration: 2,
                                                        y: {duration: 1},
                                                        // opacity: {duration: .5}
                                                    }}
                                                    // className="card-container"
                                                    // initial="offscreen"
                                                    // while="onscreen"
                                                    // viewport={{ once: true, amount: 0.8 }}
                                                >
                                                    <Grid container item justifyContent='center' spacing={4}>
                                                        <Grid container item
                                                              justifyContent='center'>
                                                            <Typography variant='body2' align={'center'}
                                                                        color='textSecondary'>{contentSlide?.contentText}</Typography>
                                                        </Grid>
                                                        <Grid item container justifyContent='center'>
                                                            <Button color='primary' variant='contained'
                                                                    style={{
                                                                        height: "48px",
                                                                        border: "0",
                                                                        padding: themeContext.customizedTheme.spacing(3.5, 8)
                                                                    }}
                                                                    onClick={() => {
                                                                        firebaseAnalyticsClient.ctaClick("hero-section", contentSlide?.ctaButtonTitle ?? "", pageContext.analyticsId,)
                                                                    }}
                                                                    href={contentSlide?.ctaButtonLink ?? ""}>
                                                                <Typography variant='button' alignContent='center'
                                                                            align='center'
                                                                            color='textSecondary'>{contentSlide?.ctaButtonTitle}</Typography>
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item style={{}}>
                                    <Button color='secondary' variant='contained'
                                            style={{
                                                // backgroundColor: themeContext.customizedTheme.palette.primary.main,
                                                padding: themeContext.customizedTheme.spacing(.75, 1.5),
                                                marginRight: "8px", border: 0, borderRadius: "2px"
                                            }}
                                            onClick={() => {
                                                if (pageNumber === props.sectionData.contentSlides.length - 1) {
                                                    setPageNumber(0)
                                                } else {

                                                    setPageNumber((state) => (state + 1))
                                                }
                                                firebaseAnalyticsClient.ctaClick("hero-section-slider", "next slide", pageContext.analyticsId,)
                                            }}
                                    >
                                        <ArrowForward/>
                                    </Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Grid>
        </ThemeProvider>
    )
}

export default HeroAnimatedContentSection