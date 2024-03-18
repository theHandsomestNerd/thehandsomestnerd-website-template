import React from 'react';
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {ThwServiceItemNoRefType} from "../BlockContentTypes";

export type PageContextType = {
    page?: SanityTransformHwHomePage
    analyticsId?: string
    slug?: string
    pageHeader?: SanityMenuContainer
    pageFooter?: SanityMenuContainer
    isPageLoading?: boolean
    isPageError?: boolean
    isRefetching?: boolean
    allServices?: ThwServiceItemNoRefType[]
    getOtherServices?: (slug:string)=>ThwServiceItemNoRefType[]
    fetchPage?: (slug:string)=>void
    fetchDocument?: (documentType: string, documentSlug:string) => void
    documentData?: any
    updateBaseRoute?: (baseRoute:string) => void
    baseRoute?: string
    updateGoogleApiKey?: (apiKey:string) => void
    googleMapsApiKey?: string
    barInventorySlug?:string
    // setBaseRoute?: any
};

const PageContext = React.createContext<PageContextType>({});

export default PageContext;
