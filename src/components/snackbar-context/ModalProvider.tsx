import {FunctionComponent, PropsWithChildren, useContext, useMemo, useRef, useState,} from 'react';
import {
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Modal,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import ModalContext from './ModalContext';
import {SanityModalType, TextElementType} from "../../common/sanityIo/Types";
import {Close} from "@mui/icons-material";
import LoadingButton from "../loading-button/LoadingButton";
import ColoredPng from '../colored-png/ColoredPng';
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

type IProps = {};

const ModalProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const theme = useTheme()
    const ref: any = useRef(null)

    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))
    const sanityContext = useContext(SanityContext)

    const [modalContent, setModalContent] = useState<SanityModalType | undefined>(
        undefined,
    );

    const handleModalClose = () => {
        setModalOpen(false)
    }

    // useEffect(() => {
    //     console.log("height", ref?.current?.scrollHeight, ref?.current?.clientHeight)
    // }, [ref.current])

    const openModal = (contents?: SanityModalType) => {
        // console.log("Opening modal", contents)
        if (!contents) {
            return;
        }
        setModalOpen(true)
        setModalContent(contents)
    }

    const newValue = useMemo(
        () => ({
            openModal,
            handleModalClose
        }),
        [openModal, handleModalClose, modalContent]
    );
    return (
        <ModalContext.Provider value={newValue}>
            <Grid container item>
                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                >
                    <Grid container justifyContent='center' alignItems='stretch' alignContent='center'
                          style={{width: "100%", height: "100%", position: "relative"}}>

                        <Grid item container xs={12} sm={9} md={7} style={{
                            border: `2px solid black`,
                            // borderRight:`4px solid ${theme.palette.primary.dark}`,
                            backgroundColor: 'rgb(250,250,250,.96)',
                            color: theme.palette.getContrastText(theme.palette.background.paper),
                            padding: theme.spacing(0, 0, 4, 0),
                            margin: theme.spacing(!xsDown ? 4 : 0, 0),
                            maxHeight: "100%",
                            // minHeight: '550px',
                            overflowY: "scroll",
                            height: xsDown ? "100%" : "unset",
                            position: "relative"
                        }} justifyContent='center' alignContent={'flex-start'}>
                            <Grid container item justifyContent='flex-end' style={{position: "absolute"}}>
                                <IconButton
                                    color='primary'
                                    onClick={() => setModalOpen(false)}
                                    style={{zIndex: 3, margin: theme.spacing(2.5, 2.5, 0, 0)}}
                                    size="large">

                                    <Close color={'secondary'} fontSize='large'/>
                                </IconButton>
                            </Grid>

                            <Grid container item justifyContent='center' alignItems='center' alignContent='center'
                                  style={{position: "absolute", height: "100%", zIndex: 1}}>
                                {<ColoredPng color={'rgba(16, 43, 136, .3)'}
                                             maskUrl={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(modalContent?.iconOverlayImageSrc, 400, 400)}
                                             size={400}/>}
                            </Grid>
                            <Grid container item justifyContent='center' alignItems='center' alignContent='center'
                                  xs={12}
                                // spacing={smDown ? 2 : 4}
                                  style={{
                                      padding: theme.spacing(10, 1, 0, 1),
                                      zIndex: 2
                                  }}
                            >
                                <Grid container xs={10} sm={12} item justifyContent='center' alignItems="center"
                                      alignContent='center' style={{flexGrow: "1", marginBottom: theme.spacing(2)}}>
                                    <Typography variant='h4' align='center'
                                                color='secondary'>{modalContent?.title}</Typography>
                                </Grid>
                                <Grid container item style={{position: "relative", flexGrow: "2"}}
                                      justifyContent='center'>
                                    <Grid container item xs={12} sm={11}
                                          ref={ref}

                                          style={{maxHeight: xsDown ? "" : "600px", overflowY: "scroll", overflowX: "hidden"}}>
                                        <List style={{marginBottom: "36px"}}>
                                            {
                                                modalContent?.contentText.map((faq: TextElementType) => {
                                                    return <ListItem>
                                                        <ListItemText>
                                                            <Typography variant='body2' gutterBottom
                                                                        color='secondary'>{faq?.question}</Typography>
                                                            <Typography variant='body1' style={{
                                                                // borderLeft: "1px solid white",
                                                                paddingLeft: theme.spacing(2)
                                                            }}>{faq?.answer}</Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                })
                                            }
                                        </List>
                                    </Grid>
                                    {/*{ref.current?.clientHeight > 800 &&*/}
                                    {/*    <Grid container alignItems='flex-end' item style={{*/}
                                    {/*        position: "absolute",*/}
                                    {/*        bottom: 0,*/}
                                    {/*        left: 0,*/}
                                    {/*        minHeight: "100px",*/}
                                    {/*        pointerEvents: "none",*/}
                                    {/*        backgroundImage: "linear-gradient(180deg, transparent, whitesmoke)"*/}
                                    {/*    }} justifyContent='center'>*/}
                                    {/*        <ArrowDropDown/>*/}
                                    {/*    </Grid>}*/}
                                </Grid>
                                {modalContent?.notes?.map((note: string, index: number) => {
                                    return <ListItem>
                                        <ListItemText>
                                            {index === 0 && <Typography variant='body2' gutterBottom
                                                                        color='secondary'>Note:</Typography>}
                                            <Typography variant='body1' style={{
                                                // borderLeft: "1px solid white",
                                                paddingLeft: theme.spacing(2)
                                            }}>{note}</Typography>
                                        </ListItemText>
                                    </ListItem>
                                })}
                                {modalContent?.ctaButtonTitle && modalContent?.ctaButtonTitle.length > 0 &&
                                    <Grid item style={{marginTop: theme.spacing(4)}}>
                                        <LoadingButton href={modalContent?.ctaButtonLink} color={"secondary"}
                                                       variant='contained'>
                                            <Typography variant='button'
                                                        color='textSecondary'>{modalContent?.ctaButtonTitle}</Typography>
                                        </LoadingButton>
                                    </Grid>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
            <Grid container item>
                {props.children}
            </Grid>
        </ModalContext.Provider>
    );
};

export default ModalProvider;
