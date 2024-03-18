import React, {FunctionComponent, useContext} from 'react'
import {Grid, List, useTheme} from '@mui/material'
import {ArrowLeft, ArrowRight} from "@mui/icons-material";
import {ThwServiceItemNoRefType} from "../../BlockContentTypes";
import AmenityContext from "../../amenity-context/AmenityContext";
import {useIsHorizontalOverflow} from "../../../utils/useIsHorizontalOverflow";

interface IProps {
    service: ThwServiceItemNoRefType
    placeHolder?: JSX.Element
}

const AmenitiesSection: FunctionComponent<IProps> = (props: IProps) => {
    const ref = React.useRef(null);
    const isOverflow = useIsHorizontalOverflow(ref, () => {
    })

    // const [showAmenity, setShowAmenity] = React.useState<boolean>()
    const amenityContext = useContext(AmenityContext)
    // const [loading, setLoading] = React.useState<boolean>()
    const [elements, setElements] = React.useState<JSX.Element>()

    // React.useEffect(() => {
    //     if (amenityContext.serviceId !== props.service.slug.current) {
    //         setShowAmenity(false)
    //     } else {
    //         setShowAmenity(true)
    //         // setElements(amenityContext.getElements && amenityContext.getElements(props.service.slug.current))
    //     }
    // }, [amenityContext.serviceId])
    //
    // React.useEffect(() => {
    //     if (amenityContext.serviceId !== props.service.slug.current) {
    //         setLoading(false)
    //     } else {
    //         setLoading(true)
    //         // setElements(amenityContext.getElements && amenityContext.getElements(props.service.slug.current))
    //     }
    // }, [amenityContext.serviceId])

    React.useEffect(() => {
        const newElements = amenityContext.getElements && amenityContext.getElements(props.service.slug.current)
        if (newElements) {
            // console.log("setting the new elements in the component", props.service.slug.current)
            setElements(newElements)
        }
    }, [amenityContext.getElements && amenityContext.getElements(props.service.slug.current)])


    // React.useEffect(() => {
    //     if (showAmenity) {
    //         setLoading(true)
    //     } else {
    //         setLoading(false)
    //     }
    // }, [showAmenity])
    // React.useEffect(() => {
    //     // if (!amenityContext.elements && amenityContext.serviceId === props.service.slug.current) {
    //     //         setLoading(true)
    //     // }else
    //         if (amenityContext.elements){
    //         setLoading(false)
    //     }
    // }, [amenityContext.elements])

    const theme = useTheme()

    return (<Grid container item justifyContent='center'
                  style={{
                      // minHeight: "max-content",
                      position: "relative"
                  }}
                  alignItems='stretch'>
        {
            isOverflow ?
                <Grid
                    // ref={ref}
                    container
                    xs={3}
                    alignItems='center'
                    alignContent='center'
                    item
                    style={{
                        // backgroundImage: 'linear-gradient(to right, whitesmoke, transparent)',
                        position: "absolute",
                        left: 16,
                        height: "100%",
                        zIndex: "1000",
                        pointerEvents: 'none'
                        // opacity: 0
                    }}
                >
                    <ArrowLeft/>
                </Grid> : <></>
        }
        <Grid xs={10} item container>
            <Grid item container justifyContent='flex-start'>

                <List

                    style={{
                        paddingTop: theme
                            .spacing(2),

                        // display: 'flex', flexDirection: 'row',
                        // overflowY: "hidden",
                        width: "100%",
                        // overflowX: "scroll",
                        height: "130px",
                    }}
                >
                    <Grid container ref={ref} direction='column' alignItems='center' alignContent='flex-start' style={{
                        // marginTop: TransformHWTheme.spacing(2),
                        //     margin: 0,
                        // display: 'flex', flexDirection: 'row', padding: 0,
                        paddingLeft: isOverflow ? theme
                            .spacing(2) : theme
                            .spacing(0),
                        overflowY: "hidden",
                        overflowX: "scroll",
                        height: "100%",
                        width: "100%",


                    }}>
                        {elements}
                    </Grid>

                </List>
            </Grid>
        </Grid>
        {
            isOverflow ? <Grid container xs={3} item style={{
                // backgroundImage: 'linear-gradient(to right,transparent, whitesmoke)',
                position: "absolute",
                right: 16,
                height: "100%",
                zIndex: "1000",
                pointerEvents: 'none'
                // opacity: 0
            }}
                               justifyContent='flex-end' alignContent='center'>
                <ArrowRight/>
            </Grid> : <></>
        }
    </Grid>)
}

export default AmenitiesSection