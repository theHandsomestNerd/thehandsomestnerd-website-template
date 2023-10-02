import DigitalResumeTheme from "../src/theme/DigitalResumeTheme";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react';

import {Preview} from '@storybook/react';
import {CssBaseline, Grid, MuiThemeProvider} from "@material-ui/core";
import WebDevSiteTheme from "../src/theme/WebDevSiteTheme";
import TransformHWTheme from "../src/theme/TransformHWTheme";
import {withThemeFromJSXProvider} from "@storybook/addon-styling";
import PageProvider from "../src/components/page-context/PageProvider";
import HomePageResumeData from "../src/stories/data/HomePageData";
import ModalProvider from "../src/components/snackbar-context/ModalProvider";
import SnackbarProvider
    from "../src/components/modal-context/SnackbarProvider";
import MediaQueriesProvider from "../src/components/media-queries-context/MediaQueriesProvider";
import AmenityProvider from "../src/components/amenity-context/AmenityProvider";
import PageMux from "../src/components/mackenzies-mind/pages/PageMux";
import FourOhFour from "../src/components/transform-hw/pages/error-page/FourOhFour";
import {RoutesEnum} from "../src/App";
//
// export const parameters = {
//     actions: {argTypesRegex: "^on[A-Z].*"},
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
// }
//
const mockedQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});
//
// export const decorators = [
//     (Story) => (
//         <QueryClientProvider client={mockedQueryClient}>
//             <BrowserRouter>
//             <Story/>
//             </BrowserRouter>
//         </QueryClientProvider>),
//     muiTheme([MackenziesMindTheme]),
// ];

const preview: Preview = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <QueryClientProvider client={mockedQueryClient}>
                        <SnackbarProvider>
                            <MediaQueriesProvider>
                                <ModalProvider>
                                    <PageProvider page={HomePageResumeData}>
                                        <AmenityProvider>
                                            <Story />
                                        </AmenityProvider>
                                    </PageProvider>
                                </ModalProvider>
                            </MediaQueriesProvider>
                        </SnackbarProvider>
                </QueryClientProvider>
            </BrowserRouter>
        ),
        withThemeFromJSXProvider({
            themes: {
                webDev: WebDevSiteTheme,
                resume: DigitalResumeTheme,
                thw: TransformHWTheme
            },
            Provider: MuiThemeProvider,
            GlobalStyles: CssBaseline,
        })
// muiTheme([DigitalResumeTheme, WebDevSiteTheme, TransformHWTheme])
    ],
};

export default preview;