import React, {FunctionComponent, useContext} from 'react'
import { Grid } from '@mui/material'
import { SanityLocation } from '../ballroomTypes'
import PageContext from "../../../page-context/PageContext";

// https://developers.google.com/maps/documentation/embed/get-started

export type BallMapComponentProps = {
  location?: SanityLocation,
  locationString?: string,
  height?: number
}

const BallMapComponent: FunctionComponent<BallMapComponentProps> = (props: BallMapComponentProps) => {
  const processStringForGoogleQuery = (rawString?: string) => {
    if(!rawString){
      return ''
    }
    const processedString = rawString.replace(' ', '+')

    return processedString
  }

  const getQueryfromLocation = (): string => {
    let query = ''

    if (props.location) {
      // TODO: deprecate this after locations are sanitized
      if (props.location.locationName !== '') {
        query = processStringForGoogleQuery(props.location.locationName)
      } else {
        query = processStringForGoogleQuery(`${props.location.street1} ${props.location.city} ${props.location.state}`)
      }
    } else if (props.locationString) {

      query = props.locationString
    }

    return query
  }

  const pageContext = useContext(PageContext)

  return (<Grid container>
    <iframe
      title="googleMapsMap"
      height={`${props.height? props.height: 450}`}
      style={{border: 0, width: '100%'}}
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?key=${pageContext.googleMapsApiKey}&q=${getQueryfromLocation()}`}>
    </iframe>
  </Grid>)
}

export default BallMapComponent
