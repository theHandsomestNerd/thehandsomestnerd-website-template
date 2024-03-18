import {Button, CircularProgress, Grid, useTheme} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {FunctionComponent, PropsWithChildren, useContext} from 'react';

import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";

import {OverridableStringUnion} from "@mui/types";
import {ButtonPropsColorOverrides} from "@mui/material/Button/Button";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {Theme} from "@mui/material/styles";


type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum,
    width?: number,

    isRounded?: boolean
}


export interface LoadingButtonIProps {
    disabled?: boolean
    isSlim?: boolean
    isRounded?: boolean
    clickHandler?: (e: any) => void
    isLoading?: boolean
    color?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
    >
    groupiness?: ButtonGroupMemberEnum
    width?: number
    href?: string
    source?: string
    variant?: 'text' | 'outlined' | 'contained'
}

const useStyles = makeStyles((theme:Theme) => ({
    root: {
        height: "100%",
        width: (props: any) => props.width ? `${props.width}px` : 'unset',
        borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
        borderTopLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return "0 !important"
                case ButtonGroupMemberEnum.RIGHT:
                    return "0 !important"
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return theme.shape.borderRadius
            }
        },
        borderTopRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return "0 !important"
                case ButtonGroupMemberEnum.LEFT:
                    return "0 !important"
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return theme.shape.borderRadius
            }
        },
        borderBottomRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return "0 !important"
                case ButtonGroupMemberEnum.LEFT:
                    return "0 !important"
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return theme.shape.borderRadius

            }
        },
        borderBottomLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return "0 !important"
                case ButtonGroupMemberEnum.RIGHT:
                    return "0 !important"
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return theme.shape.borderRadius
            }
        },
    }
}))

const LoadingButton: FunctionComponent<PropsWithChildren<LoadingButtonIProps>> = (props) => {
    const themeContext = useContext(CustomizedThemeContext)
const theme = useTheme()
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width, isRounded: props.isRounded})
    const getProgressContrastColor = () => {
        switch (props.color) {
            case 'primary':
                return theme.palette.primary.main
            case 'secondary':
                return theme.palette.secondary.main
            default:
                return '#FFFFFF'
        }
    }

    return (
        <Grid item style={{minHeight: props.isSlim?"40px":"60px", height: "100%", marginRight: "-16px"}}>
            <Button
                sx={props.isSlim?{width: '120px',
                    }:{}}
                style={{boxShadow: 'none',  }}
                href={props.href}
                disabled={props.disabled}
                onClick={props.clickHandler}
                className={classes.root}
                fullWidth={!props.width}
                color={props.color ?? 'primary'}
                variant={props.variant ?? 'contained'}>
                {
                    props.isLoading ?
                        <CircularProgress style={{
                            color: themeContext.customizedTheme?.palette.getContrastText(getProgressContrastColor()),
                            width: "22px",
                            height: "22px"
                        }}/>
                        : props.children
                }</Button>
        </Grid>

    )
}

export default LoadingButton