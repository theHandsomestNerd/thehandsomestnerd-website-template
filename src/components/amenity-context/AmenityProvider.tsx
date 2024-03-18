import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";
import AmenityContext from './AmenityContext';
import {Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "../templates/transform-hw/ToolTipWrap";
import PageContext from "../page-context/PageContext";
import ColoredPng from "../colored-png/ColoredPng";
import SnackbarContext from "../modal-context/SnackbarContext";
import FirebaseContext from "../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

type IProps = {};

type MediaQueryStateType = {
    serviceId?: string
    elementsObj?: { [key: string]: JSX.Element }
};
const initialState: MediaQueryStateType = {};

const reducer = (state: any, action: any): MediaQueryStateType => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'LOAD_SERVICE_ID':
            return {
                ...state,
                serviceId: action.payload.serviceId,
            };
        // case 'LOAD_AMENITIES':
        //     state.elements && delete state.elements
        //     return {
        //         ...state,
        //         currentAmenities: action.payload.currentAmenities,
        //         elements: undefined
        //     };
        // case 'LOAD_ELEMENTS':
        //     // state.currentAmenities && delete state.currentAmenities
        //     return {
        //         ...state,
        //         elements: action.payload.elements,
        //     };
        case 'ADD_ELEMENTS':
            // state.currentAmenities && delete state.currentAmenities
            return {
                ...state,
                elementsObj: {...state.elementsObj, [action.payload.serviceId]: action.payload.elements},
            };
        case 'CLEAR_AMENITIES':
            state.currentAmenities && delete state.currentAmenities
            state.elements && delete state.elements
            state.elementsObj && delete state.elementsObj
            return {
                ...state,
                currentAmenities: undefined,
                elements: undefined,
                elementsObj: undefined,
                serviceId: action.payload.serviceId
            };
        default:
            throw new Error();
    }
}

const AmenityProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const pageContext = useContext(PageContext)
    const sanityContext = useContext(SanityContext)

    React.useEffect(() => {
        pageContext.page?.servicesAvailable?.map((service) => {
            const serviceElements = generateAmenitiesElement(service.serviceAmenities, service.slug.current, service.contentTitle)
            // console.log("Generated amenties", serviceElements, service.slug.current)
            dispatch({type: "ADD_ELEMENTS", payload: {serviceId: service.slug.current, elements: serviceElements}})
        })
    }, [pageContext.page?.servicesAvailable])

    const generateAmenitiesElement = (amenities: any[], _serviceSlug: string, serviceTitle: string) => {
        // console.log(" generate", serviceSlug, state.serviceId)
        // if(serviceSlug === state.serviceId)
        const newElements = amenities?.map((serviceAmenity: ServiceAmenityType) => {
            return <ListItem
                key={uuidv4()}
                style={{
                    cursor: 'pointer',
                    height: "140px",
                    width: "100px",
                    backgroundColor: "whitesmoke",
                    zIndex: 11
                }}
            >
                <ToolTipWrap
                    serviceTitle={serviceTitle}
                    amenity={serviceAmenity}
                >
                    <Grid container item direction='column'
                          style={{
                        marginBottom: "24px",
                              width: "100%"

                    }} alignItems='center' alignContent='center'>
                        <Grid item container justifyContent='center'>

                        <ListItemIcon key={uuidv4()}
                              style={{
                                  minHeight: "32px",
                                  minWidth: "32px",
                                  backgroundSize: 'contain',
                                  backgroundPosition: 'center',
                                  backgroundImage: `url(${serviceAmenity.imageSrc?sanityContext.urlFor(serviceAmenity.imageSrc).width(32).height(32).url():"https://placehold.co/32x32"})`,
                                  backgroundRepeat: "no-repeat",

                              }}
                        ></ListItemIcon>
                        </Grid>
                        <Grid item container justifyContent='center'>
                        <ListItemText>
                            <Typography
                                variant='subtitle2'
                            >{serviceAmenity.title}</Typography>
                        </ListItemText>
                        </Grid>
                    </Grid>
                </ToolTipWrap>
            </ListItem>
        })


        return newElements
    }

    const init = async (slug: string) => {
        await dispatch({type: "LOAD_SERVICE_ID", payload: {serviceId: slug}})
    }
    const firebaseContext = useContext(FirebaseContext)


    const getElements = (slug: string) => {

        return (state.elementsObj && state.elementsObj[slug]) ?? <></>
    }
    const snackbarContext = useContext(SnackbarContext)

    const openSnackbar = (serviceTitle: string, amenity: ServiceAmenityType) => {
        pageContext.analyticsId && firebaseContext.analytics.amenityTooltipShown && firebaseContext.analytics.amenityTooltipShown(serviceTitle, amenity.title, pageContext.analyticsId)
        const snack = <Grid
            container
            style={{minWidth: "200px"}}
        >
            <Grid item container xs={12} justifyContent='flex-end' alignItems='center' spacing={1}
                  style={{marginBottom: "8px"}}>
                <Typography gutterBottom
                            variant='subtitle2'
                            color='textSecondary'>{serviceTitle} Amenity</Typography>
            </Grid>
            <Grid item container xs={12}>
                <Typography
                    variant='body2' color='textSecondary'
                    gutterBottom>{amenity.title}</Typography>
            </Grid>
            <Grid container item spacing={2} alignContent='center'
                  alignItems='stretch' wrap={"nowrap"}>
                <Grid style={{maxWidth: "72px"}} item xs={2} container justifyContent='center'
                      alignContent='center' alignItems='center'>
                    <ColoredPng size={48} maskAsset={amenity.imageSrc}
                                color={"white"}/>
                </Grid>
                <Grid item container alignItems='center' alignContent='center'>
                    <Typography gutterBottom
                                variant='body1' color='textSecondary' style={{
                        fontWeight: "normal",
                    }}>{amenity.description}</Typography>
                </Grid>
            </Grid>

        </Grid>

        snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack)
    }

    const newValue = useMemo(
        () => ({
            getElements,
            serviceId: state.serviceId,
            init,
            openSnackbar
        }),
        [
            getElements,
            state.serviceId,
            init,
            openSnackbar
        ]
    );

    return (
        <AmenityContext.Provider value={newValue}>
            {props.children}
        </AmenityContext.Provider>
    );
};

export default AmenityProvider;
