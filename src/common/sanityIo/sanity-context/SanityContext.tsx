import {SanityRef} from "../Types";
import React from "react";
import {
    ResumeExperienceType,
    ResumePortfolioItemType,
    ResumeSkillType,
    SanityImageAsset
} from "../../../components/BlockContentTypes";

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
    useFetchMenuBySlugQuery?:any,
    useFetchServicesQuery?:any,
    useFetchRefsQuery?:any,
    useFetchMenuByRefQuery?:any,
    fetchMuiTheme?:any,
    fullTextSearch?:any
    urlFor?: any
    cocktailUrlFor?:any
    getPlaceholderImageUrl?:any
    placeholderOrImage?:(imageSrc?: SanityImageAsset, placeHolderWidth?: number, placeHolderHeight?: number, text?: string) => string
    useFetchAllFlashCards?: any,
    useFetchAllBarIngredients?: any,
    useFetchAllLiquorTypes?: any,
    useFetchFilteredIngredients?: any,
    useFetchFilteredCocktails?: any,
    useFetchSearchedCocktails?: any,
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
    getSanityDocumentRef?: (sanityId: string) => SanityRef
    fetchSkillExperiences?:(skillType:ResumeSkillType)=>Promise<ResumeExperienceType[]>
    fetchPortfolioItems?:(skillType:ResumeSkillType)=>Promise<ResumePortfolioItemType[]>
};

const SanityContext = React.createContext<SanityContextType>({});

export default SanityContext;
