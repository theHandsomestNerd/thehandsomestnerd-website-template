import React, {FunctionComponent, PropsWithChildren, useContext, useMemo,} from 'react';
import CustomizedThemeContext from './CustomizedThemeContext';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {COLORS, convertToHexCode} from "../../theme/common/ColorPalette";
import {grey} from "@mui/material/colors";
import {SanityMuiFontFace, SanityMuiTheme} from "../../common/sanityIo/Types";
import PageContext from "../page-context/PageContext";
import TheWebsiteTheme from "../../theme/Theme";
import cmsClient from "../block-content-ui/cmsClient";
import capitalizeArray from "../../utils/textProcessingUtils";
import getThemeFromSanity from "./getThemeFromSanity";

type IProps = {
    pageTheme?: SanityMuiTheme
};


const CustomizedThemeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [customizedTheme, setCustomizedTheme] = React.useState<any>(TheWebsiteTheme)
    const fonts = `"Raleway", "Oswald"`

    const pageContext = useContext(PageContext);
    React.useEffect(() => {
        // console.log('Theme ', pageContext.page?.theme)
        if (pageContext.page?.theme) {
            const theCustomizedTheme = getThemeFromSanity(pageContext.page?.theme)

            setCustomizedTheme(theCustomizedTheme)
        } else {
            setCustomizedTheme(TheWebsiteTheme)
        }
        // eslint-disable-next-line
    }, [pageContext.page?.theme])

    React.useEffect(() => {
        console.log("customized theme change",customizedTheme)
    }, [customizedTheme])





    const getThemeBySlug = async (slug: string) => {
        const theRetrievedTheme = await cmsClient.fetchMuiTheme(slug)

        return getThemeFromSanity(theRetrievedTheme)
    }

    const newValue = useMemo(
        () => ({
            customizedTheme,
            getThemeBySlug
        }),
        [customizedTheme, getThemeBySlug]
    );

    return (
        <CustomizedThemeContext.Provider value={newValue}>
            <ThemeProvider theme={customizedTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </CustomizedThemeContext.Provider>
    );
};

export default CustomizedThemeProvider;
