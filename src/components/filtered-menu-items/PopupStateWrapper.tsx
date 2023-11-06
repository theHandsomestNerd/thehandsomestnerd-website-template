import React, {FunctionComponent} from 'react'
import {Button, Grid, Popover, Typography} from '@mui/material'
import TheWebsiteTheme from "../../theme/Theme";

import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import {ArrowDropDown} from "@mui/icons-material";
import {SanityMenuGroup} from "../../common/sanityIo/Types";
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import SubMenu from "../templates/mackenzies-mind/header/SubMenu";


const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover": {
            backgroundColor: 'rgba(16,43,136, 0.04)',
            "& .MuiTypography-root": {
                color: "#2828d3"
            }
        }
    }
}))

interface FilteredMenuItemsPopupProps {
    menuGroup: SanityMenuGroup
}

const PopupStateWrapper: FunctionComponent<FilteredMenuItemsPopupProps> = ({menuGroup}) => {
    const classes = useStyles(TheWebsiteTheme
)
    return (<PopupState variant="popover" popupId={menuGroup.menuGroupTitle?.toLowerCase().replace(" ", "-")}>
        {(popupState) => {
            const handleClose = (e: any) => {
                // e.stopPropagation()
                popupState.close()
            }
            return <Grid item container style={{height: "100%"}}>
                <Button
                    className={classes.hover}
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
                            backgroundColor: TheWebsiteTheme
.palette.primary.main
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
                        <SubMenu subMenu={menuGroup} handleClose={handleClose}/>
                    </Grid>
                </Popover>
            </Grid>
        }}
    </PopupState>)
}

export default PopupStateWrapper