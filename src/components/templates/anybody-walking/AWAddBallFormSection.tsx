import React, {FunctionComponent, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    Hidden,
    Radio,
    RadioGroup,
    Switch,
    Typography,
    useTheme
} from "@mui/material";
import {BallFormComboType, fromFormToSanity} from "./LegacyBallUtils";
import {useNavigate} from "react-router-dom";
import {SanityLocation} from "./ballroomTypes";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import ImageUtils from "./imageUtils";
import BallTypeEnum, {BallTypeTitleEnum} from "./enums/BallType.enum";
import BallSourceEnum, {BallSourceTitleEnum} from "./enums/BallSource.enum";
import {enumCreateSelectOptions} from "./HTMLUtils";
import {Add} from "@mui/icons-material";
import GooglePlacesAutoComplete from "./ball-form-steps/GooglePlacesAutoComplete";
import {RoutesEnum} from "./enums/Routes.enum";
import {useParams} from "react-router";
import StyledTextField from "./styled-text-field/StyledTextField";

export const useStyles = makeStyles(() => ({
    root: {
    },
}))

interface IProps {
    sectionData?: any
    ball?: BallFormComboType;
}
//
// type BallFormType = {
// };

const initialState:
    {
        ball: BallFormComboType,
        fileUploaded?: any,
        isShowOldPreview: boolean,
        fileUploadedPreview?: any,
        isLoading: boolean,
        submitted: boolean,
    } =
    {
        ball: {
            notifyOnApproval: false,
            notifyName: '',
            notifyEmail: '',
            ballTitle: '',
            ballType: '',
            host: '',
            functionStartDate: '',
            startDate: '',
            startTime: '',
            endTime: '',
            functionEndDate: '',
            description: '',
            grandPrize: '',
            miniGrandPrize: '',
            categories: [
                {
                    catType: '',
                    catName: '',
                    catPrize: '',
                    catDescription: '',
                    versus: false
                }
            ],
            location: {
                locationName: '',
                street1: '',
                street2: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                url: ''
            },
            region: '',
            website: '',
            source: '',
            flyer: undefined,
            approval: false,
            uid: ''
        },
        fileUploaded: null,
        isShowOldPreview: true,
        isLoading: false,
        submitted: false,
        fileUploadedPreview: null
    }

const AWAddBallFormSection: FunctionComponent<IProps> = (props:IProps) => {
    // const classes = useStyles()

    // state = props.ball ? {...initialState, ball: {...props.ball}} : initialState

    React.useEffect(() => {
    if(props.ball)    {
        // setState((state)=>{
        //     return {...state,...initialState, ball: {...props.ball}}
        // })
    }
        }, [props.ball])

const [state, setState] = React.useState(initialState)
    //@ts-ignore
    const [oldPreviewURL, setOldPreviewURL] = React.useState(null)
    //@ts-ignore
    const [passedBallRef, setPassedBallRef] = React.useState(undefined)

//     componentWillUnmount(): void {
//         if (passedBallRef) {
//         passedBallRef.off('value')
//     }
// }

    const convertToSlug = (ballTitle: string) => {
        return ballTitle
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
    }
    const navigate = useNavigate()

    const sanityContext = useContext(SanityContext)

    const addBall = (ball: BallFormComboType) => {
        setState((state) => ({...state, isLoading: true}))

        if (ballId) {
            console.log('updating ball', ballId, ball)
        } else {
            console.log('adding ball', ball)
        }

        const {fileUploaded} = state

        const flyerImgFile = fileUploaded?.files[0]

        const slug = {_type: 'slug', current: convertToSlug(state.ball.ballTitle??"")}
        // if (context.authentication?.awUserDetails?._id && context.authentication.awUserDetails._id !== '') {
        //     // const userId = context.authentication?.awUserDetails?._id
        //     //
        //     // const userRef: SanityRef = {_ref: userId, _type: 'reference'}
        //
        //     sanityContext.addBall(fromFormToSanity({
        //         ...state.ball,
        //         // createdBy: userRef,
        //         slug: slug
        //     }), flyerImgFile).then(() => {
        //         setState((state) => ({...state, isLoading: false, submitted: true}))
        //
        //         // thisHistory.push(RoutesEnum.HOME)
        //     })
        // } else {
            sanityContext.addBall(fromFormToSanity({...state.ball, slug}), flyerImgFile).then(() => {
                setState((state) => ({...state, isLoading: false, submitted: true}))
                // thisHistory.push(RoutesEnum.HOME)
            })
        // }
    }

    const updateAddress = (address: SanityLocation) => {
        const newLocation = {
            locationName: address.locationName,
            street1: address.street1,
            street2: address.street2,
            city: address.city,
            state: address.state,
            zip: address.zip,
            country: address.country,
            url: address.url
        }

        setState(state => ({
            ...state,
            ball: {
                ...state.ball,
                location: newLocation
            }
        }))
    }

    const updateBallFormParams = (event:any) => {
        // event.persist()

        if (event.target.name.includes('.')) {
            const [objectName, propertyName] = event.target.name.split('.')
            console.log(
                'updateballformparams',
                objectName,
                propertyName,
                event.target.value
            )

            setState(state => ({
                ...state,
                ball: {
                    ...state.ball,
                    [objectName]: {
            // @ts-ignore
                        ...state.ball[objectName],
                        [propertyName]: event.target.value
                    }
                }
            }))
        } else {
            //@ts-ignore
            let flyerExtension = ''
            let flyerURL = ''
            if (event.target.name === 'flyer') {
                state.isShowOldPreview = !event.target.files[0]

                const newFile =
                    event.target.files && event.target.files[0]
                        ? event.target.files[0]
                        : null

                flyerExtension = ImageUtils.extractImageExtensionFromFile(newFile)

                if (event.target.files.length === 0) {
                    flyerURL = oldPreviewURL ??""
                    const newState = {
                        ...state,
                        isShowOldPreview: true,
                        ball: {
                            ...state.ball,
                            flyer: {
                                asset: {
                                    url: flyerURL
                                }
                            }
                        }
                    }

                    setState((state) => ({
                        ...state,
                        ...newState
                    }))
                } else {
                    const fileReader = new FileReader()

                    fileReader.readAsDataURL(event.target.files[0])

                    fileReader.addEventListener('load', function (event) {
                        const newState = {
                            ...state,
                            isShowOldPreview: false,
                            ball: {
                                ...state.ball,
                                flyer: {
                                    asset: {
                                        url: event.target?.result?.toString()
                                    }
                                }
                            }
                        }

                        setState(state => ({
                            ...state,
                            ...newState
                        }))
                    })


                }
            }
                // else if (
                //   event.target.name === 'fileUploaded' ||
                //   event.target.name === 'isShowOldPreview'
                // ) {
                //   const newValue = {[event.target.name]: event.target.value}
                //
                //   setState(state => ({
                //     ...state,
                //     ...newValue
                //   }))
            // }
            else if (
                event.target.name === 'notifyOnApproval'
            ) {

                const newValue = {[event.target.name]: event.target.checked}
                setState(state => ({
                    ...state,
                    ball: {
                        ...state.ball,
                        ...newValue
                    }
                }))
            } else {
                const newValue = {[event.target.name]: event.target.value}

                setState((state) => ({
                    ...state,
                    ball: {
                        ...state.ball,
                        ...newValue
                    }
                }))
            }
        }
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.persist()
    //     event.preventDefault()
    //
    //     setState(state => ({
    //         ...state,
    //         ball: {
    //             ...state.ball,
    //             approval: event.target.checked
    //         }
    //     }))
    // }

    const processBallType=(ballType: String) =>{
        let ballTypeEnumValue

        switch (ballType) {
            case 'BALL':
            case '':
                ballTypeEnumValue = BallTypeEnum.BALL
                break
            case 'MINI_BALL':
                ballTypeEnumValue = BallTypeEnum.MINI_BALL
                break
            case 'MINI_BALL_DELUXE':
                ballTypeEnumValue = BallTypeEnum.MINI_BALL_DELUXE
                break
            case 'KIKI_BALL':
                ballTypeEnumValue = BallTypeEnum.KIKI_BALL
                break
            default:
                ballTypeEnumValue = BallTypeEnum.NONE
        }

        return ballTypeEnumValue
    }

    const processBallSource = (ballSource: String)=> {
        let ballSourceEnumValue

        switch (ballSource) {
            case 'Spectator':
            case 'SPECTATOR':
                ballSourceEnumValue = BallSourceEnum.SPECTATOR
                break
            case 'Promoter':
            case 'PROMOTER':
                ballSourceEnumValue = BallSourceEnum.PROMOTER
                break
            default:
                ballSourceEnumValue = BallSourceEnum.SPECTATOR
        }

        return ballSourceEnumValue
    }

    // const processRegion = (region: String) => {
    //     let regionEnumValue
    //     switch (region) {
    //         case 'Abroad':
    //             regionEnumValue = RegionEnum.ABROAD
    //             break
    //         case 'East Coast, US':
    //         case 'Eastern':
    //         case 'North Eastern':
    //             regionEnumValue = RegionEnum.EAST_COAST
    //             break
    //         case 'Western':
    //         case 'West Coast, US':
    //             regionEnumValue = RegionEnum.WEST_COAST
    //             break
    //         case 'The South, US':
    //             regionEnumValue = RegionEnum.THE_SOUTH
    //             break
    //         case 'The Midwest, US':
    //             regionEnumValue = RegionEnum.THE_MIDWEST
    //             break
    //         case 'All Regions':
    //         default:
    //             regionEnumValue = RegionEnum.NONE
    //     }
    //
    //     return regionEnumValue
    // }

    const addCategory = () => {
        if (!state.ball?.categories || state.ball?.categories === '') {
            state.ball.categories = []
        }

        const newCategories = state.ball.categories.concat(
            [{
                catName: '',
                catDescription: '',
                catType: '',
                catPrize: ''
            }])


        setState(state => ({
            ...state,
            ball: {
                ...state.ball,
                categories: newCategories
            }
        }))
    }

    /** for updates from child CategoryComponent * */
    // const updateCategory = (update: any, index: string | number) => {
    //     if (state.ball) {
    //         state.ball.categories[index] = update
    //     }
    // }

    const theme = useTheme()
    const urlParams = useParams()

    const [ballId, setBallId] = React.useState<string|undefined>(undefined)
    React.useEffect(() => {
        if (urlParams.ballId) {
            // console.log("Page Mux reading URL Params", urlParams)
            setBallId(urlParams.ballId)
            // pageContext.fetchDocument && pageContext.fetchDocument(urlParams.documentType, urlParams.documentSlug)
        }
    }, [])

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container item xs={12} md={10} justifyContent='center'>
                <Typography variant='h4' color='textSecondary'>Add Ball</Typography>
            </Grid>
            <form noValidate autoComplete='off'>
                <Grid container spacing={3}>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            label='Ball Title'
                            onChange={updateBallFormParams}
                            name='ballTitle'
                            type='text'
                            value={state.ball.ballTitle || ''}
                            inputProps={{'data-testid': 'ball-title-input'}}
                        />{' '}
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>

                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <Grid item>
                            Do you want to be notified when this ball is Approved?
                            <Switch
                                checked={state.ball.notifyOnApproval ?? false}
                                onChange={updateBallFormParams}
                                name='notifyOnApproval'
                                color='primary'
                                type='checkbox'
                                inputProps={{'aria-label': 'notifyOnApproval'}}
                                data-testid='notifyOnApproval-switch-input'
                            />
                        </Grid>
                        {state.ball.notifyOnApproval && <Grid
                            item
                            container
                            style={{paddingLeft: theme.spacing(4)}}
                        >
                            <StyledTextField
                                required
                                fullWidth
                                type='text'
                                label='Notify Name'
                                onChange={updateBallFormParams}
                                name='notifyName'
                                value={state.ball?.notifyName || ''}
                                inputProps={{'data-testid': 'notifyName-input'}}
                            />{' '}
                        </Grid>}
                        {state.ball.notifyOnApproval && <Grid
                            container
                            item
                            style={{paddingLeft: theme.spacing(4)}}
                        >
                            <StyledTextField
                                required
                                fullWidth
                                label='Notify Email'
                                onChange={updateBallFormParams}
                                name='notifyEmail'
                                value={state.ball?.notifyEmail || ''}
                                inputProps={{'data-testid': 'notifyEmail-input'}}
                            />{' '}
                        </Grid>}


                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>

                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            select
                            data-testid='ball-type-select-input-group'
                            SelectProps={{
                                native: true
                            }}
                            inputProps={{'data-testid': 'ball-type-select-input'}}
                            label='Ball Type'
                            onChange={updateBallFormParams}
                            name='ballType'
                            value={processBallType(state.ball?.ballType || '')}
                        >
                            {enumCreateSelectOptions(
                                BallTypeEnum,
                                BallTypeTitleEnum
                            ).map(option => (
                                <option key={option.value} value={option.value} data-testid={`ballType-${option.value}`}>
                                    {option.label}
                                </option>
                            ))}
                        </StyledTextField>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            label='Ball Organizer(s)'
                            onChange={updateBallFormParams}
                            name='host'
                            type='text'
                            value={state.ball?.host || ''}
                            inputProps={{'data-testid': 'ball-host-input'}}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>

                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    {state.ball && <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            label='Date of Ball'
                            type='date'
                            InputLabelProps={{
                                shrink: true
                            }}
                            data-testid='ball-start-date'
                            inputProps={{'data-testid': 'ball-start-date-input', type: 'date'}}
                            onChange={updateBallFormParams}
                            name='startDate'
                            value={state.ball?.startDate}
                        />
                        <StyledTextField
                            required
                            fullWidth
                            label='Start Time'
                            type='time'
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{'data-testid': 'ball-start-time-input', type: 'time'}}
                            onChange={updateBallFormParams}
                            name='startTime'
                            value={state.ball?.startTime}
                        />
                    </Grid>}
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            fullWidth
                            label='End Time'
                            type='time'
                            name='endTime'
                            onChange={updateBallFormParams}
                            value={state.ball?.endTime}
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                'data-testid': 'ball-end-time-input',
                                step: 300 // 5 min
                            }}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            label='Description'
                            multiline
                            rows='4'
                            onChange={updateBallFormParams}
                            name='description'
                            value={state.ball?.description || ''}
                            inputProps={{'data-testid': 'ball-description-input'}}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <Typography color='textSecondary'>Categories</Typography>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        {state.ball?.categories &&
                            state.ball?.categories.length > 0 &&
                            state.ball?.categories.map((_category: any, index: number) => {
                                return (
                                    <div key={`categoryName-${index}`}>
                                        {/*<CategoryComponent*/}
                                        {/*    key={index}*/}
                                        {/*    category={category}*/}
                                        {/*    onCategoryChange={update =>*/}
                                        {/*        updateCategory(update, index)*/}
                                        {/*    }*/}
                                        {/*/>*/}

                                        {index < state.ball?.categories.length && (
                                            <Divider/>
                                        )}
                                    </div>
                                )
                            })}
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={addCategory}
                            style={{width: '180px'}}
                            data-testid='add-category-button'
                            // className={styles.addCategoryButton}
                        >
                            <Add/> <Typography display='inline'>Add a Category</Typography>
                        </Button>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                        // className={styles.fullWidth}
                    >
                        <GooglePlacesAutoComplete setAddress={updateAddress}/>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <StyledTextField
                            required
                            fullWidth
                            label='Website/URL'
                            helperText='Add associated website or URL (Facebook, etc.)'
                            onChange={updateBallFormParams}
                            name='website'
                            value={state.ball?.website || ''}
                            inputProps={{'data-testid': 'ball-website-input'}}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <FormLabel component='legend'>Who are you?</FormLabel>
                        <FormHelperText>Please Choose One.</FormHelperText>
                        <RadioGroup
                            aria-label='ballSource'
                            data-testid='ball-source-radio-group'
                            name='source'
                            onChange={updateBallFormParams}
                            value={processBallSource(state.ball?.source??"")}
                        >
                            {enumCreateSelectOptions(
                                BallSourceEnum,
                                BallSourceTitleEnum
                            ).map(source => (
                                <FormControlLabel
                                    key={source.value}
                                    value={source.value || ''}
                                    control={<Radio
                                        data-testid={`source-${source.value}`}
                                    />}
                                    label={source.label}
                                />
                            ))}
                        </RadioGroup>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>

                    <Grid
                        container
                        item
                        xs={ballId ? 6 : 10}
                    >
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <FormLabel component='legend'>Ball Flyer</FormLabel>
                                    </Grid>
                                    <Grid item>
                                        <input
                                            ref={ref => {
                                                state.fileUploaded = ref
                                                // setState(state => ({ ...state, fileUploaded: ref}))
                                            }}
                                            onChange={updateBallFormParams}
                                            type='file'
                                            name='flyer'
                                            data-testid='flyer-file-input'
                                            accept='image/png, image/jpeg'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {(state.ball?.flyer?.asset?.url?.length??-1) > 0 && (
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <img
                                        data-testid='flyer-image-preview'
                                        alt='Flyer for the Event'
                                        src={state.fileUploadedPreview || state.ball?.flyer?.asset?.url}
                                        width='100%'
                                    />
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item lg={1} xl={1}/>
                    </Hidden>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={10}
                        xl={10}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            style={{width: '90px'}}
                            disabled={
                                state.ball.ballTitle === '' ||
                                state.ball.description === '' ||
                                state.ball.location?.street1 === '' ||
                                state.ball.host === '' ||
                                state.ball.website === ''
                            }
                            data-testid='add-ball-button'
                            onClick={() => addBall(state.ball)}>
                            {!state.isLoading &&
                                <Typography variant='button' noWrap>Submit</Typography>}
                            {state.isLoading &&
                                <Grid container style={{width: '55px', height: '20px'}} justifyContent='center'>
                                    <CircularProgress style={{color: 'whitesmoke', width: '20px', height: '20px'}}/>
                                </Grid>}
                        </Button>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    </Hidden>
                </Grid>
            </form>

            <Dialog
                open={state.submitted}
                onClose={() => {
                    setState(state => ({...state, submitted: false}))
                }}
            >
                <DialogTitle>{'Your Ball Has been Submitted'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The ball details have been submitted. We thank you for the information and will approve it as soon as
                        possible.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            setState((state) => ({
                                ...initialState,
                                ...state
                            }))
                        }}>
                        Add Another Ball
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            navigate(RoutesEnum.HOME)
                        }}>
                        Home
                    </Button>
                </DialogActions>
            </Dialog>


        </Grid>
    )
}

export default AWAddBallFormSection