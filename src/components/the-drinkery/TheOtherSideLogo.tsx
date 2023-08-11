import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {SanityImageSource} from "@sanity/asset-utils";
import logoImg from './drinkery-logo.png'


interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props: CssProps) => ({
        backgroundImage: `url(${logoImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
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
}

const TheOtherSideLogo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc: props.logoImageSrc, height: props.height})

    return (
        <Grid item container className={classes.root} style={{backgroundPosition: props.isCenter ? "center" : "left"}}/>
    )
}

export default TheOtherSideLogo