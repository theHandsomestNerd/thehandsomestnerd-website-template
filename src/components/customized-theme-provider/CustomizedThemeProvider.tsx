import {FunctionComponent, PropsWithChildren, useContext, useEffect, useMemo, useState,} from 'react';
import CustomizedThemeContext from './CustomizedThemeContext';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import PageContext from "../page-context/PageContext";
import TheWebsiteTheme from "../../theme/Theme";
import getThemeFromSanity from "./getThemeFromSanity";

type IProps = {
    logoSrc?: any
};

const CustomizedThemeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [customizedTheme, setCustomizedTheme] = useState<any>(TheWebsiteTheme)

    const pageContext = useContext(PageContext);
    useEffect(() => {
        if (pageContext.page?.theme) {
            const theCustomizedTheme = getThemeFromSanity(pageContext.page?.theme)

            setCustomizedTheme(theCustomizedTheme)
        } else {
            setCustomizedTheme(TheWebsiteTheme)
        }
    }, [pageContext.page?.theme])

    useEffect(() => {
        setLogoSrc(props.logoSrc)
    }, [props.logoSrc])

    const [logoSrc, setLogoSrc] = useState<any>()

    const newValue = useMemo(
        () => ({
            customizedTheme,
            logoSrc
        }),
        [customizedTheme, logoSrc]
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
