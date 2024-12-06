import {Button, CircularProgress, useTheme} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {FunctionComponent, PropsWithChildren} from 'react';
import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";
import {OverridableStringUnion} from "@mui/types";
import {ButtonPropsColorOverrides} from "@mui/material/Button/Button";
import {Theme} from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum,
    width?: number,
    isRounded?: boolean,
    isSlim?: boolean
}

export interface LoadingButtonIProps {
    disabled?: boolean
    isSlim?: boolean
    isRounded?: boolean
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>
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

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100%",
        boxShadow: 'none',
        minHeight: (props: CssProps) => props.isSlim ? "40px" : "60px",
        width: (props: CssProps) => props.width ? `${props.width}px` : '100%',
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
    const theme = useTheme()
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width, isRounded: props.isRounded})
    const getProgressColor = () => {
        if(props.variant !== 'contained') {
            switch (props.color) {
                case 'primary':
                    return theme.palette.primary.main
                case 'secondary':
                    return theme.palette.secondary.main
                default:
                    return '#000000'
            }
        }
        switch (props.color) {
            case 'primary':
                return theme.palette.getContrastText(theme.palette.primary.main)
            case 'secondary':
                return theme.palette.getContrastText(theme.palette.secondary.main)
            default:
                return '#FFFFFF'
        }
    }

    return (
        <Grid style={{minHeight: props.isSlim ? "40px" : "60px", height: "100%",}}>
            <Button
                sx={props.isSlim ? {
                    width: '120px',
                } : {}}
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
                            color: getProgressColor(),
                            width: "22px",
                            height: "22px"
                        }}/>
                        : <Grid container justifyContent='center'>{props.children}</Grid>
                }</Button>
        </Grid>

    )
}

export default LoadingButton