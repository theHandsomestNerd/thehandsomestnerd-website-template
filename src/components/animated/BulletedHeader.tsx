import React, {FunctionComponent, useContext} from 'react'
import {Grid, Typography} from "@mui/material";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {SanityImageAsset} from "../BlockContentTypes";
import ColoredPng from "../colored-png/ColoredPng";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    textContent?: string
    heroBullet?: SanityImageAsset
    color?: string
    isCenter?: boolean
}

const BulletedHeader: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    React.useEffect(() => {
    }, [])
    const customizedThemeContext = useContext(CustomizedThemeContext)


    return (<Grid item container justifyContent={props.isCenter?'center':'flex-start'} alignItems='center'>

        <Grid item style={{zIndex: 10, marginRight: "4px"}}>{props.heroBullet &&
            <ColoredPng size={11} maskAsset={props.heroBullet} color={props.color === 'secondary' ? customizedThemeContext.customizedTheme.palette.secondary.light: customizedThemeContext.customizedTheme.palette.primary.dark} />
            // <img width={10} height={10}
            //      src={urlFor(props.heroBullet).url() ?? ""}/>
                 }
        </Grid>
        <Grid item style={{position: "relative"}}>
            <Grid item
                  style={{
                      borderTop: `1px solid ${props.color === 'secondary' ? customizedThemeContext.customizedTheme.palette.secondary.main : customizedThemeContext.customizedTheme.palette.primary.main}`,
                      borderLeft: `1px solid ${props.color === 'secondary' ? customizedThemeContext.customizedTheme.palette.secondary.light : customizedThemeContext.customizedTheme.palette.primary.main}`,
                      left: -9,
                      top: 0,
                      position: "absolute",
                      width: "106%",
                      height: ".5em"
                  }}></Grid>
            <Typography variant='body1'
                        color={props.color === 'secondary' ? 'textSecondary' : 'primary'}
                        style={{
                            textTransform: "uppercase",
                            // color: customizedThemeContext.customizedTheme.palette.text.secondary,
                            fontWeight: "700",
                            letterSpacing: 1.6
                        }}>{props.textContent}</Typography>
        </Grid>
    </Grid>)
}

export default BulletedHeader