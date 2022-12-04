import React, {FunctionComponent} from 'react'
import {Grid, Link, useTheme} from '@material-ui/core'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import BlockContentLayoutContainer from "../../BlockContentLayoutContainer";
import firebaseAnalyticsClient from "../../../utils/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface IProps {
    homePage: SanityTransformHwHomePage
}

const PageLayout: FunctionComponent<IProps> = (props: IProps) => {
    const location = useLocation();
    const theme = useTheme()

    React.useEffect(() => {
        props.homePage.title && firebaseAnalyticsClient.analyticsPageView(
            location.pathname,
            location.search,
            `${props.homePage.title} | The Handsomest Nerd`,
        );
    }, []);

    return (<Grid container item style={{width: "100vw"}}>
        <Grid container item>
            <Header pageHeader={props.homePage.headerMenuRef}/>
        </Grid>
        <Grid container item style={{height: "48px"}}>

        </Grid>
        <Grid item container>
            {
                props.homePage.pageContent && <Grid container item>
                    <BlockContentLayoutContainer
                        homePage={props.homePage}
                        content={props.homePage.pageContent.content}/>
                </Grid>
            }
        </Grid>
        <Grid container item>
            <Footer homePage={props.homePage}/>
        </Grid>
        <Grid container item
              alignContent='center'
              alignItems='center'
              style={{
                  backgroundColor: "white",
                  position: "static",
                  bottom: 0,
                  padding: theme.spacing(1, 3, 1.5)
              }}
            // xs={11}
        >
            <Link
                gutterBottom
                href='https://thehandsomestnerd.com'
                color='textPrimary'
                variant='subtitle2'>
                © Copyright 2022
                TheHandsomestNerd, LLC. All Rights Reserved.
            </Link>
        </Grid>
    </Grid>)
}

export default PageLayout