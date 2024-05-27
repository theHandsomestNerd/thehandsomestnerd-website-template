import {FunctionComponent, PropsWithChildren, useContext, useEffect, useState} from 'react'
import BallSearchContext, {BallSearchContextType} from "./BallSearchContext";
import {useNavigate, useSearchParams} from 'react-router-dom';
import {BallSearchParamsType, SanityBallType, SearchParams} from "../ballroomTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import {RoutesEnum} from "../enums/Routes.enum";
import {getUrlSearchParamsStr} from '../urlUtils';
import PageContext from '../../../page-context/PageContext';
import {RegionEnum, RegionTitleEnum} from "../enums/Region.enum";

export type BallSearchProviderProps = {
    value?: BallSearchContextType
    balls?: SanityBallType[]
}

const BallSearchProvider: FunctionComponent<BallSearchProviderProps & PropsWithChildren> = (props: PropsWithChildren<BallSearchProviderProps>) => {
    const navigate = useNavigate();
    const sanityContext = useContext(SanityContext)
    const [viewType, setViewType] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useState<BallSearchParamsType>({})
    const [displayResults, setDisplayResults] = useState<SanityBallType[] | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)

    const initialState: SearchParams = {
        keywords: '',
        ballType: '',
        endDate: '',
        startDate: '',
        region: '',
    }

    let [searchQueryParams] = useSearchParams();

    const initializeSearchParams = () => {
        // console.log("the search query form url", searchQueryParams)

        let processedQuery:SearchParams = {}

        if (searchQueryParams.get("keywords")) {
            processedQuery = {
                ...processedQuery,
                keywords: searchQueryParams.get("keywords") ?? ""
            }
        }

        if (searchQueryParams.get("ballType")) {
            processedQuery = {
                ...processedQuery,
                ballType: searchQueryParams.get("ballType") ?? ""
            }
        }

        if (searchQueryParams.get("endDate")) {
            processedQuery = {
                ...processedQuery,
                endDate: searchQueryParams.get("endDate") ?? ""
            }
        }

        if (searchQueryParams.get("startDate")) {
            processedQuery = {
                ...processedQuery,
                startDate: searchQueryParams.get("startDate") ?? ""
            }
        }

        if (searchQueryParams.get("region")) {
            processedQuery = {
                ...processedQuery,
                region: searchQueryParams.get("region") ?? ""
            }
        }
        console.log("Found these query params from prev search", processedQuery)

        setSearchParams(processedQuery)
    }

    const getBallData = async (queryStringObj: BallSearchParamsType) => {
        const queryString = generateBallQueryString(queryStringObj)

        return sanityContext.fetchAllApprovedBalls(queryString).then((sanitySearchResults: any) => {
            setDisplayResults(sanitySearchResults)

            return sanitySearchResults
        })
    }

    const refreshSearchResults = (queryObject: BallSearchParamsType) => {
        setLoading(true)
        // setSearchParams(queryObject)
        return getBallData(queryObject).finally(() => {
            setLoading(false)
        })
    }

    const resetSearchResults = async () => {
        setSearchParams(initialState)
        await refreshSearchResults(initialState)
    }

    const pageContext = useContext(PageContext)

    const getBall = (slug: string) => {
        let urlParams = ''

        if (!isSearchParamsEmpty()) {
            urlParams = `?${getUrlSearchParamsStr(searchParams)}`
        }

        // if(pageContext.baseRoute)
        console.log("aw - Navigating to ", `/${pageContext.baseRoute}/ball${RoutesEnum.BALL}/${slug}${urlParams}`)
        navigate(`/${pageContext.baseRoute}/ball${RoutesEnum.BALL}/${slug}${urlParams}`)
        navigate(0);
    }

    const updateSearchParams = (event: any) => {
        setSearchParams((currentState) => ({
            ...currentState,
            [event.target.name]: event.target.value,
        }))
    }

    const isSearchParamsEmpty = () => (!searchParams?.region || searchParams?.region === '') &&
        (!searchParams?.keywords || searchParams?.keywords === '') &&
        (!searchParams?.endDate || searchParams?.endDate === '') &&
        (!searchParams?.startDate || searchParams?.startDate === '') &&
        (!searchParams?.ballType || searchParams?.ballType === '')

    const generateBallQueryString = (queryStringObj: BallSearchParamsType): string => {
        let queryString = ''

        if (queryStringObj?.keywords && queryStringObj?.keywords !== '') {
            const normalizedKeywords = queryStringObj.keywords.toLowerCase()
            queryString += `[description, ballTitle, ballType,location.locationName, location.city, location.state] match "${normalizedKeywords}"`
            // queryString += ` || location.city matches "${normalizedKeywords}"`
            // queryString += `  || location.state matches "${normalizedKeywords}")`
        }

        if (queryStringObj?.ballType && queryStringObj?.ballType !== '') {
            queryString += queryString && queryString.length > 0 ? ' && ' : ''

            queryString += `ballType match "${queryStringObj.ballType}"`
        }

        if (queryStringObj?.region && queryStringObj?.region !== '') {
            queryString += queryString && queryString.length > 0 ? ' && ' : ''

            let translatedRegion = queryStringObj.region

            switch (queryStringObj.region) {
                case RegionEnum.ABROAD:
                    translatedRegion = RegionTitleEnum.ABROAD
                    break
                case RegionEnum.CANADA:
                    translatedRegion = RegionTitleEnum.CANADA
                    break
                case RegionEnum.EAST_COAST:
                    translatedRegion = RegionTitleEnum.EAST_COAST
                    break
                case RegionEnum.THE_MIDWEST:
                    translatedRegion = RegionTitleEnum.THE_MIDWEST
                    break
                case RegionEnum.THE_SOUTH:
                    translatedRegion = RegionTitleEnum.THE_SOUTH
                    break
                case RegionEnum.WEST_COAST:
                    translatedRegion = RegionTitleEnum.WEST_COAST
                    break
                default:
            }

            queryString += `(region match "${translatedRegion}" || `
            queryString += `region match "${queryStringObj.region}")`
        }
        if (queryStringObj?.startDate && queryStringObj?.startDate !== '') {
            queryString += queryString && queryString.length > 0 ? ' && ' : ''

            queryString += `functionStartDate > "${queryStringObj.startDate}"`
        }
        if (queryStringObj?.endDate && queryStringObj?.endDate !== '') {
            queryString += queryString && queryString.length > 0 ? ' && ' : ''
            queryString += `functionStartDate < "${queryStringObj.endDate}"`
        }
        if (queryString.length > 0) {
            queryString = ` && (${queryString})`
        }

        return queryString
    }

    useEffect(() => {
        console.log('updated Search params', searchParams)
        setLoading(true)

        // redo query
        console.log('queryObject', searchParams)
        refreshSearchResults(searchParams ?? {}).then()
    }, [searchParams])

    useEffect(() => {
        refreshSearchResults(searchParams ?? {}).then(()=>{
            initializeSearchParams()
        })
    }, [])

    return (
        <BallSearchContext.Provider
            value={{
                searchParams,
                displayResults,
                setSearchParams,
                setLoading,
                setDisplayResults,
                generateBallQueryString,
                updateSearchParams,
                refreshSearchResults,
                resetSearchResults,
                isSearchParamsEmpty,
                viewType,
                setViewType,
                loading,
                getBall,
                ...props.value,
            }}
        >
            {props.children}
        </BallSearchContext.Provider>
    );
}

export default BallSearchProvider
