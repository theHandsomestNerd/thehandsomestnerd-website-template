import './App.css'
import {Grid, useTheme} from '@mui/material';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import FourOhFour from "./components/templates/transform-hw/pages/error-page/FourOhFour";
import PageProvider from "./components/page-context/PageProvider";
import AmenityProvider from "./components/amenity-context/AmenityProvider";
import ModalProvider from "./components/snackbar-context/ModalProvider";
import SnackbarProvider from "./components/modal-context/SnackbarProvider";
import PageMux from "./components/templates/mackenzies-mind/pages/PageMux";
import CustomizedThemeProvider from "./components/customized-theme-provider/CustomizedThemeProvider";

export enum RoutesEnum {
    MAINROUTE = "/chow-works/:pageSlug",
    HOMEROUTE = "/chow-works/home",

    ERROR = '/error'
}

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // refetchOnWindowFocus: false,
                // refetchOnMount: false,
                // refetchOnReconnect: false,
            },
        },
    });

    const theme = useTheme()


    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                        <PageProvider>
                            <CustomizedThemeProvider>
                                <SnackbarProvider>
                                        <ModalProvider>
                                            <AmenityProvider>
                                                <Grid container item alignItems="center"
                                                      style={{
                                                          backgroundColor: theme.palette.background.default,
                                                          overflow: "hidden",
                                                          width: "100vw"
                                                      }} justifyContent='center'>

                                                    <Grid item>
                                                        <Routes>
                                                            <Route path={RoutesEnum.MAINROUTE} element={<PageMux/>}/>
                                                            <Route path={RoutesEnum.ERROR} element={<FourOhFour/>}/>
                                                            <Route path={"/*"}
                                                                   element={<Navigate
                                                                       to={RoutesEnum.HOMEROUTE}/>}/>
                                                        </Routes>
                                                    </Grid>
                                                </Grid>
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
