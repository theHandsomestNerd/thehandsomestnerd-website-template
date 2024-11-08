import {BrowserRouter} from "react-router-dom";
import {Preview} from '@storybook/react';
import PageProvider from "../src/components/page-context/PageProvider";
import ModalProvider from "../src/components/snackbar-context/ModalProvider";
import SnackbarProvider from "../src/components/modal-context/SnackbarProvider";
import AmenityProvider from "../src/components/amenity-context/AmenityProvider";
import CustomizedThemeProvider from "../src/components/customized-theme-provider/CustomizedThemeProvider";
import SanityProvider from "../src/common/sanityIo/sanity-context/SanityProvider";
import FirebaseProvider from "../src/common/firebase/firebase-context/FirebaseProvider";
import AppSettingsProvider from "../src/components/templates/anybody-walking/app-settings/AppSettingsProvider";
import HomePageData from "../src/stories/data/HomePageData";
import {SanityTransformHwHomePage} from "../src/common/sanityIo/Types";

const preview: Preview = {
    decorators: [
        (Story, {parameters}) => {
            const homepageData: SanityTransformHwHomePage = HomePageData.getHomePageResumeData(parameters.pageTheme)
            return (
                < FirebaseProvider>
                    < SanityProvider
                        fetchSkillExperiences={parameters.fetchSkillExperiences}
                        fetchPortfolioItems={parameters.fetchPortfolioItems}
                    >
                        < BrowserRouter>
                            < AppSettingsProvider>
                                <PageProvider page={homepageData}>
                                    <CustomizedThemeProvider>
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
            )
        },
    ],

    tags: ["autodocs"]
};

export default preview;