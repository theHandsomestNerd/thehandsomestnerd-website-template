import {FunctionComponent} from 'react'
import {Grid, IconButton, PropTypes, Tooltip, Typography, useTheme} from '@mui/material';
import {CopyAll, Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import {GridSpacing} from "@mui/material/Grid/Grid";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";


interface IProps {
    // homePage?: SanityTransformHwHomePage
    facebook?: string
    twitter?: string
    instagram?: string
    linkedIn?: string
    github?: string
    isCentered?: boolean
    color?: PropTypes.Color
    bgColor?: boolean
    theBackgroundColor?: string
    iconColor?: string
    spacing?: GridSpacing
    size?: any
    isHoverColor?: boolean
}

export const useStyles = makeStyles((theme: Theme) => ({
    iconButton: {
        "& .MuiButtonBase-root-MuiIconButton-root": {
            "&:hover": {
                backgroundColor: theme.palette.primary.dark
            }

        }
    }
}))
const SocialMediaBlock: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const customizedThemeContext = useTheme()

    return (
        <Grid data-testid='social-media-block' item xs={12} container alignItems='center'
              justifyContent={props.isCentered ? 'center' : 'flex-end'}
              spacing={props.spacing ? props.spacing : 0} wrap={'nowrap'}>
            {props.facebook && <Grid item>
                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main

                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        minWidth:"max-content",
                                        // color: customizedThemeContext.palette.text.secondary,
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid sx={{marginLeft:"8px"}} container alignItems='center' spacing={1}>
                        <Grid item xs={10}><Typography variant='caption' >https://facebook.com/{props.facebook}</Typography></Grid>
                        <Grid item xs={2} style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={() => navigator.clipboard.writeText(`https://facebook.com/${props.facebook}`)}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                        sx={{
                            "&:hover": {backgroundColor: props.isHoverColor ? theme.palette.primary.dark : 'transparent'},
                            borderRadius: 40,
                            padding: theme.spacing(2),
                            backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                            color: `${props.iconColor ?? theme.palette.primary.main} !important`,

                        }}
                        href={`https://facebook.com/${props.facebook}`}
                        size={props.size ? props.size : "small"}><Facebook color={'inherit'}/></IconButton></Tooltip>
            </Grid>}
            {props.twitter && <Grid item>
                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main

                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        minWidth:"max-content",
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid sx={{marginLeft:"8px"}} container alignItems='center' spacing={1}>
                        <Grid item>https://twitter.com/{props.twitter}</Grid>
                        <Grid item style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={() => navigator.clipboard.writeText(`https://twitter.com/${props.twitter}`)}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                        sx={{
                            "&:hover": {backgroundColor: props.isHoverColor ? theme.palette.primary.dark : 'transparent'},
                            backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                            borderRadius: 40,
                            padding: theme.spacing(2),
                            color: `${props.iconColor ?? theme.palette.primary.main} !important`
                        }}
                        href={`https://twitter.com/${props.twitter}`}
                        size={props.size ? props.size : "small"}><Twitter color={'inherit'}/></IconButton>
                </Tooltip>
            </Grid>}
            {props.instagram && <Grid item>

                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main

                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        minWidth:"max-content",
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid sx={{marginLeft:"8px"}} container alignItems='center' spacing={1}>
                        <Grid item>https://instagram.com/{props.instagram}</Grid>
                        <Grid item style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={() => navigator.clipboard.writeText(`https://instagram.com/${props.instagram}`)}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                        sx={{
                            "&:hover": {backgroundColor: props.isHoverColor ? theme.palette.primary.dark : 'transparent'},
                            backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                            borderRadius: 40,
                            padding: theme.spacing(2),
                            color: `${props.iconColor ?? theme.palette.primary.main} !important`
                        }}
                        href={`https://instagram.com/${props.instagram}`}
                        size={props.size ? props.size : "small"}><Instagram color={'inherit'}/></IconButton>
                </Tooltip>
            </Grid>}
            {props.linkedIn && <Grid item>
                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main

                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        minWidth:"max-content",
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid sx={{marginLeft:"8px"}} container alignItems='center' spacing={1}>
                        <Grid item>https://linkedIn.com/in/{props.linkedIn}</Grid>
                        <Grid item style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={() => navigator.clipboard.writeText(`https://linkedIn.com/in/${props.linkedIn}`)}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                    sx={{
                        "&:hover": {backgroundColor: props.isHoverColor ? theme.palette.primary.dark : 'transparent'},
                        backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                        borderRadius: 40,
                        padding: theme.spacing(2),
                        color: `${props.iconColor ?? theme.palette.primary.main} !important`
                    }}
                    href={`https://linkedIn.com/in/${props.linkedIn}`}
                    size={props.size ? props.size : "small"}><LinkedIn color={'inherit'}/></IconButton>
                </Tooltip>
            </Grid>}
            {props.github && <Grid item>
                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main

                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        minWidth:"max-content",
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid sx={{marginLeft:"8px"}} container alignItems='center' spacing={1}>
                        <Grid item>https://github.com/{props.github}</Grid>
                        <Grid item style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={() => navigator.clipboard.writeText(`https://github.com/${props.github}`)}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                        sx={{
                            "&:hover": {backgroundColor: props.isHoverColor ? theme.palette.primary.dark : 'transparent'},
                            backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                            borderRadius: 40,
                            padding: theme.spacing(2),
                            color: `${props.iconColor ?? theme.palette.primary.main} !important`
                        }}
                        href={`https://github.com/${props.github}`}
                        size={props.size ? props.size : "small"}><GitHub color={'inherit'}/></IconButton>
                </Tooltip>
            </Grid>}
        </Grid>

    );
}

export default SocialMediaBlock