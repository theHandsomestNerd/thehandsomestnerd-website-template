import React, {FunctionComponent, useContext} from 'react'
import {Button, ButtonGroup, Grid, Typography, useMediaQuery, useTheme,} from '@mui/material';
import {ResumeBioSectionType} from "../../../BlockContentTypes";
import {SanityTransformHwHomePage} from "../../../../common/sanityIo/Types";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock";
import BusinessCardSubmitEmail from "../../transform-hw/pages/BusinessCardSubmitEmail";
import {PDFDownloadLink} from "@react-pdf/renderer";
import ResumeDocumentPDF from "../../../pdf-renderer/ResumeDocumentPDF";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    sectionData: ResumeBioSectionType
    homePage?: SanityTransformHwHomePage
    isHideEmail?: boolean
    isHideButtons?: boolean
}

const ResumeBioSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const sanityContext = useContext(SanityContext)

    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

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
            <Grid item container sm={12} md={5} lg={12} justifyContent='center'>
                <Grid data-testid='bio-image' container item style={{
                    backgroundImage: `url(${sanityContext.placeholderOrImage(props.sectionData.mainImage, 350, 500)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    minHeight: "500px",
                    maxWidth: "350px",
                }}>
                </Grid>
            </Grid>
            {!props.isHideButtons &&
                <Grid container item xs={12} sm={10} spacing={1} style={{marginTop: theme.spacing(2)}}>
                    <Grid item container>
                        <ButtonGroup fullWidth orientation={smDown ? 'vertical' : "horizontal"}>
                            <Button name={'appointment'} variant='contained' fullWidth color='primary'
                                    href={props.homePage?.bookAppointmentLink}><Typography variant="button"
                                                                                           align='center'>Meet
                                with Me</Typography></Button>
                            <Button name={'contact-me'} variant='contained' fullWidth color='primary'
                                    href={'#CONTACT_ME'}><Typography variant="button"
                                                                     align='center'>{props.sectionData.contactMeButtonTitle}</Typography></Button>

                            <PDFDownloadLink style={{width: "100%", textDecoration: "none"}}
                                             fileName={'James Terrell Singleton - Software Engineer - Resume.pdf'}
                                             document={<ResumeDocumentPDF homePage={props.homePage}/>}><Button
                                name={'download-resume'}
                                // onClick={
                                //     ()=>{
                                //         setIsPDFResumeOpen(true)
                                //     }
                                // }
                                // href={props.sectionData.resumeFile?.url + "?dl=James Terrell Singleton - Software Engineer - Resume.pdf"}
                                variant='contained' fullWidth color='primary'>
                                <Typography variant="button"
                                            align='center'
                                            noWrap>
                                    {props.sectionData.resumeFileDownloadText}
                                </Typography>
                            </Button>
                            </PDFDownloadLink>
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