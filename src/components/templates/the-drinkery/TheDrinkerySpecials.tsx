import React, {FunctionComponent} from 'react'
import {Avatar, Grid, Link, Typography, useMediaQuery, useTheme} from '@mui/material'
import clsx from "clsx";
import {COLORS} from "../../../theme/common/ColorPalette";
import CssFadeToColor from "../../css-fade-to-color/CssFadeToColor";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "./drinkery-background.jpg"
import TheOtherSideLogo from "./TheOtherSideLogo";
import openDoorSign from './Shutterstock_1025370412.png'
import ashboy from "./ashboy-drinkery.jpg";
import jt from "./jt-drinkery.jpg";

interface IProps {
    email?: string
}

const TheDrinkerySpecials: FunctionComponent<IProps> = (props) => {
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
                    <Grid container item justifyContent='center' style={{paddingBottom: theme.spacing(4)}}>
                        <TheOtherSideLogo isCenter={true}></TheOtherSideLogo>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h3'>Weekly Drink Specials</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body1'>(must mention qrcode)</Typography>
                    </Grid>
                    <Grid container item style={{paddingTop: theme.spacing(4)}}>
                        <Grid container item justifyContent='center'>
                            <Typography variant='h4'> 2 for 1 Natty Boh</Typography>
                        </Grid>

                        <Grid container item justifyContent='center'>
                            <Typography variant='body2'> Get Two Natty Bohs for the price of one.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item justifyContent='center' style={{paddingTop: theme.spacing(2)}}>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body2' align='center' gutterBottom>Meet your Bartenders</Typography>
                    </Grid>
                    <Grid container item justifyContent='center' xs={12} sm={9} md={7} lg={5} xl={5}>
                        <Grid item justifyContent='center' xs={6} sm={4} alignItems={'center'}
                              alignContent='center'>
                            <Grid container item justifyContent='center'>

                                <Avatar variant='rounded' style={{width: theme.spacing(18),
                                    height: theme.spacing(18),}}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography variant='body1'>Tim</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} sm={4} justifyContent='center'>
                            <Grid container item justifyContent='center'>

                                <Avatar variant='rounded' style={{width: theme.spacing(18),
                                    height: theme.spacing(18),}}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography variant='body1'>Dre</Typography>
                            </Grid>
                        </Grid>
                        <Grid item justifyContent='center' xs={6} sm={4} alignItems={'center'}
                              alignContent='center'>
                            <Grid container item justifyContent='center'>
                                <Avatar variant='rounded' style={{width: theme.spacing(18),
                                    height: theme.spacing(18),}}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography variant='body1'>Shaun</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid container item style={{
                        paddingBottom: theme.spacing(5)
                    }}>
                        <Grid container item spacing={2}>
                            <Grid item container>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h5'>Checkout the Other Side!</Typography>
                                </Grid>
                                <Grid container item justifyContent='center' style={{
                                    // width: "200px",
                                    // height: "200px",
                                    // backgroundImage: `url(${openDoor})`,
                                    // backgroundSize: "contain",
                                    // backgroundPosition:"center",
                                    // backgroundRepeat: "no-repeat"
                                }}>

                                    <Link href={'/theOtherSide'} underline="hover"><Grid item style={{
                                        marginTop: theme.spacing(2),
                                        width: "200px",
                                        height: "200px",
                                        backgroundImage: `url(${openDoorSign})`,
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat"
                                    }}>

                                    </Grid>
                                        <Grid item container justifyContent='center'><Typography variant='body1'
                                                                                                 style={{color: "white"}}>(click
                                            to enter)</Typography></Grid>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TheDrinkerySpecials