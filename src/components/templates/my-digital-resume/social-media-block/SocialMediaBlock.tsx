import React, {FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid, IconButton, PropTypes, ThemeProvider, useTheme} from '@mui/material';
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import clsx from "clsx";
import {GridSpacing} from "@mui/material/Grid/Grid";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";




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
}

const SocialMediaBlock: FunctionComponent<IProps> = (props: IProps) => {
    const customizedThemeContext = useContext(CustomizedThemeContext)
    const theme = useTheme()
     const useStyles = makeStyles(({
        buttonBackground: {
            backgroundColor: props.bgColor ? props.theBackgroundColor:theme.palette.primary.main,
            borderRadius: 40,
            // padding: theme.spacing(1),
            color: `${props.iconColor ?? theme.palette.primary.main} !important`
        },
    }))

    console.log(props.iconColor)
    const classes = useStyles()
    return (
            <Grid data-testid='social-media-block' item xs={12} container alignItems='center' justifyContent={props.isCentered?'center':'flex-end'}
                  spacing={props.spacing ? props.spacing : 0} wrap={'nowrap'}>
                {props.facebook && <Grid item>
                        <IconButton
                            className={clsx({[classes.buttonBackground]: props.bgColor})}
                            href={`https://facebook.com/${props.facebook}`}
                            size="small"><Facebook color={'inherit'}/></IconButton>
                </Grid>}
                {props.twitter && <Grid item>
                        <IconButton
                            className={clsx({[classes.buttonBackground]: props.bgColor})}
                            href={`https://twitter.com/${props.twitter}`}
                            size="small"><Twitter  color={'inherit'}/></IconButton>
                </Grid>}
                {props.instagram && <Grid item>
                        <IconButton
                            className={clsx({[classes.buttonBackground]: props.bgColor})}
                            href={`https://instagram.com/${props.instagram}`}
                            size="small"><Instagram  color={'inherit'}/></IconButton>
                </Grid>}
                {props.linkedIn && <Grid item>
                        <IconButton
                            className={clsx({[classes.buttonBackground]: props.bgColor})}
                            href={`https://linkedIn.com/in/${props.linkedIn}`}
                            size="small"><LinkedIn color={'inherit'}/></IconButton>
                </Grid>}
                {props.github && <Grid item>
                        <IconButton
                            className={clsx({[classes.buttonBackground]: props.bgColor})}
                            href={`https://github.com/${props.github}`}
                            size="small"><GitHub color={'inherit'}/></IconButton>
                </Grid>}
            </Grid>

    );
}

export default SocialMediaBlock