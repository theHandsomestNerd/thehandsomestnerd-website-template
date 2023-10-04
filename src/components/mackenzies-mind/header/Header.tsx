import React, {FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Grid, Hidden, Typography} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import TheWebsiteTheme from "../../../theme/Theme";
// import FontFaces from "../../../theme/common/FontFaces";
import {COLORS} from "../../../theme/common/ColorPalette";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: theme.spacing(4),
        height: theme.mixins.toolbar.height
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
    const mediaQueriesContext = useContext(MediaQueriesContext)

    React.useEffect(() => {
        console.log("Page header in the header", props.pageHeader)
    }, [props.pageHeader])

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.title ?
            <Grid item xs={12} container justifyContent="space-between" alignItems='stretch' alignContent='center' spacing={mediaQueriesContext.mdDown ? 3 : 0}>
                <Grid item container xs={3} sm={2} md={1} alignItems='center' alignContent='center' wrap={'nowrap'}>
                    <Typography style={{fontFamily: "Oswald"

, fontWeight: "300"}} variant='h3' color='textPrimary'>Terrell</Typography><Typography variant='h4' color='primary' display='inline' style={{fontFamily: "Oswald"

, fontWeight: "300"}}>.</Typography>
                </Grid>
                <Grid item container xs={9} sm={10} md={11} justifyContent='space-between' alignItems='center' alignContent='center'>
                    {/*// @ts-ignore*/}
                    <Hidden mdDown>
                        <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                              alignItems='center'
                              style={{
                                  height: "100%",
                                  paddingRight: mediaQueriesContext.mdDown ? TheWebsiteTheme.spacing(0) : TheWebsiteTheme.spacing(4)
                              }}>
                            <FilteredMenuItems
                                // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                                subMenus={props.pageHeader.subMenus ?? []} onlyButtons={mediaQueriesContext.mdDown}
                                includeMenuItems={!mediaQueriesContext.mdDown}
                                includeMenuGroups={!mediaQueriesContext.mdDown}/>
                        </Grid>
                    </Hidden>
                    {/*// @ts-ignore*/}
                    <Hidden lgUp>
                        <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                            <Grid container item
                                  justifyContent='flex-end'
                                  alignItems='center'
                            >
                                <Grid item>
                                    <MainMenu menu={props.pageHeader} anchor='top'/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            : <></>
        }</AppBar>
    );
}

export default Header