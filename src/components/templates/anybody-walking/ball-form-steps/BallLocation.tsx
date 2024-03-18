import React, {FunctionComponent, useContext} from 'react'
import { Grid, Typography } from '@mui/material'
import { AddBallState, BallLocationState, SanityLocation } from '../ballroomTypes'
import { renderBallType } from '../enums/BallType.enum'
import GooglePlacesAutoComplete from './GooglePlacesAutoComplete'
import PageContext from "../../../page-context/PageContext";

export type BallLocationProps = {
  stepComplete(stepState: BallLocationState): void,
  newBallToAdd: AddBallState
}

const BallLocation: FunctionComponent<BallLocationProps> = (props: BallLocationProps) => {
  const [location, setLocation] = React.useState<SanityLocation>({})

  React.useEffect(() => {
    if (location.locationName) {
      props.stepComplete({ location })
    }
  }, [location])

  const updateAddress = (address: SanityLocation) => {
    setLocation(state => ({
      ...state,
      locationName: address.locationName,
      street1: address.street1,
      street2: address.street2,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country,
      url: address.url,
    }))
  }

  const pageContext = useContext(PageContext)

  React.useEffect(() => {
    console.log("Page context from ball location", pageContext, pageContext.googleMapsApiKey)
      }, [pageContext])

  return (
    <Grid container item data-testid='add-ball-location-step' direction='column'>
      <Grid container item><Typography variant='h5' color='textSecondary'>Where is
        the {renderBallType(props.newBallToAdd?.ballType)}?</Typography></Grid>
      <Grid container item direction='column'>
        <GooglePlacesAutoComplete apiKey={pageContext.googleMapsApiKey}
          locationValue={props.newBallToAdd?.location}
          mapHeight={450}
          setAddress={updateAddress}
        />
      </Grid>
    </Grid>
  )
}

export default BallLocation
