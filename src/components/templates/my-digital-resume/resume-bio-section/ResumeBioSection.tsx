import React, {FunctionComponent} from 'react'
import {Button, ButtonGroup, Grid, Typography, useMediaQuery, useTheme,} from '@mui/material';
import {ResumeBioSectionType} from "../../../BlockContentTypes";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityTransformHwHomePage} from "../../../../common/sanityIo/Types";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock";
import BusinessCardSubmitEmail from "../../transform-hw/pages/BusinessCardSubmitEmail";


interface IProps {
    sectionData: ResumeBioSectionType
    homePage?: SanityTransformHwHomePage
}

const ResumeBioSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()

    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container item style={{padding: theme.spacing(4,smDown?1:4)}} justifyContent='center'
              className={classes.resumeSection} spacing={3}>
            <Grid item xs={12} style={{paddingTop: "64px"}}>
                <BusinessCardSubmitEmail
                    source={"Bio Section"}
                    emailFieldText={'Email Address'}
                    emailButtonText={'Submit'}
                    subscribeText={'Want a copy of my resume emailed to you?'}/>
            </Grid>
            <Grid item md={6} justifyContent='center'>
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
            <Grid item container md={6}>
                <Grid data-testid='bio-image' container item style={{
                    backgroundImage: `url(${urlFor(props.sectionData.mainImage ?? "").url()})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    minHeight: "350px"
                }}>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={10} spacing={1} style={{marginTop: theme.spacing(2)}}>
                <Grid item container>
                    <ButtonGroup fullWidth orientation={smDown ? 'vertical' : "horizontal"}>
                        <Button name={'appointment'} variant='contained' fullWidth color='primary'
                                href={props.homePage?.bookAppointmentLink}><Typography variant="button" align='center'>Meet
                            with Me</Typography></Button>
                        <Button name={'contact-me'} variant='contained' fullWidth color='primary'
                                href={'#CONTACT_ME'}><Typography variant="button" align='center'>Contact
                            Me</Typography></Button>
                        <Button
                            name={'download-resume'}
                            href={props.sectionData.resumeFile?.url + "?dl=James Terrell Singleton - Software Engineer - Resume.pdf"}
                            variant='contained' fullWidth color='primary'><Typography variant="button" align='center'
                                                                                      noWrap>
                            Download Resume</Typography></Button>
                        {/*{props.sectionData.cvFile && props.sectionData.cvFile.url.length > 0 && <Button*/}
                        {/*    href={props.sectionData.cvFile?.url + "?dl=James Terrell Singleton - Software Engineer - CV.pdf"}*/}
                        {/*    variant='contained' fullWidth color='primary'><CloudDownload*/}
                        {/*    className={classes.iconOnButton}/><Typography variant="button" align='center'>*/}
                        {/*    CV</Typography></Button>}*/}
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeBioSection