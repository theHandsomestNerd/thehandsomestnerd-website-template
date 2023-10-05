import React, {FunctionComponent} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Grid, Hidden, Typography, useTheme} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import {COLORS} from "../../../theme/common/ColorPalette";
import widthUtils from "../../../utils/widthUtils";
import TheWebsiteTheme from "../../../theme/Theme";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: TheWebsiteTheme
.spacing(4),
        height: TheWebsiteTheme
.mixins.toolbar.height
    },
    opaque: {
        backgroundColor: `${COLORS.LIGHTGRAY} !important`,
    }
}))

export type HeaderProps = {
    pageHeader?: any
    updateIsLoading?: (value: boolean) => void
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()
    const mdDown = widthUtils.useIsWidthDown('md')

    const theme = useTheme()
    React.useEffect(() => {
        console.log("Page header in the header", props.pageHeader)
    }, [props.pageHeader])

    const lgUp = widthUtils.useIsWidthUp('md')

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.title ?
            <Grid item xs={12} container justifyContent="space-between" alignItems='stretch' alignContent='center'
                  spacing={mdDown ? 3 : 0}>
                <Grid item container xs={3} sm={2} md={1} alignItems='center' alignContent='center' wrap={'nowrap'}>
                    <Typography style={{
                        fontFamily: "Oswald"

                        , fontWeight: "300"
                    }} variant='h3' color='textPrimary'>Terrell</Typography><Typography variant='h4' color='primary'
                                                                                        display='inline' style={{
                    fontFamily: "Oswald"

                    , fontWeight: "300"
                }}>.</Typography>
                </Grid>
                <Grid item container xs={9} sm={10} md={11} justifyContent='flex-end' alignItems='center'
                      alignContent='center'>
                    {lgUp && <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                           alignItems='center'
                           style={{
                               height: "100%",
                               paddingRight: mdDown ? theme.spacing(0) : theme.spacing(4)
                           }}>
                        <FilteredMenuItems
                            // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                            subMenus={props.pageHeader.subMenus ?? []} onlyButtons={mdDown}
                            includeMenuItems={!mdDown}
                            includeMenuGroups={!mdDown}/>
                    </Grid>}

                    {mdDown && <Grid item xs={12} sm={2} container justifyContent='flex-end' >
                        <Grid container item

                              justifyContent='flex-end'
                              alignItems='center'
                        >
                            <Grid item>
                                <MainMenu menu={props.pageHeader} anchor='top'/>
                            </Grid>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
            : <></>
        }</AppBar>
    );
}

export default Header