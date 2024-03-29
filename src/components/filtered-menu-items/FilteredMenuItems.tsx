import{CSSProperties, FunctionComponent} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Grid, useMediaQuery, useTheme} from '@mui/material'
import HeaderMenuItemButton from "../templates/transform-hw/HeaderMenuItemButton";
import PopupStateWrapper from "./PopupStateWrapper";
import {SanityMenuContainer} from "../../common/sanityIo/Types";


interface FilteredMenuItemsProps {
    subMenus: SanityMenuContainer[]
    includeMenuItems?: boolean
    includeMenuGroups?: boolean
    onlyButtons?: boolean
    anchorRef?: any
    textStyle?: CSSProperties
    contentJustification?: any
}

// type HeaderMenuButtonType = {
//     group?: SanityMenuGroup,
//     item?: SanityMenuItem,
//     index: number
//     popup?: (popupState: any) => JSX.Element
//     button: any
// }
const FilteredMenuItems: FunctionComponent<FilteredMenuItemsProps> = ({
                                                                          subMenus,
                                                                          onlyButtons,
                                                                          includeMenuItems,
                                                                          includeMenuGroups,
                                                                          textStyle,
                                                                          contentJustification
                                                                      }) => {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (<Grid item container
                  wrap='nowrap'
                  justifyContent={contentJustification ? contentJustification : (mdDown ? 'flex-start' : 'flex-end')}
                  alignItems='stretch' alignContent='center'>
            {
                subMenus?.reduce(
                    (accumulated: JSX.Element[], menuButton: any) => {
                        if (menuButton?._type === "menuItem" && (includeMenuItems || (onlyButtons && (menuButton.isOutlinedButton || menuButton.isContainedButton || menuButton.isModalButton)))) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <HeaderMenuItemButton textStyle={textStyle} menuItem={menuButton}/>
                            </Grid>])
                        } else if (menuButton?._type === "menuGroup" && includeMenuGroups) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <PopupStateWrapper menuGroup={menuButton}/>
                            </Grid>])
                        }
                        return accumulated
                    }, [])
            }
        </Grid>
    )
}

export default FilteredMenuItems