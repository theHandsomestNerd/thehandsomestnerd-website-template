import{FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import {SanityImageSource} from "@sanity/asset-utils";
// import logoImg from '../../logo.png'
import AlternatingText from './AlternatingText';
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles(() => ({
    imageRoot: (props: CssProps) => ({
        backgroundImage: `url('${props.logoImageSrc}')`,
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
    const sanityContext = useContext(SanityContext)

    const classes = useStyles({logoImageSrc: sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.logoImageSrc), height: props.height})

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