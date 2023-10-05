import {useMediaQuery, useTheme} from "@mui/material";

function useIsWidthUp(breakpoint:any) {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(breakpoint));
}
function useIsWidthDown(breakpoint:any) {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));
}

export default {
    useIsWidthDown,
    useIsWidthUp
}