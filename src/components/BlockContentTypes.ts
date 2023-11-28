import {SanityImageSource} from "@sanity/asset-utils";
import {SanityMenuContainer, SanityMuiTheme, SanityRef, SanitySlug} from "../common/sanityIo/Types";
import {FileAsset, ImageAsset} from "@sanity/types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type HeroAnimatedContentSectionType = {
    name: string
    title: string
    theme: SanityMuiTheme
    contentSlides: SanityHeroContentSlide[]
}

export type SanityHeroContentSlide = {
    heroImage: SanityImageAsset
    heroBullet: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentWelcomeMessage: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageAsset
    cardImageAltText: string
    cardImageBackground: SanityImageAsset
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageAsset
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id: string
    imageSrc: SanityImageAsset
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type SanityImageAsset = SanityImageSource | {
    _type: string,
    asset: {
        _ref: string,
        _type: "reference"
    }
}

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type ServiceAmenityTypeRef = SanityRef
export type ServiceAmenityType = {
    name: string
    imageSrc?: SanityImageAsset
    title: string
    description: string
} & SanityDocumentFields


export type ThwPositivePsychologySectionType = {
    name?: string
    superTitle?: string
    contentTitle?: string
    contentText?: string
    contentBullets?: string[]
    imageSrc?: SanityImageAsset
    imageSrcAltText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
}

export type ProprietorAtAGlanceType = {
    serviceName: string
    serviceTitle: string
    sessionList: string[]
    dividerImage?: SanityImageAsset
    amenitiesSectionTitle: string
    amenities: string[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorImage?: SanityImageAsset
    proprietorName: string
    proprietorTitle: string
    proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    contentText: string[]
    proprietorImageAltText: string
    proprietorSignatureImage?: SanityImageAsset
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    _type?: "transformMottoSection",
    contentText: string
    parallaxImage: SanityImageAsset
    contentSuperTitle: string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type ThwServiceItemNoRefType = {
    name: string
    imageSrc?: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
} & SanityDocumentFields

export type AnimatedServiceItemNoRefType = {
    name: string
    imageSrc?: SanityImageAsset
    iconImageSrc?: SanityImageAsset
    backgroundImageSrc?: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
} & SanityDocumentFields

export type AnimatedAboutUsSectionType = {
    name: string
    heroBullet?:SanityImageAsset
    title:string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: AnimatedServiceItemNoRefType[]
    highlightedAmenities?: ServiceAmenityType[]
    highlightedAmenitiesTitle?: string
    highlightedAmenitiesTexts?: string[]
    highlightedAmenitiesBullets?: string[]
    servicesImageSrcArr: SanityImageAsset[]
    servicesMasonryAccentImageSrc: SanityImageAsset
}

export type AnimatedServicesSectionType = {
    name: string
    heroBullet?:SanityImageAsset
    contentTitle: string
    contentPreTitle: string
    contentTexts: string[]
    servicesList: AnimatedServiceItemNoRefType[]
    contentSummaryTitle: string
    contentSummaryTexts: string[]
    ctaButtonText: string
    ctaButtonLink: string
    videoPreviewImageSrc:SanityImageAsset
    videoPreviewSectionBackgroundImageSrc: SanityImageAsset
    videoUrl:string
    videoPreviewText:string
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
    imageSrc?: SanityImageAsset
    imageSrcAltText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc?: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type ThwContactUsSectionType = {
    name: string
    bgImageSrc?: SanityImageAsset
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
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type MfbtAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageAsset
    proprietorName: string
    proprietorTitle: string
    // proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    favDrinkTitle: string
    favDrinkSectionTitle: string
    favDrinkImage: SanityImageAsset
    favDrinkImage2: SanityImageAsset
    favDrinkDescription: string
    contentText: string[]
    proprietorImageAltText: string
    // proprietorSignatureImage: SanityImageAsset
    // proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type MfbtPaymentMethodSectionType = {
    name: string
    title: string
    mainPaymentImage: SanityImageAsset,
    mainPaymentName: string,
    paymentImage1: SanityImageAsset,
    paymentName1: string,
    paymentImage2: SanityImageAsset,
    paymentName2: string,
    paymentImage3: SanityImageAsset,
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
    mainImage?: SanityImageAsset
}


export type ResumeSkill = {
    _id?: string
    _createdAt?: string
    _updatedAt?: string
    _rev?: string
    _type?: "ResumeSkill"
    name?: string
    title?: string
}
export type ResumeSkillSet = {
    _type?: "ResumeSkillset"
    name?: string
    title?: string
    skills?: ResumeSkill[]
}

export type ResumeSkillSectionType = {
    name?: string
    title?: string
    introduction?: string
    skillsets?: ResumeSkillSet[]
}


export type ResumeExperience = {
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
    _createdAt?: string
    _updatedAt?: string
    skillsUsed?: ResumeSkill[]

}

export type ResumeExperienceSectionType = {
    name?: string
    _type?: "ResumeExperienceSection"

    title?: string
    introduction?: string
    experiences?: ResumeExperience[]
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
    imageSrc?: SanityImageAsset
    _type?: "ResumeFeedback"
}

export type ResumeFeedbackSectionType = {
    _type?: "ResumeFeedbackSection"
    name?: string
    title?: string
    introduction?: string
    feedbackEntries?: ResumeFeedback[]
}

export type ResumePortfolioItem = {
    _type?: "ResumePortfolioItem"
    name?: string
    title?: string
    coverImage?: SanityImageAsset
    inceptionDate?: Date | string
    slug?: SanitySlug
    skillsHighlighted?: ResumeSkill[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?: SanityImageAsset[]
}
export type AnimatedPortfolioItemType = {
    _type?: "AnimatedPortfolioItem"
    name?: string
    preTitle?:string
    title?: string
    coverImage?: SanityImageAsset
    inceptionDate?: Date | string
    slug?: SanitySlug
    skillsHighlighted?: ResumeSkill[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?: SanityImageAsset[]
}

export type ResumePortfolioSectionType = {
    name?: string
    _type?: "ResumePortfolioSection"
    preTitle?: string
    title?: string
    introduction?: string
    portfolioEntries?: ResumePortfolioItem[]
}
export type AnimatedPortfolioSectionType = {
    name?: string
    _type?: "AnimatedPortfolioSection"
    preTitle?: string
    heroBullet?: SanityImageAsset
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
    heroImageBackground?: SanityImageAsset
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WebDevStatsCounterSectionType = {
    name: string
    title: string
    stats: { statValue: string, statContent: string }[]
}


export type WebDevAboutUsSectionType = {
    name: string
    imageSrc: SanityImageAsset
    welcomeMessage: string
    contentTitle: string
    contentText: string[]
    ctaButtonText: string
    ctaButtonLink: string
}


export type ServiceItemNoRefType = {
    name: string
    imageSrc?: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle: string
    benefitsOfServiceContents: string[]
    benefitsOfServiceBullets: string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type PortfolioSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ServiceItemNoRefType[]
}

export type WebDevTestimonialsType = {
    name?: string
    customerName?: string
    customerTitle?: string
    companyName?: string
    qualification?: string
    quoteSummary?: string
    quote?: string
    imageSrc?: SanityImageAsset
}

export type WebDevTestimonialsSectionType = {
    name?: string
    preTitle?: string
    backgroundImage?: SanityImageAsset
    title?: string
    introduction?: string
    feedbackEntries?: WebDevTestimonialsType[]
}


export type HowItWorksStepNoRefType = {
    title: string
    slug: SanitySlug
    content: string
    imageSrc: SanityImageAsset
    isEnabled: boolean
    contentText: string
    contentTexts: string[]
    learnMoreLink: string
    learnMoreText: string
}
export type HowItWorksSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentTexts: string[]
    steps: HowItWorksStepNoRefType[]
}

export type DevelopmentHeaderSectionType = {
    name: string
    headerMenuRef: SanityMenuContainer
}
export type HeaderSectionType = {
    name: string
    isSearch: boolean
    isEnhanced: boolean
    ctaButtonText: string
    ctaButtonLink: string
    highlightedDetails: ServiceAmenityType[]
    headerMenuRef: SanityMenuContainer
}
export type DevelopmentFooterSectionType = {
    name: string
    footerMenuRef: SanityMenuContainer
}
export type FooterSectionType = {
    name: string
    footerMenuRef: SanityMenuContainer
}

export type SanityDocumentFields = {
    _rev?: string
    _createdAt?: string
    _updatedAt?: string
    _type?: string
    _id?: string
}