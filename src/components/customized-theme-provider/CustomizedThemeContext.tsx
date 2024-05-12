import React from 'react';
import {Theme} from "@mui/material/styles";

export type CustomizedThemeContextType = {
    customizedTheme?: any
    getThemeBySlug?: (slug:string)=> Promise<Partial<Theme>>
    logoSrc?: any
};

const CustomizedThemeContext = React.createContext<CustomizedThemeContextType>({});

export default CustomizedThemeContext;
