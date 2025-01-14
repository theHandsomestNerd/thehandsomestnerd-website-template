import {Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import React, {FunctionComponent, useContext} from 'react'
import clsx from "clsx";
import speakingWithTherapist from "./assets/speakingWithTherapist.jpg";
import LoadingButton from "../../../../loading-button/LoadingButton";
import useCustomStyles from "../../../mackenzies-mind/pages/Styles";
import {useNavigate} from "react-router-dom";
import CustomizedThemeContext from "../../../../customized-theme-provider/CustomizedThemeContext";


export type AppLayoutProps = {}

const FourOhFour: FunctionComponent<AppLayoutProps> = (props) => {
    const classes = useCustomStyles({bgImage: speakingWithTherapist})
    const history = useNavigate()

    const theme = useTheme()

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const xsDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('xs'))
    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('sm'))

    return (
        <Grid container className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullScreenImage)}
              style={{position: "relative"}}>
            <Grid container item className={xsDown ? classes.fullscreenPlus : classes.fullscreen}
                  style={{position: 'relative'}}>
                <Grid container item style={{
                    position: "absolute",
                    bottom: 0,
                    height: '120px',
                    backgroundImage: smDown ? `linear-gradient(180deg, transparent, rgba(111,111,111,1)` : 'transparent'
                }}>
                </Grid>
            </Grid>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      paddingTop: theme
.spacing(10),
                      paddingBottom: theme
.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item xs={11} justifyContent='center'>
                    <Typography align='center' color='primary'
                                style={{fontSize: smDown ? "150px" : "250px", lineHeight: 1, fontWeight: "bolder"}}>
                        404</Typography>
                </Grid>
                <Grid container item xs={11} justifyContent='center'>
                    <Typography variant={'h3'} align='center' color='textSecondary'>
                        How Embarrassing! That page can’t be found</Typography>
                </Grid>
                <Grid container item xs={11} sm={9} justifyContent='center'>
                    <Typography variant={'h6'} align='center' color='textSecondary'>
                        Sorry, but the page you are looking for does not exist here at Transformative Healing and
                        Wellness please contact the administrator below if this persists.
                    </Typography>
                    <Typography variant={'h3'} align='center' color='primary'>
                        hello@thehandsomestnerd.com
                    </Typography>
                </Grid>
                <Grid container item xs={11} justifyContent='center'>
                    <LoadingButton
                        // width={200}
                        // isLoading={isLoading}
                        // groupiness={ButtonGroupMemberEnum.RIGHT}
                        clickHandler={() => history('/')}
                        color='primary'
                        variant='contained'><Typography align='center' color='textSecondary' variant='button'>Go to
                        Homepage</Typography></LoadingButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FourOhFour