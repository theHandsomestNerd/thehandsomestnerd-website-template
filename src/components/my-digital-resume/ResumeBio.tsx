import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Link, Typography, useTheme} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ResumeBioSectionType, ThwContactUsSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import logoImg from "../transform-hw/logo/thehandsomestNerdlogo-small.png";
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {Facebook, Instagram, Twitter} from "@material-ui/icons";
import {rainbow} from "../../theme/DigitalResumeTheme";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeBioSectionType
    homePage: SanityTransformHwHomePage
}

const ResumeBio: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    React.useEffect(() => {
    }, [])

    return (<Grid container item style={{padding:theme.spacing(4)}} justifyContent='center'  className={classes.resumeSection}>
        <Grid container item md={6}>
            <Grid item container>
                <Typography gutterBottom display='inline' variant='h5'>{props.sectionData.title}<Typography variant='h5'
                                                                                               color='primary'
                                                                                               display='inline'>.</Typography></Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant='body1'>{props.sectionData.introduction}</Typography>
            </Grid>
            <Grid container item>
                <Grid item xs={3}>
                    <Typography gutterBottom variant='body1' style={{textTransform: "uppercase"}}>Phone</Typography>
                </Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.phone}</Typography></Grid>
            </Grid>
            <Grid container item>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>Email</Typography></Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.email}</Typography></Grid>
            </Grid>
            <Grid container item>
                <Grid item xs={3}><Typography gutterBottom variant='body1' style={{textTransform: "uppercase"}}>Address</Typography></Grid>
                <Grid item><Typography gutterBottom variant='body1'>{props.homePage.address}</Typography></Grid>
            </Grid>
            <Grid container item>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>Social</Typography></Grid>
                <Grid item xs={9} container spacing={2}>
                    <Grid item>
                        <Link href={`https://facebook.com/${props.homePage.facebook}`}><Facebook/></Link>
                    </Grid>
                    <Grid item>
                        <Link href={`https://twitter.com/${props.homePage.twitter}`}><Twitter/></Link>
                    </Grid>
                    <Grid item>
                        <Link href={`https://instagram.com/${props.homePage.instagram}`}><Instagram/></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container item md={6} style={{
            backgroundImage: `url(${urlFor(props.sectionData.mainImage ?? "").url()})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            minHeight: "350px"
        }}>
        </Grid>
            <Grid container item xs={12} sm={10} spacing={1} style={{marginTop: theme.spacing(2)}}>
                <Grid item xs={12} md={4}>
                    <Button variant='contained' fullWidth color='primary'> Download Resume</Button>
                </Grid>

                <Grid item xs={12} md={4}>

                    <Button variant='contained' fullWidth color='primary'>Contact Me</Button>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Button variant='contained' fullWidth color='primary'>Download CV</Button>
                </Grid>

            </Grid>
    </Grid>)
}

export default ResumeBio