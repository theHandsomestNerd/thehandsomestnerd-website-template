import {FunctionComponent, useContext, useEffect} from 'react'
import {Grid, Link, useMediaQuery, useTheme} from '@mui/material'
import {SanityTransformHwHomePage} from "../../../../common/sanityIo/Types";
import BlockContentLayoutContainer from "../../../BlockContentLayoutContainer";
import {useLocation} from "react-router";
import HeaderBlockContentLayoutContainer from "../../../HeaderBlockContentLayoutContainer";
import FooterBlockContentLayoutContainer from "../../../FooterBlockContentLayoutContainer";
import BusinessCard from "../../../BusinessCard";
import useCustomStyles from "./Styles";
import clsx from "clsx";
import FirebaseContext from "../../../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import {convertToHexCode} from "../../../../theme/common/ColorPalette";

interface IProps {
    homePage: SanityTransformHwHomePage
}

const PageLayout: FunctionComponent<IProps> = (props: IProps) => {
    const location = useLocation();
    const theme = useTheme()
    const firebaseContext = useContext(FirebaseContext)
    const sanityContext = useContext(SanityContext)


    const classes = useCustomStyles({bgImage: sanityContext.urlFor(props.homePage.backgroundImageSrc ?? "")})

    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))
    useEffect(() => {
        props.homePage.title && firebaseContext.analyticsPageView && firebaseContext.analyticsPageView(
            location.pathname,
            location.search,
            `${props.homePage.title}`,
        );
    }, []);

    return (
        <Grid container item style={{width: "100vw", minHeight: "100vh"}}>
            {/*<Grid container item>*/}
            {/*    <Header pageHeader={props.homePage.headerMenuRef}/>*/}
            {/*</Grid>*/}
            {props.homePage.isFabActivated &&
                <Grid container item style={{position: "fixed", bottom: 0, right: 0, zIndex: 9999}}>
                    <BusinessCard homePage={props.homePage} anchor={'bottom'}/>
                </Grid>}
            <Grid container item>
                {props.homePage.headerContent && <Grid container item>
                    <HeaderBlockContentLayoutContainer
                        content={props.homePage.headerContent.content}/>
                </Grid>}
            </Grid>
            <Grid item container style={{
                position: "relative",
                backgroundSize: "cover",
                backgroundImage: `url(${sanityContext.urlFor(props.homePage.backgroundImageSrc ?? "")})`
            }}
            >

                {
                    props.homePage.pageContent && <Grid container item style={{zIndex: 1000}}>
                        <BlockContentLayoutContainer
                            homePage={props.homePage}
                            content={props.homePage.pageContent.content}/>
                    </Grid>
                }
                {props.homePage.backgroundImageSrc ? <Grid container item
                                                           className={clsx(xsDown ? classes.fullSection : classes.fullSection, classes.fullSectionOverlay)}>
                </Grid> : <></>}
            </Grid>
            <Grid container item>
                {props.homePage.footerContent && <Grid container item>
                    <FooterBlockContentLayoutContainer
                        content={props.homePage.footerContent.content}/>
                </Grid>}
            </Grid>
            <Grid container item
                  alignContent='center'
                  alignItems='center'
                  style={{
                      backgroundColor: props.homePage.copyRightBackgroundColor ? convertToHexCode(props.homePage.copyRightBackgroundColor) : "whitesmoke",
                      position: "sticky",
                      bottom: 0,
                      zIndex: 10,
                      padding: theme.spacing(.5, 3, .5)
                  }}
                // xs={11}
            >
                <Link
                    gutterBottom
                    href='https://thehandsomestnerd.com'
                    color={props.homePage.copyRightTextColor ? convertToHexCode(props.homePage.copyRightTextColor) : "black"}
                    variant='subtitle2'
                    underline="hover">
                    © Copyright 2023
                    TheHandsomestNerd, LLC. All Rights Reserved.
                </Link>
            </Grid>
        </Grid>
    );
}

export default PageLayout