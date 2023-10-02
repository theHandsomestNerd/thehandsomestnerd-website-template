import React, {FunctionComponent} from 'react'
import {Button, Grid, Popover, Typography} from '@mui/material'
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";

import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import {ArrowDropDown} from "@mui/icons-material";
import {SanityMenuGroup} from "../../common/sanityIo/Types";
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import SubMenu from "../mackenzies-mind/header/SubMenu";


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
    const classes = useStyles(DigitalResumeTheme)

    // const [hideOnScroll, setHideOnScroll] = useState(true)
    // const [backgroundColor, setBackgroundColor] = React.useState<any>("")


    // React.useEffect(() => {
    //     setBackgroundColor(!hideOnScroll && !mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE)
    // }, [hideOnScroll,mdDown])
    //
    // useScrollPosition(({prevPos, currPos}: any) => {
    //     const isShow = currPos.y > -100
    //     if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    // }, [hideOnScroll,setHideOnScroll])

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
                        paddingLeft: DigitalResumeTheme.spacing(2),
                        paddingRight: DigitalResumeTheme.spacing(3),
                        height: "100%",
                        color: DigitalResumeTheme.palette.secondary.main
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
                            backgroundColor: DigitalResumeTheme.palette.primary.main
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