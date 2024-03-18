import React from 'react'
import {BallSearchParamsType, SanityBallType, SearchParams} from "../ballroomTypes";

export type BallSearchContextType = {
  searchParams?: SearchParams,
  setSearchParams?(searchParams:any): void,
  displayResults: SanityBallType[]| undefined,
  setDisplayResults?(results:any): void,
  generateBallQueryString?(queryStringObj: BallSearchParamsType): string
  updateSearchParams?(event:any): void,
  refreshSearchResults?(queryObject:any): void,
  resetSearchResults?(): void,
  isSearchParamsEmpty?(): boolean,
  viewType: boolean,
  setViewType?(viewType:any): void,
  // updateViewType?:(viewType:boolean) => void,
  loading?: boolean,
  getBall?(slug:any): void,
  setLoading?(loading:any): void,
}

const BallSearchContext = React.createContext<BallSearchContextType>({ displayResults:[], viewType: false });

export default BallSearchContext;
