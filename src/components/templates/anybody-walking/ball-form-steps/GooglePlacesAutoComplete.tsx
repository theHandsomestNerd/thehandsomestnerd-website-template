import React, {FunctionComponent} from 'react'
import {FormControlLabel, FormGroup, Grid, Typography, useTheme} from '@mui/material'
import {LocationOn} from '@mui/icons-material'
import {SanityLocation} from '../ballroomTypes'
import {GoogleApiWrapper} from 'google-maps-react'
import PlacesAutocomplete from 'react-places-autocomplete'
import BallMapComponent from './BallMapComponent'
import StyledTextField from "../styled-text-field/StyledTextField";
import {v4 as uuidv4} from 'uuid'


export type GooglePlacesAutoCompletePropsType = {
    google: { maps: any },
    setAddress(address: SanityLocation): void,
    mapHeight?: number,
    locationValue?: SanityLocation
    apiKey?: string
}

const locationObjectToString = (sourceLocation?: SanityLocation) => {
    let result = ''
    if (!!sourceLocation && !!sourceLocation.locationName) {
        result += sourceLocation.locationName
    }

    return result
}

export type GooglePlacesAddressComponentType = { long_name: string, short_name: string, types: string[] }

const GooglePlacesAutoComplete: FunctionComponent<GooglePlacesAutoCompletePropsType> = (props: GooglePlacesAutoCompletePropsType) => {
    const [address, setAddress] = React.useState<any>('')
    const [placeId, setPlaceId] = React.useState<any>('')
    const [googlePlace, setGooglePlace] = React.useState<google.maps.places.PlaceResult|null>(null)

    const handleChange: ((value: string) => void) | undefined = newAddress => {
        setAddress(newAddress)
    }

    const handleSelect:((address: string, placeID: string) => void) | undefined = (newAddress:string, selectedPlaceId:string) => {
        // const autocompleteSessionId = suggestion
        // console.log('autocomplete suggestion selected', suggestion)
        setPlaceId(selectedPlaceId)
        setAddress(newAddress)
    }

    const fetchPlaceDetails = () => {
        const us = new props.google.maps.LatLng(39.8283, 98.5795)

        const map = new props.google.maps.Map(
            document.getElementById('map'), { center: us, zoom: 15 })
        const service = new props.google.maps.places.PlacesService(map)
        service.getDetails({
            placeId,
            sessionToken: new props.google.maps.places.AutocompleteSessionToken(),
            fields: ['address_components', 'name', 'url'],
        }, function (place:google.maps.places.PlaceResult|null) {
            setGooglePlace(place)
        })
    }

    const getAddressComponentFromGooglePlace = (componentName: string, isShort?: boolean) => {
        const requestedComponent =
            googlePlace?.address_components?.find((addressComponent) => !!addressComponent.types
                .find((addressComponentType: string) => addressComponentType === componentName))

        if (!requestedComponent) {
            console.log('you requested something not in places address _coponent', componentName, googlePlace?.address_components)
            return ''
        }
        return isShort ? requestedComponent.short_name : requestedComponent.long_name
    }

    React.useEffect(() => {
        console.log('constructing location from place', googlePlace)
        if (googlePlace) {

            const sanityLocation: SanityLocation = {
                locationName: googlePlace.name,
                url: googlePlace.url,
                street1: `${getAddressComponentFromGooglePlace('street_number')} ${
                    getAddressComponentFromGooglePlace('route')}`,
                city: getAddressComponentFromGooglePlace('locality'),
                state: getAddressComponentFromGooglePlace('administrative_area_level_1', true),
                zip: `${getAddressComponentFromGooglePlace('postal_code')}${getAddressComponentFromGooglePlace('postal_code_suffix') !== '' ? `-${getAddressComponentFromGooglePlace('postal_code_suffix')}` : ''}`,
                country: getAddressComponentFromGooglePlace('country'),
            }
            props.setAddress(sanityLocation)
        }
    }, [googlePlace])

    React.useEffect(() => {
        if (placeId) {
            fetchPlaceDetails()
        }

    }, [placeId])

    // const locationObjectToString = (sourceLocation: SanityLocation) => sourceLocation && sourceLocation.locationName ? `${sourceLocation.locationName  } ${  sourceLocation.street1  } ${  sourceLocation.street2  } ${  sourceLocation.city  } ${  sourceLocation.state  } ${  sourceLocation.zip}`:''


    React.useEffect(() => {
        console.log('GoogleAPI', props.google)
        if (!address.locationName) {
            if (props.locationValue) {
                setAddress(locationObjectToString(props.locationValue))
            }
        }
    }, [])

    const theme=useTheme()

    return (
        <Grid container direction='column' item id='googleMap' xs={12}>
            <Grid container item xs={12}>
                <PlacesAutocomplete
                    // style={{ width: '100%' }}
                    value={address ?? ''}
                    onChange={handleChange}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <Grid container style={{ position: 'relative' }} key={uuidv4()}>
                            <Grid container item>
                                <FormGroup
                                    style={{ width: '100%', marginBottom: theme.spacing(1.5) }}
                                >
                                    <FormControlLabel
                                        style={{ width: '100%', alignItems: 'start', marginLeft: 0 }}
                                        control={<StyledTextField
                                            fullWidth
                                            variant='outlined'
                                            type='text'
                                            data-testid='location-input'
                                            //@ts-ignore
                                            inputProps={{
                                                ...getInputProps({
                                                    className: 'location-search-input',
                                                }),
                                            }}
                                        />}
                                        label={<Typography variant='h6' color='textSecondary'>Location</Typography>}
                                        labelPlacement='top'
                                    />

                                </FormGroup>
                            </Grid>
                            {suggestions.length > 0 && <Grid key={uuidv4()}
                                container
                                direction='column'
                                item
                                className='autocomplete-dropdown-container'
                                style={{ position: 'absolute', top: 80, border: '1px solid #9D9D9D', backgroundColor: '#ffffff', cursor: 'pointer' }}
                            >
                                {loading &&
                                    <Grid container item justifyContent='center'><Typography>Loading...</Typography></Grid>}
                                {!loading && suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item'
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' }

                                    return (
                                        <Grid
                                            container
                                            item
                                            {...getSuggestionItemProps(suggestion, {
                                                key: uuidv4(),
                                                className,
                                                style,
                                            })}
                                        >
                                            <Typography color='textSecondary'>{suggestion.description}</Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>}
                        </Grid>
                    )}
                </PlacesAutocomplete>
            </Grid>
            <Grid item>
                <div id='map'></div>
            </Grid>
            <Grid
                container
                item
                style={{
                    height: props.mapHeight ? `${props.mapHeight}px` : '450px',
                    width: '100%',
                    border: `2px solid ${theme.palette.text.secondary}`,
                }}
                alignItems='center'
            >
                {address !== '' ? <BallMapComponent height={props.mapHeight} locationString={address} />
                    : <Grid
                        key={uuidv4()}
                        data-testid='emptyLocation'
                        container
                        item
                        alignItems='center'
                        direction='column'
                        xs={12}
                        style={{ width: '100%' }}
                    >
                        <Typography color='textSecondary'><LocationOn
                            style={{ fontSize: '56px' }}
                        /></Typography>
                        <Typography color='textSecondary'>Type Location to Show Map</Typography>
                    </Grid>}
            </Grid>
        </Grid>
    )
}

export default GoogleApiWrapper((props) => {
    return {
        apiKey: props.apiKey,
        libraries: ['places'],
    }
})(GooglePlacesAutoComplete)