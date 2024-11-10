import {SanityBusinessContact, SanityMenuContainer, SanitySlug} from "../common/sanityIo/Types";
import {FileAsset, Reference, SanityDocumentLike} from "@sanity/types";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageSource
    heroImageAltText: string
    heroImageBackground: SanityImageSource
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type HeroAnimatedContentSectionType = {
    name: string
    title: string
    contentSlides: SanityHeroContentSlide[]
}

export type SanityHeroContentSlide = {
    heroImage?: SanityImageSource
    heroBullet?: SanityImageSource
    heroImageAltText?: string
    heroImageBackground?: SanityImageSource
    contentTitle?: string
    contentWelcomeMessage?: string
    contentText?: string
    ctaButtonTitle?: string
    ctaButtonLink?: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageSource
    cardImageAltText: string
    cardImageBackground: SanityImageSource
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageSource
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id: string
    imageSrc: SanityImageSource
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageSource
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

// export type SanityImageSource = SanityImageSource | {
//     _type: string,
//     asset: {
//         _ref: string,
//         _type: "reference"
//     }
// }

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageSource
    heroImageAltText: string
    heroImageBackground?: SanityImageSource
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type ServiceAmenityType = {
    name: string
    imageSrc?: SanityImageSource
    title: string
    description: string
    muiIcon?: string
} & SanityDocumentLike

export type ThwPositivePsychologySectionType = {
    name?: string
    superTitle?: string
    contentTitle?: string
    contentText?: string
    contentBullets?: string[]
    imageSrc?: SanityImageSource
    imageSrcAltText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
}

export type ProprietorAtAGlanceType = {
    serviceName: string
    serviceTitle: string
    sessionList: string[]
    dividerImage?: SanityImageSource
    amenitiesSectionTitle: string
    amenities: string[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorImage?: SanityImageSource
    proprietorName: string
    proprietorTitle: string
    proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    contentText: string[]
    proprietorImageAltText: string
    proprietorSignatureImage?: SanityImageSource
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    _type?: "transformMottoSection",
    contentText: string
    parallaxImage: SanityImageSource
    contentSuperTitle: string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageSource
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageSource
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type ThwServiceItemNoRefType = {
    name: string
    imageSrc?: SanityImageSource
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageSource
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
} & SanityDocumentLike

export type AnimatedServiceItemNoRefType = {
    name?: string
    imageSrc?: SanityImageSource
    iconImageSrc?: SanityImageSource
    backgroundImageSrc?: SanityImageSource
    imageSrcAltText?: string
    contentTitle?: string
    contentText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    learnMoreLink?: string
    learnMoreText?: string
    educationPageTitle?: string
    educationPageSlimHeroImage?: SanityImageSource
    extendedDescriptions?: string[]
    benefitsOfServiceTitle?: string
    benefitsOfServiceContents?: string[]
    benefitsOfServiceBullets?: string[]
    serviceAmenities?: ServiceAmenityType[] | undefined
    slug?: SanitySlug
} & SanityDocumentLike

export type AnimatedAboutUsSectionType = {
    name: string
    heroBullet?: SanityImageSource
    title: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: AnimatedServiceItemNoRefType[] | undefined
    highlightedAmenities?: ServiceAmenityType[]
    highlightedAmenitiesTitle?: string
    highlightedAmenitiesTexts?: string[]
    highlightedAmenitiesBullets?: string[]
    servicesImageSrcArr: (SanityImageSource | undefined)[]
    servicesMasonryAccentImageSrc?: SanityImageSource
}

export type AnimatedServicesSectionType = {
    name: string
    heroBullet?: SanityImageSource
    contentTitle: string
    contentPreTitle: string
    imagesArray: SanityImageSource[]
    contentTexts: string[]
    servicesList: AnimatedServiceItemNoRefType[]
    contentSummaryTitle: string
    contentSummaryTexts: string[]
    ctaButtonText: string
    ctaButtonLink: string
    videoPreviewImageSrc?: SanityImageSource
    videoPreviewSectionBackgroundImageSrc?: SanityImageSource
    videoUrl?: string
    videoPreviewText: string
}

export type ThwServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ThwServiceItemNoRefType[]
}
export type ThwWhyChooseUsSectionType = {
    name?: string
    sectionTitle?: string
    prosList?: ThwWhyChooseUsItemType[]
    imageSrc?: SanityImageSource
    imageSrcAltText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc?: SanityImageSource
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type ThwContactUsSectionType = {
    name: string
    bgImageSrc?: SanityImageSource
    lhsTitle: string
    lhsContentText: string
    phone?: string
    email?: string,
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    youtube?: string,
    rhsTitle: string,
    formSubmitButtonText: string
}


//MixedFeelingsByT Types
export type MfbtHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageSource
    heroImageAltText: string
    heroImageBackground?: SanityImageSource
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type MfbtAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageSource
    proprietorName: string
    proprietorTitle: string
    // proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    favDrinkTitle: string
    favDrinkSectionTitle: string
    favDrinkImage: SanityImageSource
    favDrinkImage2: SanityImageSource
    favDrinkDescription: string
    contentText: string[]
    proprietorImageAltText: string
    // proprietorSignatureImage: SanityImageSource
    // proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type MfbtPaymentMethodSectionType = {
    name: string
    title: string
    mainPaymentImage: SanityImageSource,
    mainPaymentName: string,
    paymentImage1: SanityImageSource,
    paymentName1: string,
    paymentImage2: SanityImageSource,
    paymentName2: string,
    paymentImage3: SanityImageSource,
    paymentName3: string,
}


export type ResumeBioSectionType = {
    name?: string
    title?: string
    careerTitle?: string
    introduction?: string
    contactMeButtonTitle?: string
    resumeFileDownloadText?: string
    resumeFile?: FileAsset
    cvFileDownloadText?: string,
    cvFile?: FileAsset
    mainImage?: SanityImageSource
}

export type BartenderHeroSectionType = {
    name?: string
    title?: string
    imageSrc?: SanityImageSource
    bartender?: SanityBusinessContact
    careerTitle?: string
    textContent?: string
}

export type SanityRef = Reference

export type ResumeSkillType = {
    _id?: string
    _createdAt?: string
    _updatedAt?: string
    _rev?: string
    _type?: "ResumeSkill"
    name?: string
    title?: string
    searchableOnPages?: SanityRef[]
    description?:string
    versions?: string[]
    proficiency?: number
    iconPngSrc?: SanityImageSource
} & SanityDocumentLike

export type ResumeSkillSet = {
    _type: "ResumeSkillset"
    name?: string
    title?: string
    skills?: ResumeSkillType[]
} & SanityDocumentLike

export type ResumeSkillSectionType = {
    _type: "ResumeSkillSection"
    name?: string
    searchableOnPages?: SanityRef[]
    title?: string
    introduction?: string
    skillsets?: ResumeSkillSet[]
} & SanityDocumentLike

export type ResumeExperienceType = {
    name?: string
    _id?: string
    _rev?: string
    "_type": "ResumeExperience"
    title?: string
    companySubtitle?: string
    companyName?: string
    locationCity?: string
    locationState?: string
    dateStart?: Date | string
    dateEnd?: Date | string
    description?: string
    bulletedDescription?:string[]
    _createdAt?: string
    _updatedAt?: string
    skillsUsed?: ResumeSkillType[]
    isPresentPosition?: boolean
}

export type ResumeExperienceSectionType = {
    name?: string
    _type?: "ResumeExperienceSection"
    title?: string
    introduction?: string
    experiences?: ResumeExperienceType[]
}

export type BartenderExperienceSectionType = {
    name?: string
    _type?: "BartenderExperienceSection"

    title?: string
    introduction?: string
    experiences?: ResumeExperienceType[]
}

export type ResumeEducation = {
    name?: string
    institutionName?: string
    qualification?: string
    locationCity?: string
    locationState?: string
    dateStart?: Date | string
    dateEnd?: Date | string
    _type: "ResumeEducation"
    description?: string
}

export type ResumeEducationSectionType = {
    name?: string
    "_type": "ResumeEducationSection"
    title?: string
    introduction?: string
    educationExperiences?: ResumeEducation[]
}

export type ResumeFeedback = {
    name?: string
    customerName?: string
    customerTitle?: string
    companyName?: string
    qualification?: string
    quote?: string
    imageSrc?: SanityImageSource
    _type?: "ResumeFeedback"
}

export type ResumeFeedbackSectionType = {
    _type?: "ResumeFeedbackSection"
    name?: string
    title?: string
    introduction?: string
    feedbackEntries?: ResumeFeedback[]
}

export type ResumePortfolioItemType = {
    _type?: "ResumePortfolioItem"
    _id?: string
    name?: string
    title?: string
    coverImage?: SanityImageSource
    inceptionDate?: Date | string
    slug?: SanitySlug
    skillsHighlighted?: ResumeSkillType[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?: SanityImageSource[]
}
export type AnimatedPortfolioItemType = {
    _type?: "AnimatedPortfolioItem"
    name?: string
    preTitle?: string
    title?: string
    coverImage?: SanityImageSource
    inceptionDate?: Date | string
    slug?: SanitySlug
    skillsHighlighted?: ResumeSkillType[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?: SanityImageSource[]
}

export type ResumePortfolioSectionType = {
    name?: string
    _type?: "ResumePortfolioSection"
    preTitle?: string
    title?: string
    introduction?: string
    portfolioEntries?: ResumePortfolioItemType[]
}
export type AnimatedPortfolioSectionType = {
    name?: string
    _type?: "AnimatedPortfolioSection"
    preTitle?: string
    heroBullet?: SanityImageSource
    title?: string
    portfolioEntries?: AnimatedPortfolioItemType[]
}


export type ResumeContactUsSectionType = {
    name: string
    _type?: "ResumeContactUsSection"
    title?: string
    introduction?: string
    formSubmitButtonText: string
}


export type WebDevHeroContentSectionType = {
    name: string
    title: string
    heroImageBackground?: SanityImageSource
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type StatsCounterSectionType = {
    name: string
    title: string
    stats: { statValue: string, statContent: string, isEnabled: boolean, }[]
}


export type WebDevAboutUsSectionType = {
    name: string
    imageSrc: SanityImageSource
    welcomeMessage: string
    contentTitle: string
    contentText: string[]
    ctaButtonText: string
    ctaButtonLink?: string
}


export type ServiceItemNoRefType = {
    name?: string
    imageSrc?: SanityImageSource
    imageSrcAltText?: string
    contentTitle?: string
    contentText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    learnMoreLink?: string
    learnMoreText?: string
    educationPageTitle?: string
    educationPageSlimHeroImage?: SanityImageSource
    extendedDescriptions?: string[]
    benefitsOfServiceTitle?: string
    benefitsOfServiceContents?: string[]
    benefitsOfServiceBullets?: string[]
    serviceAmenities?: ServiceAmenityType[]
    slug?: SanitySlug
}

export type PortfolioSectionType = {
    name?: string
    introduction?: string
    contentTitle?: string
    contentPreTitle?: string
    contentText?: string
    contentTexts?: string[]
    portfolioEntries?: ResumePortfolioItemType[]
    servicesList?: ServiceItemNoRefType[]
}

export type WebDevTestimonialsType = {
    name?: string
    customerName?: string
    customerTitle?: string
    companyName?: string
    qualification?: string
    quoteSummary?: string
    quote?: string
    imageSrc?: SanityImageSource
}

export type WebDevTestimonialsSectionType = {
    name?: string
    preTitle?: string
    backgroundImage?: SanityImageSource
    title?: string
    introduction?: string
    feedbackEntries?: WebDevTestimonialsType[]
}


export type HowItWorksStepNoRefType = {
    _type?: "WebDevHowItWorksStep",
    title?: string
    name?: string
    slug?: SanitySlug
    content?: string
    imageSrc?: SanityImageSource
    isEnabled?: boolean
    contentText?: string
    contentTexts?: string[]
    learnMoreLink?: string
    learnMoreText?: string
}
export type PricingPlanNoRefType = {
    // _type?: "WebDevHowItWorksStep",
    title?: string
    name?: string
    slug?: SanitySlug
    cost?: string
    isEnabled?: boolean
    contentTexts?: string[]
    learnMoreLink?: string
    learnMoreText?: string
}
export type HowItWorksSectionType = {
    _type: "WebDevHowItWorksSection"
    name: string
    contentTitle: string
    contentPreTitle: string
    contentTexts: string[]
    steps: HowItWorksStepNoRefType[]
}
export type PricingSectionType = {
    // _type: "WebDevHowItWorksSection"
    name: string
    contentTitle: string
    contentPreTitle: string
    contentTexts: string[]
    plans: PricingPlanNoRefType[]
}

export type DevelopmentHeaderSectionType = {
    name: string
    headerMenuRef: SanityMenuContainer
}
export type HeaderSectionType = {
    title?: string
    name?: string
    isSearch?: boolean
    isShowSocialMedia?: boolean
    isEnhanced?: boolean
    backgroundColor?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    logoImgSrc?: SanityImageSource
    highlightedDetails?: ServiceAmenityType[]
    headerMenuRef?: SanityMenuContainer
}
export type DevelopmentFooterSectionType = {
    name: string
    footerMenuRef: SanityMenuContainer
}
export type FooterSectionType = {
    _type: string
    name: string
    backgroundImgSrc?: SanityImageSource
    backgroundColor?: string
    isSocialMediaBlock: boolean
    topPadding?: string
    footerMenuRef: SanityMenuContainer
}

// export type SanityDocumentFields = {
//     _rev?: string
//     _createdAt?: string
//     _updatedAt?: string
//     _type?: string
//     _id?: string
// }

export type HeadlineCTASectionType = {
    name: string
    isHideBorder?: boolean
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    insetTop: string
    insetBottom: string
    insetLeft: string
    insetRight: string
    backgroundImgSrc: SanityImageSource
}

export type MapSectionType = {
    name: string
    address: string
    latitude: string
    longitude: string
    contactInfo: ServiceAmenityType[]
    mapMarkerTitle: string
    mapMarkerLabel: string
}

export type FlashCardSectionType = {
    _type?: "FlashCardSection"
    name: string
    title: string
    isFlashCard?: boolean
    isDarkMode?:boolean
    slug: SanitySlug
}

export type DrinkerySpecialsSectionType = {
    name: string
    contentTitle: string
    contentText: string
    disclaimer: string
    subTitle: string
    theSpecials: DrinkerySpecialType[]
    imageSrc?: SanityImageSource
    imageSrcAltText: string
}

export type TeamSectionType = {
    name: string
    contentPretitle?: string
    contentTitle: string
    contentTexts?: string[],
    teamList: TeamMember[],
}

export type DrinkeryOtherSideSectionType = {
    name: string
    contentPretitle?: string
    contentTitle: string
    isLink?: boolean
    isShowMenu?: boolean
    description: string
    isLogo?: boolean
    theLiquors?: string[]
    imageSrc?: SanityImageSource
    // contentTexts: string[],
    // teamList: TeamMember[],
}
export type MasonryPhotoItem = {
    imageSrc?: SanityImageSource
    cols?: string
    title: string
    subtitle: string
}

export type DrinkeryAlbumSectionType = {
    name: string
    isLogo?:boolean
    contentPretitle?: string
    hashtags:string[]
    contentTitle: string
    contentText: string
    imageList: MasonryPhotoItem[]
    // contentTexts: string[],
    // teamList: TeamMember[],
}

export type TeamMember =  {
    image?: SanityImageSource
    title: string
    firstName: string
    lastName?: string
    isEnabled: boolean
    homeCity?:string
    homeState?:string
    hobby?:string
    faveDrinkToMake?:string
}

export type DrinkerySpecialType = {
    name: string
    title: string
    content: string
    imageSrc?: SanityImageSource
}

export type HolidayHeadlineSectionType = {
    name: string
    slug: SanitySlug
    contentText: string
    contentSubtext: string
    holidayDate: Date | string
    holidayIconLeft?: SanityImageSource
    holidayIconRight?: SanityImageSource
}

export type ListSectionType = {
    "_type": "SimpleStringListSection",
    "_id": string,
    "name": string,
    title: string
    backgroundColor: string
    textListItems: string[]
}

