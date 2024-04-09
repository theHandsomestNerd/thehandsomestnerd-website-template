import {FunctionComponent, useContext, useEffect, useState} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {
    Box,
    Button,
    ButtonGroup,
    Chip,
    Dialog,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    Modal,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Close} from "@mui/icons-material";
import {ResumePortfolioItemType, SanityImageAsset} from "../../../BlockContentTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import dateUtils from "../../../../utils/dateUtils";
import ResumeSkillTooltipWrapper from "../resume-skills-section/ResumeSkillTooltipWrapper";
import textProcessingUtils from "../../../../utils/textProcessingUtils";

const useStyles = makeStyles(() => ({
    hover: {
        "&:hover": {
            backgroundColor: "whitesmoke"
        }
    },
    imageList: {
        maxWidth: "800px",
        minWidth: "300px",
    },
}))

interface IProps {
    currentItem?: ResumePortfolioItemType,
    isOpen?: boolean
    setIsOpen: (open: boolean) => void
}

const PortfolioItemModal: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const classes = useStyles()
    const sanityContext = useContext(SanityContext)
    const mdDown = useMediaQuery(theme.breakpoints.only('md'))
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false)
    const setOpenWrapper = (theValue: boolean) => {
        setIsOpen(theValue)
        // props.setIsOpen(theValue)
    }

    useEffect(() => {
        setIsOpen(!!props.isOpen)
    }, [props.isOpen])

    const handleClickOpen = () => {
        setIsPhotoModalOpen(state => !state);
    };

    const handleClose = () => {
        setIsPhotoModalOpen(state => !state);
    };

    const [isTooltipOpen, setIsToolTipOpen] = useState<number>()

    const [selectedItem, setSelectedItem] = useState<SanityImageAsset>()

    return (<Modal open={isOpen} sx={{paddingBottom: 4, overflow: "scroll"}}>
        <Grid container item justifyContent='center' alignContent='center' alignItems='center'
              style={{position: "relative"}}>

            <IconButton
                className={classes.hover}
                style={{
                    position: "absolute", top: 0, right: 0,
                    width: "64px",
                    height: "64px",
                    backgroundColor: "white"
                }}
                onClick={() => setIsOpen(false)}
                size="large"><Close fontSize={'large'}/></IconButton>
            <Grid container sm={10} item style={{
                backgroundColor: "white",
                padding: theme.spacing(4),
                minHeight: "600px",
                // overflowY: "scroll",
            }} spacing={2}>
                <Grid container item direction='column'>
                    <Grid item>
                        <Typography variant='h3'>{props.currentItem?.detailTitle}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color='primary'
                                    variant='body2'>{dateUtils.MonthYear(props.currentItem?.inceptionDate?.toString())}</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Typography
                        variant='body1'>{props.currentItem?.detailDescription}</Typography>
                </Grid>
                <Grid item container spacing={1}>
                    {
                        props.currentItem
                        && props.currentItem.skillsHighlighted
                        && textProcessingUtils
                            .sortByTitle(props.currentItem.skillsHighlighted)?.map((skill, index) => (
                                <Grid item key={index} onClick={() => {
                                    setIsToolTipOpen(index)
                                }}>
                                    <ResumeSkillTooltipWrapper resumeSkill={skill} isTipOpen={index === isTooltipOpen}>
                                        <Chip
                                            color='primary' label={skill.title}/>
                                    </ResumeSkillTooltipWrapper>
                                </Grid>))}
                </Grid>
                <Grid item container justifyContent='center'>
                    <Grid item container justifyContent='center'>
                        <Grid item container justifyContent='center'>
                            <ImageList rowHeight={500} className={classes.imageList} cols={mdDown ? 2 : 3}>
                                {
                                    props.currentItem?.imageGallery ? props.currentItem.imageGallery.map((item, index) => {
                                        return <Box
                                            margin='4px'
                                            border='1px solid #D5d5d5'
                                            position='relative'
                                            key={index}
                                        >
                                            <ImageListItem style={{cursor: "pointer"}} onClick={() => {
                                                // firebaseContext.analytics.albumImageClick(item.title, item.subtitle, pageContext.analyticsId || "no-id")
                                                setSelectedItem(item)
                                                handleClickOpen()
                                            }}>

                                                <img alt={'imageGalleryEntry'}
                                                     src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(item, 200, 200)}
                                                     width={"100%"}/>
                                                <Box
                                                    component='div'
                                                    position="absolute"
                                                    width="100%"
                                                    height="100%"
                                                    sx={{
                                                        opacity: .2,
                                                        backgroundColor: "rgba(0,0,0, .5)"
                                                    }}
                                                    zIndex={9999}
                                                />
                                            </ImageListItem>
                                        </Box>
                                    }) : <></>}
                            </ImageList>
                            <Dialog onClick={() => handleClose()}
                                    aria-labelledby="simple-dialog-title"
                                    open={isPhotoModalOpen}>
                                <Grid container item justifyContent='center'>
                                    <Grid container item sx={{backgroundColor: "black"}} xs={10}>
                                        <img
                                            src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(selectedItem, 480, 480)}
                                            alt={""} width='100%'/>
                                    </Grid>
                                </Grid>
                            </Dialog>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center'>
                    <ButtonGroup fullWidth style={{marginTop: theme.spacing(4)}}>
                        <Button style={{border: "1px solid whitesmoke"}} variant='contained' color='secondary'
                                onClick={() => setOpenWrapper(false)}>
                            Back to Resume
                        </Button>
                        <Button variant='contained' color="primary" href={props.currentItem?.linkToProd}>
                            Go to this Project
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    </Modal>)
}

export default PortfolioItemModal