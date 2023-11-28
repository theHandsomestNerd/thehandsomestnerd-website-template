import React, {FunctionComponent} from 'react'
import {Grid, IconButton, Modal, useMediaQuery, useTheme} from '@mui/material'
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
                <Grid item xs={12} container justifyContent="space-between"
                      alignContent='center' alignItems='center' wrap={'nowrap'}>
                    <Grid container item xs={3} sm={2} md={1} alignItems='center' alignContent='center' wrap={'nowrap'}>
                        <Grid item><Logo logoText={props.pageHeader?.logoText}
                                         logoAccentText={props.pageHeader?.logoAccentText}/></Grid>
                    </Grid>
                    <Grid item xs={props.isSearch ? 8 : 6} sm={props.isSearch ? 9 : 7} md={props.isSearch ? 6 : 8}
                          justifyContent='flex-end' alignItems='center' container
                          alignContent='center' wrap={'nowrap'}>
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
                            mdDown && <Grid item xs={11} sm={2} container justifyContent='flex-end'>
                                {props.pageHeader && <MainMenu menu={props.pageHeader} anchor='top'/>}
                            </Grid>
                        }
                    </Grid>
                    {props.isSearch && <Grid item xs={2} sm={2} md={2}
                                             sx={{borderLeft: `1px solid ${customizedTheme.palette.primary.main}`}}
                                             alignContent='center' alignItems='center'>
                        <IconButton color='secondary' sx={{
                            marginLeft: "32px",
                            marginRight: "32px",
                            backgroundColor: customizedTheme.palette.primary.main
                        }}>
                            <Search color='secondary' fontSize='large' onClick={() => {
                                setIsSearchOpen((state) => !state)
                            }}/>
                        </IconButton>
                    </Grid>}
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