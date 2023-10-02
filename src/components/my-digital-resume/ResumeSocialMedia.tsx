import React, {FunctionComponent} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { Grid, IconButton, PropTypes, ThemeProvider, StyledEngineProvider } from '@mui/material';
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import clsx from "clsx";
import {GridSpacing} from "@mui/material/Grid/Grid";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const useStyles = makeStyles((theme: Theme) => ({
    buttonBackground: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 40,
        padding:theme.spacing(1)
    },
}))

interface IProps {
    homePage?: SanityTransformHwHomePage
    color?: PropTypes.Color
    bgColor?: boolean
    spacing?: GridSpacing
}

const ResumeSocialMedia: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={DigitalResumeTheme}><Grid item xs={12} container alignItems='center' justifyContent='center'
                          spacing={props.spacing ? props.spacing : 0}>
                <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://facebook.com/${props.homePage?.facebook}`}
                            size="large"><Facebook/></IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://twitter.com/${props.homePage?.twitter}`}
                            size="large"><Twitter/></IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://instagram.com/${props.homePage?.instagram}`}
                            size="large"><Instagram/></IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://linkedIn.com/in/${props.homePage?.linkedIn}`}
                            size="large"><LinkedIn/></IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item className={clsx({[classes.buttonBackground]: props.bgColor})}>
                        <IconButton
                            color={props.color ?? 'primary'}
                            href={`https://github.com/${props.homePage?.github}`}
                            size="large"><GitHub/></IconButton>
                    </Grid>
                </Grid>
            </Grid></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ResumeSocialMedia