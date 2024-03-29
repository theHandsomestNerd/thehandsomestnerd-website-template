import{FunctionComponent, useContext} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography, useMediaQuery} from '@mui/material'
import {MfbtAboutProprietorSectionType} from "../../BlockContentTypes";
import MixedFeelingsByTTheme from "../../../theme/MixedFeelingsByTTheme";
import ImageWIthButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtAboutProprietorSectionType
}

const MFBTAboutTheProprietor: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const xsOnly = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.only('xs'))
    return (<Grid container item>
            <Grid container item className={classes.root} xs={xsOnly ? 12 : 11}
                  style={xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                      paddingBottom: MixedFeelingsByTTheme.spacing(10),
                      paddingTop: MixedFeelingsByTTheme.spacing(10),
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
                            marginBottom: MixedFeelingsByTTheme.spacing(3)
                        }} container
                              sm={8} md={12}
                              justifyContent='center'>
                            <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText}
                                                    ctaButtonLink={props.sectionData.ctaButtonLink}
                                // toColor={"rgb(19,35,35)"}
                                                    imageSrc={props.sectionData.proprietorImage} height={545}
                                // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                    isResponsive
                            />
                        </Grid>
                        {/*{!smDown && <Grid container item><ProprietorAtAGlance source={'about-the-proprietor'} sectionData={props.sectionData.proprietorServices}/></Grid>}*/}
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between'
                          spacing={2}>
                        <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                            <Grid container item direction='column'>
                                <Grid item container>
                                    <Grid item>

                                        <Typography variant='h4'
                                                    color='primary'
                                                    noWrap
                                                    style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>

                                    <Typography variant='body1'
                                                style={{
                                                    fontStyle: "italic",
                                                    color: "white"
                                                }}>{props.sectionData.proprietorTitle}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justifyContent='flex-end'>
                                <Grid item container>
                                    <Typography variant='body2' color='primary'
                                    >{props.sectionData.contentTitle}</Typography>

                                </Grid>
                                {props.sectionData.contentText.map((text, index: number) => {
                                    return <Grid item container key={index}>
                                        <Typography variant='body1'
                                                    gutterBottom style={{color: "white"}}>{text}</Typography>
                                    </Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*{smDown && <Grid*/}
                    {/*    item*/}
                    {/*    xs={12}*/}
                    {/*    sm={12}*/}
                    {/*    md={5}*/}
                    {/*    lg={4}*/}
                    {/*    container*/}
                    {/*    justifyContent='center'*/}
                    {/*    alignContent='flex-start'*/}
                    {/*    alignItems='flex-start'*/}
                    {/*    style={{*/}
                    {/*        paddingTop: MixedFeelingsByTTheme.spacing(3),*/}
                    {/*        minWidth: "min-content"*/}
                    {/*    }}*/}
                    {/*><ProprietorAtAGlance source={'about-the-proprietor'} sectionData={props.sectionData.proprietorServices}/></Grid>}*/}
                </Grid>
            </Grid>
            <Grid container item style={{backgroundColor: "black", padding: MixedFeelingsByTTheme.spacing(2, 4)}}
                  justifyContent={'center'}>
                <Grid container item xs={12} md={4} justifyContent='center' alignContent='center'
                      style={{minHeight: 200}} direction='column'>
                    <ImageWIthButtonOverlay variant='contained'
                        // toColor={"rgb(19,35,35)"}
                                            imageSrc={props.sectionData.favDrinkImage2} height={170}
                        // direction={CssFadeToColorDirectionEnum.RIGHT}
                                            isResponsive
                    />
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Grid item>
                        <Typography variant={"h6"}
                                    style={{color: "white"}}>{props.sectionData.favDrinkSectionTitle}</Typography>
                        <Typography variant={"h6"} color='primary'>{props.sectionData.favDrinkTitle}</Typography>
                        <Typography variant={"body1"}
                                    style={{color: "white"}}>{props.sectionData.favDrinkDescription}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTAboutTheProprietor