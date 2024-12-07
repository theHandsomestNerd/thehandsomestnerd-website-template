import {FunctionComponent, useContext, useReducer, useState} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {useTheme} from "@mui/material/styles";
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Link, Typography} from "@mui/material";
import {AWContactUsSectionType, CheckBoxesType, ContactUsFormState} from './ballroomTypes';
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import {RoutesEnum} from "./enums/Routes.enum";
import StyledTextField from "./styled-text-field/StyledTextField";
import LoadingButton from '../../loading-button/LoadingButton';
import Grid from "@mui/material/Grid2";

export const useStyles = makeStyles(() => ({
        checkboxContainer: {
            position: 'absolute',
            top: -10,
        },
    }
))

interface ContactUsIProps {
    sectionData?: AWContactUsSectionType
}

// Define action types
type FormAction =
    | { type: 'UPDATE_FIELD', payload: { name: string, value: string } }
    | { type: 'UPDATE_CHECKBOX', payload: { name: string, checked: boolean } }
    | { type: 'RESET_FORM' };

// Initial state for form and checkboxes
const initialFormState: ContactUsFormState = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    comment: ''
};

const initialCheckBoxes: CheckBoxesType = {
    isUpdateConsent: false,
    isGeneral: false,
    isPress: false,
    isPublicEvents: false,
    isOther: false,
    isPrivateEvents: false,
    isClickHere: false,
    isIAgree: false,
};

// Reducer function for form state
const formReducer = (state: ContactUsFormState, action: FormAction): ContactUsFormState => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {...state, [action.payload.name]: action.payload.value};
        case 'RESET_FORM':
            return initialFormState;
        default:
            return state;
    }
};

// Reducer function for checkboxes
const checkboxReducer = (state: CheckBoxesType, action: FormAction): CheckBoxesType => {
    switch (action.type) {
        case 'UPDATE_CHECKBOX':
            return {...state, [action.payload.name]: action.payload.checked};
        default:
            return state;
    }
};

const AWContactUs: FunctionComponent<ContactUsIProps> = (props: ContactUsIProps) => {
    const classes = useStyles()
    const theme = useTheme()
    const sanityContext = useContext(SanityContext);

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [createContactUsResponse, setCreateContactUsResponse] = useState<any>(undefined)

    // useReducers
    const [contactUsFormState, dispatchForm] = useReducer(formReducer, props.sectionData || initialFormState);
    const [checkBoxes, dispatchCheckboxes] = useReducer(checkboxReducer, props.sectionData || initialCheckBoxes);

    // Event handlers
    const updateContactUsFormParams = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        dispatchForm({type: 'UPDATE_FIELD', payload: {name, value}});
    };

    const updateCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        dispatchCheckboxes({type: 'UPDATE_CHECKBOX', payload: {name, checked}});
    };

    const createContactUs = async () => {
        setIsLoading(true)
        setCreateContactUsResponse(undefined)

        const contactUsData = {...checkBoxes, ...contactUsFormState};
        try {
            const resp = await sanityContext.createContactUs(contactUsData)
            setCreateContactUsResponse(resp)
        } catch (e) {
            dispatchForm({type: 'RESET_FORM'});
            setCreateContactUsResponse({status: 400})
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{padding: theme.spacing(0, 2)}}
        >
            <Grid container direction="column" spacing={5}>

                <Grid container>
                    <Typography variant="h3" color="textSecondary">Contact Us</Typography>
                </Grid>
                <Grid container direction="column" spacing={3} size={{md: 8}}>
                    <Grid>
                        <Typography variant="body1" color="textSecondary">Do you have an event that
                            you need help producting? Drop us a line and we will begin to create a proposal catered to
                            fit your
                            needs.</Typography>
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            name="firstName"
                            label="First Name"
                            value={contactUsFormState.firstName ?? ""}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            name="lastName"
                            label="Last Name"
                            value={contactUsFormState.lastName ?? ""}
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            value={contactUsFormState.companyName ?? ""}
                            label="Company Name/House Name"
                            name="companyName"
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            value={contactUsFormState.email ?? ""}
                            label="Email"
                            name="email"
                            color="primary"
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            color="primary"
                            value={contactUsFormState.phone ?? ""}
                            label="Phone"
                            name="phone"
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid container direction="column">
                        <FormControl component="fieldset">
                            <FormLabel component="legend"><Typography
                                color="textSecondary">Interests:</Typography></FormLabel>
                            <FormGroup style={{marginLeft: '24px'}}>
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="general"
                                        checked={checkBoxes.isGeneral}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.isGeneral}
                                    />}
                                    label={<Typography color="textSecondary">General</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="press"
                                        checked={checkBoxes.isPress}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.isPress}
                                    />}
                                    label={<Typography color="textSecondary">Press/Media</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="publicEvents"
                                        checked={checkBoxes.isPublicEvents}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.isPublicEvents}
                                    />}
                                    label={<Typography color="textSecondary">Public Events</Typography>}

                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="privateEvents"
                                        checked={checkBoxes.isPrivateEvents}
                                        onChange={updateCheckboxes}
                                        value={!checkBoxes.isPrivateEvents}
                                    />}
                                    label={<Typography color="textSecondary">Private Events</Typography>}
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        color="primary"
                                        name="other"
                                        checked={checkBoxes.isOther}
                                        value={!checkBoxes.isOther}
                                        onChange={updateCheckboxes}
                                    />}
                                    label={<Typography color="textSecondary">Other</Typography>}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid>
                        <StyledTextField
                            fullWidth
                            rows={6}
                            multiline
                            variant="outlined"
                            color="primary"
                            value={contactUsFormState.comment ?? ""}
                            label="Comment"
                            name="comment"
                            onChange={updateContactUsFormParams}
                        />
                    </Grid>
                    <Grid container>
                        <FormControl component="fieldset" style={{position: 'relative'}}>
                            <FormGroup>
                                <Grid container spacing={1}>
                                    <Grid>
                                        <FormControlLabel
                                            style={{paddingLeft: theme.spacing(4), position: 'relative'}}
                                            control={<Checkbox
                                                color="primary"
                                                className={classes.checkboxContainer}
                                                name="clickHere"
                                                checked={checkBoxes.isClickHere}
                                                onChange={updateCheckboxes}
                                                value={!checkBoxes.isClickHere}
                                            />}
                                            label={
                                                <Box
                                                    style={{
                                                        paddingLeft: theme.spacing(6),
                                                    }}
                                                >
                                                    <Typography variant="h6"
                                                                style={{display: 'inline', marginRight: "4px"}}
                                                                color='textSecondary'>Click here</Typography>
                                                    <Typography style={{display: 'inline'}} color='textSecondary'>to
                                                        receive the
                                                        latest news, special offers, early access to events, and other
                                                        awesome
                                                        updates.

                                                        Anybody Walking is committed to protecting and respecting your
                                                        privacy,
                                                        and we’ll only use
                                                        your personal information to administer your account and to
                                                        provide the
                                                        products and services you
                                                        requested from us. From time to time, we would like to contact
                                                        you about
                                                        our products and
                                                        services, as well as other content that may be of interest to
                                                        you. If
                                                        you consent to us contacting
                                                        you for this purpose, please tick below to say how you would
                                                        like us to
                                                        contact you.
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            style={{paddingLeft: theme.spacing(4), position: 'relative'}}
                                            control={<Checkbox
                                                color="primary"
                                                className={classes.checkboxContainer}
                                                name="iAgree"
                                                checked={checkBoxes.isIAgree}
                                                onChange={updateCheckboxes}
                                                value={!checkBoxes.isIAgree}
                                            />}
                                            label={
                                                <Box
                                                    color={theme.palette.text.secondary}
                                                    style={{
                                                        paddingLeft: theme.spacing(6),
                                                    }}
                                                >
                                                    <Typography variant="h6"
                                                                style={{display: 'inline', marginRight: "4px"}}
                                                                color='textSecondary'>I agree</Typography>
                                                    <Typography style={{display: 'inline'}} color='textSecondary'>to
                                                        receive
                                                        marketing communications from Anybody Walking.

                                                        You can unsubscribe from these communications at any time. For
                                                        more
                                                        information on how to
                                                        unsubscribe, our privacy practices, and how we are committed to
                                                        protecting and respecting your
                                                        privacy, please review our Privacy Policy.
                                                        By clicking submit below, you consent to allow Anybody Walking
                                                        to
                                                        store
                                                        and process the
                                                        personal information submitted above to provide you the content
                                                        requested.
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center">
                        {createContactUsResponse?.status !== 200 &&
                            <LoadingButton
                                isLoading={isLoading}
                                width={180}
                                isSlim={true}
                                clickHandler={createContactUs}
                                variant="contained"
                                color="primary"
                                disabled={isLoading || !contactUsFormState.email || contactUsFormState.email === ''}
                            >
                                Submit
                            </LoadingButton>}
                    </Grid>
                    <Grid container alignItems="center" direction="column">
                        {createContactUsResponse?.status === 200 &&
                            <Typography color='success'>Thanks for staying in touch.</Typography>}
                        {createContactUsResponse?.status === 400 &&
                            <Typography color='error'>Something went wrong. Please try again</Typography>}
                        {createContactUsResponse !== undefined && <Link href={RoutesEnum.LANDING}>Home</Link>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default AWContactUs