import React, {FunctionComponent} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import logoImg from './thehandsomestNerdlogo-small.png'

interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    imageRoot: (props: CssProps) => ({
        backgroundImage: `url(${props.logoImageSrc ? urlFor(props.logoImageSrc).height(props.height ?? 0).url() : logoImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        minWidth: "100px",
        height: `${props.height ?? 68}px`,
        // marginTop: theme.spacing(2),
        // marginBottom: theme.spacing(2)
    }),
    root: (props: CssProps) => ({
        minWidth: "100px",
        height: `${props.height ?? 68}px`,
        // marginTop: theme.spacing(2),
        // marginBottom: theme.spacing(2)
    }),
}))

interface LogoProps {
    logoImageSrc?: SanityImageSource
    height?: number
    isCenter?: boolean
    logoText?: string
    logoAccentText?: string
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc: props.logoImageSrc, height: props.height})

    return !props.logoText ?
        <Grid item container className={classes.imageRoot}
              style={{backgroundPosition: props.isCenter ? "center" : "left"}}/>
        : <Grid container item className={classes.root}
                style={{paddingTop: '12px'}}
                justifyContent={props.isCenter ? 'center' : 'flex-start'}>
            <Typography
                style={{
                    fontFamily: "Oswald",
                    fontWeight: "300"
                }}
                variant='h3'
                color='textPrimary'>{props.logoText}</Typography>
            <Typography
                variant='h3'
                color='primary'
                display='inline'
                style={{
                    fontFamily: "Oswald",
                    fontWeight: "300"
                }}>{props.logoAccentText ? props.logoAccentText : ""}</Typography>
        </Grid>

}

export default Logo