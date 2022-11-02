import React, {FunctionComponent, RefObject, useState} from 'react'
import {Button, Grid, Popover, PropTypes, Typography} from '@material-ui/core'
import TransformHWTheme, {COLORS} from "../../../theme/transform-hw/TransformHWTheme";
import SubMenu from "../header/SubMenu";
import {SanityMenuGroup} from "../../../sanity/Menu";

import PopupState, {bindPopover} from "material-ui-popup-state";
import {bindTrigger} from "material-ui-popup-state";
import {ArrowDropDown} from "@material-ui/icons";

interface FilteredMenuItemsPopupProps {
    menuGroup: SanityMenuGroup
    bgColor?: PropTypes.Color
}

const PopupStateWrapper: FunctionComponent<FilteredMenuItemsPopupProps> = ({menuGroup, bgColor}) => {
    return (<PopupState variant="popover" popupId={menuGroup.menuGroupTitle?.toLowerCase().replace(" ","-")}>
        {(popupState) => {
            return <Grid item container style={{height: "100%"}}>
                <Button
                    {...bindTrigger(popupState)}
                    color={"secondary"}
                    style={{
                        borderRadius: 0,
                        paddingLeft: TransformHWTheme.spacing(2),
                        paddingRight: TransformHWTheme.spacing(3),
                        height: "100%",
                        color: TransformHWTheme.palette.secondary.main
                    }}
                    endIcon={<ArrowDropDown></ArrowDropDown>}
                >
                    <Typography variant='body2'
                                style={{fontSize: "18px"}}>{menuGroup.menuGroupTitle}</Typography>
                </Button>
                <Popover
                    {...bindPopover(popupState)}
                    elevation={1}
                    PaperProps={{
                        style: {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            backgroundColor: bgColor
                        }
                    }}
                    anchorOrigin={{
                        vertical: 100,
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                >
                    <Grid container item>
                        <SubMenu subMenu={menuGroup} handleClose={popupState.close}/>
                    </Grid>
                </Popover>
            </Grid>
        }}
    </PopupState>)
}

export default PopupStateWrapper