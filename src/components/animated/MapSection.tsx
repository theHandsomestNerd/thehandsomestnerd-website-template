import React, {FunctionComponent, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Card, CircularProgress, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {MapSectionType, ServiceAmenityType} from "../BlockContentTypes";
import {Email, LocationOn, Phone} from "@mui/icons-material";
import {COLORS} from "../../theme/common/ColorPalette";
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";


export const useStyles = makeStyles(() => ({
    markerClass: {
        paddingTop: "70px",
    },
    grayscale: {
        // -webkit-filter: grayscale(100%);
        // -moz-filter: grayscale(100%);
        // -ms-filter: grayscale(100%);
        // -o-filter: grayscale(100%);
        filter: 'grayscale(100%)',
        // filter: url(grayscale.svg); /* Firefox 4+ */
        // filter: gray; /* IE 6-9 */
    }
}))

interface IProps {
    sectionData?: MapSectionType
}


const containerStyle = {
    width: '100vw',
    height: '750px'
};

const center = {
    lat: 39.332029,
    lng: -76.760486
};

const MapSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const sanityContext = useContext(SanityContext)

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY ?? ""
    })

    const getIcon = (iconName?: string) => {
        const iconSize = 'medium'
        const color = 'secondary'

        switch (iconName) {
            case "email":
                return <Email color={color} fontSize={iconSize}/>
            case "phone":
                return <Phone color={color} fontSize={iconSize}/>
            case "address":
            default:
                return <LocationOn color={color} fontSize={iconSize}/>
        }
    }


    return (<Grid container item>
        <Grid item container className={classes.grayscale}>
            {
                isLoaded ?
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={11}
                    >
                        <Marker title={props.sectionData?.mapMarkerTitle} position={{lat: center.lat, lng: center.lng}}
                                label={{
                                    text: props.sectionData?.mapMarkerTitle ?? " ",
                                    className: classes.markerClass,
                                    fontSize: "18px"
                                }}></Marker>


                    </GoogleMap>
                    : <CircularProgress/>
            }
        </Grid>
        <Grid container item style={{position: "relative",}}>
            <Grid item container sx={{
                position: mdDown?"relative":"absolute",
                top: mdDown ? 0 : -66,
                paddingLeft: mdDown?0:"32px",
                paddingRight: mdDown?0:"32px",
            }}>
                <Grid item container
                      sx={{
                          zIndex:2,
                          backgroundColor: COLORS.TRANSPARENT_DARKBLUE,
                          border: "1px solid white",
                          padding: theme.spacing(4, 4, 2, 4)
                      }}
                      justifyContent='space-between'>{
                    props.sectionData?.contactInfo.map((detail: ServiceAmenityType, index) =>
                        <Grid key={index}
                              container
                              item
                              xs={12}
                              md={3}
                              style={{marginBottom: "16px"}}
                              justifyContent='center'
                        >
                            <Grid item container alignItems='center' maxWidth={380} minWidth={290}
                                  justifyContent='center'>
                                <Grid item xs={12} md={3} style={{marginRight: mdDown?0:"8px", marginBottom: mdDown?0:"4px"}} container
                                      justifyContent='center'>
                                    <Card
                                        elevation={0}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: "50%",
                                            border: `3px solid ${theme.palette.secondary.main}`
                                        }}>
                                        <Grid container justifyContent='center' alignContent='center'
                                              alignItems='center'
                                              style={{height: "100%",}}>
                                            <Grid item style={{paddingTop: "6px"}}>
                                                {
                                                    detail.imageSrc ?
                                                        <img width={24} src={sanityContext.urlFor(detail.imageSrc ?? "").url() ?? ""}
                                                        /> : getIcon(detail.muiIcon)
                                                }
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item maxWidth={260}>
                                    <Grid item>
                                        <Typography variant='body1' color='textSecondary' noWrap
                                                    align={mdDown ? "center" : "left"}>{detail.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight='bold' fontSize='16px' variant='body2'
                                                    color='textSecondary'
                                                    align={mdDown ? "center" : "left"}>{detail.description}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>)
                }</Grid>
            </Grid>
        </Grid>
    </Grid>)
}

export default MapSection