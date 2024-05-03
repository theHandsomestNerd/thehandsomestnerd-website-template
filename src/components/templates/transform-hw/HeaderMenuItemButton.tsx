import{CSSProperties, FunctionComponent, useContext} from 'react'
import {Button, Typography, useTheme} from '@mui/material'
import {SanityMenuItem} from "../../../common/sanityIo/Types";
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import ModalContext from "../../snackbar-context/ModalContext";

const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover":{
            backgroundColor: 'rgba(16,43,136, 0.04)',
            "& .MuiTypography-root": {
            color: theme.palette.primary.main
            }
        }
    }
}))

interface HeaderMenuItemButtonProps {
    menuItem: SanityMenuItem
    textStyle?: CSSProperties
}

const HeaderMenuItemButton: FunctionComponent<HeaderMenuItemButtonProps> = ({menuItem, textStyle}) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    const modalContext = useContext(ModalContext)
    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(3.25) : theme.spacing(1),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(3.25) : theme.spacing(1),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(3) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(2) : 0,
                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                    }}
                    className={classes.hover}
                    onClick={ ()=>{
                        if(menuItem.isModalButton) {
                            modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                        }
                    }}
                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
        <Typography noWrap
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'textPrimary':theme.palette.secondary.main }
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'h6'}
                    style={{...textStyle}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton