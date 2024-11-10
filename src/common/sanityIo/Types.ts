import {SanityImageAsset, SanityImageSource} from "@sanity/asset-utils";
import {SanityRef, ThwServiceItemNoRefType} from "../../components/BlockContentTypes";
import {Slug} from "@sanity/types";

export type SanitySlug = Slug

export type SanityHomePage = {
    slug?: SanitySlug,
    heroImage?: SanityHeroImageWithText,
    businessContact?: SanityBusinessContact,
    introduction?: string
    specializationsMenuGroup?: SanityMenuGroup,
    weWorkWithSection?: SanityWeWorkWith,
    ourServicesSection?: SanityOurServices,
    solutions?: SanitySolutions
}

export type SanitySolutions = {
    sectionHeader?: string,
    solutionList?: ListItemType[]
}

export type SanityWeWorkWith = {
    title?: string,
    sectionHeader?: string,
    description?: string,
    companyPartnerLogos?: SanityImageAssetProj[]
}

export type ListItemType = {
    title?: string,
    description?: string
}

export type SanityOurServices = {
    title?: string,
    sectionHeader?: string,
    serviceList?: ListItemType[]
}

export type SanityGradient = {
    color1?: { title: string, value: string }
    color2?: { title: string, value: string }
}

export type SanityHeroImageWithText = {
    slug?: SanitySlug
    mainImage?: SanityImageAsset
    gradient?: SanityGradient
}

export type SanitySimpleHeroImage = {
    slug?: SanitySlug
    text?: string
    mainImage?: SanityImageAsset
    gradient?: SanityGradient
}

export type SanityBrandQuoteItem = {
    title?: string
    description?: string
    image?: SanityImageAsset
}

export type SanityOurStoryPage = {
    slug?: SanitySlug
    titleText?: string
    mainImage?: SanityImageAsset
    gradient?: SanityGradient
    introduction?: string
    storyStartTitle?: string
    storyStartLeft1?: string
    storyStartLeft2?: string
    storyStartLeft3?: string
    storyStartRightImage?: SanityImageAsset
    brandQuotesTitle?: string
    brandQuotesList?: SanityBrandQuoteItem[]
    howWeGrowBrandsTitle?: string
    howWeGrowBrandsContent?: string
}

export type SanityCommunityPage = {
    slug?: SanitySlug
    titleText?: string
    mainImage?: SanityImageAsset
    gradient?: SanityGradient
    introduction?: string
    howWeGrowBrandsTitle?: string
    howWeGrowBrandsContent?: string
    weWorkWithSection?: SanityWeWorkWith,
    callToAction?: string
}

export type SanityImageAssetProj = {
    title?: string
    slug?: SanitySlug
    mainImage?: SanityImageSource
    caption?: string
}

export type SanityImageCarousel = {
    title?: string
    slug?: SanitySlug
    images?: SanityImageAssetProj[]
}

export type SanityStaticPage = {
    title?: string
    slug?: SanitySlug
    body?: string
}

export type SanityEvergreenPage = {
    mainImage?: SanityImageAsset
    title?: string
    pageContent?: any
}

export declare type SanityColdLead = {
    email: string,
    leadName?: string,
    leadPhone?: string,
    leadMessage?: string,
    source?: string
}
export type SanityGroupScheduleEntry = {
    name: string,
    dayName: string,
    isClosed?: boolean,
    startTime?: string,
    endTime?: string
}
export type SanityGroupSchedule = {
    name: string,
    hoursOfOperation: SanityGroupScheduleEntry[]
}

export type SanityBusinessContact = {
    "_type"?: "BusinessContact"
    title?: string
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
    _id?: string
    description?: string
    backgroundImageSrc?: SanityImageAsset
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
    copyRightTextColor?: string
    copyRightBackgroundColor?: string
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
    _type?: "MuiTheme"
    title?: string
    slug?: SanitySlug
    appBarHeight?: number
    borderRadius?: number
    shape?: { borderRadius: number }
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


export type SanityMuiFontFace = {
    name?: string
    fontSize?: string
    fontStyle?: string
    fontWeight?: string
    lineHeight?: string
    letterSpacing?: string
    textTransform?: any
    [key: string]: any
    mediaQueries?: SanityMuiMediaQuery[]
}

export type SanityMuiMediaQuery = {
    "_type"?: "MuiMediaQuery"
    breakpoint: string[]
    typography: SanityMuiFontFace
}
export type SanityMuiTypography = {
    "_type"?: "MuiTypography",
    fontFamily: string[]
    fontFaces?: SanityMuiFontFace[]
}

export type SanityMuiColorPalette = {
    "_type"?: "MuiColorPalette",
    defaultBackground: string
    defaultPaperBackgroundColor: string
    primaryColor: string
    secondaryColor: string
    primaryTextColor: string
    secondaryTextColor: string
    disabledTextColor: string
    buttonOutlineColor?: string
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
    _type?: string,
    title?: string,
    displayText?: string,
    url?: string,
    isContainedButton?: boolean,
    isOutlinedButton?: boolean,
    isModalButton?: boolean
    modalRef?: SanityModalType
}

export type SanityMenuGroup = {
    _type?: string,
    title?: string,
    slug?: SanitySlug,
    menuGroupTitle?: string,
    links?: SanityMenuItem[],
    logoImage?: any
    displayText?: string
}

export type SanityMenuContainer = {
    title?: string,
    backgroundColor?: string
    slug?: SanitySlug,
    displayText?: string,
    subMenus?: (SanityMenuGroup & SanityMenuItem)[]
    logoImageAltText?: string
    logoText?: string
    logoAccentText?: string
    logoImageSrc?: SanityImageAsset
    isShowSocialMedia?: boolean
    isSearch?: boolean
    isHideOverlay?: boolean
}

export type SanityCocktailType = {
    _id: string
    title: string,
    slug: SanitySlug,
    description: string,
    imageSrc: SanityImageAsset,
    glassPrep: string[],
    glass: SanityGlass,
    garnish: SanityGarnish[],
    mixingGlass: (SanityMixingGlass)[],
    mixingGlassGarnishes: (SanityGarnish)[],
    instructions: SanityMixingInstruction[],
    drinkCount: number,
    isOnMenu: boolean
    cocktailIngredientIds: string[]
}

export type SanityDrinkGetReqParamsType = {
    drinkSlug: string
}

export type SanityGlass = {
    title: string,
    sizeOz: number,
    rim: string,
    isIced: boolean,
    imageSrc: SanityImageAsset,
}

export type SanityCocktailIngredient = {
    _id?: string
    _type?: 'Ingredient'
    title: string,
    liquorType: SanityLiquorType
    product: string,
    imageSrc: SanityImageAsset,
    isLiquor: boolean,
    isCordial: boolean,
    isJuice: boolean
}
export type SanityBarInventoryType = {
    _id?: string
    _type?: 'BarInventory'
    title: string,
    name: string,
    theBarLiquorTypes: any[]
    theBar: (SanityCocktailIngredient | SanityGarnish)[]
}

export type SanityLiquorType = {
    _id?: string
    _type?: 'LiquorType'
    name?: string,
    title?: string,
    slug?: SanitySlug,
    description?: string
    imageSrc?: SanityImageAsset,
    proof?: number
}

// export type SanityCocktailIngredientContainer ={
//   amount: string,
//   ingredient: SanityCocktailIngredient,
// }

export type SanityMixingGlass = {
    _type: "MixingGlass"
    amount: number,
    ingredient: SanityCocktailIngredient,
}

export type SanityGarnish = {
    _type: "Garnish",
    title: string,
    imageSrc: SanityImageAsset
}
export type SanityMixingInstruction = {
    title: string,
    tool: string
    action: string
    instruction: string
    mixingGlass: (SanityMixingGlass)[],
    mixingGlassGarnishes: (SanityGarnish)[],
}

export type CocktailDbResultType = {
    [key: string]: any,
    "idDrink": string,
    "strDrink": string,
    "strDrinkAlternate": string,
    "strTags": string, // comma separated string
    "strVideo": string,
    "strCategory": string,
    "strIBA": string,
    "strAlcoholic": string,
    "strGlass": string,
    "strInstructions": string,
    "strDrinkThumb": string,
    "strIngredient1": string,
    "strIngredient2": string,
    "strIngredient3": string,
    "strIngredient4": string,
    "strIngredient5": string,
    "strIngredient6": string,
    "strIngredient7": string,
    "strIngredient8": string,
    "strIngredient9": string,
    "strIngredient10": string,
    "strIngredient11": string,
    "strIngredient12": string,
    "strIngredient13": string,
    "strIngredient14": string,
    "strIngredient15": string,
    "strMeasure1": string, // fraction formatted string with oz string
    "strMeasure2": string,// fraction formatted string with oz string
    "strMeasure3": string,// fraction formatted string with oz string
    "strMeasure4": string,
    "strMeasure5": string,
    "strMeasure6": string,
    "strMeasure7": string,
    "strMeasure8": string,
    "strMeasure9": string,
    "strMeasure10": string,
    "strMeasure11": string,
    "strMeasure12": string,
    "strMeasure13": string,
    "strMeasure14": string,
    "strMeasure15": string,
    "strImageSource": string,
    "strImageAttribution": string,
    "strCreativeCommonsConfirmed": string, // yes or no
    "dateModified": Date
}

export type MainMenuAnchorType = 'left' | 'top' | 'right' | 'bottom'