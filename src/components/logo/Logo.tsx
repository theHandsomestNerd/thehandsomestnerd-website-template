import React, {FunctionComponent} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import logoImg from './thehandsomestNerdlogo-small.png'
import AlternatingText from './AlternatingText';

interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    imageRoot: (props: CssProps) => ({
        backgroundImage: `url('${props.logoImageSrc ? urlFor(props.logoImageSrc).height(props.height ?? 68).url() : logoImg}')`,
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
    noWrap?: boolean
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc: props.logoImageSrc, height: props.height})
console.log(props.logoImageSrc && urlFor(props.logoImageSrc).height(props.height ?? 0).url())
    return !props.logoText ?
        <Grid item container className={classes.imageRoot}
              style={{backgroundPosition: props.isCenter ? "center" : "left"}}/>
        : <Grid container item className={classes.root}
                alignItems='center'
                alignContent='center'
                justifyContent={props.isCenter ? 'center' : 'flex-start'}>
            <AlternatingText noWrap logoText={props.logoText} logoAccentText={props.logoAccentText}/>
        </Grid>

}

export default Logo