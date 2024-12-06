import {FunctionComponent, useCallback, useContext, useReducer, useState} from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {RoutesEnum} from "./enums/Routes.enum";
import {AWBallSectionType, SanityHouse} from "./ballroomTypes";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import StyledTextField from "./styled-text-field/StyledTextField";
import Grid from "@mui/material/Grid2";
import LoadingButton from "../../loading-button/LoadingButton";

type NewHouseFormState = {
    newHouseName: string;
    firstName: string;
    lastName: string;
    email: string;
    houseFather: string
    houseFatherContact: string
    houseFatherStatus: string
    houseMother: string
    houseMotherContact: string
    houseMotherStatus: string
};

const initialState: NewHouseFormState = {
    newHouseName: '',
    firstName: '',
    lastName: '',
    email: '',
    houseFather: '',
    houseFatherContact: '',
    houseFatherStatus: '',
    houseMother: '',
    houseMotherContact: '',
    houseMotherStatus: ''
};

type Action =
    | { type: 'updateField'; field: keyof NewHouseFormState; value: string }
    | { type: 'resetForm' };

const formReducer = (state: NewHouseFormState, action: Action): NewHouseFormState => {
    switch (action.type) {
        case 'updateField':
            return {...state, [action.field]: action.value};
        case 'resetForm':
            return initialState;
        default:
            return state;
    }
};

interface NewHouseFormProps {
    sectionData?: AWBallSectionType
}

const AWNewHouseFormSection: FunctionComponent<NewHouseFormProps> = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [createHouseResponse, setCreateHouseResponse] = useState<any>(undefined)
    const navigate = useNavigate()
    const sanityContext = useContext(SanityContext)
    const [isStatusDialogOpen, setIsStatusDialogOpen] = useState<boolean>(false)

    const updateField = useCallback((field: keyof NewHouseFormState) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            dispatch({type: 'updateField', field, value: event.target.value});
        }, []);

    const addHouse = useCallback(async () => {
        setIsLoading(true)
        try {
            let sanityHouse: SanityHouse = {
                submittedByEmail: state.email,
                firstname: state.firstName,
                lastname: state.lastName,
                houseName: state.newHouseName,
                houseFather: state.houseFather,
                houseFatherStatus: state.houseFatherStatus,
                houseFatherContact: state.houseFatherContact,
                houseMother: state.houseMother,
                houseMotherStatus: state.houseMotherStatus,
                houseMotherContact: state.houseMotherContact,
            }

            const response = sanityContext.createHouse && await sanityContext.createHouse(sanityHouse)

            setCreateHouseResponse(response)
        } catch (e) {
            setCreateHouseResponse(e)
        } finally {
            setIsLoading(false);
            setIsStatusDialogOpen(true)
        }
    }, [state, sanityContext, navigate]);

    const renderStatusOptions = () =>
        ['STAR', 'STATEMENT', 'LEGEND', 'ICON'].map((status) => (
            <MenuItem key={status} value={status}>
                <Typography color="textSecondary"
                            style={{textTransform: 'capitalize'}}>{status.toLowerCase()}</Typography>
            </MenuItem>
        ));

    const handleResubmitNewHouseRequest = () => {
        setIsStatusDialogOpen(false)
    };

    return (
        <Grid size={{xs: 12}} container alignItems='center' spacing={3}
              direction='column'
              width='100%'
              px={4}
              minHeight='700px'>
            <Grid container size={{xs: 12}} justifyContent='center'>
                <Typography variant='h4' color='textSecondary' align='center'>New House</Typography>
            </Grid>
            <Grid container size={{xs: 12}} width='100%'>
                <form noValidate autoComplete="off" style={{width: "100%"}}>
                    <Grid container spacing={3} size={{xs: 12}} direction='column' width='100%'>
                        <Grid container size={{xs: 12}}>
                            <StyledTextField
                                label="Official New House Name"
                                helperText="The official name of the house in the Ballroom Scene."
                                fullWidth
                                value={state.newHouseName}
                                onChange={updateField('newHouseName')}
                                name="newHouseName"
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <StyledTextField
                                label="Overall House Father Name"
                                helperText="The name of the House Father."
                                fullWidth
                                name="houseFather"
                                value={state.houseFather}
                                onChange={updateField('houseFather')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <StyledTextField
                                label="Overall House Father Contact"
                                helperText="Contact information for the House Father."
                                fullWidth
                                name="houseFatherContact"
                                value={state.houseFatherContact}
                                onChange={updateField('houseFatherContact')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <FormControl fullWidth>
                                <InputLabel id="father-status-select-label" style={{top: "-12px"}}>
                                    House Father Status</InputLabel>
                                <Select value={state.houseFatherStatus}
                                        onChange={(e) => dispatch({
                                            type: 'updateField',
                                            field: 'houseFatherStatus',
                                            value: e.target.value
                                        })}
                                        name="houseFatherStatus" id="house-father-status"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {renderStatusOptions()}
                                </Select>
                                <FormHelperText>Status of the House Father.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <StyledTextField
                                label="Overall House Mother Name"
                                helperText="The name of the House Mother."
                                fullWidth
                                name="houseMother"
                                value={state.houseMother}
                                onChange={updateField('houseMother')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <StyledTextField
                                label="Overall House Mother Contact"
                                helperText="Contact information for the House Mother."
                                fullWidth
                                name="houseMotherContact"
                                value={state.houseMotherContact}
                                onChange={updateField('houseMotherContact')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <FormControl fullWidth>
                                <InputLabel id="mother-status-select-label" style={{top: "-12px"}}>
                                    House Mother Status</InputLabel>
                                <Select value={state.houseMotherStatus}
                                        onChange={(e) => dispatch({
                                            type: 'updateField',
                                            field: 'houseMotherStatus',
                                            value: e.target.value
                                        })}
                                        name="houseMotherStatus"
                                        id="house-mother-status"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {renderStatusOptions()}
                                </Select>
                                <FormHelperText>Status of the House Mother.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid size={{sm: 12}} container>
                            <StyledTextField
                                fullWidth
                                label="First Name"
                                helperText="What is your first name?"
                                name="firstName"
                                value={state.firstName}
                                onChange={updateField('firstName')}
                            />
                        </Grid>

                        <Grid size={{sm: 12}} container>
                            <StyledTextField
                                fullWidth
                                label="Last Name"
                                helperText="What is your last name?"
                                name="lastName"
                                value={state.lastName}
                                onChange={updateField('lastName')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <StyledTextField
                                fullWidth
                                label="E-mail"
                                helperText="What is your email address?"
                                name="email"
                                value={state.email}
                                onChange={updateField('email')}
                            />
                        </Grid>
                        <Grid size={{xs: 12}} container alignItems='center' direction='column'>
                            <LoadingButton variant="contained"
                                           disabled={isLoading || createHouseResponse?.status === 200}
                                           color="primary"
                                           width={180}
                                           clickHandler={addHouse}
                                           isLoading={isLoading}
                            >
                                {createHouseResponse?.status === 200 ? "Thank-you!" : "Submit"}
                            </LoadingButton>
                            <Box minHeight='2em'>
                                {
                                    createHouseResponse?.status === 200 &&
                                    <Grid container><Typography color='success'> Success!</Typography></Grid>
                                }
                                {
                                    createHouseResponse?.status === 400 &&
                                    <Grid container><Typography color='error'> House Request Failed. Please try
                                        again!</Typography></Grid>
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Dialog
                maxWidth="xs"
                open={isStatusDialogOpen}
            >
                <DialogTitle>New House Submission Status</DialogTitle>
                <DialogContent dividers>
                    {
                        createHouseResponse?.status === 200 &&
                        <Typography color='success'>
                            Your new House submission was successful! Look for your submission to be verified on the
                            House
                            info page.
                        </Typography>
                    }
                    {
                        createHouseResponse?.status === 400 &&
                        <Typography color='error'>
                            Your new House submission was NOT successful! Please try your new house submission again.
                        </Typography>
                    }
                </DialogContent>
                <DialogActions>
                    {
                        createHouseResponse?.status === 400 &&
                        <Button variant='contained' onClick={handleResubmitNewHouseRequest} color='error'>
                            Resubmit
                        </Button>
                    }
                    {
                        createHouseResponse?.status === 200 &&
                        <Button href={RoutesEnum.HOME} variant='contained' color='success'>
                            Go to Home Page
                        </Button>
                    }
                    <Button href={"anybodywalking/" + RoutesEnum.HOUSE_INFO} variant='contained'>
                        Go To House Info Page
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default AWNewHouseFormSection