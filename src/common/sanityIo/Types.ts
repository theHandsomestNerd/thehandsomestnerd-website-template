import {SanityImageSource} from "@sanity/asset-utils";
import {SanityImageAsset, ThwServiceItemNoRefType} from "../../components/BlockContentTypes";
import {Slug} from "@sanity/types";
import BusinessContact from "../../../sanityIo/schemas/businessContact";

export type SanitySlug = Slug

export declare type SanityRef = {
    _type: string;
    _ref: string;
    _key?: string;
};


export declare type SanityColdLead = {
    email: string,
    leadName?: string,
    leadPhone?: string,
    leadMessage?: string,
    source?: string
}
export type SanityGroupScheduleEntry = {
    name:string,
    dayName:string,
    isClosed:boolean,
    startTime:string,
    endTime:string
}
export type SanityGroupSchedule = {
    name:string,
    hoursOfOperation: SanityGroupScheduleEntry[]
}

export type SanityBusinessContact = {
    email?: string
    address?: string
    phone?: string
    facebook?: string
    facebookIconSrc?: SanityImageSource
    linkedIn?: string
    linkedInIconSrc?: SanityImageSource
    twitter?: string
    twitterIconSrc?: SanityImageSource
    instagram?: string
    instagramIconSrc?: SanityImageSource
    github?: string
    githubIconSrc?: SanityImageSource
    hoursOfOperation?: SanityGroupSchedule[]
}

export type SanityTransformHwHomePage = {
    _type?: string
    title?: string
    description?: string
    bookAppointmentLink?: string
    bookAppointmentQrCode?: SanityImageSource
    imgSrc?: SanityImageSource
    metaImage?: SanityImageSource
    businessCardImageSrc?: SanityImageSource
    slug?: any
    businessContact?: SanityBusinessContact
    theme?: SanityMuiTheme
    headerContent?: any
    footerContent?: any
    pageContent?: any
    servicesAvailable?: ThwServiceItemNoRefType[]
    structuredData?: any
    website?: string
    websiteQrCode?: SanityImageSource
    androidPlayStoreLink?: string
    androidPlayStoreIconSrc?: string
    appStoreLink?: string
    appStoreIconSrc?: string
    fdicDisclaimer?: string
    fdicImage?: string
    isUnderConstruction?: boolean
    underConstructionPageRef?: SanityRef
    isFabActivated?: boolean
}

export type SanityUnderConstructionPageType = {
    name: string
    bgImage: SanityImageAsset
    contentTitle: string
    releaseDate: Date
    contentText: string
    subscribeText: string
    emailFieldText: string
    emailButtonText: string
    footerTextLines: string[]
}

export type SanityMuiTheme = {
    title?: string
    slug?: SanitySlug
    appBarHeight?: number
    breakpoints?: SanityMuiBreakpoints
    colorPalette?: SanityMuiColorPalette
    typography?: SanityMuiTypography
}

export type SanityMuiBreakpoints = {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export type SanityMuiTypography = {
    title: string
    fontFamily: string[]
}

export type SanityMuiColorPalette = {
    name: string
    defaultBackground: string
    defaultPaperBackgroundColor: string
    primaryColor: string
    secondaryColor: string
    primaryTextColor: string
    secondaryTextColor: string
    disabledTextColor: string
}

export type SanityBlogCategory = {
    title: string
    description?: string | null
    color: { title: string, value: string }
}

export type SanityLandingPage = {
    welcomeMessage?: string,
    mainImage?: SanityImageAsset,
    headerText?: string,
    body?: string,
    form?: { abFormType: { title: string }, instructionBlock: string },
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string
}

export type SanityBlog = {
    title?: string
    slug?: SanitySlug
    mainImage?: SanityImageAsset
    mainImageCaption?: string
    category?: SanityBlogCategory
    body?: string
    _createdAt?: string
}

export type SanityBlogGroup = {
    title?: string
    posts?: SanityBlogPreview[]
}

export type SanityBlogPreview = {
    title?: string
    slug?: SanitySlug
    mainImage?: SanityImageAsset
    mainImageCaption?: string
    category?: SanityBlogCategory
    snippet?: string
    _createdAt?: string
}
//
// export type BlockContentElement = {
//   _key: string
//   children: BlockContentElementChild[]
// }

// export type BlockContentElementChild = {
//   _key: string
//   text?: string
// }


export interface TextElementType {
    question: string;
    answer: number;
}

export type SanityModalType = {
    name: string,
    title: string,
    slug: string,
    backgroundImageSrc: SanityImageAsset
    iconOverlayImageSrc: SanityImageAsset
    contentText: TextElementType[]
    notes: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type SanityMenuItem = {
    _type: string
    title?: string,
    displayText?: string,
    url?: string,
    isContainedButton?: boolean,
    isOutlinedButton?: boolean,
    isModalButton?: boolean
    modalRef?: SanityModalType
}

export type SanityMenuGroup = {
    _type: string
    title?: string,
    slug?: SanitySlug,
    menuGroupTitle?: string,
    links?: SanityMenuItem[],
    logoImage?: any
    displayText?: string
}

export type SanityMenuContainer = {
    title?: string,
    slug?: SanitySlug,
    displayText?: string,
    subMenus?: SanityMenuGroup & SanityMenuItem[]
    logoImageAltText?: string
    logoText?: string
    logoAccentText?: string
    logoImageSrc?: SanityImageAsset
    isSearch?: boolean

}

export type MainMenuAnchorType = 'left' | 'top' | 'right' | 'bottom'