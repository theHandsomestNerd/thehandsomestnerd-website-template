import {createRef, FunctionComponent, RefObject, useContext, useEffect, useState} from 'react'

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
import {ResumePortfolioItemType} from "../../../BlockContentTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import dateUtils from "../../../../utils/dateUtils";
import ResumeSkillTooltipWrapper from "../resume-skills-section/ResumeSkillTooltipWrapper";
import {SanityImageSource} from '@sanity/image-url/lib/types/types';
import {sortBy} from "lodash";
import slugify from "slugify";

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

interface PortfolioItemModalProps {
    currentItem: ResumePortfolioItemType,
    isOpen?: boolean
    setIsOpen: (open: boolean) => void
}

const PortfolioItemModal: FunctionComponent<PortfolioItemModalProps> = (props: PortfolioItemModalProps) => {
    const theme = useTheme()
    const imageGalleryRef: RefObject<HTMLLIElement> = createRef()

    const classes = useStyles()
    const sanityContext = useContext(SanityContext)

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const xsDown = useMediaQuery(theme.breakpoints.down('sm'))

    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false)
    const [imageGalleryWidth, setImageGalleryWidth] = useState<number>(200)
    const [imageGalleryHeight, setImageGalleryHeight] = useState<number>(500)
    const [isTooltipOpen, setIsToolTipOpen] = useState<number>()
    const [selectedItem, setSelectedItem] = useState<SanityImageSource>()
    const [imageColumn, setImageColumn] = useState<number>()
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>()

    const handleClickOpen = () => {
        setIsPhotoModalOpen(true);
    };

    const handleClose = () => {
        setIsPhotoModalOpen(false);
    };

    useEffect(() => {
        if (imageGalleryRef.current?.clientWidth)
            setImageGalleryWidth(imageGalleryRef.current.clientWidth)
        if (imageGalleryRef.current?.clientHeight)
            setImageGalleryHeight(imageGalleryRef.current.clientHeight)
    }, [imageGalleryRef])

    useEffect(() => {
        if (xsDown)
            setImageColumn(1)
        else if (mdDown)
            setImageColumn(2)
        else
            setImageColumn(3)
    }, [mdDown, xsDown])

    return (
        <Modal
            open={!!props.isOpen}
            sx={{paddingBottom: 4, overflow: "scroll"}}
            aria-modal={true}
            aria-label={slugify(props.currentItem.title + " modal")}
        >
            <Grid container item justifyContent='center' alignContent='center' alignItems='center'>
                <IconButton
                    aria-label='modal-close-button'
                    className={classes.hover}
                    style={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        width: "64px",
                        height: "64px",
                        backgroundColor: "white"
                    }}
                    onClick={() => props.setIsOpen(false)}
                    size="large"
                >
                    <Close fontSize={'large'}/>
                </IconButton>
                <Grid container sm={10} item
                      style={{
                          backgroundColor: "white",
                          padding: theme.spacing(4),
                          minHeight: "600px",
                      }}
                      spacing={2}
                >
                    <Grid container item direction='column'>
                        <Grid item>
                            <Typography variant='h3'>{props.currentItem.detailTitle}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='primary'
                                        variant='body2'>{dateUtils.monthYear(props.currentItem.inceptionDate)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Typography
                            variant='body1'>{props.currentItem.detailDescription}</Typography>
                    </Grid>
                    <Grid item container spacing={1}>
                        {
                            props.currentItem.skillsHighlighted
                            && sortBy(props.currentItem.skillsHighlighted, ["title"])?.map((skill, index) => (
                                <Grid item key={index} onClick={() => {
                                    setIsToolTipOpen(index)
                                }}>
                                    <ResumeSkillTooltipWrapper resumeSkill={skill}
                                                               isOpenTooltip={index === isTooltipOpen}>
                                        <Chip
                                            color='primary' label={skill.title}/>
                                    </ResumeSkillTooltipWrapper>
                                </Grid>))
                        }
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Grid item container justifyContent='center'>
                            <Grid item container justifyContent='center'>
                                {
                                    props.currentItem.imageGallery && props.currentItem.imageGallery.length !== 0 &&
                                    <ImageList rowHeight={500} className={classes.imageList} cols={imageColumn}>
                                        {
                                            props.currentItem.imageGallery.map((item: SanityImageSource, index) => {
                                                return <ImageListItem
                                                    ref={imageGalleryRef}
                                                    aria-label={'image-list-item-' + index}
                                                    key={'image-list-item-' + index}
                                                    style={{
                                                        cursor: "pointer",
                                                        border: `1px solid ${theme.palette.primary.main}`
                                                    }}
                                                    onClick={() => {
                                                        // firebaseContext.albumImageClick && firebaseContext.albumImageClick(props.currentItem?.title ?? "", index.toString(), pageContext.analyticsId || "no-id")
                                                        setSelectedPhotoIndex(index)
                                                        setSelectedItem(item)
                                                        handleClickOpen()
                                                    }}
                                                >
                                                    <img
                                                        alt={'Image Gallery Entry ' + index}
                                                        src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(item, imageGalleryWidth, imageGalleryHeight)}
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
                                            })
                                        }
                                    </ImageList>
                                }
                                <Dialog onClick={() => handleClose()}
                                        aria-label={'image-dialog-' + selectedPhotoIndex}
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
                                    onClick={() => props.setIsOpen(false)}>
                                Back to Resume
                            </Button>
                            <Button variant='contained' color="primary" href={props.currentItem.linkToProd}>
                                Go to this Project
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>)
}

export default PortfolioItemModal