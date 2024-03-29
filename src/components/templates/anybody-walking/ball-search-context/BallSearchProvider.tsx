import {FunctionComponent, PropsWithChildren, useContext, useEffect, useState} from 'react'
import BallSearchContext, {BallSearchContextType} from "./BallSearchContext";
import {useNavigate} from 'react-router-dom';
import {BallSearchParamsType, SanityBallType, SearchParams} from "../ballroomTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import {RoutesEnum} from "../enums/Routes.enum";
import {getUrlSearchParamsStr} from '../urlUtils';
import {RegionEnum, RegionTitleEnum} from "../enums/Region.enum";
import PageContext from '../../../page-context/PageContext';

export type BallSearchProviderProps = {
    value?: BallSearchContextType
    balls?: SanityBallType[]
}

const BallSearchProvider: FunctionComponent<BallSearchProviderProps & PropsWithChildren> = (props: PropsWithChildren<BallSearchProviderProps>) => {
    const navigate = useNavigate();
    const sanityContext = useContext(SanityContext)
    const [viewType, setViewType] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useState<BallSearchParamsType>({})
    const [displayResults, setDisplayResults] = useState<SanityBallType[]|undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)

    const initialState: SearchParams = {
        keywords: '',
        ballType: '',
        endDate: '',
        startDate: '',
        region: '',
    }



    const getBallData = async (queryStringObj: BallSearchParamsType) => {
        const queryString = generateBallQueryString(queryStringObj)

        console.log("The Sanity Context in the Ball Search Provider", sanityContext)
        return sanityContext.fetchAllApprovedBalls(queryString).then((sanitySearchResults: any) => {
            console.log('the ball dATA IS', sanitySearchResults)
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

    // useEffect(() => {
    //     if(!props.balls) {
    //         resetSearchResults().then()
    //     }
    //         else
    //         setDisplayResults(props.balls)
    //     }, [ props.balls])

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
        setSearchParams({
            ...searchParams,
            [event.target.name]: event.target.value,
        })
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

        // if (queryStringObj?.ballType && queryStringObj?.ballType !== '') {
        //   queryString += queryString && queryString.length > 0 ? ' && ' : ''
        //
        //   queryString += `ballType match "${queryStringObj.ballType}"`
        // }

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
        refreshSearchResults(searchParams ?? {}).then()
    }, [])

    return (
        <BallSearchContext.Provider
            value={{
                searchParams,
                displayResults: displayResults,
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
                // updateViewType,
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
