import React from 'react';
import {SanityMuiTheme} from "../../common/sanityIo/Types";

export type CustomizedThemeContextType = {
    customizedTheme?: any
};

const CustomizedThemeContext = React.createContext<CustomizedThemeContextType>({});

export default CustomizedThemeContext;
