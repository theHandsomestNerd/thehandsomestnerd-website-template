import React, {FunctionComponent, useEffect, useState} from 'react'
import {Theme} from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import {Grid, Link, Typography, useMediaQuery, useTheme} from '@mui/material'
import {SanityMenuGroup, SanityMenuItem} from "../../../../common/sanityIo/Types";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginRight: theme.spacing(11),
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
        marginBottom: theme.spacing(1),
    },
    popover: {
        boxShadow: 'none',
        borderLeft: `4px solid ${theme.palette.background.default}`,
        borderRadius: 0,
    },
    list: {
        padding: 0,
    },
}))

export type LandingPagesFooterMenuGroupProps = {
    menuGroup: SanityMenuGroup,
}

const FooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
    const classes = useStyles()
    const theme = useTheme()
    const [menuGroupContents, setMenuGroupContents] = useState<SanityMenuGroup>()
    const [menuItemContents, setMenuItemContents] = useState<SanityMenuItem>()

    useEffect(() => {
        if (menuGroup._type === "menuGroup") {
            setMenuGroupContents(menuGroup)
        } else if (menuGroup._type === "menuItem") {
            setMenuItemContents(menuGroup)
        }
    }, [menuGroup])

    const mdOnly = useMediaQuery(theme.breakpoints.only('sm'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Grid container direction="column" spacing={2} className={classes.root} >
            <Grid container item justifyContent={mdUp?'flex-start':'center'}>
                <Typography color='primary' variant="body2"
                            className={classes.menuTitle}>{menuGroupContents && menuGroupContents.menuGroupTitle}</Typography>
            </Grid>
            <Grid item container>
                <Grid container item xs={12} direction={mdOnly ? 'row' : 'column'} spacing={2} alignItems={mdUp?'flex-start':'center'} alignContent={mdUp?'flex-start':'center'} justifyContent={mdUp?'flex-start':'center'} >
                    {
                        menuGroup?.links && menuGroup.links.map((menuLink: any, index: any) => {
                            return (
                                <Grid key={index} item>
                                    <Link href={menuLink.url} className={classes.footerLink} underline="hover">
                                        <Typography variant="body1" color='white' noWrap>
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
                                <Typography variant="body1" color='white' noWrap>
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

export default FooterMenuGroup