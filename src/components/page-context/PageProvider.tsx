import {FunctionComponent, PropsWithChildren, useContext, useEffect, useMemo, useReducer, useState,} from 'react';
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {ThwServiceItemNoRefType} from "../BlockContentTypes";
import PageContext from './PageContext';
import SnackbarContext from "../modal-context/SnackbarContext";
import {v4 as uuidv4} from 'uuid'
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

type IProps = {
    page?: SanityTransformHwHomePage
    googleApiKey?: string
    barInventorySlug?: string
};

type PageProviderState = {
    loading?: boolean,
    page?: SanityTransformHwHomePage
    isRefetching?: boolean,
    isPageError?: boolean,
    error?: string,
    pageSlug?: string,
    allServices?: ThwServiceItemNoRefType[],
    pageHeader?: SanityMenuContainer,
    pageFooter?: SanityMenuContainer,
    analyticsId: string
    documentType?: string
    documentSlug?: string
    baseRoute?: string
    googleMapsApiKey?: string
    barInventorySlug?: string
}

const initialState: PageProviderState = {
    loading: false,
    page: undefined,
    isRefetching: false,
    isPageError: false,
    error: undefined,
    pageSlug: "home",
    allServices: [],
    pageHeader: undefined,
    pageFooter: undefined,
    analyticsId: uuidv4().toString(),
    baseRoute: "",
    googleMapsApiKey: "",
    barInventorySlug: ""

};

const reducer = (state: PageProviderState, action: any) => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'START_PAGE_LOAD':
            // console.log("in page load switch", action.payload.pageSlug)
            return {
                ...state,
                loading: true,
                pageSlug: action.payload.pageSlug,
            };
        case 'FETCH_DOCUMENT':
            // console.log(`in page context fetch document fetching document type`)
            return {
                ...state,
                documentType: action.payload.documentType,
                documentSlug: action.payload.documentSlug,
            };
        case 'SET_BASE_ROUTE':
            // console.log(`in page context update the base Route ${action.payload.baseRoute}`)
            return {
                ...state,
                baseRoute: action.payload.baseRoute,
            };
        case 'SET_GOOGLE_MAPS_API_KEY':
            return {
                ...state,
                googleMapsApiKey: action.payload.googleMapsApiKey,
            };
        case 'SET_BAR_INVENTORY_SLUG':
            console.log(`in page context provider/reducer update the bar inventory slug ${action.payload.barInventorySlug}`)
            return {
                ...state,
                barInventorySlug: action.payload.barInventorySlug,
            };
        case 'LOAD_PAGE_COMPONENTS':
            return {
                ...state,
                loading: false,
                page: action.payload.page,
                pageHeader: action.payload.page?.headerMenuRef,
                pageFooter: action.payload.page?.footerMenuRef
            };
        case 'LOAD_SERVICES':
            return {
                ...state,
                loading: false,
                allServices: action.payload.allServices
            };
        case 'PAGE_LOADING':
            return {
                ...state,
                loading: action.payload.loading,
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                isError: action.payload.isError,
                pageError: action.payload.error
            }
        default:
            throw new Error();
    }
}


const PageProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const sanityContext = useContext(SanityContext)

    const [state, dispatch] = useReducer(reducer, initialState)

    const [documentData, setDocumentData] = useState<any>()
    const [isLoading] = useState<boolean>(true)

    useEffect(() => {
        sanityContext.fetchDocumentByTypeAndSlugQuery(state.documentType, state.documentSlug)
            .then((result: any) => {
                // console.log(`New log in page context fetch document fetching document type: ${state.documentType} with slug: ${state.documentSlug}`)

                setDocumentData(result)
            })
            .catch((e: any) => {
                console.log(`ERROR: in page context fetch document fetching document type: ${state.documentType} with slug: ${state.documentSlug} `, e)

            })

    }, [state.documentType, state.documentSlug, sanityContext.theSanityClient])

    useEffect(() => {

        if (!props.page && (state.pageSlug && state.pageSlug.length > 0)) {
            sanityContext.fetchPageBySlugQuery(state.pageSlug).then((result: any) => {
                dispatch({
                    type: "LOAD_PAGE_COMPONENTS",
                    payload: {
                        page: result,
                    }
                })
            }).catch((e: any) => {
                console.log("ERROR: ", e)
                dispatch({
                    type: "LOAD_PAGE_COMPONENTS",
                    payload: {
                        page: undefined,
                    }
                })
            })
        }
    }, [state.pageSlug, sanityContext.theSanityClient])

    useEffect(() => {
        if (props.googleApiKey) {
            updateGoogleApiKey(props.googleApiKey)
            // dispatch({
            //     type: "SET_GOOGLE_MAPS_API_KEY",
            //     payload: {
            //         googleMapsApiKey: props.googleApiKey,
            //     }
            // })
        }
    }, [props.googleApiKey])

    useEffect(() => {
        if (props.barInventorySlug) {
            updateBarInventorySlug(props.barInventorySlug)
            // dispatch({
            //     type: "SET_BAR_INVENTORY_SLUG",
            //     payload: {
            //         barInventorySlug: props.barInventorySlug,
            //     }
            // })
        }
    }, [props.barInventorySlug])

    useEffect(() => {
        if (props.page && !state.page) {
            console.log("page came in from storybook or test", props.page)
            dispatch({
                type: "LOAD_PAGE_COMPONENTS",
                payload: {
                    page: props.page,
                }
            })
        }
    }, [props.page, state.page])

    useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: isLoading
            }
        })
    }, [isLoading])

    useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: isLoading
            }
        })
    }, [isLoading])

    const fetchPage = async (pageSlug: string) => {
        // console.log("Fetching the page", pageSlug)
        dispatch({
            type: "START_PAGE_LOAD",
            payload: {
                pageSlug: pageSlug,
            }
        })
    }

    const updateBaseRoute = (baseRoute: string) => {
        // console.log(`updating baseRoute to ${baseRoute} in pageProvider`)

        dispatch({
            type: "SET_BASE_ROUTE",
            payload: {
                baseRoute: baseRoute,
            }
        })
    }

    const updateGoogleApiKey = (apiKey: string) => {
        dispatch({
            type: "SET_GOOGLE_MAPS_API_KEY",
            payload: {
                googleMapsApiKey: apiKey,
            }
        })
    }

    const updateBarInventorySlug = (barInventorySlug: string) => {
        dispatch({
            type: "SET_BAR_INVENTORY_SLUG",
            payload: {
                barInventorySlug: barInventorySlug,
            }
        })
    }

    const fetchDocument = async (documentType: string, documentSlug: string) => {
        // console.log(`"Fetching the document type:${documentType} that has slug:${documentSlug} `)
        dispatch({
            type: "FETCH_DOCUMENT",
            payload: {
                documentType: documentType,
                documentSlug: documentSlug
            }
        })
    }

    const snackbarContext = useContext(SnackbarContext)


    useEffect(() => {
        if (state.error) {
            snackbarContext.openSnackbar && snackbarContext.openSnackbar(state.error)
        }
    }, [state.error, state.isPageError])

    useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: !!state.page
            }
        })
    }, [isLoading])

    const getOtherServices = (pageSlug: string) => {
        return state.allServices?.filter((service: ThwServiceItemNoRefType) => {
            return pageSlug !== service.slug.current
        }) ?? []


    }

    const newValue = useMemo(
        () => ({
            page: state.page,
            slug: state.pageSlug,
            pageHeader: state.pageHeader,
            pageFooter: state.pageFooter,
            isPageLoading: state.loading,
            isRefetching: state.isRefetching,
            isPageError: state.isPageError,
            fetchPage,

            allServices: state.allServices,

            getOtherServices,
            analyticsId: state.analyticsId,

            fetchDocument,
            documentData,
            updateBaseRoute,
            baseRoute: state.baseRoute,
            updateGoogleApiKey,
            googleMapsApiKey: state.googleMapsApiKey
        }),
        [
            state.page,
            state.pageSlug,
            state.pageHeader,
            state.pageFooter,
            state.loading,
            state.isRefetching,
            state.isPageError,
            fetchPage,
            state.allServices,
            getOtherServices,
            state.analyticsId,
            state.baseRoute,
            state.googleMapsApiKey
        ]
    );

    return (
        <PageContext.Provider value={newValue}>
            {props.children}
        </PageContext.Provider>
    );
};

export default PageProvider;
