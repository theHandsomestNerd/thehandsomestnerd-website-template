import {FunctionComponent, useState} from 'react'
import {Box, Grid, IconButton, Modal, useMediaQuery, useTheme} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../../filtered-menu-items/FilteredMenuItems";
import Logo from "../../../logo/Logo";
import {SanityBusinessContact, SanityMenuContainer} from "../../../../common/sanityIo/Types";
import {Close, Facebook, Instagram, Search, Twitter} from "@mui/icons-material";
import FullTextSearch from "./FullTextSearch";
import AppBarWrapper from './AppBarWrapper';
import {COLORS} from "../../../../theme/common/ColorPalette";


import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover": {
            backgroundColor: "lightgray !important",
            color: "#383838"
        }
    },
    hoverSearch: {
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
}))

export type HeaderProps = {
    pageHeader?: SanityMenuContainer
    businessContact?: SanityBusinessContact
    isAppBar?: boolean
    isSearch?: boolean
    updateIsLoading?: (value: boolean) => void
    isEnhanced?: boolean
    backgroundColor?: string
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()
    const theme = useTheme()

    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    return (
        <AppBarWrapper backgroundColor={props.backgroundColor} isAppBar={props.isAppBar} isEnhanced={props.isEnhanced}>
            {props.pageHeader?.title ?
                <Grid item container
                      alignContent='center' alignItems='center' style={{height: "100%"}}>
                    <Grid container item xs={8} md={4} wrap='nowrap'>
                        <Grid item xs={8} sm={7} container sx={{minWidth: "190px"}}>
                            <Logo logoImageSrc={props.pageHeader?.logoImageSrc} noWrap
                                  logoText={props.pageHeader?.logoText}
                                  logoAccentText={props.pageHeader?.logoAccentText}/>
                        </Grid>
                        {props.pageHeader.isShowSocialMedia && !smDown ? <Grid xs={4} sm={5} container item alignContent='center' alignItems='center'
                               justifyContent={xsDown ? 'center' : "flex-start"} wrap='nowrap'>
                            <IconButton href={`https://facebook.com/${props.businessContact?.facebook}`}
                                        color='primary'><Facebook/></IconButton>
                            <IconButton href={`https://instagram.com/${props.businessContact?.instagram}`}
                                        color='primary'><Instagram/></IconButton>
                            <IconButton href={`https://twitter.com/${props.businessContact?.twitter}`}
                                        color='primary'><Twitter/></IconButton>
                        </Grid>:<></>}
                    </Grid>
                    <Grid item container xs={4} md={8}  justifyContent='flex-end' wrap='nowrap'>

                        {
                            !mdDown && <Grid xs={4} md={10} lg={10} container item justifyContent='flex-end'
                                             alignItems='center'
                                             alignContent='center'
                                             sx={{
                                                 height: "100%",
                                                 paddingRight: mdDown ? theme.spacing(0) : theme.spacing(4)
                                             }}>
                                <FilteredMenuItems
                                    // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                                    subMenus={props.pageHeader?.subMenus ?? []} onlyButtons={mdDown}
                                    includeMenuItems={!mdDown}
                                    includeMenuGroups={!mdDown}/>

                            </Grid>
                        }
                        {
                            mdDown && <Grid item xs={5} sm={4} container justifyContent='flex-end'>
                                {props.pageHeader && <MainMenu menu={props.pageHeader} anchor='top'/>}
                            </Grid>
                        }
                        {props.isSearch && <Grid container item maxWidth={96}
                            // style={{backgroundColor: "blue"}}
                                                 justifyContent='flex-end'
                                                 alignContent='center' alignItems='center'>
                            <Grid item><Box sx={{
                                // maxWidth: "64px",
                                paddingLeft: "16px",
                                paddingRight: mdDown ? "16px" : "8px",
                                borderLeft: `1px solid ${theme.palette.primary.main}`
                            }}>
                                <IconButton onClick={() => {
                                    setIsSearchOpen((state) => !state)
                                }} color='secondary' sx={{
                                    // marginLeft: "32px",
                                    // marginRight: "32px",
                                    color: theme.palette.text.secondary,
                                    backgroundColor: theme.palette.primary.main
                                }} className={classes.hoverSearch}>
                                    <Search color='inherit' fontSize='large'/>
                                </IconButton></Box></Grid>
                        </Grid>}
                    </Grid>
                </Grid>
                : <></>
            }
            <Modal open={isSearchOpen}>
                <Grid container style={{height: "100%"}}>
                    <Grid container item justifyContent='flex-end'>
                        <IconButton
                            sx={{
                                marginTop: "4px",
                                marginRight: "4px",
                                width: "64px",
                                height: "64px",
                                backgroundColor: COLORS.WHITESMOKE
                            }}
                            onClick={() => {
                                setIsSearchOpen(false)
                            }}
                            className={classes.hover}>

                            <Close sx={{marginX: "16px", marginY: "16px"}} fontSize={"large"} color={'secondary'}/>
                        </IconButton>
                    </Grid>
                    <Grid container item justifyContent='center' paddingX={'8px'} alignContent='flex-start'
                          alignItems='flex-start'>
                        <FullTextSearch/>
                    </Grid>
                </Grid>
            </Modal>
        </AppBarWrapper>
    );
}

export default Header