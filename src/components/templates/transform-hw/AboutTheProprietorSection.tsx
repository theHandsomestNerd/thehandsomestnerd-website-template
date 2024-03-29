import{FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Chip, Grid, Typography, useMediaQuery} from '@mui/material'
import {ProprietorAtAGlanceType, ThwAboutProprietorSectionType} from "../../BlockContentTypes";
import TransformHWTheme from "../../../theme/TransformHWTheme";
import ImageWithButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";
import LoadingButton from "../../loading-button/LoadingButton";
import ResponsiveBullet from "../../ResponsiveBullet";
import {FiberManualRecord} from "@mui/icons-material";
import ColoredPng from "../../colored-png/ColoredPng";
import PageContext from "../../page-context/PageContext";
import ImageWithPlaceholder from "../../ImageWithPlaceholder";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";

export const useStyles = makeStyles(() => ({
    root: {
        minHeight: '521px',
        backgroundColor: TransformHWTheme.palette.background.paper,
        // paddingLeft: -TransformHWTheme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: TransformHWTheme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwAboutProprietorSectionType
}

const ProprietorAtAGlance = (props: { sectionData: ProprietorAtAGlanceType, source: string }) => {
    const pageContext = useContext(PageContext)
    const firebaseContext = useContext(FirebaseContext)


    const customizedThemeContext = useContext(CustomizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('sm'))
    return (
        <Grid item container
              justifyContent='center'
              style={{
                  backgroundColor: TransformHWTheme.palette.secondary.dark,
                  border: smDown ? "0px solid transparent" : "1px solid white",
                  margin: smDown ? TransformHWTheme.spacing(0, 0, 0, 0) : TransformHWTheme.spacing(2, 0, 0, 0),
                  padding: TransformHWTheme.spacing(2, 0, smDown ? 6 : 2, 0)
              }}
              spacing={6}
              xs={12}
        >
            <Grid container item xs={11}>
                <Grid item container justifyContent='center'>
                    <Typography variant='body1' color='primary'
                                gutterBottom>{props.sectionData.serviceName}</Typography>
                </Grid>
                <Grid item container>
                    <Typography variant='h6' color='primary' gutterBottom>{props.sectionData.serviceTitle}</Typography>
                </Grid>
                <Grid item container alignItems='flex-start' alignContent='flex-start'>

                    {props.sectionData.sessionList.map((term: string, index: number) =>
                        <ResponsiveBullet
                            key={index}
                            notResponsive
                            bullet={<FiberManualRecord color='primary' style={{fontSize: "8px"}}/>}
                            condensed
                            fontVariant={'subtitle1'}
                            text={term}
                            textColor={'textSecondary'}
                        />
                    )}
                </Grid>
            </Grid>

            <Grid item container xs={11} justifyContent='center' style={{
                // marginBottom: TransformHWTheme.spacing(5)
            }}>
                {/*<ImageWithPlaceholder height={545} width={376} image={props.sectionData.dividerImage} />*/}
                <ColoredPng maskAsset={props.sectionData.dividerImage} color={"white"}/>
                <Grid item container justifyContent='center'>

                    <Typography variant='h6' color='primary' gutterBottom
                                align='center'>{props.sectionData.amenitiesSectionTitle}</Typography>
                </Grid>
                <Grid item container spacing={1} justifyContent='center'>

                    {props.sectionData.amenities.map((modality, index) =>
                        <Grid item key={index}>
                            <Chip
                                color='primary'
                                label={<Typography variant='inherit' color='secondary'>{modality}</Typography>}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item>
                <LoadingButton
                    clickHandler={() => {
                        firebaseContext.analytics.ctaClick(props.source, props.sectionData.ctaButtonText, pageContext.analyticsId,)
                    }}
                    href={props.sectionData.ctaButtonLink}
                    color={"primary"}
                    variant='outlined'>
                    {props.sectionData.ctaButtonText}
                </LoadingButton>
            </Grid>
        </Grid>
    );
}


const AboutTheProprietorSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('sm'))

    const xsOnly = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.only('xs'))
    return (
            <Grid container item className={classes.root} xs={xsOnly ? 12 : 11}
                  style={xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                      paddingBottom: TransformHWTheme.spacing(10),
                      paddingTop: TransformHWTheme.spacing(10),
                  }}>
                <Grid container item justifyContent='space-around'
                >
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
                            marginBottom: TransformHWTheme.spacing(3)
                        }} container
                              sm={8} md={12}
                              justifyContent='center'>
                            <ImageWithButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText}
                                                    ctaButtonLink={props.sectionData.ctaButtonLink}
                                // toColor={"rgb(19,35,35)"}
                                                    imageSrc={props.sectionData.proprietorImage} height={545}
                                // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                    isResponsive
                                                    placeholderWidth={376}
                            />
                        </Grid>
                        {!smDown && <Grid container item><ProprietorAtAGlance source={'about-the-proprietor'}
                                                                              sectionData={props.sectionData.proprietorServices}/></Grid>}
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between'
                          spacing={2}>
                        <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                            <Grid container item direction='column'>
                                <Grid item container>
                                    <Grid item>

                                        <Typography variant='h4'
                                                    color='secondary'
                                                    noWrap
                                                    style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h3'
                                                    color='secondary' display='inline'
                                                    style={{letterSpacing: "-.25em"}}>____</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>

                                    <Typography variant='body1' color='textPrimary'
                                                style={{fontStyle: "italic"}}>{props.sectionData.proprietorTitle}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justifyContent='flex-end'>
                                <Grid item container>
                                    <Typography variant='body2' color='secondary'
                                    >{props.sectionData.contentTitle}</Typography>

                                </Grid>
                                {props.sectionData.contentText.map((text, index: number) => {
                                    return <Grid item container key={index}>
                                        <Typography variant='body1'
                                                    color='secondary' gutterBottom>{text}</Typography>
                                    </Grid>
                                })}
                                <Grid container item direction='column' alignItems='flex-end'>
                                    <Grid item>
                                        <ImageWithPlaceholder height={70} width={185}
                                                              image={props.sectionData.proprietorSignatureImage}
                                                              text={"Your Signature"}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {smDown && <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={4}
                        container
                        justifyContent='center'
                        alignContent='flex-start'
                        alignItems='flex-start'
                        style={{
                            paddingTop: TransformHWTheme.spacing(3),
                            minWidth: "min-content"
                        }}
                    ><ProprietorAtAGlance source={'about-the-proprietor'}
                                          sectionData={props.sectionData.proprietorServices}/></Grid>}
                </Grid>
            </Grid>
    )
}

export default AboutTheProprietorSection