import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Box, Card, CircularProgress, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {MapSectionType, ServiceAmenityType} from "../BlockContentTypes";
import {Email, LocationOn, Phone, Rectangle} from "@mui/icons-material";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {COLORS} from "../../theme/common/ColorPalette";
import {GoogleMap, Marker, useJsApiLoader, Data} from '@react-google-maps/api';


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
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


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

const MapSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
        <Grid container item style={{position: "relative"}}>
            <Grid item container sx={{
                position: "relative",
                top: mdDown ? 0 : -66,
                backgroundColor: COLORS.TRANSPARENT_DARKBLUE,
                border: "1px solid white",
                marginLeft: mdDown ? 0 : "32px",
                marginRight: mdDown ? 0 : "32px",
                padding: theme.spacing(4, 4, 2, 4)
            }} justifyContent='space-between'>{
                props.sectionData?.contactInfo.map((detail: ServiceAmenityType, index) =>
                    <Grid key={index}
                          container
                          xs={12}
                          md={3}
                          style={{marginBottom: "16px"}}
                          justifyContent='center'
                    >
                        <Grid item container alignItems='center' maxWidth={380} minWidth={290}
                              justifyContent='center'>
                            <Grid item xs={12} md={3} style={{marginRight: "8px", marginBottom: "4px"}} container
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
                                    <Grid container justifyContent='center' alignContent='center' alignItems='center'
                                          style={{height: "100%",}}>
                                        <Grid item style={{paddingTop: "6px"}}>
                                            {
                                                detail.imageSrc ?
                                                    <img width={24} src={urlFor(detail.imageSrc ?? "").url() ?? ""}
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
    </Grid>)
}

export default MapSection