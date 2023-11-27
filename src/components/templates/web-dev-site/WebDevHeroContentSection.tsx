import React, {FunctionComponent, useContext} from 'react'
import {urlFor} from '../../block-content-ui/static-pages/cmsStaticPagesClient'
import {WebDevHeroContentSectionType} from "../../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import firebaseAnalyticsClient from "../../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../../page-context/PageContext";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import makeStyles from "@mui/styles/makeStyles";
import {Theme, ThemeProvider} from "@mui/material/styles";
import {Button, Grid, Typography} from "@mui/material";
// import FontFaces from "../../theme/common/FontFaces";

interface IProps {
    sectionData: WebDevHeroContentSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: (props: CSSProps) => ({
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${props.heroBaseImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '521px',
        position: "relative"
    }),
    contentSection: {
        marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        // borderLeft: `4px solid ${theme.palette.primary.main}`,
        // paddingLeft: '26px',
    }
}))

const WebDevHeroContentSection: FunctionComponent<IProps> = (props) => {
    let classParameters: CSSProps = {
        heroBaseImageUrl: urlFor(props.sectionData.heroImageBackground ?? "").url() ?? '',
    }

    const pageContext = useContext(PageContext)

    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    return (
        <Grid container item className={classes.marketingBackground} justifyContent='center'>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container direction='column' style={{zIndex: 2}} xs={11} justifyContent='center'>
                <Grid item>
                    <Grid container className={classes.contentSection} item xs={12} justifyContent='flex-start' alignContent='center' alignItems='center'>
                        <Grid container spacing={2} xs={8}>
                            <Grid item xs={8} container>
                                <Typography variant='h2'
                                            color={'textPrimary'}
                                            style={{fontFamily:"Elaine Sans"}}>{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid container item xs={8}>
                                <Typography variant='body1'
                                            color='textPrimary'
                                            style={{fontFamily: "Raleway"}}>{props.sectionData.contentText}</Typography>
                            </Grid>
                            <Grid item container>
                                <Button color='primary' variant='outlined'
                                        onClick={() => {
                                            firebaseAnalyticsClient.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)
                                        }}
                                        href={props.sectionData.ctaButtonLink ?? ""} >
                                    <Grid container alignItems='center' spacing={1}>
                                        <Grid item>
                                            <Typography variant='button'
                                                        >{props.sectionData.ctaButtonTitle}</Typography>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default WebDevHeroContentSection