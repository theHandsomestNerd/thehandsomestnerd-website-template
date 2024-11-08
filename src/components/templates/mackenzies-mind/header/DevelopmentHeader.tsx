import{FunctionComponent, useContext, useState} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Grid, Hidden, useMediaQuery, useTheme} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../../filtered-menu-items/FilteredMenuItems";
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
// import {elainSansExtraBold} from "../../../theme/WebDevSiteTheme";
import PageContext from "../../../page-context/PageContext";
import FullWidthColoredPng from "../../../fullwidth-colored-png/FullWidthColoredPng";
import {useScrollPosition} from "../../../../utils/useScrollPosition";
import clsx from "clsx";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // transition: 'background-color .5s ease 0s',
        // backgroundColor:"transparent",
        backgroundColor: `black !important`,

        paddingLeft: theme.spacing(4),
        height: theme.mixins.toolbar.height,
        "& .MuiPaper-root": {
            backgroundColor: "transparent"
        }
        // boxShadow: 'none'
    },
    opaque: {
        backgroundColor: `black !important`,
    }
}))

export type DevelopmentHeaderProps = {
    pageHeader?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
}

const DevelopmentHeader: FunctionComponent<DevelopmentHeaderProps> = (props) => {
    const classes = useStyles()
    const sanityContext = useContext(SanityContext)

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const mdDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('md'))
    const theme = useTheme()

    const pageContext = useContext(PageContext)

    const [opaqueOnScroll, setOpaqueOnScroll] = useState<boolean>()

    useScrollPosition(({currPos}: any) => {
        const isShow = currPos.y === 0
        // console.log(currPos, isShow, opaqueOnScroll)
        if (isShow !== opaqueOnScroll) setOpaqueOnScroll(isShow)
    }, [opaqueOnScroll])


    return (
        <Grid container item alignItems='center' alignContent='center'>
            <Grid item container>
                <AppBar color={opaqueOnScroll ? 'transparent' : 'secondary'}
                        style={{boxShadow: 'none', paddingTop: theme.spacing(1.5)}}
                        className={clsx({[classes.opaque]: !opaqueOnScroll}, classes.root)}>{props.pageHeader?.title ?
                    <Grid item container justifyContent="space-between" alignItems='stretch' alignContent='center'
                          spacing={mdDown ? 3 : 0}>
                        <Grid item container xs={5} md={3} alignItems='center' alignContent='center'>
                            <FullWidthColoredPng maskUrl={(sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(pageContext.page?.metaImage)) ?? ""}
                                                 color={'white'} height={80}/>
                            {/*<ColoredPng maskUrl={urlFor(pageContext.page?.metaImage??"").url()??""} color={'white'}/>*/}
                        </Grid>
                        <Grid item container xs={7} md={9} justifyContent='space-between' alignItems='center'
                              alignContent='center'>
                            {/*// @ts-ignore*/}
                            <Hidden mdDown>
                                <Grid xs={4} md={10} lg={12} container item justifyContent='flex-start'
                                      alignItems='center'
                                      style={{
                                          height: "100%",
                                          paddingRight: mdDown ? theme.spacing(0) : theme.spacing(4)
                                      }}>
                                    <FilteredMenuItems
                                        contentJustification={'flex-start'}
                                        // textStyle={{...elainSansExtraBold}}
                                        // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                                        subMenus={props.pageHeader.subMenus ?? []}
                                        onlyButtons={mdDown}
                                        includeMenuItems={!mdDown}
                                        includeMenuGroups={!mdDown}/>
                                </Grid>
                            </Hidden>
                            {/*// @ts-ignore*/}
                            <Hidden lgUp>
                                <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                                    <Grid container item
                                          justifyContent='flex-end'
                                          alignItems='center'
                                    >
                                        <Grid item style={{marginRight: "48px"}}>
                                            <MainMenu menu={props.pageHeader} anchor='top'/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                    : <></>
                }</AppBar></Grid></Grid>
    );
}

export default DevelopmentHeader