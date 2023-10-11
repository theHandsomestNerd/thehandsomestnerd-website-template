import React, {FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Grid, Typography, useTheme} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import {COLORS} from "../../../theme/common/ColorPalette";
import widthUtils from "../../../utils/widthUtils";
import TheWebsiteTheme from "../../../theme/Theme";
import Logo from "../../transform-hw/logo/Logo";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";
import {SanityMenuContainer} from "../../../common/sanityIo/Types";

export const useStyles = makeStyles((theme: Theme) => ({
    root:(props:any) => ({
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: props.paddingLeft,
        height: props.appBarHeight
    }),
    opaque: {
        backgroundColor: `${COLORS.LIGHTGRAY} !important`,
    }
}))

export type HeaderProps = {
    pageHeader?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const customizedTheme = useContext(CustomizedThemeContext)

    const classes = useStyles({
        paddingLeft: customizedTheme.customizedTheme.spacing(4),
        appBarHeight: customizedTheme.customizedTheme.mixins.toolbar.height
    })

    const mdDown = widthUtils.useIsWidthDown('md')

    // const theme = useTheme()
    React.useEffect(() => {
        console.log("Page header in the header", props.pageHeader)
    }, [props.pageHeader])

    const lgUp = widthUtils.useIsWidthUp('md')

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.title ?
            <Grid style={{height: "100%"}} item xs={12} container justifyContent="space-between" alignContent='center'>
                <Grid item container xs={3} sm={2} md={1} alignItems='center' alignContent='center' wrap={'nowrap'}>
                    <Logo logoText={props.pageHeader.logoText} logoAccentText={props.pageHeader.logoAccentText}/>
                </Grid>
                <Grid item container xs={9} sm={10} md={11} justifyContent='flex-end' alignItems='center'
                      alignContent='center'>
                    {lgUp && <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                                   alignItems='center'
                                   style={{
                                       height: "100%",
                                       paddingRight: mdDown ? customizedTheme.customizedTheme?.spacing(0) : customizedTheme.customizedTheme?.spacing(4)
                                   }}>
                        <FilteredMenuItems
                            // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                            subMenus={props.pageHeader.subMenus ?? []} onlyButtons={mdDown}
                            includeMenuItems={!mdDown}
                            includeMenuGroups={!mdDown}/>
                    </Grid>}

                    {mdDown && <Grid item xs={12} sm={2} container justifyContent='flex-end'>
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