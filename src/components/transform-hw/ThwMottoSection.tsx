import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, MuiThemeProvider, ThemeProvider, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwMottoSectionType} from "../BlockContentTypes";
import {Parallax} from 'react-parallax';
import clsx from "clsx";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import TransformHWTheme from "../../theme/TransformHWTheme";

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
    const globalClasses = useCustomStyles(DigitalResumeTheme)
    const classes = useStyles()
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <ThemeProvider theme={TransformHWTheme}><Parallax blur={1}
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
                    <Typography variant={mediaQueriesContext.smDown ? 'h3' : 'h2'} style={{color: '#FAFAFA'}}
                                align='center'>
                        {props.sectionData.contentText}
                    </Typography>
                </Grid>
            </Grid>
        </Parallax></ThemeProvider>
    )
}

export default ThwMottoSection