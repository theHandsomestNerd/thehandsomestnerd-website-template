import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {ThemeProvider, StyledEngineProvider, Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, IconButton, InputAdornment, Link, TextField, Typography, useMediaQuery} from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import {AccountCircle, Email, Facebook, LinkedIn, Message, Phone, Twitter, YouTube} from "@mui/icons-material";
import {ThwContactUsSectionType} from "../../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import isEmail from "validator/lib/isEmail";
import LoadingButton from "../../loading-button/LoadingButton";
import {useQuery} from "@tanstack/react-query";
import leadClient from "./pages/under-construction-page/leadClient";
import {Parallax} from "react-parallax";
import firebaseAnalyticsClient from "../../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../../page-context/PageContext";
import TransformHWTheme from "../../../theme/TransformHWTheme";
import imagePlaceholderClient from "../../../utils/imagePlaceholderClient";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // minHeight: '100vh',
        // backgroundColor: '#1f1f1f',
        color: "#FAFAFA",
    },
    header: {
        fontWeight: 800,
        letterSpacing: '10px',
        lineHeight: 1.4,
        fontSize: '30px',
        textTransform: 'uppercase'
    },
    headerAccent: {
        display: 'inline-block',
        marginLeft: "8px"
    },
    formContainer: {
        // margin: 'auto',
        // height: '500px',
        // backgroundColor: '#313131',
        // boxShadow: '11px 10px 38px rgb(0 0 0 / 38%)',
        zIndex: 2
    },
    inputAdornmentContainer: {
        marginTop: "8px",
        zIndex: 3
    },
    inputAdornmentTextBlockContainer: {
        position: "relative",
        top: -34,
        zIndex: 3
    },
    formTitle: {
        marginBottom: "8px"
    },
    socialMediaContainer: {
        marginTop: "8px"
    },
    lhsContainer: {
        // width: "500px",
        // height: "650px"
    },
    formInput: {
        color: "white",
    },
    sectionTitle: {
        fontWeight: 800,
        color: "white !important"
    }
}))

const StyledTextField = withStyles({
    root: {
        transition: "all 0.3s ease-in-out",
        "& label": {
            // display: "inline-block",
            // fontSize: "16px",
            // fontWeight: 700,
            position: "relative",
            top: "8px",
            left: "-14px",
        },
        "& legend": {
            maxWidth: "0px"
        },
        "& input": {
            zIndex: 2
        },
        "& textarea": {
            zIndex: 2
        },
        "& fieldset": {
            backgroundColor: "#292929",
        },
        "& .MuiOutlinedInput-root": {
            borderColor: `${TransformHWTheme.palette.primary.main} !important`,
            "&.Mui-focused": {
                borderColor: `${TransformHWTheme.palette.primary.main} !important`,
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${TransformHWTheme.palette.primary.main} !important`
                    }
                }
            },
            "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `#212121 !important`
                }
            }
        }
    }
})(TextField);

export type ContactUsProps = {
    sectionData: ThwContactUsSectionType
}

const ContactUs: FunctionComponent<ContactUsProps> = (props) => {
    const classes = useStyles(TransformHWTheme)

    const globalClasses = useCustomStyles({})

    const [leadName, setleadName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [leadPhone, setLeadPhone] = useState<string>()
    const [leadMessage, setLeadMessage] = useState<string>()
    const [alignment, setAlignment] = useState<any>('right')
    const [justifyContent, setJustifyContent] = useState<any>('flex-end')
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const smDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('sm'))
    useEffect(() => {
        if (smDown) {
            setAlignment('center')
            setJustifyContent('center')
        } else {
            setAlignment('right')
            setJustifyContent('flex-end')
        }
    }, [smDown])

    const {isLoading, isError, data, refetch, isRefetching} = useQuery(
        ['submitContactUsForm'],
        () => {
            if (email && email.length > 0 && (!data && !isError)) {
                return leadClient.createLead({
                    email,
                    leadName,
                    leadMessage,
                    leadPhone,
                    source: "Contact Us"
                }).then((response) => {
                    return response.response
                });
            }
            return undefined
        }
    );

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const getHelperText = () => {
        if (data) {
            return <Typography style={{color: TransformHWTheme.palette.success.main}} variant='subtitle1'>Thank you
                for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: TransformHWTheme.palette.error.main}} variant='subtitle1'>Please Try
                your
                submission again later or contact jgreene@transformHW.org.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    const pageContext = useContext(PageContext)
    const createLead = async (e: any): Promise<any> => {
        firebaseAnalyticsClient.ctaClick('contact-us', 'send-message', pageContext.analyticsId,)
        return refetch()
    }


    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TransformHWTheme}>
                <Parallax blur={1}
                          bgImage={imagePlaceholderClient.placeholderOrImage(props.sectionData.bgImageSrc, 1000, 500)}
                          bgImageAlt="the cat"
                          strength={600}
                >


                    <Grid container item className={classes.root} style={{
                        position: "relative",
                        minHeight: "145px",
                    }}>
                        <Grid container item
                              className={clsx(globalClasses.fullSectionOverlay)}/>
                        <Grid spacing={smDown ? 0 : 4} container item style={{
                            padding: TransformHWTheme.spacing(0, smDown ? 2 : 8, 6)
                        }} justifyContent={"center"}>
                            <Grid container item md={6}>
                                <Grid container direction="column" item className={classes.lhsContainer}
                                      justifyContent='center' style={{
                                    zIndex: 2,
                                    paddingTop: "64px",
                                }}>
                                    <Grid container item justifyContent={justifyContent}>
                                        <Typography variant="h2"
                                                    align={alignment}> {props.sectionData.lhsTitle}</Typography>
                                    </Grid>
                                    <Grid container item justifyContent={justifyContent}>
                                        <Typography gutterBottom variant='h4'
                                                    display='inline'
                                                    color='secondary'
                                                    style={{
                                                        letterSpacing: "-.25em",
                                                        paddingBottom: "16px",
                                                        lineHeight: .2
                                                    }}>________</Typography>
                                    </Grid>
                                    <Grid container item justifyContent={justifyContent}>
                                        <Grid item xs={8}>
                                            <Typography style={{wordWrap: "break-word"}} align={alignment}>
                                                {props.sectionData.lhsContentText}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item>
                                        <Grid container item justifyContent={justifyContent}
                                              className={classes.socialMediaContainer}
                                              spacing={1}>
                                            {props.sectionData?.facebook && <Grid item>
                                                <IconButton size="large">
                                                    <Typography>
                                                        <Link
                                                            href={"http://facebook.com/" + props.sectionData.facebook}
                                                            underline="hover"><Facebook
                                                            fontSize="large"/></Link>
                                                    </Typography>
                                                </IconButton>
                                            </Grid>}
                                            {props.sectionData?.twitter && <Grid item>
                                                <IconButton size="large">

                                                    <Typography>
                                                        <Link
                                                            href={"http://twitter.com/" + props.sectionData.twitter}
                                                            underline="hover"><Twitter
                                                            fontSize="large"/></Link>
                                                    </Typography>
                                                </IconButton>
                                            </Grid>}
                                            {props.sectionData?.linkedIn && <Grid item>
                                                <Typography>
                                                    <Link
                                                        href={"http://linkedIn.com/" + props.sectionData.linkedIn}
                                                        underline="hover"><LinkedIn
                                                        fontSize="large"/></Link>
                                                </Typography>
                                            </Grid>}
                                            {props.sectionData?.youtube && <Grid item>
                                                <Typography>
                                                    <Link
                                                        href={"http://youtube.com/" + props.sectionData.youtube}
                                                        underline="hover"><YouTube
                                                        fontSize="large"/></Link>
                                                </Typography>
                                            </Grid>}
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={11} md={6} justifyContent="center">
                                <Grid container item className={classes.formContainer} spacing={1}>
                                    <Grid container item style={{marginTop: TransformHWTheme.spacing(8)}}>
                                        <StyledTextField
                                            fullWidth
                                            id="contact-name-input"
                                            value={leadName}
                                            onChange={(e:any) => {
                                                setleadName(e.target.value)
                                            }}
                                            label={<Typography variant='body2' style={{color: "white"}}>Name</Typography>}
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Typography className={classes.inputAdornmentContainer}>
                                                            <AccountCircle/>
                                                        </Typography>
                                                    </InputAdornment>
                                                ),
                                                className: classes.formInput
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item>
                                        <StyledTextField
                                            fullWidth
                                            value={email}
                                            onChange={(e:any) => {
                                                setEmail(e.target.value)
                                            }}
                                            id="contact-email-input"
                                            label={<Typography variant='body2' style={{color: "white"}}>Email</Typography>}
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Typography className={classes.inputAdornmentContainer}>
                                                            <Email/>
                                                        </Typography>
                                                    </InputAdornment>
                                                ),
                                                className: classes.formInput
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item>
                                        <StyledTextField
                                            fullWidth
                                            value={leadPhone}
                                            onChange={(e:any) => {
                                                setLeadPhone(e.target.value)
                                            }}
                                            id="contact-phone-input"
                                            label={<Typography variant='body2' style={{color: "white"}}>Phone</Typography>}
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Typography
                                                            className={classes.inputAdornmentContainer}><Phone/></Typography>
                                                    </InputAdornment>
                                                ),
                                                className: classes.formInput
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item>
                                        <StyledTextField
                                            fullWidth
                                            id="contact-message-input"
                                            value={leadMessage}
                                            onChange={(e:any) => {
                                                setLeadMessage(e.target.value)
                                            }}
                                            label={<Typography variant='body2'
                                                               style={{color: "white"}}>Message</Typography>}
                                            variant="outlined"
                                            multiline
                                            minRows="4"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Typography

                                                            className={classes.inputAdornmentTextBlockContainer}>
                                                            <Message/>
                                                        </Typography>
                                                    </InputAdornment>
                                                ),
                                                className: classes.formInput
                                            }}
                                        />
                                    </Grid>
                                    <Grid container item alignItems="center" justifyContent="center"
                                          style={{marginTop: TransformHWTheme.spacing(4)}}>
                                        {/*<Button color="primary" variant="contained"><Typography variant="button">Send*/}
                                        {/*    Button</Typography></Button>*/}
                                        <LoadingButton
                                            width={200}
                                            isLoading={isLoading || isRefetching}
                                            disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                            clickHandler={createLead}
                                            color="secondary" variant="contained">Send Message</LoadingButton>
                                    </Grid>
                                    <Grid item container justifyContent='center'>
                                        {getHelperText()}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Parallax>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ContactUs