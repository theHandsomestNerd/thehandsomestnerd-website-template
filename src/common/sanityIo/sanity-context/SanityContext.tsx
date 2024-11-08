import {SanityRef} from "../Types";
import React, { Context } from "react";
import {
    ResumeExperienceType,
    ResumePortfolioItemType,
    ResumeSkillType,
} from "../../../components/BlockContentTypes";
import {SanityHouse} from "../../../components/templates/anybody-walking/ballroomTypes";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

export type SanityContextType = {
    initSanity?: (
        projectId?: string,
        dataset?: string,
        apiVersion?: string,
        useCdn?: boolean,
        cocktailProjectId?: string,
        cocktailDataset?: string,
    ) => void
    theSanityClient?: any,
    skillReferenceSearch?:any,
    fetchRef?:any,
    fetchRefs?:any,
    fetchLandingPage?:any,
    fetchBlogPost?:any,
    fetchLatestBlogPostPreview?:any,
    fetchAllBlogPostPreviews?:any,
    fetchBlogPostPreviewsByCategory?:any,
    fetchBlogPostPreviewsByKeyword?:any,
    fetchLandingPageHeaderMenu?:any,
    fetchLandingPageFooterMenu?:any,
    fetchBlogCategories?:any,
    fetchBlogGroup?:any,
    fetchWhySwitch?:any,
    // useFetchPageBySlugQuery?:any,
    fetchPageBySlugQuery?:any,
    fetchDocumentByTypeAndSlugQuery?:any,
    // useFetchMenuBySlugQuery?:any,
    // useFetchServicesQuery?:any,
    // useFetchRefsQuery?:any,
    // useFetchMenuByRefQuery?:any,
    fetchMuiTheme?:any,
    fullTextSearch?:any
    urlFor?: (source: SanityImageSource) => undefined | ImageUrlBuilder,
    placeholderOrImage?:(imageSrc?: SanityImageSource, placeholderWidth?: number, placeholderHeight?: number, text?: string) => string
    cocktailUrlFor?:any
    // useFetchAllFlashCards?: any,
    useFetchAllBarIngredients?: any,
    useFetchAllLiquorTypes?: any,
    // useFetchFilteredIngredients?: any,
    // useFetchFilteredCocktails?: any,
    // useFetchSearchedCocktails?: any,
    getProduct?: any,
    // useFetchMyBarIngredients?: any,
    fetchMyBarIngredients?: any,
    useFetchMyFilteredIngredients?: any,
    useFetchMyCocktails?: any,
    getMyProduct?: any

    fetchBall?: any,
    getBallBySlug?: any,
    createBall?: any,
    getAppSettingsFromSanity?: any,
    createCheckin?: any,
    createHouse?: any,
    createUser?: any,
    updateAwUser?: any,
    updateCheckin?: any,
    addCheckinToCheckinList?: any,
    fetchAllApprovedBalls?: any,
    uploadImageFromURL?: any,
    uploadBallFlyerImage?: any,
    uploadProfileImage?: any,
    addFavorite?: any,
    addEventbriteId?: any,
    removeFavorite?: any,
    createRefStringFromRefs?: any,
    fetchFavorites?: any,
    subscribeToUserUpdateState?: any,
    fetchUserById?: any,
    createComment?: any,
    fetchCommentsByBallId?: any,
    getSanityUserRef?: any,
    createContactUs?: any

    addBall?: any
    fetchVerifiedHouses?: ()=>Promise<SanityHouse[]>
    getSanityDocumentRef?: (sanityId: string) => SanityRef
    fetchSkillExperiences?:(skillType:ResumeSkillType)=>Promise<ResumeExperienceType[]>
    fetchPortfolioItems?:(skillType:ResumeSkillType)=>Promise<ResumePortfolioItemType[]>
};

let SanityContext: Context<SanityContextType> = React.createContext<SanityContextType>({});

export default SanityContext;
