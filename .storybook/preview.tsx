import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";
import React from 'react';

import {Preview} from '@storybook/react';
import {withThemeFromJSXProvider} from "@storybook/addon-styling";
import PageProvider from "../src/components/page-context/PageProvider";
import HomePageResumeData from "../src/stories/data/HomePageData";
import ModalProvider from "../src/components/snackbar-context/ModalProvider";
import SnackbarProvider from "../src/components/modal-context/SnackbarProvider";
import MediaQueriesProvider from "../src/components/media-queries-context/MediaQueriesProvider";
import AmenityProvider from "../src/components/amenity-context/AmenityProvider";
import {ThemeProvider} from "@mui/material/styles";
import TheWebsiteTheme from "../src/theme/Theme";
import DigitalResumeTheme from "../src/theme/DigitalResumeTheme";
import {CssBaseline} from "@mui/material";
import TransformHWTheme from "../src/theme/TransformHWTheme";

const mockedQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const preview: Preview = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <QueryClientProvider client={mockedQueryClient}>
                    <ThemeProvider theme={TheWebsiteTheme}>
                        <CssBaseline />
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
                    </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>
        ),
// @ts-ignore
//         withThemeFromJSXProvider({
//             Provider: ThemeProvider,
//             themes: {
//                 one: TheWebsiteTheme,
//                 two: DigitalResumeTheme,
//                 three: TransformHWTheme
//             },
//             defaultTheme: 'one',
//             GlobalStyles: CssBaseline
//         })
    ],
};

export default preview;