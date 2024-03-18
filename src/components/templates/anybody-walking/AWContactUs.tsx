import React, {FunctionComponent, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme, useTheme} from "@mui/material/styles";
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Link,
    Typography
} from "@mui/material";
import {CheckBoxesType, ContactUsFormState} from './ballroomTypes';
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import {RoutesEnum} from "./enums/Routes.enum";
import StyledTextField from "./styled-text-field/StyledTextField";
import LoadingButton from '../../loading-button/LoadingButton';

export const useStyles = makeStyles((awTheme: Theme) => ({
        root: {
            height: '100%',
            // background: 'linear-gradient(84deg, rgba(2,0,36,1) 0%, rgba(21,20,36,1) 52%, rgba(3,3,32,1) 100%)'
        },
        cssLabel: {
            // color: 'white'
        },
        cssOutlinedInput: {
            // borderColor: `${awTheme.palette.secondary.main}`
        },
        cssFocused: {},
        underline: {
            // borderBottom: '2px solid white',
            // '&:after': {
            //   // The MUI source seems to use this but it doesn't work
            //   borderBottom: '2px solid white'
            // }
        },
        notchedOutline: {
            borderWidth: '1px',
            // borderColor: `${awTheme.palette.secondary.main}`
        },
        checkboxContainer: {
            position: 'absolute',
            top: 0,
        },
        submitButton: {
            width: '120px',
            height: '40px',
            padding: awTheme.spacing(2, 4),
        },
        outlined: {
            '&:hover': {
                backgroundColor: '#FAFAFA',
                color: '#383838',
            },
            '&$disabled': {
                borderColor: '#FFA091',
                color: '#FFA091',
            },
        },
    }
))
interface IProps {
    contactUsPrefill?: ContactUsFormState & CheckBoxesType
    sectionData?: any
}


const AWContactUs: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()
    const theme = useTheme()
    const [contactUsFormState, setContactUsFormState] = React.useState<ContactUsFormState>({ ...(props.contactUsPrefill ? props.contactUsPrefill : {}) })
    const [loading, setLoading] = React.useState<boolean>(false)
    const [status, setStatus] = React.useState<boolean | undefined>(undefined)

    const [checkBoxes, setCheckBoxes] = React.useState<CheckBoxesType>(props.contactUsPrefill ? props.contactUsPrefill : {
        general: false,
        press: false,
        publicEvents: false,
        other: false,
        privateEvents: false,
        clickHere: false,
        iAgree: false,
    })

    const updateContactUsFormParams = (event: any) => {
        event.persist()

        setContactUsFormState(state => ({ ...state, [event.target.name]: event.target.value }))
    }

    const updateCheckboxes = (event: any) => {
        event.persist()
        console.log('event', event.target.name, event.target.value)

        setCheckBoxes(state => ({ ...state, [event.target.name]: event.target.value === 'true' }))
    }
    const sanityContext = useContext(SanityContext)

    const createContactUs = () => {
        setLoading(true)
        const contactUs = { ...checkBoxes, ...contactUsFormState }

        sanityContext.createContactUs(contactUs).then(() => {
            setStatus(true)
            setLoading(false)
            // setTimeout(() =>{
            // history.push(RoutesEnum.LANDING)
            // }, 1000)
        })
    }

    return (
        <Grid
            // className={classes.root}
            container
            direction="column"
            alignItems="center"
            item
            justifyContent="center"
            style={{ padding: theme.spacing(14, 2) }}
        >
            <Grid container item direction="column" spacing={5}>

                <Grid container item>
                    <Typography variant="h3" color="textSecondary">Contact Us</Typography>
                </Grid>
                <Grid container item direction="column" spacing={3} md={8}>
                    <Grid item>
                        <Typography variant="body1" color="textSecondary">Do you have an event that
                            you need help producting? Drop us a line and we will begin to create a proposal catered to fit your
                            needs.</Typography>
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            name="firstName"
                            label="First Name"
                            value={contactUsFormState.firstName ?? ""}
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    underline: classes.underline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            name="lastName"
                            label="Last Name"
                            value={contactUsFormState.lastName ?? ""}
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    underline: classes.underline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            value={contactUsFormState.companyName ?? ""}
                            label="Company Name/House Name"
                            name="companyName"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    underline: classes.underline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            value={contactUsFormState.email ?? ""}
                            label="Email"
                            name="email"
                            color="primary"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    underline: classes.underline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            value={contactUsFormState.phone ?? ""}
                            label="Phone"
                            name="phone"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    underline: classes.underline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid container item direction="column">
                        <FormControl component="fieldset">
                            <FormLabel component="legend"><Typography color="textSecondary">Interests:</Typography></FormLabel>
                            <FormGroup style={{ marginLeft: '24px' }}>
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="general"
                                        checked={checkBoxes.general}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.general}
                                    />}
                                    label={<Typography color="textSecondary">General</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="press"
                                        checked={checkBoxes.press}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.press}
                                    />}
                                    label={<Typography color="textSecondary">Press/Media</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="publicEvents"
                                        checked={checkBoxes.publicEvents}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.publicEvents}
                                    />}
                                    label={<Typography color="textSecondary">Public Events</Typography>}

                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="privateEvents"
                                        checked={checkBoxes.privateEvents}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.privateEvents}
                                    />}
                                    label={<Typography color="textSecondary">Private Events</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="other"
                                        checked={checkBoxes.other}
                                        value={!checkBoxes.other}
                                        onChange={updateCheckboxes}
                                    />}
                                    label={<Typography color="textSecondary">Other</Typography>}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <StyledTextField
                            fullWidth
                            rows={6}
                            multiline
                            variant="outlined"
                            color="primary"
                            value={contactUsFormState.comment ?? ""}
                            label="Comment"
                            name="comment"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid container item>
                        <FormControl component="fieldset" style={{ position: 'relative' }}>
                            <FormGroup>
                                <FormControlLabel
                                    style={{ paddingLeft: theme.spacing(4) }}
                                    // classes={{root:classes.checkboxContainer}}
                                    control={<Checkbox
                                        color="primary"
                                        className={classes.checkboxContainer}
                                        name="clickHere"
                                        checked={checkBoxes.clickHere}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.clickHere}
                                    />}
                                    label={
                                        <Box
                                            style={{
                                                paddingLeft: theme.spacing(6),
                                                paddingTop: theme.spacing(.5),
                                            }}
                                        >
                                            <Typography variant="h6" style={{ display: 'inline', marginRight: "4px" }} color='textSecondary'>Click here</Typography>
                                            <Typography  style={{ display: 'inline' }} color='textSecondary'>to receive the
                                            latest news, special offers, early access to events, and other awesome updates.

                                            Anybody Walking is committed to protecting and respecting your privacy, and we’ll only use
                                            your personal information to administer your account and to provide the products and services you
                                            requested from us. From time to time, we would like to contact you about our products and
                                            services, as well as other content that may be of interest to you. If you consent to us contacting
                                            you for this purpose, please tick below to say how you would like us to contact you.
                                            </Typography>
                                        </Box>
                                    }
                                />
                                <FormControlLabel
                                    style={{ paddingLeft: theme.spacing(4), position: 'relative' }}
                                    // classes={{root:classes.checkboxContainer}}
                                    control={<Checkbox
                                        color="primary"
                                        className={classes.checkboxContainer}
                                        name="iAgree"
                                        checked={checkBoxes.iAgree}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.iAgree}
                                    />}
                                    label={
                                        <Box
                                            color={theme.palette.text.secondary}
                                            style={{
                                                paddingLeft: theme.spacing(6),
                                                paddingTop: theme.spacing(.5),
                                            }}
                                        >
                                            <Typography variant="h6" style={{ display: 'inline' , marginRight:"4px"}} color='textSecondary'>I agree</Typography>
                                            <Typography style={{ display: 'inline' }} color='textSecondary'>to receive
                                            marketing communications from Anybody Walking.

                                            You can unsubscribe from these communications at any time. For more information on how to
                                            unsubscribe, our privacy practices, and how we are committed to protecting and respecting your
                                            privacy, please review our Privacy Policy.
                                            By clicking submit below, you consent to allow Anybody Walking to store and process the
                                            personal information submitted above to provide you the content requested.
                                            </Typography>
                                        </Box>
                                    }
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center" item>
                        {status === undefined && <LoadingButton isSlim={true}
                            clickHandler={createContactUs}
                            variant="outlined"
                            color="primary"
                            // classes={{ outlined: classes.outlined }}
                            disabled={loading || !contactUsFormState.email || contactUsFormState.email === ''}
                        >
                            Submit
                        </LoadingButton>}
                    </Grid>
                    <Grid container alignItems="center" item direction="column">
                        <Grid item>
                            {status === true && <Typography color='textSecondary'>Thanks for staying in touch.</Typography>}
                            {status === false && <Typography color='red'>Something went wrong. Please try again</Typography>}
                        </Grid>
                        <Grid item>
                            {status !== undefined && <Link href={RoutesEnum.LANDING}><Typography>Home</Typography></Link>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default AWContactUs