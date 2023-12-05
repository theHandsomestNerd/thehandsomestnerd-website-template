import React, {FunctionComponent, useContext, useState} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Button, Divider, Drawer, Grid, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import {Close, Menu} from "@mui/icons-material";
import MainMenuSubMenu from "./MainMenuSubMenu";
import {
    MainMenuAnchorType,
    SanityMenuContainer,
    SanityMenuGroup,
    SanityMenuItem
} from "../../../../common/sanityIo/Types";
import ModalContext from "../../../snackbar-context/ModalContext";
import Logo from "../../../logo/Logo";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            "&.MuiListItem-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);

interface MainMenuProps {
    menu: SanityMenuContainer
    anchor: MainMenuAnchorType
}

const MainMenu: FunctionComponent<MainMenuProps> = ({menu, anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()
    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const modalContext = useContext(ModalContext)
    const classes = useStyles()
    const list = (anchor: MainMenuAnchorType) => (
        <Grid item
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider/>
            {menu?.subMenus?.map((subMenu: any, index: number) => {
                switch (subMenu._type) {
                    case 'menuGroup':
                        const menuGroup: SanityMenuGroup = subMenu
                        return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>
                    case 'menuItem':
                    default:
                        const menuItem: SanityMenuItem = subMenu
                        return <List style={{padding: 0}} key={menuItem.displayText}>
                            <ListItem className={classes.listItem}>
                                <Button variant='text' href={menuItem.isModalButton ? undefined : menuItem.url}
                                        onClick={menuItem.isModalButton ? () => {
                                            // console.log()
                                            if (menuItem.isModalButton) {
                                                modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                                            }
                                        } : undefined}
                                        style={{
                                            padding: theme.spacing(2.25, 2),
                                            height: "100%",
                                        }} fullWidth>
                                    <ListItemText
                                        secondary={<Typography color={'primary'}>{menuItem.displayText}</Typography>}/>
                                </Button>

                            </ListItem>
                            <Divider/>
                        </List>
                }

            })}
        </Grid>
    );

    const theme = useTheme()

    return (<Grid item>
            <Button onClick={toggleDrawer(anchor, true)}>
                <Menu color='inherit'
                      fontSize='large'/>
            </Button>
            <Drawer anchor={anchor} open={isDrawerOpen}
                    onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center'
                      style={{
                          paddingLeft: theme.spacing(4),
                          // paddingRight: theme.spacing(6),
                      }}>
                    <Grid item xs={10}  >
                        <Logo logoImageSrc={menu.logoImageSrc} logoText={menu.logoText} logoAccentText={"."}/>
                    </Grid>
                    <Grid item xs={2} container justifyContent='flex-end' >
                        <Button onClick={() => {
                            setIsDrawerOpen(false)
                        }}>
                            <Close color='primary' fontSize='large'/>
                        </Button>
                    </Grid>
                </Grid>
                {list(anchor)}
            </Drawer>
        </Grid>
    )
}

export default MainMenu