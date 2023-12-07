import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {AppBar} from "@mui/material";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {COLORS, convertToHexCode} from "../../../../theme/common/ColorPalette";

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props: any) => ({
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: props.paddingLeft,
        height: props.appBarHeight,
        width: "100%"
    }),
    opaque: {
        backgroundColor: `black !important`,
    },
}))

interface IProps {
    isAppBar?: boolean,
    children: any
    isEnhanced?: boolean
    backgroundColor?:string
}

const AppBarWrapper: FunctionComponent<PropsWithChildren<IProps>> = (props: IProps) => {

    const customizedTheme = useContext(CustomizedThemeContext)
    const classes = useStyles({
        paddingLeft: customizedTheme.customizedTheme.spacing(4),
        appBarHeight: customizedTheme.customizedTheme.mixins.toolbar.height
    })

    return (
        props.isAppBar ? <AppBar style={{
            backgroundColor: `${props.isAppBar && props.isEnhanced ? "black" : convertToHexCode(props.backgroundColor)}`,
        }} className={classes.root}>
            {props.children}
        </AppBar> : <>{props.children}</>
    )
}

export default AppBarWrapper