import {FunctionComponent, useContext, useState} from 'react'
import {
    Dialog,
    DialogTitle,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Link,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import TheOtherSideLogo from "./TheOtherSideLogo";
import {DrinkeryAlbumSectionType} from "../../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import PageContext from "../../page-context/PageContext";
import {Facebook, Instagram} from "@mui/icons-material";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    sectionData: DrinkeryAlbumSectionType
}

export const useStyles = makeStyles(() => ({
    preroot: {
        minHeight: '1400px',
        // backgroundColor: "black",
        color: "white",
        paddingTop: 64,
        paddingBottom: 64,
        // paddingLeft: -theme.spacing(-5),
    },
    imageList: {
        maxWidth: "800px",
        minWidth: "300px",
        // height: 2000,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}))


const TheDrinkeryAlbumSection: FunctionComponent<IProps> = (props) => {
    const pageContext = useContext(PageContext)
    const firebaseContext = useContext(FirebaseContext)
    const sanityContext = useContext(SanityContext)

    const theClasses = useStyles()
    const theme = useTheme()
    const xsDown = useMediaQuery(theme.breakpoints.only('xs'))

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container className={theClasses.preroot}
              style={{color: "white"}} spacing={1}>
            {props.sectionData.isLogo && <Grid container item justifyContent='center'>
                <TheOtherSideLogo isCenter={true} logoImageSrc={pageContext.page?.businessCardImageSrc}></TheOtherSideLogo>
            </Grid>}
            <Grid item container
                  justifyContent='center' alignItems='center' spacing={2}>
                <Grid container item justifyContent='center'>
                    <Typography variant='h5'>{props.sectionData.contentTitle}</Typography>
                </Grid>
                <Grid container item justifyContent='center'>
                    <Typography align='center' variant='body2'
                                style={{maxWidth: 800, fontWeight: 400}}>{props.sectionData.contentText}</Typography>
                </Grid>

                <Grid container item justifyContent='center'>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h6' gutterBottom>Tags & Hashtags</Typography>
                    </Grid>
                    <Grid container item >
                        <Grid container item justifyContent='center'>
                            <Link href={`https://instagram.com/${pageContext.page?.businessContact?.instagram}`}><Grid container alignItems='center'> <Instagram style={{marginRight:theme.spacing(1)}} /> <Typography variant="body2">{pageContext.page?.businessContact?.instagram}</Typography></Grid></Link>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Link href={`https://facebook.com/${pageContext.page?.businessContact?.facebook}`}><Grid container alignItems='center'> <Facebook style={{marginRight:theme.spacing(1)}} /> <Typography variant="body2">{pageContext.page?.businessContact?.facebook}</Typography></Grid></Link>
                        </Grid>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Grid container item justifyContent='center' style={{
                            maxWidth: 550,
                        }}>
                            {
                                props.sectionData.hashtags?.map((tag,index)=>  <Grid xs={6} key={index} container item justifyContent='center'><Typography align='center' variant='body2' >{tag}</Typography></Grid> )
                            }
                        </Grid>


                    </Grid>
                </Grid>

                <Grid item container justifyContent='center'>
                    <ImageList rowHeight={500} className={theClasses.imageList} cols={xsDown ? 2 : 3}>
                        {props.sectionData.imageList.map((item, index) => (
                            <ImageListItem key={index} cols={parseInt(item.cols ?? "1")} onClick={() => {
                                firebaseContext.analytics.albumImageClick(item.title, item.subtitle, pageContext.analyticsId || "no-id")
                                setSelectedItem(item)
                                handleClickOpen()
                            }} style={{cursor: "pointer"}}>
                                <img src={sanityContext.placeholderOrImage(item.imageSrc,800, 500)} alt={item.title}/>
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<Typography variant='subtitle1' style={{
                                        color: "white",
                                        fontWeight: 400
                                    }}>{item.subtitle}</Typography>}

                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Dialog onClick={() => handleClose()} onClose={handleClose} aria-labelledby="simple-dialog-title"
                            open={open}>
                        <img src={sanityContext.placeholderOrImage(selectedItem?.imageSrc, 480,480)} alt={selectedItem?.title}/>
                        <DialogTitle id="simple-dialog-title"
                                     style={{
                                         backgroundColor: 'black'
                                     }}
                        ><Typography variant='body2'
                                     style={{color: "white"}} gutterBottom>{selectedItem?.title}</Typography><Typography
                            variant='subtitle1'
                            style={{
                                color: "white",
                                fontWeight: 400
                            }}>{selectedItem?.subtitle}</Typography></DialogTitle>
                    </Dialog>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkeryAlbumSection