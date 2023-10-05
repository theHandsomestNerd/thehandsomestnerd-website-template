import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useContext} from "react";
import CustomizedThemeContext from "../components/customized-theme-provider/CustomizedThemeContext";

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
const useWidth = () => {
    const customizedThemeContext = useContext(CustomizedThemeContext)
    const keys = [...customizedThemeContext.customizedTheme.breakpoints.keys].reverse();
    return (
        keys.reduce((output:any, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

export default useWidth