import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {Button, ButtonGroup, CircularProgress, Grid, Typography, useMediaQuery, useTheme,} from '@mui/material';
import {ResumeBioSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock";
import BusinessCardSubmitEmail from "../../transform-hw/pages/BusinessCardSubmitEmail";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import pdfClient from "../../../../utils/pdfClient";
import {SanityTransformHwHomePage} from "../../../../common/sanityIo/Types";


interface ResumeBioSectionProps {
    sectionData: ResumeBioSectionType
    homePage?: SanityTransformHwHomePage
    isHideEmail?: boolean
    isHideButtons?: boolean
}

const ResumeBioSection: FunctionComponent<ResumeBioSectionProps> = (props: ResumeBioSectionProps) => {
    const theme = useTheme()
    const classes = useThwCommonStyles()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdOnly = useMediaQuery(theme.breakpoints.only('md'))

    const sanityContext = useContext(SanityContext)

    const [aLinkUrl, setALinkUrl] = useState<string | undefined>(undefined)

    useEffect(() => {
        pdfClient.getPDFLink()
            .then(async (theLink) => {
                setALinkUrl(theLink)
            })
    }, [])

    return (
        <Grid container item style={{padding: theme.spacing(4, smDown ? 1 : 4)}} justifyContent='center'
              className={classes.resumeSection} spacing={3}>
            {!props.isHideEmail && <Grid item xs={12} style={{paddingTop: "64px"}}>
                <BusinessCardSubmitEmail
                    source={"Bio Section"}
                    emailFieldText={'Email Address'}
                    emailButtonText={'Submit'}
                    subscribeText={'Want a copy of my resume emailed to you?'}/>
            </Grid>}
            <Grid item sm={12} md={7} lg={12} justifyContent='center'>
                <Grid item container>
                    <Typography component='div' display='inline' variant='h5' gutterBottom>{props.sectionData.title}
                        <Typography variant='h5'
                                    color='primary'
                                    display='inline'>.</Typography>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant='body1'>{props.sectionData.introduction}</Typography>
                </Grid>
                <Grid container item xs={11} sm={12}>
                    <Grid item xs={3}>
                        <Typography gutterBottom variant='body1' style={{textTransform: "uppercase"}}>Phone</Typography>
                    </Grid>
                    <Grid item xs={9}><Typography gutterBottom
                                                  variant='body1'>{props.homePage?.businessContact?.phone}</Typography></Grid>
                </Grid>
                <Grid container item xs={11} sm={12}>
                    <Grid item xs={3}><Typography gutterBottom variant='body1'
                                                  style={{textTransform: "uppercase"}}>Email</Typography></Grid>
                    <Grid item xs={9}><Typography gutterBottom
                                                  variant='body1'>{props.homePage?.businessContact?.email}</Typography></Grid>
                </Grid>
                {/*<Grid container item xs={11} sm={12}>*/}
                {/*    <Grid item xs={3}><Typography gutterBottom variant='body1'*/}
                {/*                                  style={{textTransform: "uppercase"}}>MAIL</Typography></Grid>*/}
                {/*    <Grid item xs={9}><Typography noWrap gutterBottom*/}
                {/*                                  variant='body1'>{props.homePage.businessContact?.address}</Typography></Grid>*/}
                {/*</Grid>*/}
                <Grid container item xs={11} sm={12} justifyContent={'center'}>
                    <SocialMediaBlock
                        isCentered={true}
                        facebook={props.homePage?.businessContact?.facebook}
                        twitter={props.homePage?.businessContact?.twitter}
                        instagram={props.homePage?.businessContact?.instagram}
                        linkedIn={props.homePage?.businessContact?.linkedIn}
                        github={props.homePage?.businessContact?.github}
                    />
                </Grid>
            </Grid>
            <Grid item container sm={12} md={5} justifyContent='center'>
                <Grid data-testid='bio-image' container item style={{
                    backgroundImage: `url(${sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.sectionData.mainImage, 350, 500)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    minHeight: "500px",
                    maxWidth: "350px",
                }}>
                </Grid>
            </Grid>
            {!props.isHideButtons &&
                <Grid container item xs={12} sm={10} md={12} lg={6} spacing={1} style={{marginTop: theme.spacing(2)}}>
                    <Grid item container alignItems='center'>
                        <ButtonGroup fullWidth orientation={smDown || !mdOnly  ? 'vertical' : "horizontal"}>
                            <Button name={'appointment'} variant='contained' fullWidth color='primary'
                                    href={props.homePage?.bookAppointmentLink}><Typography variant="button"
                                                                                           align='center'>Meet
                                with Me</Typography></Button>
                            <Button name={'contact-me'} variant='contained' fullWidth color='primary'
                                    href={'#CONTACT_ME'}><Typography variant="button"
                                                                     align='center'>{props.sectionData.contactMeButtonTitle}</Typography></Button>

                            {aLinkUrl ? <Button href={aLinkUrl} fullWidth color='primary' variant='contained'>Download
                                    PDF</Button> :
                                <Button disabled variant={"contained"} color='primary'>
                                    <Grid spacing={.5} container item alignContent='center' justifyContent='center'
                                          alignItems='center'>
                                        <Grid item>
                                            <CircularProgress size={14} color='primary'/>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='button' color='primary'>Loading PDF...</Typography>
                                        </Grid>
                                    </Grid>
                                </Button>}

                            {/*{props.sectionData.cvFile && props.sectionData.cvFile.url.length > 0 && <Button*/}
                            {/*    href={props.sectionData.cvFile?.url + "?dl=James Terrell Singleton - Software Engineer - CV.pdf"}*/}
                            {/*    variant='contained' fullWidth color='primary'><CloudDownload*/}
                            {/*    className={classes.iconOnButton}/><Typography variant="button" align='center'>*/}
                            {/*    CV</Typography></Button>}*/}
                        </ButtonGroup>
                    </Grid>
                </Grid>}
            {/*<Modal open={isPDFResumeOpen}>*/}
            {/*    <><IconButton onClick={()=>{setIsPDFResumeOpen(false)}}><Close htmlColor={"#FFFFFF"} /></IconButton>*/}
            {/*    <PDFViewer width="100%" height="90%" key={'pdfview-modal'}>*/}
            {/*        <ResumeDocumentPDF homePage={props.homePage} />*/}
            {/*    </PDFViewer>*/}
            {/*        </>*/}
            {/*</Modal>*/}
        </Grid>
    );
}

export default ResumeBioSection