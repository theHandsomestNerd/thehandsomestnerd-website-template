import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, MuiThemeProvider, Typography, useTheme} from '@material-ui/core'
import {WebDevAboutUsSectionType} from "../BlockContentTypes";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import WebDevSiteTheme, {elainSansExtraBold} from "../../theme/WebDevSiteTheme";
import {COLORS} from "../../theme/DigitalResumeTheme";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: "#131313",
        padding: theme.spacing(8, 8)
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: WebDevAboutUsSectionType
}

const WebDevAboutUsSection: FunctionComponent<IProps> = (props) => {

    const classes = useStyles(WebDevSiteTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)
    const theme = useTheme()

    return (
        <MuiThemeProvider theme={WebDevSiteTheme}>
            <Grid container item className={classes.root}
                  xs={12}>
                <Grid container item spacing={10}>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        container
                        justifyContent='center'
                        alignContent='flex-start'
                        alignItems='flex-start'
                        style={{
                            minWidth: "min-content"
                        }}
                    >
                        <Grid item style={{
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: "white",
                            // marginBottom: theme.spacing(3)
                        }} container
                              sm={8} md={12}
                              justifyContent='center'>
                            <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText}
                                                    ctaButtonLink={props.sectionData.ctaButtonLink}
                                // toColor={"rgb(19,35,35)"}
                                                    imageSrc={props.sectionData.imageSrc} height={500}
                                // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                    isResponsive
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={7} lg={8} container spacing={2}>
                        <Grid container item alignContent='space-around'>
                            <Grid item container direction='column' spacing={1}>
                                <Grid item>
                                    <Typography variant='subtitle2'
                                                style={{color: COLORS.AQUA}}
                                    >{props.sectionData.welcomeMessage}</Typography>
                                </Grid>
                                <Grid item>
                                    <Grid item>
                                        <Typography variant='h2'
                                                    color='primary'
                                                    style={{...elainSansExtraBold}}
                                                    display='inline'>{props.sectionData.contentTitle}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={1}>{props.sectionData?.contentText?.map((text, index:number) => <Grid key={index} item container>
                                <Typography variant='body1'

                                            color='primary'>{text}</Typography>
                            </Grid>)}</Grid>
                            <Grid container item>{props.sectionData.ctaButtonText && <Grid item>
                                <Button color='primary' variant='outlined'
                                        href={props.sectionData.ctaButtonLink ?? ''}>
                                    <Grid container alignItems='center' spacing={1}>
                                        <Grid item>
                                            <Typography variant='button'
                                                        color='primary'>{props.sectionData.ctaButtonText}</Typography>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </Grid>}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

export default WebDevAboutUsSection