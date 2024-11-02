import {SanityAsset} from '@sanity/asset-utils';
import {SanityRef} from '../../../common/sanityIo/Types';
import BallSourceEnum from './enums/BallSource.enum'
import {BallTypeEnum} from './enums/BallType.enum'
import STEP_BALL_FORM_VALIDATION_STATUS_CODES from './enums/StepFormValidationCodes.enum'
import {Breakpoint} from "@mui/material";


export type SearchParams = {
    keywords?: string,
    ballType?: string,
    endDate?: string,
    startDate?: string,
    region?: string,
}

export declare type SanityLocation = {
    locationName?: string,
    street1?: string,
    street2?: string,
    city?: string,
    state?: string,
    zip?: string,
    url?: string,
    country?: string
}

export type FormFieldValidationStatus = {
    messageText?: string,
    statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES
}

export type ValidationResponse = {
    status?: FormFieldValidationStatus,
    value: any
}

export declare type SanitySlug = {
    _type: string;
    current: string;
};

export declare type SanityImage = {
    asset: {
        _id?: string;
        url?: string;
        _ref?: string;
    };
};

export declare type SanityUser = {
    _id?: string;
    email?: string;
    slug?: SanitySlug;
    profileImage?: SanityImage;
    firebaseUUID?: string;
    username?: string;
    admin?: boolean;
    signInProvider?: string;
    favorites?: SanityRef[];
}

export declare type SanityComment = {
    user: SanityUser,
    comment: string,
    timestamp: string,
    _createdAt?: string
}

export declare type SanityBallType = {
    slug?: SanitySlug,
    flyer?: SanityImage,
    _createdAt?: string,
    ballTitle?: string,
    host?: string,
    approval?: boolean,
    featured?: boolean,
    categories?: any,
    miniGrandPrize?: any,
    grandPrize?: any,
    ballType?: string,
    createdBy?: any,
    description?: string,
    functionStartDate?: any,
    functionEndDate?: any,
    region?: string,
    source?: string,
    location?: SanityLocation,
    '_id'?: string,
    uid?: string,
    website?: string,
    notifyEmail?: string,
    notifyName?: string,
    notifyOnApproval?: boolean,
    eventbriteId?: string
}

export type SortType = 'asc' | 'desc'

export declare type BallSearchParamsType = {
    keywords?: string,
    ballType?: string,
    region?: string,
    endDate?: string,
    startDate?: string
}

export declare type SanityBallFavorite = {
    _createdAt?: string;
    '_id'?: string;
    ballTitle?: string;
    slug?: any;
    flyer?: any;
    ballType: string;
    functionStartDate: any;
    location: any;
}

export declare type AwUser = {
    admin: boolean,
    email: string,
    firebaseUUID: string,
    username: string,
    profileImage: SanityImage,
    signInProvider: string,
    favorites: SanityRef[],
    _id: string
}

export declare type BackendUserInfo = {
    _id: string,
    username: string,
    email?: string,
    firebaseUUID: string,
    admin: boolean,
    photoURL: string,
    signInProvider: string,
    status: string,
    favorites: SanityRef[] | undefined,
    profileImage: SanityImage
}

export declare type SanityHouse = {
    isVerified?: boolean,
    houseName?: string,
    location?: SanityLocation,
    firstname?: string,
    lastname?: string,
    submittedByFirebaseUUID?: SanityRef,
    submittedByEmail?: string,
    houseFather?: string,
    houseFatherStatus?: string,
    houseFatherContact?: string
    houseMother?: string,
    houseMotherStatus?: string,
    houseMotherContact?: string
}

export declare type SanityCheckinType = {
    _createdAt: string,
    _id: string,
    firstname: string,
    lastname: string,
    business: string,
    businessUrl: string,
    user?: SanityRef,
    email: string,
    houseAffiliation: string
    // house: SanityRef,
    houseSubmission?: SanityHouse,
}

export declare type SanityCheckinPageType = {
    _id: string,
    slug: SanitySlug,
    title: string,
    ball: SanityBallType,
    qrCode: SanityImage,
    checkinList: SanityCheckinType[]
}

export type CheckinFormType = {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    businessName?: string,
    businessUrl?: string,
    houseSubmission?: SanityHouse
}

export type ContactUsFormState = {
    firstName?: string,
    lastName?: string,
    companyName?: string,
    email?: string,
    phone?: string,
    comment?: string,
    isUpdateConsent?: string,
    isOther?: string
}

export type CheckBoxesType = {
    iAgree: boolean,
    clickHere: boolean,
    press: boolean,
    publicEvents: boolean,
    privateEvents: boolean,
    general: boolean,
    other: boolean
}

export enum CategoryGenderType {
    "OTA" = 'OTA',
    "FQ" = 'FQ',
    "BQ" = 'BQ',
    "DRAGS" = 'Drags',
    "TRANSMAN" = 'Transman',
    "WOMAN" = 'Women',
    "FF" = 'FF',
    "MF" = 'MF',
}

export enum CategoryGenderSubtitlesType {
    OTA = 'Open to All',
    FQ = 'Fem Queen',
    BQ = 'Butch Queen',
    DRAGS = 'Drags',
    TRANSMAN = 'Transman',
    WOMAN = 'Women',
    FF = 'Female Figure',
    MF = 'Male Figure',
}

export enum CategoryTypeType {
    GRANDPRIZE = 'GrandPrize',
    MINIGRANDPRIZE = 'Mini Grand Prize',
    REGULAR = 'Regular',
}

export enum CategoryNameType {
    VOGUE = 'Vogue/Performance',
    REALNESS = 'Realness',
    FACE = 'Face',
    RUNWAY = 'Runway',
    BESTDRESSED = 'Best Dressed',
    RWT = 'RwT',
    SEXSIREN = 'Sex Siren',
    BODY = 'Body',
    STREETWEAR = 'Streetwear',
    FOOTWEAR = 'Foot & Eyewear',
    SPECIALTY = 'Specialty/Other',
}

export enum CategoryPrizeType {
    MONETARY = 'Monetary',
    ONLYTROPHY = 'Trophy Only',
    GIFT = 'Gift',
}

export type Category = {
    catType?: CategoryTypeType,
    catGender?: CategoryGenderType,
    versus?: boolean,
    catVsGender?: CategoryGenderType,
    catName?: CategoryNameType,
    catDescription?: string,
    catPrize?: CategoryPrizeType,
    monetaryPrize?: number
}

export type OldBallType = {
    CreatedBy: string;
    Draft: number;
    Flyer: string;
    ID: number;
    IP: string;
    Key: string;
    LastUpdated: string;
    State: string;
    Timestamp: string;
    UpdatedBy: string;
    address: string;
    approval: string;
    ballTitle: string;
    ballType: string;
    catDescription: string;
    catName: string;
    catType: string;
    city: string;
    description: string;
    email: string;
    endTime: string;
    grandprize: string;
    host: string;
    miniGrandPrize: string;
    phone: number;
    prize: string;
    region: string;
    source: string;
    startDate: string;
    startTime: string;
    venue: string;
    website: string;
    uid: string;
};

export type FirebaseBallType = {
    flyer: string;
    Timestamp: string;
    ballTitle: string;
    host: string;
    approval: string;
    categories: Category[];
    miniGrandPrize: string;
    grandprize: string;
    ballType: string;
    createdBy: string;
    description: string;
    startDate: string;
    startTime: string;
    endTime: string;
    region: string;
    source: string;
    venue: Address;
    website: string;
    uid: string;
    _id?: string;
};

export type Address = {
    commonName: string;
    street: string;
    street2: string;
    city: string;
    state: string;
}

export type SanityContactUs = ContactUsFormState & CheckBoxesType

export type BasicBallInfoState = {
    ballType?: BallTypeEnum
}

export type BallDetailState = {
    ballTitle?: string,
    host?: string,
    description?: string
    website?: string
    ballDetailValid?: boolean
}

export type BallLocationState = {
    location?: SanityLocation
}

export type BallDateState = {
    functionStartDate?: string,
    functionStartTime?: string,
    functionEndDate?: string,
    functionEndTime?: string,
    ballDateValid?: boolean
}

export type AddBallFlyerState = {
    fileUploaded?: any,
    flyer?: { asset: Partial<SanityAsset> }
}

export type AddBallCategoriesState = {
    categories?: Category[]
}

export type NotifyOnApprovalState = {
    notifyName?: string
    notifyEmail?: string
    notifyOnApproval?: boolean
}

export type BallSourceState = {
    source?: BallSourceEnum
}

export type AddBallState =
    BasicBallInfoState
    & BallDetailState
    & BallLocationState
    & BallDateState
    & AddBallFlyerState
    & AddBallCategoriesState
    & NotifyOnApprovalState
    & BallSourceState

export type StepValidationTableType = {
    areDatesValid?: boolean,
    isBallDetailValid?: boolean,
    isNotifyOnApprovalValid?: boolean
}

export type AppSettingsType = {
    newAddBallStepsFlow?: boolean
}

export type DataTableColumnType<T> = {
    id: string;
    label: (string | (() => any) | undefined);
    hidden?: Breakpoint[];
    minWidth: number;
    maxWidth?: number;
    renderer: (row: T, screenWidth?: Breakpoint) => string | any;
}

export type AWBallSectionType = {
    name: string
    slug: SanitySlug
}
export type AWBallToolsType = {
    name: string
    slug: SanitySlug
}

export type AWBallSummarySectionType = {
    name: string
    slug: SanitySlug
    showFeatured: boolean
    showUpcoming: boolean
    showRemaining: boolean
}
export type AWSingleBallSectionType = {
    name: string
    slug: SanitySlug
}

export type  AWHouseInfoSectionType = {
    name: string
}
export type  AWFAQSectionType = {
    name: string
    faqContent: {question:string, answer:string,}[]
}
export type  AWAboutSectionType = {
    name: string
    contentText: string[]
    contentTitle: string
}
