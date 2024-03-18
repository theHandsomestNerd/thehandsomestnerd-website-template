import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {Grid, Typography, useMediaQuery} from '@mui/material'
import useCustomStyles from "../../../mackenzies-mind/pages/Styles";
import CountdownToLaunch from "./CountdownToLaunch";
import clsx from "clsx";
import CssFadeToColor from "../../../../css-fade-to-color/CssFadeToColor";
import {SanityRef, SanityUnderConstructionPageType} from "../../../../../common/sanityIo/Types";
import Logo from "../../../../logo/Logo";
import MailTo from "../../../../mail-to/MailTo";
import {COLORS} from "../../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../../customized-theme-provider/CustomizedThemeContext";
import BusinessCardSubmitEmail from "../BusinessCardSubmitEmail";
import SanityContext from "../../../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    email?: string
    underConstructionPageRef: SanityRef
}

const UnderConstruction: FunctionComponent<IProps> = (props) => {
    const sanityContext = useContext(SanityContext)
    const [cmsPageData, setCmsPageData] = useState<SanityUnderConstructionPageType>()
    const classes = useCustomStyles({bgImage: sanityContext.urlFor(cmsPageData?.bgImage ?? "").url()})
    const customizedThemeContext = useContext(CustomizedThemeContext);
    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('lg'))
    const xsDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('md'))

    const [releaseDate, setReleaseDate] = useState<Date>()

    React.useEffect(() => {
        const getPage = async () => {
            return sanityContext.fetchRef(props.underConstructionPageRef).then((pageResponse:any) => {
                return pageResponse
            })
        }

        getPage().then((page) => {
            setCmsPageData(page)
        })
    }, [props.underConstructionPageRef])

    useEffect(() => {
        let releaseDateHolder = new Date(Date.now() + 2000000000)
        if (cmsPageData && cmsPageData.releaseDate) {
            releaseDateHolder = cmsPageData.releaseDate
        }
        setReleaseDate(releaseDateHolder)

    }, [cmsPageData])

    return (
        <Grid container className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullScreenImage)}
              style={{position: "relative"}}>
            <CssFadeToColor
                toColor={COLORS.LIGHTGRAY}
                isResponsive/>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenWhiteOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      paddingBottom: smDown ? 0 : customizedThemeContext.customizedTheme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                {cmsPageData?.contentTitle && cmsPageData?.contentTitle.length > 0 && <Grid container item xs={11} className={classes.spacer} justifyContent='center'>
                    <Typography variant={smDown ? 'h2' : 'h1'} align='center'
                                color='textSecondary'>{cmsPageData?.contentTitle}</Typography>
                </Grid>}
                {<Grid container item xs={11} className={classes.spacer} justifyContent='center' style={{marginBottom: smDown? customizedThemeContext.customizedTheme.spacing(15):0}}>
                    <Logo isCenter={smDown} height={250}/>
                </Grid>}
                <Grid xs={10} container item justifyContent='center' className={classes.spacer}>
                    <CountdownToLaunch launchDate={releaseDate ?? new Date(Date.now() + 2000000000)}/>
                </Grid>
                <Grid container item sm={10}  style={{paddingBottom: customizedThemeContext.customizedTheme.spacing(5), marginBottom: xsDown? 0: customizedThemeContext.customizedTheme.spacing(1)}}>
                    <Grid container item justifyContent='center' style={{marginTop: customizedThemeContext.customizedTheme.spacing(2.5)}}>
                        <Grid item xs={11} sm={10}>
                            <Typography variant='body1'
                                        align='center' style={{fontFamily: "Raleway"}}>{cmsPageData?.contentText}</Typography>

                        </Grid>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Grid container item justifyContent='center' style={{marginTop: customizedThemeContext.customizedTheme.spacing(5.75)}}>
                            <BusinessCardSubmitEmail source="Under Construction Page" emailFieldText={cmsPageData?.emailFieldText ?? ""}
                                         emailButtonText={cmsPageData?.emailButtonText ?? ""}
                                         subscribeText={cmsPageData?.subscribeText ?? ""}/>
                        </Grid>
                        <Grid item container style={{
                            // backgroundColor: xsDown ? customizedThemeContext.customizedTheme.palette.background.default : "transparent",
                            // position: 'static',
                            bottom: 0,
                            // height: "84px"
                        }}>
                            <Grid item container justifyContent='center'>
                                <Grid item>

                                    <MailTo color={customizedThemeContext.customizedTheme.palette.primary.main} email={props.email??""} subject={"Information Request"} body={""}>
                                        {props.email}
                                    </MailTo>
                                </Grid>
                                {/*<Typography color='primary' variant='h6'>{props.email}</Typography>*/}
                            </Grid>
                            <Grid item sm={12} container justifyContent='center' direction='column' alignItems='center'>
                                {
                                    cmsPageData?.footerTextLines?.map(
                                        (footerLine, index) => <Grid item key={index}><Typography align='center'
                                                                                                  variant='subtitle1' style={{fontFamily: "Raleway"}}>
                                            {footerLine}
                                        </Typography></Grid>)
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UnderConstruction