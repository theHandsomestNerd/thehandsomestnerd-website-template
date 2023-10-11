import React, {FunctionComponent, useContext} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { Button, Grid, ThemeProvider, StyledEngineProvider, Typography, useTheme } from '@mui/material';
import {v4 as uuidv4} from 'uuid'
import WebDevSiteTheme from "../../theme/WebDevSiteTheme";
import PageContext from "../page-context/PageContext";
import {ServiceItemNoRefType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import ColoredPng from "../colored-png/ColoredPng";




export const useStyles = makeStyles((theme: Theme) => ({
    // root: {
    //
    // },
}))

interface IProps {
    service: ServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
    index?: number
}

const COLOR_ROTATION = ["#cd3647", "#343656", "#333784"]

const WebDevServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const classes = useStyles(WebDevSiteTheme)

    const LearnMoreButton = () => {
        return <Grid item container xs={6}>
            {props.service.learnMoreText && props.service?.learnMoreText.length > 0 &&
                <Button fullWidth
                        onClick={() =>
                            firebaseAnalyticsClient.ctaClick(props.service.slug?.current ?? "", props.service.learnMoreText, pageContext.analyticsId,)

                        } color='primary' href={props.service.learnMoreLink}
                        variant='contained'><Typography variant='button'
                                                        noWrap>{props.service.learnMoreText}</Typography></Button>}
        </Grid>
    }
    const theme = useTheme()
    // const mediaContext = useContext(MediaQueriesContext)
    // const mdDown = mediaContext.mdDown

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={WebDevSiteTheme}>
                <Grid key={uuidv4()} container item md={6}
                      style={{backgroundColor: COLOR_ROTATION[(props.index ?? 0) % 3], padding: theme.spacing(4)}}
                      alignContent='center' alignItems='center'>
                    <Grid container item direction='column'>
                        <Grid container item spacing={2} alignContent='center'
                              alignItems='center'>
                            <Grid container item alignContent='center' justifyContent='space-between' alignItems='center'>
                                <Grid item xs={6}><Typography
                                    variant='h3' style={{fontFamily:"Elaine Sans"}}
                                    color='primary'>{props.service.contentTitle}</Typography></Grid>

                                <Grid item>
                                    <ColoredPng size={64} maskAsset={props.service.imageSrc} color={'white'}/>
                                    {/*    <ImageWIthButtonOverlay*/}
                                    {/*    source={props.service.slug?.current}*/}
                                    {/*    // hideCtaButton={prop.hideCtaButton}*/}
                                    {/*    tooltip={'Click to Learn More'}*/}
                                    {/*    learnMoreLink={props.service.learnMoreLink}*/}
                                    {/*    buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}*/}
                                    {/*    imageAltText={props.service.imageSrcAltText}*/}
                                    {/*    variant='contained'*/}
                                    {/*    imageSrc={props.service.imageSrc} height={64}*/}
                                    {/*    ctaButtonText={props.service.ctaButtonText}*/}
                                    {/*    ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}/>*/}
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Typography variant='body1'
                                            style={{fontFamily:"raleway"}}
                                            color='primary'
                                >{props.service.contentText}</Typography>
                            </Grid>
                            <Grid container item>
                                {!props.hideLearnMoreButton && <LearnMoreButton/>}
                            </Grid>
                        </Grid>


                        {/*<Grid container item direction={"column"}>*/}
                        {/*    <Grid item container>*/}
                        {/*        <ImageWIthButtonOverlay*/}
                        {/*            source={props.service.slug?.current}*/}
                        {/*            // hideCtaButton={prop.hideCtaButton}*/}
                        {/*            tooltip={'Click to Learn More'}*/}
                        {/*            learnMoreLink={props.service.learnMoreLink}*/}
                        {/*            buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}*/}
                        {/*            imageAltText={props.service.imageSrcAltText}*/}
                        {/*            variant='contained'*/}
                        {/*            imageSrc={props.service.imageSrc} height={352}*/}
                        {/*            ctaButtonText={props.service.ctaButtonText}*/}
                        {/*            ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}*/}
                        {/*        />*/}
                        {/*    </Grid>*/}
                        {/*    <Tooltip title={<Typography variant='subtitle1' style={{fontWeight: "normal"}}>Click to Learn*/}
                        {/*        More</Typography>}>*/}
                        {/*        <Grid item container justifyContent='center'*/}
                        {/*              style={{marginTop: "16px", marginBottom: "16px"}}>*/}
                        {/*            <Button variant='text' color='secondary' href={props.service.learnMoreLink}><Typography*/}
                        {/*                variant='body2' align='center'>{props.service.contentTitle}</Typography></Button>*/}
                        {/*        </Grid>*/}
                        {/*    </Tooltip>*/}
                        {/*    <Grid item>*/}
                        {/*        <Typography variant='body1' align='center'*/}
                        {/*                    style={{marginBottom: "48px"}}>{props.service.contentText}</Typography>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                        {/*//ts-ignore*/}
                        {/*{props.showAmenities &&*/}
                        {/*    <AmenitiesSection service={props.service} />}*/}
                    </Grid>
                </Grid></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default WebDevServiceItem