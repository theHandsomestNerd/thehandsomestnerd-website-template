import React, {FunctionComponent} from 'react'
import {Grid, IconButton, PropTypes, useTheme} from '@mui/material';
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import {GridSpacing} from "@mui/material/Grid/Grid";


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
    size?:any
}

const SocialMediaBlock: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()


    return (
            <Grid data-testid='social-media-block' item xs={12} container alignItems='center' justifyContent={props.isCentered?'center':'flex-end'}
                  spacing={props.spacing ? props.spacing : 0} wrap={'nowrap'}>
                {props.facebook && <Grid item>
                        <IconButton
                            sx={{
                                    borderRadius: 40,
                                    padding: theme.spacing(2),
                                    backgroundColor: props.bgColor ? props.theBackgroundColor:'transparent',
                                    color: `${props.iconColor ?? theme.palette.primary.main} !important`,

                                }}
                            href={`https://facebook.com/${props.facebook}`}
                            size={props.size?props.size:"small"}><Facebook color={'inherit'}/></IconButton>
                </Grid>}
                {props.twitter && <Grid item>
                        <IconButton
                            sx={{
                                    backgroundColor: props.bgColor ? props.theBackgroundColor:'transparent',
                                    borderRadius: 40,
                                    padding: theme.spacing(2),
                                    color: `${props.iconColor ?? theme.palette.primary.main} !important`
                                }}
                            href={`https://twitter.com/${props.twitter}`}
                            size={props.size?props.size:"small"}><Twitter  color={'inherit'}/></IconButton>
                </Grid>}
                {props.instagram && <Grid item>
                        <IconButton
                            sx={{
                                    backgroundColor: props.bgColor ? props.theBackgroundColor:'transparent',
                                    borderRadius: 40,
                                    padding: theme.spacing(2),
                                    color: `${props.iconColor ?? theme.palette.primary.main} !important`
                                }}
                            href={`https://instagram.com/${props.instagram}`}
                            size={props.size?props.size:"small"}><Instagram  color={'inherit'}/></IconButton>
                </Grid>}
                {props.linkedIn && <Grid item>
                        <IconButton
                             sx={{
                                    backgroundColor: props.bgColor ? props.theBackgroundColor:'transparent',
                                    borderRadius: 40,
                                    padding: theme.spacing(2),
                                    color: `${props.iconColor ?? theme.palette.primary.main} !important`
                                }}
                            href={`https://linkedIn.com/in/${props.linkedIn}`}
                            size={props.size?props.size:"small"}><LinkedIn color={'inherit'}/></IconButton>
                </Grid>}
                {props.github && <Grid item>
                        <IconButton
                             sx={{
                                    backgroundColor: props.bgColor ? props.theBackgroundColor:'transparent',
                                    borderRadius: 40,
                                    padding: theme.spacing(2),
                                    color: `${props.iconColor ?? theme.palette.primary.main} !important`
                                }}
                            href={`https://github.com/${props.github}`}
                            size={props.size?props.size:"small"}><GitHub color={'inherit'}/></IconButton>
                </Grid>}
            </Grid>

    );
}

export default SocialMediaBlock