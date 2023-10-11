import React, {FunctionComponent, useEffect, useState} from 'react'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import {Grid, Link, Typography} from '@mui/material'
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import TheWebsiteTheme from "../../../theme/Theme";
export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginRight: WebDevSiteTheme.spacing(11),
    },
    footerLink: {
        marginBottom: '8px',
        textDecoration: 'none',
        // color: '#FDF3EB',
        '&:hover': {
            textDecoration: 'none',
        },
        textTransform: 'capitalize',
    },
    menuItem: {
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    menuTitle: {
        // color: '#FDF3EB',
        marginBottom: WebDevSiteTheme.spacing(1),
    },
    popover: {
        boxShadow: 'none',
        borderLeft: `4px solid ${WebDevSiteTheme.palette.background.default}`,
        borderRadius: 0,
    },
    list: {
        padding: 0,
    },
}))

export type LandingPagesFooterMenuGroupProps = {
    menuGroup: SanityMenuGroup,
}

const WebDevFooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
    const classes = useStyles(TheWebsiteTheme)

    const [menuGroupContents, setMenuGroupContents] = useState<SanityMenuGroup>()
    const [menuItemContents, setMenuItemContents] = useState<SanityMenuItem>()

    useEffect(() => {
        if (menuGroup._type === "menuGroup") {
            setMenuGroupContents(menuGroup)
        } else if (menuGroup._type === "menuItem") {
            setMenuItemContents(menuGroup)
        }
    },[])

    return (
        <Grid container direction="column" spacing={2} className={classes.root}>
            <Grid container item>
                <Typography color='primary' variant="body2"
                            className={classes.menuTitle}>{menuGroupContents && menuGroupContents.menuGroupTitle}</Typography>
            </Grid>
            <Grid item container>
                <Grid container item xs={8} direction='column' spacing={2}>
                    {
                        menuGroup?.links && menuGroup.links.map( (menuLink:any, index: any) => {
                            return (
                                <Grid key={index} item>
                                    <Link href={menuLink.url} className={classes.footerLink} underline="hover">
                                        <Typography variant="body1" color='textPrimary' noWrap  style={{fontFamily:"Raleway"}}>
                                            {menuLink.displayText}
                                        </Typography>
                                    </Link>
                                </Grid>
                            );
                        })
                    }
                    {
                        menuItemContents && <Grid item>
                            <Link
                                href={menuItemContents.url}
                                className={classes.footerLink}
                                underline="hover">
                                <Typography variant="body1" color='textPrimary' noWrap style={{fontFamily:"Raleway"}}>
                                    {menuItemContents.displayText}
                                </Typography>
                            </Link>
                        </Grid>
                    }
                    {!menuGroupContents && !menuItemContents && <></>}
                </Grid>

            </Grid>
        </Grid>
    );
}

export default WebDevFooterMenuGroup