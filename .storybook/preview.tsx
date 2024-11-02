import {BrowserRouter} from "react-router-dom";
import {Preview} from '@storybook/react';
import PageProvider from "../src/components/page-context/PageProvider";
import HomePageResumeData from "../src/stories/data/HomePageData";
import ModalProvider from "../src/components/snackbar-context/ModalProvider";
import SnackbarProvider from "../src/components/modal-context/SnackbarProvider";
import AmenityProvider from "../src/components/amenity-context/AmenityProvider";
import CustomizedThemeProvider from "../src/components/customized-theme-provider/CustomizedThemeProvider";
import DigitalResumeThemeData from "../src/stories/data/DigitalResumeThemeData";
import SanityProvider from "../src/common/sanityIo/sanity-context/SanityProvider";
import FirebaseProvider from "../src/common/firebase/firebase-context/FirebaseProvider";
import AppSettingsProvider from "../src/components/templates/anybody-walking/app-settings/AppSettingsProvider";

const preview: Preview = {
    decorators: [
        (Story) => (
            <FirebaseProvider>
                <SanityProvider>
                    <BrowserRouter>
                        <AppSettingsProvider>
                            <PageProvider page={HomePageResumeData}>
                                <CustomizedThemeProvider pageTheme={DigitalResumeThemeData}>
                                    <SnackbarProvider>
                                        <ModalProvider>
                                            <AmenityProvider>
                                                <Story/>
                                            </AmenityProvider>
                                        </ModalProvider>
                                    </SnackbarProvider>
                                </CustomizedThemeProvider>
                            </PageProvider>
                        </AppSettingsProvider>
                    </BrowserRouter>
                </SanityProvider>
            </FirebaseProvider>
        ),
    ],

    tags: ["autodocs"]
};

export default preview;