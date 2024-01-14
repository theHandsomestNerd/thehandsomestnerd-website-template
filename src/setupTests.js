// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {TextDecoder, TextEncoder} from 'util';

import React from 'react'
import {render} from '@testing-library/react'
import PageProvider from "./components/page-context/PageProvider";
import CustomizedThemeProvider from "./components/customized-theme-provider/CustomizedThemeProvider";
import SnackbarProvider from "./components/modal-context/SnackbarProvider";
import ModalProvider from "./components/snackbar-context/ModalProvider";
import AmenityProvider from "./components/amenity-context/AmenityProvider";
import {BrowserRouter} from "react-router-dom";
import HomePageResumeData from "./stories/data/HomePageData";
import DigitalResumeThemeData from "./stories/data/DigitalResumeThemeData";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./queryClient";


// import {setImmediate} from 'timers'

global.setImmediate = jest.useRealTimers;
// export const mockedQueryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             retry: false,
//         },
//     },
// });


const AllTheProviders = ({children}) => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <PageProvider page={HomePageResumeData}>
                    <CustomizedThemeProvider pageTheme={DigitalResumeThemeData}>
                        <SnackbarProvider>
                            <ModalProvider>
                                <AmenityProvider>
                                    {children}
                                </AmenityProvider>
                            </ModalProvider>
                        </SnackbarProvider>
                    </CustomizedThemeProvider>
                </PageProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

// jest.mock('@tanstack/react-query', () => ({
//     useQuery: jest.fn().mockReturnValue(({ data: {first: "one"}, isLoading: false,error:{}, refetch: jest.fn() })),
//     QueryClient: jest.fn(),
//     isLoading: false
// }));

const customRender = (ui, options) =>
    render(ui, {wrapper: AllTheProviders, ...options})



// For PDF renderer
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock('@react-pdf/renderer', () => {
    return {
        PDFDownloadLink: ({children}) => <>{children}</>,
        StyleSheet: {
            create: () => null
        },
        Font: {
            register: () => null
        }
    };
});

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}

