import React, {FunctionComponent} from 'react'
import {Button, Typography} from '@mui/material'
import TheWebsiteTheme from "../../theme/Theme";
import {ArrowDropDown} from "@mui/icons-material";
import {bindTrigger} from "material-ui-popup-state";
import {SanityMenuGroup} from "../../common/sanityIo/Types";


interface HeaderMenuItemButtonProps {
    menuGroup: SanityMenuGroup
    popupState: any
}

const HeaderMenuGroupButton: FunctionComponent<HeaderMenuItemButtonProps> = ({popupState,menuGroup}) => {
    return (<Button
        {...bindTrigger(popupState)}
        color={"secondary"}
        style={{
            borderRadius: 0,
            paddingLeft: TheWebsiteTheme
.spacing(2),
            paddingRight: TheWebsiteTheme
.spacing(3),
            height: "100%",
            color: TheWebsiteTheme
.palette.secondary.main
        }}
        onClick={popupState.handleClick}
        endIcon={<ArrowDropDown></ArrowDropDown>}
    >
        <Typography variant='body2'
                    style={{fontSize: "18px"}}>{menuGroup.menuGroupTitle}</Typography>
    </Button>)
}

export default HeaderMenuGroupButton