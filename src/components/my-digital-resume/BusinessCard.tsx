import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {
    Avatar,
    Button, ButtonGroup,
    createStyles,
    Divider,
    Drawer,
    Grid, Link,
    List,
    ListItem,
    ListItemText, Typography,
    useTheme
} from '@material-ui/core'
import {Close, Menu} from "@material-ui/icons";
import DigitalResumeTheme, {COLORS} from "../../theme/DigitalResumeTheme";
import ResumeSocialMedia from "./ResumeSocialMedia";
import MainMenuSubMenu from "../mackenzies-mind/header/MainMenuSubMenu";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import ModalContext from "../snackbar-context/ModalContext";
import QRCode from "react-qr-code";
import {
    MainMenuAnchorType,
    SanityMenuContainer,
    SanityMenuGroup,
    SanityMenuItem,
    SanityTransformHwHomePage
} from "../../common/sanityIo/Types";
import PageContext from "../page-context/PageContext";
import Logo from "../transform-hw/logo/Logo";
import {ResumeBioSectionType} from "../BlockContentTypes";
import MailTo from "../mail-to/MailTo";
import QrCodeContext from "../qr-code-context/QrCodeContext";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer:{
          "& .MuiDrawer-paper":{
              backgroundColor: "transparent"
          }
        },
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

const BusinessCard: FunctionComponent<MainMenuProps> = ({menu, anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()

    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const modalContext = useContext(ModalContext)
    const classes = useStyles(DigitalResumeTheme)
    const theme = useTheme()

    const pageContext = useContext(PageContext)

    const [userBio, setUserBio] = React.useState<ResumeBioSectionType>()

    React.useEffect(() => {
        //find the bio in pagecontent
        const bioSection = pageContext.page?.pageContent.content.filter((content: any) => {
            if (content._type === "ResumeBioSection") {
                return true
            }
            return false
        })

        console.log("Found bio", bioSection[0])
        setUserBio(bioSection[0])


    }, [pageContext.page?.pageContent])

    const qrCodeContext = useContext(QrCodeContext)
    const share = (e: any) => {
        console.log("share")
        //

        qrCodeContext.openSnackbar && qrCodeContext.openSnackbar("https://terrellsingleton.com/", ['website', 'email'])
    }
    const shareSelected = (e: any) => {
        console.log("share")
    }
    const list = (anchor: MainMenuAnchorType) => (
        <Grid xs={12} md={6} container item
              role="presentation"
              // onClick={toggleDrawer(anchor, false)}
              // onKeyDown={toggleDrawer(anchor, false)}
              style={{backgroundColor: COLORS.LIGHTGRAY}}
        >
            <Grid container item alignContent='flex-end'>
                <Grid item container style={{
                    marginBottom: theme.spacing(4),
                    backgroundRepeat: "none",
                    minHeight: 250,
                    backgroundSize: "cover",
                    overflow: "visible",
                    position: "relative",
                    backgroundImage: `url(${urlFor(pageContext.page?.businessCardImageSrc ?? "").url()})`
                }} justifyContent='center' alignContent='flex-end'>
                    <Grid container item style={{
                        position: "relative",
                        bottom: -45,
                        height: "max-content",
                        padding: theme.spacing(2, 3)
                    }}>
                        <ResumeSocialMedia spacing={1} bgColor color='secondary' homePage={pageContext.page}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <List style={{width: "100%", }}>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant='h6'>Phone:</Typography>

                            </Grid>
                            <Grid item xs={9} container justifyContent='flex-end'>
                                <Typography variant='h6'>{pageContext.page?.phone}</Typography>

                            </Grid>
                        </Grid>
                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Grid item xs={3}>
                            <Typography variant='h6'>Email:</Typography>

                        </Grid>
                        <Grid item xs={9} container justifyContent='flex-end'>
                            <MailTo color={theme.palette.primary.main} email={pageContext.page?.email ?? ""}
                                    subject={"Information Request"} body={""}>
                                <Typography color='textPrimary' variant='button'>{pageContext.page?.email}</Typography>
                            </MailTo>
                            {/*<Typography variant='h6'>{pageContext.page?.email}</Typography>*/}
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid item xs={3}>
                            <Typography variant='h6'>Website:</Typography>

                        </Grid>
                        <Grid item xs={9}>
                            <Button color='primary' fullWidth href={pageContext.page?.website}><Typography
                                variant='button'>{pageContext.page?.website}</Typography></Button>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={11}>
                            <ButtonGroup fullWidth>

                                <Button variant='contained' color='primary' fullWidth onClick={share}><Typography
                                    variant='button'>Share All</Typography></Button>
                                <Button variant='contained' color='secondary' fullWidth onClick={shareSelected}><Typography
                                    variant='button'>Share Selected</Typography></Button>
                            </ButtonGroup>
                        </Grid>
                    </ListItem>
                </List>
            </Grid>
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
                            <ListItem href={menuItem.url ?? ""} className={classes.listItem} button>
                                <Button variant='text' href={menuItem.isModalButton ? undefined : menuItem.url}
                                        onClick={menuItem.isModalButton ? () => {
                                            console.log()
                                            if (menuItem.isModalButton) {
                                                modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                                            }
                                        } : undefined}
                                        style={{
                                            paddingTop: DigitalResumeTheme.spacing(2.25),
                                            paddingLeft: DigitalResumeTheme.spacing(2),
                                            paddingBottom: DigitalResumeTheme.spacing(2.25),
                                            height: "100%",
                                            margin: 0
                                        }} fullWidth>
                                    <ListItemText primary={menuItem.displayText}/>
                                </Button>

                            </ListItem>
                            <Divider/>
                        </List>
                }

            })}
        </Grid>
    );

    return (<Grid item>
            <Button onClick={toggleDrawer(anchor, true)}>
                <Avatar src={urlFor(menu.logoImageSrc ?? "").url() ?? ""}/>
            </Button>

            <Drawer
                className={classes.drawer}
                    anchor={anchor} open={isDrawerOpen}
                    onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{

                          position: "absolute",
                          zIndex: 1000,
                          paddingLeft: DigitalResumeTheme.spacing(4),
                          paddingRight: DigitalResumeTheme.spacing(6),
                      }}>

                    <Grid item xs={3}>
                        {menu.logoImageSrc && <Logo logoImageSrc={menu.logoImageSrc}/>}
                    </Grid>
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                <Grid container item justifyContent='center'>

                {list(anchor)}
                </Grid>
            </Drawer>
    </Grid>
    )
}

export default BusinessCard