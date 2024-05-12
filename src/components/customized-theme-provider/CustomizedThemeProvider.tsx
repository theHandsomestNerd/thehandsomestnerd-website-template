import {FunctionComponent, PropsWithChildren, useContext, useEffect, useMemo, useState,} from 'react';
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
    logoSrc?: any
};


const CustomizedThemeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [customizedTheme, setCustomizedTheme] = useState<any>(TheWebsiteTheme)
    // const fonts = `"Raleway", "Oswald"`

    const pageContext = useContext(PageContext);
    useEffect(() => {
        if (pageContext.page?.theme) {
            const theCustomizedTheme = getThemeFromSanity(pageContext.page?.theme)

            setCustomizedTheme(theCustomizedTheme)
        } else {
            setCustomizedTheme(TheWebsiteTheme)
        }
        // eslint-disable-next-line
    }, [pageContext.page?.theme])

    useEffect(() => {
        setLogoSrc(props.logoSrc)
    }, [props.logoSrc])

    const sanityContext = useContext(SanityContext)

    const getThemeBySlug = async (slug: string) => {
        const theRetrievedTheme = await sanityContext.fetchMuiTheme(slug)

        return getThemeFromSanity(theRetrievedTheme)
    }
    const [logoSrc, setLogoSrc] = useState<any>()

    const newValue = useMemo(
        () => ({
            customizedTheme,
            getThemeBySlug,
            logoSrc
        }),
        [customizedTheme, getThemeBySlug, logoSrc]
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
