import React, {FunctionComponent} from 'react'
import {Avatar, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import clsx from "clsx";
import {COLORS} from "../../../theme/common/ColorPalette";
import CssFadeToColor from "../../css-fade-to-color/CssFadeToColor";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import openDoorSign from "./Shutterstock_1025370412.png";
import ashboy from "./ashboy-drinkery.jpg";
import jt from "./jt-drinkery.jpg";

interface IProps {
    email?: string
}

const TheOtherSide: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('lg'))
    const xsDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid container className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullScreenImage)}
              style={{position: "relative", color: "white"}}>
            <CssFadeToColor
                toColor={COLORS.LIGHTGRAY}
                isResponsive/>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      // paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid item container>
                    <Grid container item justifyContent='center'>
                        <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h3'>...the Other Side</Typography>
                    </Grid>
                </Grid>
                <Grid item style={{
                    width: "250px",
                    height: "250px",
                    backgroundImage: `url(${openDoorSign})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>

                </Grid>
                <Grid item container>
                    <Grid container item style={{
                        paddingBottom: theme.spacing(5)
                    }}>
                        <Grid item container style={{paddingBottom: theme.spacing(3)}}>

                            <Grid container item justifyContent='center'>
                                <Typography variant='h6' gutterBottom>Bartenders</Typography>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Grid container item justifyContent='center' xs={12} sm={8} md={7} lg={5} xl={4}>
                                    <Grid item justifyContent='center' xs={6} alignItems={'center'}
                                          alignContent='center'>
                                        <Grid container item justifyContent='center'>

                                            <Avatar src={ashboy} variant='rounded' style={{width: theme.spacing(20),
                                                height: theme.spacing(20),}}/>
                                        </Grid>
                                        <Grid container item justifyContent='center'>
                                            <Typography variant='body1'>Ashley</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={6} justifyContent='center'>
                                        <Grid container item justifyContent='center'>

                                            <Avatar src={jt} variant='rounded' style={{width: theme.spacing(20),
                                                height: theme.spacing(20),}}/>
                                        </Grid>
                                        <Grid container item justifyContent='center'>
                                            <Typography variant='body1'>Terrell</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={2} style={{paddingBottom:theme.spacing(5)}}>

                            {/*<Grid item container>*/}

                            {/*    <Grid container item justifyContent='center'>*/}
                            {/*        <Typography variant='h5'>Wednesdays with Ashley</Typography>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid container item justifyContent='center'>*/}
                            {/*        <Typography variant='h6'>7:30pm-12am</Typography>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}
                            <Grid item container>

                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>Thursdays with Terrell</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h6'>7:30pm-1am</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container>

                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>Fridays with Terrell</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h6'>7:30pm-1am</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container>

                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>Saturdays with Ashley</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h6'>7:30pm-1am</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container>

                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>Sundays with Terrell</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h6'>7:30pm-1am</Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheOtherSide