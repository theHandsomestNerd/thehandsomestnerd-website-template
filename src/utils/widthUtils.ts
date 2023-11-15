import {useMediaQuery, useTheme} from "@mui/material";
import {useContext} from "react";
import CustomizedThemeContext from "../components/customized-theme-provider/CustomizedThemeContext";

function useIsWidthUp(breakpoint:any) {
    // const theme = useTheme();
    const customizedTheme = useContext(CustomizedThemeContext);
    console.log("Breakpoints", customizedTheme.customizedTheme.breakpoints)
    return useMediaQuery(customizedTheme.customizedTheme?.breakpoints.up(breakpoint));
}
function useIsWidthDown(breakpoint:any) {
    const theme = useTheme();

    // const customizedTheme = useContext(CustomizedThemeContext);

    console.log("Breakpoints", theme.breakpoints)
    return useMediaQuery(theme.breakpoints?.down(breakpoint));
}

export default {
    useIsWidthDown,
    useIsWidthUp
}