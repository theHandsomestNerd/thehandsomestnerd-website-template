import {FunctionComponent, useContext, useState} from 'react'
import {Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {RoutesEnum} from "./enums/Routes.enum";
import {AWBallSectionType, SanityHouse} from "./ballroomTypes";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import StyledTextField from "./styled-text-field/StyledTextField";
// import firebase from "firebase/compat";


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

interface IProps {
    sectionData?: AWBallSectionType
}

const AWNewHouseFormSection: FunctionComponent<IProps> = () => {
    const [state, setState] = useState<NewHouseFormState>(initialState)
    const navigate = useNavigate()
    const sanityContext = useContext(SanityContext)
    const addHouse = async () => {
        const sanityUserRef = sanityContext.getSanityDocumentRef ? await sanityContext.getSanityDocumentRef("user-id") : undefined

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

        if (sanityUserRef) {
            sanityHouse = {
                ...sanityHouse,
                // submittedByFirebaseUUID: sanityUserRef
            }
        }

        await sanityContext.createHouse(sanityHouse)
        navigate(RoutesEnum.HOME);

    };

    const updateNewHouseFormParams = (event: any) => {
        // console.log("this", event)
        if (event.persist) {
            event.persist()
        }

        setState(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }))
    };

    return (
        <Grid item container justifyContent='center' spacing={3}
              style={{minHeight: "700px", paddingTop: "128px", paddingLeft: "32px", paddingRight: "32px"}}>
            <Grid container item xs={12} md={10} justifyContent='center'>
                <Typography variant='h4' color='textSecondary'>New House</Typography>
            </Grid>
            <Grid container item xs={8}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="Official New House Name"
                                helperText="This should be the official name the house would like to be known by in the Ballroom Scene."
                                fullWidth
                                onChange={updateNewHouseFormParams}
                                name="newHouseName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="Overall House Father Name"
                                helperText="This should be the father of the House's name."
                                fullWidth
                                onChange={updateNewHouseFormParams}
                                name="houseFather"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="Overall House Father Contact"
                                helperText="This should be the contact information for the father of the House."
                                fullWidth
                                onChange={updateNewHouseFormParams}
                                name="houseFatherContact"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/*<StyledTextField*/}
                            {/*    label="Overall House Father Status"*/}
                            {/*    helperText="This should be the Ballroom status of the father of the House."*/}
                            {/*    fullWidth*/}
                            {/*    onChange={updateNewHouseFormParams}*/}
                            {/*    name="houseFatherStatus"*/}
                            {/*/>*/}
                            <FormControl fullWidth>
                                <InputLabel id="father-status-select-label" style={{top: "-12px"}}>
                                    House Father Status</InputLabel>
                                <Select onChange={updateNewHouseFormParams} defaultValue={''} id="house-father-status"
                                        name="houseFatherStatus">
                                    <MenuItem value={''}></MenuItem>
                                    <MenuItem value={'STAR'}><Typography
                                        color={'textSecondary'}>Star</Typography></MenuItem>
                                    <MenuItem value={'STATEMENT'}><Typography
                                        color={'textSecondary'}>Statement</Typography></MenuItem>
                                    <MenuItem value={'LEGEND'}><Typography
                                        color={'textSecondary'}>Legend</Typography></MenuItem>
                                    <MenuItem value={'ICON'}><Typography
                                        color={'textSecondary'}>Icon</Typography></MenuItem>
                                </Select>
                                <FormHelperText>This should be the Ballroom status of the father of the
                                    House.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="Overall House Mother Name"
                                helperText="This should be the mother of the House's name."
                                fullWidth
                                onChange={updateNewHouseFormParams}
                                name="houseMother"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="Overall House Mother Contact"
                                helperText="This should be the contact information for the mother of the House."
                                fullWidth
                                onChange={updateNewHouseFormParams}
                                name="houseMotherContact"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/*<StyledTextField*/}
                            {/*    label="Overall House Mother Status"*/}
                            {/*    helperText="This should be the Ballroom status of the mother of the House."*/}
                            {/*    fullWidth*/}
                            {/*    onChange={updateNewHouseFormParams}*/}
                            {/*    name="houseMotherStatus"*/}
                            {/*/>*/}
                            {/*    Dropdown goes here */}
                            <FormControl fullWidth>
                                <InputLabel id="mother-status-select-label" style={{top: "-12px"}}>House Mother
                                    Status</InputLabel>
                                <Select onChange={updateNewHouseFormParams} defaultValue={''} id="house-mother-status"
                                        name="houseMotherStatus">
                                    <MenuItem value={''}></MenuItem>
                                    <MenuItem value={'STAR'}><Typography
                                        color={'textSecondary'}>Star</Typography></MenuItem>
                                    <MenuItem value={'STATEMENT'}><Typography
                                        color={'textSecondary'}>Statement</Typography></MenuItem>
                                    <MenuItem value={'LEGEND'}><Typography
                                        color={'textSecondary'}>Legend</Typography></MenuItem>
                                    <MenuItem value={'ICON'}><Typography
                                        color={'textSecondary'}>Icon</Typography></MenuItem>
                                </Select>
                                <FormHelperText>This should be the Ballroom status of the mother of the
                                    House.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} container>
                            <StyledTextField
                                fullWidth
                                label="First Name"
                                helperText="What is your first name?"
                                onChange={updateNewHouseFormParams}
                                name="firstName"
                            />
                        </Grid>

                        <Grid item xs={6} container>
                            <StyledTextField
                                fullWidth
                                label="Last Name"
                                onChange={updateNewHouseFormParams}
                                helperText="What is your last name?"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                label="E-mail"
                                onChange={updateNewHouseFormParams}
                                helperText="Email to be contacted to verify this submission."
                                fullWidth
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12} container justifyContent='center'>
                            <Button variant="contained" color="primary" style={{width: "180px", marginTop: "18px"}}
                                    onClick={addHouse}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default AWNewHouseFormSection