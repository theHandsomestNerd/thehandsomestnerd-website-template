import React, {FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid, IconButton, PropTypes, ThemeProvider} from '@mui/material';
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
    color?: PropTypes.Color
    bgColor?: boolean
    spacing?: GridSpacing
}

const SocialMediaBlock: FunctionComponent<IProps> = (props: IProps) => {
    const customizedThemeContext = useContext(CustomizedThemeContext)
     const useStyles = makeStyles(({
        buttonBackground: {
            backgroundColor: customizedThemeContext.customizedTheme.palette.primary.main,
            borderRadius: 40,
            padding: customizedThemeContext.customizedTheme.spacing(1)
        },
    }))
    const classes = useStyles()
    return (
            <Grid data-testid='social-media-block' item xs={12} container alignItems='center' justifyContent='flex-end'
                  spacing={props.spacing ? props.spacing : 0} wrap={'nowrap'}>
                {props.facebook && <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://facebook.com/${props.facebook}`}
                            size="medium"><Facebook/></IconButton>
                    </Grid>
                </Grid>}
                {props.twitter && <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://twitter.com/${props.twitter}`}
                            size="medium"><Twitter/></IconButton>
                    </Grid>
                </Grid>}
                {props.instagram && <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://instagram.com/${props.instagram}`}
                            size="medium"><Instagram/></IconButton>
                    </Grid>
                </Grid>}
                {props.linkedIn && <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://linkedIn.com/in/${props.linkedIn}`}
                            size="medium"><LinkedIn/></IconButton>
                    </Grid>
                </Grid>}
                {props.github && <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://github.com/${props.github}`}
                            size="medium"><GitHub/></IconButton>
                    </Grid>
                </Grid>}
            </Grid>

    );
}

export default SocialMediaBlock