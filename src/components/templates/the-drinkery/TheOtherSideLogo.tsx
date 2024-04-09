import{FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import {SanityImageSource} from "@sanity/asset-utils";
import SanityContext from '../../../common/sanityIo/sanity-context/SanityContext';


interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles(() => ({
    root: (props: CssProps) => ({
        backgroundImage: `url(${props.logoImageSrc})`,
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
    const sanityContext = useContext(SanityContext)
    const classes = useStyles({logoImageSrc: sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.logoImageSrc, 732, 192), height: props.height})

    return (
        <Grid item container className={classes.root} style={{backgroundPosition: props.isCenter ? "center" : "left"}}/>
    )
}

export default TheOtherSideLogo