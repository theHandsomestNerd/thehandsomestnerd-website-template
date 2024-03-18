import React, {FunctionComponent, PropsWithChildren, useContext, useMemo,} from 'react';
import CustomizedThemeContext from './CustomizedThemeContext';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {SanityMuiTheme} from "../../common/sanityIo/Types";
import PageContext from "../page-context/PageContext";
import TheWebsiteTheme from "../../theme/Theme";
import getThemeFromSanity from "./getThemeFromSanity";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

type IProps = {
    pageTheme?: SanityMuiTheme
};


const CustomizedThemeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [customizedTheme, setCustomizedTheme] = React.useState<any>(TheWebsiteTheme)
    // const fonts = `"Raleway", "Oswald"`

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

    // React.useEffect(() => {
    //     console.log("customized theme change",customizedTheme)
    // }, [customizedTheme])




    const sanityContext = useContext(SanityContext)

    const getThemeBySlug = async (slug: string) => {
        const theRetrievedTheme = await sanityContext.fetchMuiTheme(slug)

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
