import React, {FunctionComponent} from 'react'
import {Box, Grid, IconButton, Modal, useMediaQuery, useTheme} from '@mui/material'
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../../filtered-menu-items/FilteredMenuItems";
import Logo from "../../../logo/Logo";
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import {Close, Search} from "@mui/icons-material";
import FullTextSearch from "./FullTextSearch";
import AppBarWrapper from './AppBarWrapper';

export type HeaderProps = {
    pageHeader?: SanityMenuContainer
    isAppBar?: boolean
    isSearch?: boolean
    updateIsLoading?: (value: boolean) => void
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const customizedTheme = useTheme()

    const mdDown = useMediaQuery(customizedTheme.breakpoints.down('md'))
    const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)

    return (<AppBarWrapper isAppBar={props.isAppBar}>
            {props.pageHeader?.title ?
                <Grid item container
                      alignContent='center' alignItems='center' style={{height:"100%",paddingLeft:"8px"}}>
                    <Grid container item xs={4} sm={3} md={3} >
                        <Logo noWrap logoText={props.pageHeader?.logoText}
                                         logoAccentText={props.pageHeader?.logoAccentText}/>
                    </Grid>
                    <Grid item container xs={8} sm={9} md={9} justifyContent='flex-end' >

                            {
                                !mdDown && <Grid xs={4} md={10} lg={10} container item justifyContent='flex-end'
                                                 alignItems='center'
                                                 alignContent='center'
                                                 sx={{
                                                     height: "100%",
                                                     paddingRight: mdDown ? customizedTheme.spacing(0) : customizedTheme.spacing(4)
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
                                paddingLeft:"16px",
                                paddingRight: mdDown?"16px":"8px",
                                borderLeft: `1px solid ${customizedTheme.palette.primary.main}`
                            }}><IconButton color='secondary' sx={{
                                // marginLeft: "32px",
                                // marginRight: "32px",
                                backgroundColor: customizedTheme.palette.primary.main
                            }}>
                                <Search color='secondary' fontSize='large' onClick={() => {
                                    setIsSearchOpen((state) => !state)
                                }}/>
                            </IconButton></Box></Grid>
                        </Grid>}
                    </Grid>
                </Grid>
                : <></>
            }
            <Modal open={isSearchOpen}>
                <Grid container style={{height: "100%"}}>
                    <Grid container item justifyContent='flex-end'>
                        <Close sx={{marginX: "16px", marginY: "16px"}} fontSize={"large"} color={'secondary'}
                               onClick={() => {
                                   setIsSearchOpen(false)
                               }}/>
                    </Grid>
                    <Grid container justifyContent='center' alignContent='center' alignItems='center' paddingX={'32px'}
                          style={{height: "100%"}}>
                        <FullTextSearch/>
                    </Grid>
                </Grid>
            </Modal>
        </AppBarWrapper>
    );
}

export default Header