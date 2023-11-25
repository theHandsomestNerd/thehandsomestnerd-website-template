import React, {FunctionComponent, useContext} from 'react'
import {urlFor} from '../../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwMottoSectionType} from "../../BlockContentTypes";
import {Parallax} from 'react-parallax';
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import TransformHWTheme from "../../../theme/TransformHWTheme";
import {Theme, ThemeProvider} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        // backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwMottoSectionType
}

const ThwMottoSection: FunctionComponent<IProps> = (props) => {
    const globalClasses = useCustomStyles({})
    const classes = useStyles()
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('sm'))
    return (
        <Parallax blur={1}
                                                          bgImage={urlFor(props.sectionData.parallaxImage).url() ?? undefined}
                                                          bgImageAlt="the cat"
                                                          strength={600}>
            <Grid container item
                  className={clsx([globalClasses.fullSection, classes.root])}
                  style={{position: "relative", overflow: "hidden"}}>
                <Grid container item
                      className={clsx(globalClasses.fullSectionOverlay)}>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' alignContent='center' item
                      style={{zIndex: 2, padding: "40px"}}>
                    <Typography variant='subtitle1' style={{color: '#FAFAFA'}} align='center'>
                        {props.sectionData.contentSuperTitle}
                    </Typography>
                    <Typography variant={smDown ? 'h3' : 'h2'} style={{color: '#FAFAFA'}}
                                align='center'>
                        {props.sectionData.contentText}
                    </Typography>
                </Grid>
            </Grid>
        </Parallax>
    )
}

export default ThwMottoSection