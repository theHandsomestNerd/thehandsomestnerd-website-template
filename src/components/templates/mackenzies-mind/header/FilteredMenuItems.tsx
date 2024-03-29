import {FunctionComponent, useContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Button, Grid, Popover, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ArrowDropDown} from "@mui/icons-material";
import SubMenu from "./SubMenu";
import {SanityMenuGroup, SanityMenuItem} from "../../../../common/sanityIo/Types";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";

interface FilteredMenuProps {
    subMenus: any[]
    includeMenuItems?: boolean
    includeMenuGroups?: boolean
    onlyButtons?: boolean
}

const FilteredMenuItems: FunctionComponent<FilteredMenuProps> = ({
                                                                     subMenus,
                                                                     onlyButtons,
                                                                     includeMenuItems,
                                                                     includeMenuGroups
                                                                 }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>();
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme()
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const mdDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('md'))

    return (<Grid item container justifyContent={mdDown ? 'flex-start' : 'flex-end'}>{
            subMenus?.map(
                // @ts-ignore
                (menuLink: any) => {
                    // console.log(menuLink._type)
                    if (menuLink["_type"] === "menuItem" && (includeMenuItems || (onlyButtons && (menuLink.isOutlinedButton || menuLink.isContainedButton || menuLink.isModalButton)))) {
                        const menuItem: SanityMenuItem = menuLink
                        return <Grid item key={uuidv4()}>
                            <Button href={menuItem.url ?? ""}
                                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                                    style={{
                                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.shape.borderRadius : 0,
                                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(4) : theme.spacing(2),
                                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(4) : theme.spacing(2),
                                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(3) : 0,
                                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? theme.spacing(2) : 0,
                                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                                        color: menuItem.isOutlinedButton || menuItem.isContainedButton ? 'white' : theme.palette.secondary.main
                                    }}
                                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
                                <Typography noWrap
                                            variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                                            style={{fontSize: "18px"}}>{menuItem.displayText}</Typography>
                            </Button>
                        </Grid>
                    } else if (menuLink["_type"] === "menuGroup" && includeMenuGroups) {
                        const menuGroup: SanityMenuGroup = menuLink
                        return <Grid item key={uuidv4()} ref={() => {
                            // console.log("anchor", anchorEl)
                            return anchorEl
                        }}>
                            <Button
                                key={uuidv4()}

                                color={"secondary"}
                                style={{
                                    borderRadius: 0,
                                    paddingLeft: theme.spacing(2),
                                    paddingRight: theme.spacing(3),
                                    height: "100%",
                                    color: theme.palette.secondary.main
                                }}
                                onClick={handleClick}
                                endIcon={<ArrowDropDown></ArrowDropDown>}
                            >
                                <Typography variant='body2'
                                            style={{fontSize: "18px"}}>{menuGroup.menuGroupTitle}</Typography>
                                <Popover
                                    // id={menuLink._type + "-" + menu + "-" + index}
                                    id={uuidv4()}
                                    open={open}
                                    elevation={1}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    PaperProps={{style: {borderTopLeftRadius: 0, borderTopRightRadius: 0}}}
                                    anchorOrigin={{
                                        vertical: anchorEl?.offsetHeight ?? 0,
                                        horizontal: anchorEl?.offsetLeft ?? 0,
                                    }}
                                >
                                    <Grid container item style={{backgroundColor: COLORS.GRAY}}>
                                        <SubMenu subMenu={menuGroup}/>
                                    </Grid>
                                </Popover>
                            </Button>
                        </Grid>
                    }

                }) ?? <></>
        }</Grid>
    )
}

export default FilteredMenuItems