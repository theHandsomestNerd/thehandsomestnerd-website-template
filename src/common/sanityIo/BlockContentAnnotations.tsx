import React from 'react'
import {BlockContentPropsType, ButtonType, LinkType} from './BlockContentRenderer'
import {Button, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography,} from '@mui/material';
import {FiberManualRecord} from '@mui/icons-material'
import {useCommonStyles} from './CommonStyles'
import TheWebsiteTheme from '../../theme/Theme';


export const UtmLinkRender: React.FunctionComponent = (props: React.PropsWithChildren<{}> & BlockContentPropsType<LinkType>) => {

    return <Link href={props?.mark?.href} color='secondary' underline="hover">{props.children}</Link>;
}

export const ButtonMarkRender = (props: React.PropsWithChildren<{}> & BlockContentPropsType<ButtonType>) => {
    let textColor = ''

    switch (props?.mark?.variant) {
        case 'outlined':
            switch (props.mark?.color) {
                case 'secondary':
                    textColor = TheWebsiteTheme.palette.secondary.main
                    break;
                case 'primary':
                    textColor = TheWebsiteTheme.palette.primary.main
                    break;
                case 'mint':
                    textColor = ""
                    break;
                default:
                    textColor = "whitesmoke"
            }
            break
        case 'contained':
            switch (props.mark?.color) {
                case 'secondary':
                    textColor = "whitesmoke"
                    break;
                case 'primary':
                    textColor = "whitesmoke"
                    break;
                case 'mint':
                    textColor = TheWebsiteTheme.palette.secondary.main
                    break;
                default:
                    textColor = TheWebsiteTheme.palette.background.paper
            }
            break
        case 'text':
        default:
            switch (props.mark?.color) {
                case 'secondary':
                    textColor = TheWebsiteTheme.palette.secondary.main
                    break;
                case 'primary':
                    textColor = TheWebsiteTheme.palette.primary.main
                    break;
                case 'mint':
                    textColor = ""
                    break;
                default:
                    textColor = TheWebsiteTheme.palette.text.primary
            }
            break
    }

    return <Grid container item>
        <Button
            style={props?.mark?.color === 'mint' ? props?.mark?.variant === 'contained' ? {
                backgroundColor: "",
                borderRadius: "20px"
            } : {backgroundColor: 'transparent', borderColor: "", borderRadius: "20px"} : {borderRadius: "20px"}}
            variant={props?.mark?.variant as 'text' | 'outlined' | 'contained'}
            color={props?.mark?.color != 'mint' ? props?.mark?.color : 'inherit'}
            href={props?.mark?.buttonLink}>
            <Typography variant='button'
                        style={{color: textColor}}>{props?.children}</Typography>
        </Button>
    </Grid>
}

export const ListRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
    return <Grid container direction='column'>
        <List>{props.children}</List>
    </Grid>
}

export const ListItemRender: React.FunctionComponent = (props: React.PropsWithChildren<{
    node?: any,
    index?: number
}>) => {
    const classes = useCommonStyles(props)
    return (<Grid item>
        <ListItem className={classes.listItemRoot}>
            <Grid container wrap='nowrap' alignItems='flex-start'>
                <Grid item>
                    <ListItemIcon className={classes.bulletIconContainer}>
                        {props.node?.listItem && props.node?.listItem === 'bullet' ?
                            <FiberManualRecord className={classes.bulletIcon}/>
                            : <Typography variant='subtitle1'
                                          className={classes.orderedListIndex}>{(props?.index ?? 0) + 1}.</Typography>}
                    </ListItemIcon>
                </Grid>
                <Grid item wrap='nowrap' container>
                    <ListItemText>{props.children}</ListItemText>
                </Grid>
            </Grid>

        </ListItem>
    </Grid>)
}

export default {
    UtmLinkRender,
    ListRender,
    ListItemRender
}
