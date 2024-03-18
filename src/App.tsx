import {Grid, useTheme} from '@mui/material';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {QueryClientProvider} from '@tanstack/react-query';
import FourOhFour from "./components/templates/transform-hw/pages/error-page/FourOhFour";
import PageProvider from "./components/page-context/PageProvider";
import AmenityProvider from "./components/amenity-context/AmenityProvider";
import ModalProvider from "./components/snackbar-context/ModalProvider";
import SnackbarProvider from "./components/modal-context/SnackbarProvider";
import PageMux from "./components/templates/mackenzies-mind/pages/PageMux";
import CustomizedThemeProvider from "./components/customized-theme-provider/CustomizedThemeProvider";
import {queryClient} from "./queryClient";
import DJSpadesRulesContentSection from "./components/dj-40-spades-rules/41AcresSpadesContentSection";
import FirebaseContext from "./common/firebase/firebase-context/FirebaseContext";
import SanityContext from "./common/sanityIo/sanity-context/SanityContext";
import AppSettingsProvider from "./components/templates/anybody-walking/app-settings/AppSettingsProvider";

interface IProps {
    react_app_releaseDate: string
    react_app_api_url: string
    react_app_sanity_projectid: string
    react_app_sanity_db: string
    react_app_sanity_apiversion: string

    react_app_sanity_projectid_cocktails: string
    react_app_sanity_db_cocktails: string
    react_app_sanity_apiversion_cocktails: string

    react_app_api_key: string
    react_app_auth_domain: string
    react_app_database_url: string
    react_app_project_id: string
    react_app_storage_bucket: string
    react_app_messaging_sender_id: string
    react_app_app_id: string
    react_app_firebase_analytics_tracking_id: string
    react_app_base_route: string
    react_app_bar_inventory_slug: string
    react_app_googlemaps_embed_api_key: string
}


const App: FunctionComponent<IProps & PropsWithChildren> = (props) => {

    const theme = useTheme()
    const firebaseContext = useContext(FirebaseContext)
    const sanityContext = useContext(SanityContext)
    React.useEffect(() => {
        const windowUrl = window.location.search;
        const params: any = new URLSearchParams(windowUrl);

        if (params.has('utm_source') || params.has('utm_medium') || params.has('utm_campaign') || params.has('utm_id')) {
            firebaseContext.analytics.utmCodes(params.get('utm_source'), params.get('utm_medium'), params.get('utm_campaign'), params.get('utm_id'))
        }

        // console.log("Props passed to APp", props)
    }, [])

    React.useEffect(() => {

        if (firebaseContext.initFirebase) {
            // console.log("Initializing firebase")
            firebaseContext.initFirebase(
                props.react_app_api_key,
                props.react_app_auth_domain,
                props.react_app_database_url,
                props.react_app_project_id,
                props.react_app_storage_bucket,
                props.react_app_messaging_sender_id,
                props.react_app_app_id,
                props.react_app_firebase_analytics_tracking_id
            )
        }
        if (sanityContext.initSanity) {
            sanityContext.initSanity(props.react_app_sanity_projectid, props.react_app_sanity_db, props.react_app_sanity_apiversion, true, props.react_app_sanity_projectid_cocktails,props.react_app_sanity_db_cocktails)
        }

    }, [])

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <PageProvider googleApiKey={props.react_app_googlemaps_embed_api_key} barInventorySlug={props.react_app_bar_inventory_slug}>
                    <CustomizedThemeProvider>
                        <SnackbarProvider>
                            <ModalProvider>
                                <AmenityProvider>
                                    {/*<BallSearchProvider>*/}
                                    <AppSettingsProvider>
                                        <Grid container item alignItems="center"
                                              style={{
                                                  backgroundColor: theme.palette.background.default,
                                                  overflow: "hidden",
                                                  width: "100vw"
                                              }} justifyContent='center'>

                                            <Grid item>
                                                <Routes>
                                                    <Route path={"/DJs-40th-spades-rules"}
                                                           element={<DJSpadesRulesContentSection/>}/>
                                                    <Route
                                                        path={"/" + props.react_app_base_route + "/:pageSlug" + "/:documentType" + "/:documentSlug"}
                                                        element={<PageMux baseRoute={props.react_app_base_route}/>}/>
                                                    <Route path={"/" + props.react_app_base_route + "/:pageSlug"}
                                                           element={<PageMux baseRoute={props.react_app_base_route}/>}/>
                                                    <Route path={'/error'} element={<FourOhFour/>}/>
                                                    <Route path={"/*"}
                                                           element={<Navigate
                                                               to={"/" + props.react_app_base_route + "/home"}/>}/>
                                                </Routes>
                                            </Grid>
                                        </Grid>
                                    </AppSettingsProvider>
                                    {/*</BallSearchProvider>*/}
                                </AmenityProvider>
                            </ModalProvider>
                        </SnackbarProvider>
                    </CustomizedThemeProvider>
                </PageProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App
