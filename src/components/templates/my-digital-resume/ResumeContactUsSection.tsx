import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles} from "@mui/styles"
import {ResumeContactUsSectionType} from "../../BlockContentTypes";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import isEmail from "validator/lib/isEmail";
import LoadingButton from "../../loading-button/LoadingButton";
import {useQuery} from "@tanstack/react-query";
import PageContext from "../../page-context/PageContext";
import leadClient from "../transform-hw/pages/under-construction-page/leadClient";
import SnackbarContext from "../../modal-context/SnackbarContext";
import withStyles from "@mui/styles/withStyles";
import {Grid, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";

export const useStyles = makeStyles(() => ({
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
        // color: "white",
    },
    sectionTitle: {
        fontWeight: 800,
        // color: "white !important"
    }
}))

const StyledTextField = withStyles((theme) => ({
    root: {
        // marginTop: "16px",
        minHeight: 90,
        transition: "all 0.3s ease-in-out",
        "& label": {
            // display: "inline-block",
            // fontSize: "16px",
            // fontWeight: 700,
            position: "relative",
            top: "8px",
            // left: "-14px",
        },
        "& legend": {
            maxWidth: "0px"
        },
        "& input": {
            zIndex: 2,
        },
        "& textarea": {
            zIndex: 2
        },
        "& .MuiOutlinedInput-root": {
            border: "1px solid black",
            borderRadius: 0,
            "&.Mui-focused": {
                borderColor: `${theme.palette.primary.main} !important`,
                "&.Mui-hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.primary.main} !important`
                    },

                },

            },
            "&.Mui-hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `#212121 !important`
                }
            }
        }
    }
}))(TextField);

export type ContactUsProps = {
    sectionData: ResumeContactUsSectionType
}
const ResumeContactUsSection: FunctionComponent<ContactUsProps> = (props) => {
    const classes = useStyles()

    const snackbarContext = useContext(SnackbarContext)

    const globalClasses = useCustomStyles({})
    const firebaseContext = useContext(FirebaseContext)

    const [leadName, setleadName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [leadMessage, setLeadMessage] = useState<string>()

    const {isLoading, isError, data, refetch, isRefetching} = useQuery(
        ['submitContactUsForm'],
        () => {
            if (email && email.length > 0 && (!data && !isError)) {
                return leadClient.createLead({
                    email,
                    leadName,
                    leadMessage,
                    source: "Contact Us"
                }).then((response) => {
                    snackbarContext.openSnackbar && snackbarContext.openSnackbar(response.message)
                    return response.response
                });
            }
            return null
        }
    );


    const pageContext = useContext(PageContext)
    const createLead = async (): Promise<any> => {
        firebaseContext.analytics.ctaClick('contact-us', 'send-message', pageContext.analyticsId,)
        return refetch()
    }

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <Grid
            container
            item
            style={{padding: theme.spacing(4,smDown?1:4)}}

            className={globalClasses.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container sm={4} alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <Typography
                            variant='h6'
                        >{props.sectionData.title}</Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            display='inline'
                        >.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container sm={8} spacing={2} justifyContent='space-between'>
                    <Grid container item md={6} alignContent='flex-start'>
                        <Grid container item>
                            <StyledTextField
                                fullWidth
                                id="contact-name-input"
                                value={leadName}
                                onChange={(e: any) => {
                                    setleadName(e.target.value)
                                }}
                                label={<Typography color='textPrimary'>Name</Typography>}
                                variant="outlined"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography className={classes.inputAdornmentContainer}>
                                    //             <AccountCircle/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
                                    className: classes.formInput
                                }}
                            />
                        </Grid>
                        <Grid container item>
                            <StyledTextField
                                fullWidth
                                value={email}
                                onChange={(e: any) => {
                                    setEmail(e.target.value)
                                }}
                                id="contact-email-input"
                                label={<Typography color='textPrimary'>Email</Typography>}
                                variant="outlined"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography className={classes.inputAdornmentContainer}>
                                    //             <Email/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
                                    className: classes.formInput
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md={6}>
                        <Grid container item>
                            <StyledTextField
                                fullWidth
                                id="contact-message-input"
                                value={leadMessage}
                                onChange={(e: any) => {
                                    setLeadMessage(e.target.value)
                                }}
                                label={<Typography color='textPrimary'>Message</Typography>}
                                variant="outlined"
                                multiline
                                minRows="6"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography
                                    //
                                    //             className={classes.inputAdornmentTextBlockContainer}>
                                    //             <Message/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
                                    className: classes.formInput
                                }}
                            />
                        </Grid>
                    </Grid>
                        <Grid container item justifyContent='flex-end' style={{paddingRight:"16px"}}>
                            <LoadingButton
                                width={200}
                                isLoading={isLoading || isRefetching}
                                disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                clickHandler={createLead}
                                color="primary" variant="contained">
                                <Typography>Send
                                Message</Typography>
                            </LoadingButton>
                        </Grid>


                </Grid>
            </Grid></Grid>)
}
export default ResumeContactUsSection