import {muiTheme} from "storybook-addon-material-ui";
import MackenziesMindTheme from "../src/theme/DigitalResumeTheme";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";
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


import React from 'react';

import { Preview } from '@storybook/react';
import {MuiThemeProvider} from "@material-ui/core";
import DigitalResumeTheme from "../src/theme/DigitalResumeTheme";

const preview: Preview = {
    decorators: [
        (Story) => (
            <QueryClientProvider client={mockedQueryClient}>
                <BrowserRouter>
                   <MuiThemeProvider theme={DigitalResumeTheme}><Story/></MuiThemeProvider>
                </BrowserRouter>
            </QueryClientProvider>
        ),

    ],
};

export default preview;