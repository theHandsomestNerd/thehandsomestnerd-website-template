import {FunctionComponent, PropsWithChildren, useContext, useEffect, useMemo, useState,} from 'react';
import SanityContext from './SanityContext';
import createClient from "@sanity/client";
import {v4 as uuidv4} from 'uuid';
import {
    SanityBarInventoryType,
    SanityBlog,
    SanityBlogCategory,
    SanityBlogGroup,
    SanityBlogPreview,
    SanityCocktailIngredient,
    SanityCocktailType,
    SanityCommunityPage,
    SanityEvergreenPage,
    SanityHomePage,
    SanityImageCarousel,
    SanityLandingPage,
    SanityLiquorType,
    SanityMenuContainer,
    SanityMenuGroup,
    SanityMuiTheme,
    SanityOurStoryPage,
    SanityRef
} from "../Types";
import GroqQueries from "../groqQueries";
import groqQueries from "../groqQueries";
import {
    ResumeExperienceType, ResumePortfolioItemType,
    ResumeSkillType,
    SanityImageAsset,
    ThwServiceItemType,
    WhySwitchSectionType
} from "../../../components/BlockContentTypes";
import {useQuery} from "@tanstack/react-query";
import {SanityImageSource} from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import SearchContext, {
    SearchContextType
} from "../../../components/templates/cocktail-flash-cards/search-context/SearchContext";
import {
    AppSettingsType,
    CheckinFormType,
    SanityBallType,
    SanityCheckinPageType,
    SanityCheckinType,
    SanityComment,
    SanityContactUs,
    SanityHouse,
    SanityUser
} from "../../../components/templates/anybody-walking/ballroomTypes";
import imageUtils from "../../../components/templates/anybody-walking/imageUtils";
import clientUtils from "../../../components/templates/transform-hw/pages/under-construction-page/clientUtils";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

type IProps = {
    projectId?: string,
    dataset?: string,
    apiVersion?: string,
    useCdn?: boolean,
    skillReferenceSearch?: any,
    fetchRef?: any,
    fetchRefs?: any,
    fetchLandingPage?: any,
    fetchBlogPost?: any,
    fetchLatestBlogPostPreview?: any,
    fetchAllBlogPostPreviews?: any,
    fetchBlogPostPreviewsByCategory?: any,
    fetchBlogPostPreviewsByKeyword?: any,
    fetchLandingPageHeaderMenu?: any,
    fetchLandingPageFooterMenu?: any,
    fetchBlogCategories?: any,
    fetchBlogGroup?: any,
    fetchWhySwitch?: any,
    // useFetchPageBySlugQuery?: any,
    useFetchMenuBySlugQuery?: any,
    useFetchServicesQuery?: any,
    useFetchRefsQuery?: any,
    useFetchMenuByRefQuery?: any,
    fetchMuiTheme?: any,
    fullTextSearch?: any,
    urlFor?: any
    cocktailUrlFor?: any
    getPlaceholderImageUrl?: any,
    placeholderOrImage?: (imageSrc?: SanityImageAsset, placeHolderWidth?: number, placeHolderHeight?: number, text?: string) => string,
    getCheckinBySlug?: any,
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

    fetchDocumentByTypeAndSlugQuery?: any
    getSanityDocumentRef?: (sanityId: string) => SanityRef

    fetchSkillExperiences?:(skill:ResumeSkillType)=>Promise<ResumeExperienceType[]>
    fetchPortfolioItems?:(skill:ResumeSkillType)=>Promise<ResumePortfolioItemType[]>
};

const PLACEHOLDER_URL = "https://placehold.co/"


const SanityProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [theSanityClient, setTheSanityClient] = useState<any>(undefined)
    const [theSanityBartenderClient, setTheSanityBartenderClient] = useState<any>(undefined)
    const [sanityConfig, setSanityConfig] = useState<any>()
    const [sanityBartenderConfig, setSanityBartenderConfig] = useState<any>()


    const [builder, setBuilder] = useState<ImageUrlBuilder>()
    const [cocktailBuilder, setCocktailBuilder] = useState<any>()


    useEffect(() => {
        if (sanityConfig) {
            console.log("sanityConfig initialized properly", sanityConfig)
            setTheSanityClient(createClient({
                projectId: sanityConfig.projectId,
                dataset: sanityConfig.dataset,
                apiVersion: sanityConfig.apiVersion,
                useCdn: sanityConfig.useCdn,
            }))

        } else {
            console.log('no sanity config')
        }
    }, [sanityConfig])

    useEffect(() => {
        if (sanityBartenderConfig) {
            // console.log("sanityConfig initialized properly", sanityConfig)
            setTheSanityBartenderClient(createClient({
                projectId: sanityBartenderConfig.projectId,
                dataset: sanityBartenderConfig.dataset,
                apiVersion: sanityBartenderConfig.apiVersion,
                useCdn: sanityBartenderConfig.useCdn,
            }))

        } else {
            console.log('no sanity bartender config')
        }
    }, [sanityBartenderConfig])

    useEffect(() => {
        if (theSanityClient !== undefined) {
            // console.log("getting image builders for", theSanityClient)
            setBuilder(imageUrlBuilder(theSanityClient))
        }
    }, [theSanityClient])

    useEffect(() => {
        if (theSanityBartenderClient !== undefined) {
            // console.log("getting image builders for bartender", theSanityBartenderClient)
            setCocktailBuilder(imageUrlBuilder(theSanityBartenderClient))
        }
    }, [theSanityBartenderClient])

    const initSanity = (projectId?: string,
                        dataset?: string,
                        apiVersion?: string,
                        useCdn?: boolean,
                        bartenderProjId?: string,
                        bartenderDataset?: string) => {
        // console.log("initializing sanity in provider", projectId, dataset, apiVersion, useCdn)
        setSanityConfig({
            projectId,
            dataset,
            apiVersion,
            useCdn
        });
        setSanityBartenderConfig({
            projectId: bartenderProjId,
            dataset: bartenderDataset,
            useCdn,
            apiVersion
        })
    }


    const fetchLandingPage = (slug: string): Promise<SanityLandingPage> => {
        return theSanityClient
            .fetch(
                `*[_type=="landingPage" && slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         welcomeMessage,
         headerText,
         "form":abForm->{instructionBlock, abFormType->{title}},
         utmSource,
         utmMedium,
         utmCampaign,
         publishedAt
       }`,
                {slug}
            ).then((data: SanityLandingPage[]) => {
                return data[0]
            })
    }

    const fetchBlogPost = (slug: string): Promise<SanityBlog> => {
        return theSanityClient
            .fetch(
                `*[_type=="post" && slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          mainImageCaption,
          body,
          category->{
            title,
            description,
            color
          },
          _createdAt
       }`,
                {slug}
            ).then((data: SanityBlog[]) => {
                return data[0]
            })
    }

    const fetchMuiTheme = (slug: string): Promise<SanityMuiTheme> => {
        return theSanityClient
            .fetch(
                `*[_type=="MuiTheme" && slug.current == $slug]`,
                {slug}
            ).then((data: SanityMuiTheme[]) => {
                return data[0]
            })
    }

    const fetchLatestBlogPostPreview = (): Promise<SanityBlogPreview> => {
        return theSanityClient
            .fetch(
                `*[_type=="post"] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           description,
           color
         },
         _createdAt
       }[0]`,
                {}
            ).then((data: SanityBlogPreview) => {
                return data
            })
    }

    const fetchAllBlogPostPreviews = (): Promise<SanityBlogPreview[]> => {
        return theSanityClient
            .fetch(
                `*[_type=="post"] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
          mainImageCaption,
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
                {}
            ).then((data: SanityBlogPreview[]) => {
                return data
            })
    }

    const fetchBlogPostPreviewsByCategory = (category: string): Promise<SanityBlogPreview[]> => {
        return theSanityClient
            .fetch(
                `*[_type=="post" && category._ref == *[_type == "category" && title == $category][0]._id ] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
                {category}
            ).then((data: SanityBlogPreview[]) => {
                return data
            })
    }

    const fetchBlogPostPreviewsByKeyword = (keyword: string): Promise<SanityBlogPreview[]> => {
        const processedKeyword = '*' + keyword + '*'

        return theSanityClient
            .fetch(
                `*[_type=="post" && [title, pt::text(body)] match $processedKeyword ] | order(publishedAt desc){
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         "snippet": pt::text(body),
         category->{
           title,
           color
         },
         _createdAt
       }`,
                {processedKeyword}
            ).then((data: SanityBlogPreview[]) => {
                return data
            })
    }


    const fetchLandingPageHeaderMenu = (): Promise<SanityMenuContainer> => {
        return theSanityClient
            .fetch(
                `*[_type=="menuContainer" && slug.current == 'header-menu']{
          title,
          slug,
         "menuItems": subMenus[]->{slug, displayText, links[] -> }
       }`)
            .then((data: SanityMenuContainer[]) => {
                return data[0]
            })
    }

    const fetchLandingPageFooterMenu = (footerSlug?: string): Promise<SanityMenuContainer> => {
        const slug = footerSlug ?? 'footer-menu'

        return theSanityClient
            .fetch(
                `*[_type=="menuContainer" && slug.current == $slug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {slug}
            )
            .then((data: SanityMenuContainer[]) => {
                return data[0]
            })
    }

    const fetchBlogCategories = (): Promise<SanityBlogCategory[]> => {
        return theSanityClient
            .fetch(
                `*[_type == "category"]{
        title,
        description,
        color
    }`
            )
            .then((data: SanityBlogCategory[]) => {
                return data
            })
    }

    const fetchBlogGroup = (title: string): Promise<SanityBlogGroup> => {
        return theSanityClient
            .fetch(
                `*[_type == "postGroup" && title == $title]{
          title,
          posts[] -> { title, slug }
       }[0]`,
                {title}
            ).then((data: SanityBlogGroup) => {
                return data
            })
    }
    const fetchWhySwitch = async (id: string): Promise<WhySwitchSectionType> => {
        return theSanityClient
            .fetch(
                `*[_id == $id]{
          imageSrc {
            asset->{
              altText,
              description
             }
          }
       }[0]`,
                {id}
            ).then((data: any) => {
                const whySwitchSection: WhySwitchSectionType = data
                console.log("why switch Section data", whySwitchSection)
                return data
            })
    }

    const fetchRef = (sanityRef: SanityRef): Promise<any> => {

        return theSanityClient
            .fetch(
                `*[_id == $reference][0]`,
                {reference: sanityRef._ref}
            ).then((data: any) => {
                return data
            })
    }

    const fetchRefs = async (sanityRefs: SanityRef[]): Promise<any> => {

        console.log("get these refs", sanityRefs)

        let servicesRefs: string[] = []
        let otherContentRefs: string[] = []

        sanityRefs?.forEach((sanityRef) => {
            console.log("does match?", sanityRef._type, groqQueries.SANITY_TYPES_ENUM.SERVICE, sanityRef._type === groqQueries.SANITY_TYPES_ENUM.SERVICE)
            if (sanityRef._type == groqQueries.SANITY_TYPES_ENUM.SERVICE) {
                servicesRefs.push(sanityRef._ref)
            }

            otherContentRefs.push(sanityRef._ref)
        })

        console.log("Division of labor", sanityRefs, otherContentRefs)
        const servicesQuery = `*[_type == ${groqQueries.SANITY_TYPES_ENUM.SERVICE} && _id in $references]{
    ${groqQueries.SERVICE}
  }`

        const services = await theSanityClient
            .fetch(
                servicesQuery,
                {references: servicesRefs}
            )

        const otherRefs = await theSanityClient
            .fetch(
                `*[_id in $references]`,
                {references: otherContentRefs}
            )

        console.log("Done Division of labor", services, otherRefs)

        return Promise.all([...services, otherRefs])
    }

    // const useFetchPageBySlugQuery = (slug: string) => {
    //     // console.log("slug", slug)
    //     return useQuery(
    //         ['fetchPageBySlug', slug],
    //         async ({queryKey}) => {
    //             const [_, pageSlug] = queryKey
    //
    //             if (pageSlug && pageSlug.length > 0) {
    //                 return theSanityClient?.fetch(
    //                     `*[slug.current == $pageSlug && _type == "homePage"]{
    //       ${groqQueries.HOMEPAGE}
    //     }`, {pageSlug})
    //                     .then((result: any) => {
    //                         if (result.length === 0) {
    //                             return Promise.reject(Error("No results returned"))
    //                         }
    //                         if (result.length >= 1) {
    //
    //                             return result[0]
    //                         }
    //                     }).catch(() => {
    //                         return Promise.reject(Error("Sanity Error getting pageSlug " + pageSlug))
    //                     })
    //             } else {
    //                 return Promise.reject(Error("No page slug passed"))
    //             }
    //         },
    //         {}
    //     );
    // }

    const fetchDocumentByTypeAndSlugQuery = async (documentType: string, documentSlug: string) => {
        // console.log(`Retrieving document type:${documentType} with slug ${documentSlug}`)
        if (documentType && documentType.length > 0 && documentSlug && documentSlug.length > 0) {
            return theSanityClient?.fetch(
                `*[slug.current == $documentSlug && _type == $documentType]{
          ...,
          flyer {
            asset->{
              _id,
              url,
              altText
             }
          }
        }`, {documentType, documentSlug})
                .then((result: any) => {
                    if (result.length === 0) {
                        return Promise.reject(Error("No document returned"))
                    }
                    if (result.length >= 1) {
                        // console.log("got document?", result[0])
                        return result[0]
                    }
                }).catch(() => {
                    console.log("could not get document for slug", documentSlug)
                    return Promise.reject(Error("Sanity Error getting document with slug " + documentSlug))
                })
        }
    }

    const fetchPageBySlugQuery = async (pageSlug: string) => {
        // console.log("Retrieving page with sanityClient", theSanityClient)
        if (pageSlug && pageSlug.length > 0) {
            return theSanityClient?.fetch(
                `*[slug.current == $pageSlug && _type == "homePage"]{
          ${groqQueries.HOMEPAGE}
        }`, {pageSlug})
                .then((result: any) => {
                    if (result.length === 0) {
                        return Promise.reject(Error("No results returned"))
                    }
                    if (result.length >= 1) {
                        console.log("got home?", result[0])
                        return result[0]
                    }
                }).catch(() => {
                    console.log("could not get page for slug", pageSlug)
                    return Promise.reject(Error("Sanity Error getting pageSlug " + pageSlug))
                })
        } else {
            return Promise.reject(Error("No page slug passed"))
        }
    }
    const useFetchMenuBySlugQuery = (menuSlug: string) => {
        console.log("fetching menu with slug", menuSlug)
        return useQuery(
            {
                queryKey: [menuSlug],
                queryFn: () => {
                    return theSanityClient
                        .fetch(
                            `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: menuSlug ?? 'header-menu'}
                        )
                        .then((data: SanityMenuContainer[]) => {
                            return data[0]
                        })
                },
            }
        );
    }

    const useFetchMenuByRefQuery = (headerMenuRef?: SanityRef) => {
        console.log("fetching menu with ref", headerMenuRef)

        const menuId = headerMenuRef?._ref ?? ['no-id']

        return useQuery(
            {
                queryKey: [...menuId],
                queryFn: () => {
                    return theSanityClient
                        .fetch(
                            `*[_id == $menuId && _type == "menuContainer"]{
                          ${groqQueries.MENUGROUPCONTAINER}
                        }`,
                            {menuId}
                        )
                        .then((result: any) => {
                            if (result.length === 0) {

                                return Promise.reject(Error("No results returned"))
                            }
                            return result[0]
                        }).catch(() => {
                            return Promise.reject(Error("Sanity Error getting pageSlug " + menuId))
                        })
                },
            });

    }

//
// const fetchLandingPageFooterMenu = (footerSlug?: string): Promise<SanityMenuContainer> => {
//     const slug = footerSlug ?? 'footer-menu'
//
//     return theSanityClient
//         .fetch(
//             `*[_type=="menuContainer" && slug.current == $slug]{
//           ${GroqQueries.MENUGROUPCONTAINER}
//        }`, {slug}
//         )
//         .then((data: SanityMenuContainer[]) => {
//             return data[0]
//         })
// }

    const useFetchRefsQuery = (refs: SanityRef[]) => {
        return useQuery(
            {
                queryKey: ['fetchRefs'],
                queryFn: async () => {
                    return fetchRefs(refs)
                        .then((results: any[]) => {
                            if (results.length === 0) {
                                console.log("whew! after fetching a bunch of refs ", results)
                            }
                            return results
                        }).catch((e: any) => {
                            console.log("error getting services", e)
                            return []
                        })
                },
            });
    }


    const useFetchServicesQuery = (pageSlug?: string) => {
        return useQuery(
            {
                queryKey: ['fetchServices'],
                queryFn: async () => {
                    console.log("fetchings services", pageSlug)
                    const serviceSlug = pageSlug

                    let serviceSlugClause: string = ''
                    if (serviceSlug) {
                        serviceSlugClause = " && slug.current != $serviceSlug"
                    }

                    const query = `*[_type == "transformServiceItem"${serviceSlugClause}]{
                     ${groqQueries.SERVICE}
                    }`
                    const params = serviceSlug ? {serviceSlug: serviceSlug} : {}

                    return theSanityClient
                        .fetch(query, params)
                        .then((results: ThwServiceItemType[]) => {
                            if (results.length === 0) {
                                console.log("No Services present")
                            }
                            return results
                        }).catch((e: any) => {
                            console.log("error getting services", e)
                            return []
                        })
                }
            });
    }

    const fullTextSearch = (textToSearch: string, pageId: string): Promise<any> => {

        console.log("the page id", pageId)
        return theSanityClient
            .fetch(
                `*[
            ([
                title, 
                careerTitle,
                introduction,
                name, 
                email,
                contentText, 
                contentTexts, 
                contentTitle, 
                contentPreTitle, 
                highlightedAmenitiesTitle, 
                highlightedAmenitiesText, 
                contentWelcomeMessage,
                contentSummaryTitle,
                contentSummaryTexts,
                videoUrl,
            ] match '*${textToSearch}*') && references('${pageId}')]{
                ..., 
                "skillsUsed" : skillsUsed[]->,
                "skills" : skills[]->,
                "skillsHighlighted": skillsHighlighted[]->,
            }`,
                // {searchText: textToSearch}
            ).then((data: any) => {
                console.log("results from full text search", data, textToSearch, pageId)
                return data
            })
    }
    const skillReferenceSearch = (skill: ResumeSkillType, pageId: string): Promise<any> => {
        return theSanityClient
            .fetch(
                `*[references($searchText) && references('${pageId}')]{
                ..., 
                "skillsHighlighted": skillsHighlighted[]->,
                "skillsUsed" : skillsUsed[]->,
                "skills":skills[]->,
            }`,
                {searchText: skill._id, pageId: pageId}
            ).then((data: any[]) => {


                data.sort((left, right) => {
                    if (left._type === right._type) {
                        return 0
                    }

                    if (left._type > right._type)
                        return 1

                    return -1
                })
                console.log("results from skills reference search", data, skill._id, pageId)

                return data
            })
    }
    const fetchHomePage = (): Promise<SanityHomePage> => {
        return theSanityClient
            .fetch(
                `*[_type=="abHomePage" && slug.current == "home"]{
          slug,
          heroImage->{
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            gradient
          },
          introduction,
          specializationsMenuGroup->{
            menuGroupTitle,
            links[] -> {displayText, url}
          },
          weWorkWithSection {
            title,
            sectionHeader,
            description,
            companyPartnerLogos[]{
              asset->{
                _id,
                url
              }
            }
          },
          ourServicesSection {
            title,
            sectionHeader,
            serviceList[]{
              title,
              description
            }
          },
          solutions {
            sectionHeader,
            solutionList[] {
              title,
              description
            }
          }
       }[0]`,
            ).then((data: SanityHomePage) => {
                return data
            })
    }

    const fetchCommunityPage = (): Promise<SanityCommunityPage> => {
        return theSanityClient
            .fetch(
                `*[_type=="communityPage" && slug.current == "community"]{
          slug,
          titleText,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          gradient,
          introduction,
          howWeGrowBrandsTitle,
          howWeGrowBrandsContent{
            content
          },
          weWorkWithSection {
            title,
            sectionHeader,
            description,
            companyPartnerLogos[]{
              asset->{
                _id,
                url
              }
            }
          },
          callToAction
       }[0]`,
            ).then((data: SanityCommunityPage) => {
                return data
            })
    }


    const fetchOurStoryPage = (): Promise<SanityOurStoryPage> => {
        return theSanityClient
            .fetch(
                `*[_type=="ourStoryPage" && slug.current == "our-story"]{
          slug,
          titleText,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          gradient,
          introduction,
          storyStartTitle,
          storyStartLeft1,
          storyStartLeft2,
          storyStartLeft3,
          storyStartRightImage{
              asset->{
                _id,
                url
              }
            },
          brandQuotesTitle,
          brandQuotesList[]{
            title,
            description,
            image{
              asset->{
                _id,
                url
              }
            }
          },
          howWeGrowBrandsTitle,
          howWeGrowBrandsContent{
            content
          }
       }[0]`,
            ).then((data: SanityOurStoryPage) => {
                return data
            })
    }

    const fetchHomePageSpecializationsMenu = (): Promise<SanityMenuGroup> => {
        return theSanityClient
            .fetch(
                `*[_type=="menuGroup" && slug.current == 'specializations']{
          slug,
          displayText,
         "links": links[]->{displayText, url}
       }[0]`,
            )
            .then((data: SanityMenuGroup) => {
                return data
            })
    }

    const fetchImageCarousel = (slug: string): Promise<SanityImageCarousel> => {
        return theSanityClient
            .fetch(
                `*[_type=="imageCarousel" && slug.current == $slug]{
          title,
          slug,
          images[] -> { title, mainImage{
            asset->{
              _id,
              url
             }
           }}
       }[0]`,
                {slug},
            ).then((data: SanityImageCarousel) => {
                return data
            })
    }

    const fetchEvergreenPage = (slug: string): Promise<SanityEvergreenPage> => {
        return theSanityClient
            .fetch(
                `*[_type=="abEvergreenPage" && slug.current == $slug]{
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          pageContent {
            content
          }
       }[0]`,
                {slug},
            ).then((data: SanityEvergreenPage) => {
                return data
            })
    }

    const urlFor = (source: SanityImageSource) => {
        if (!source) {
            return undefined
        }
        return builder?.image(source)
    }

    const cocktailUrlFor = (source: SanityImageSource) => {
        return cocktailBuilder?.image(source)
    }

    const useFetchAllFlashCards = () => {
        console.log("fetching cocktails",)
        return useQuery(
            {
                queryKey: ["all-cocktails"],
                queryFn: () => {
                    return theSanityBartenderClient
                        .fetch(
                            `*[_type == "Cocktail" && isDisabled != true]{
          ${groqQueries.COCKTAIL}
       }`,)
                        .then((data: SanityCocktailType[]) => {
                            return data
                        })
                }
            });
    }

    const useFetchMyCocktails = () => {
        console.log("fetching my cocktails ingredient breakdown",)
        return useQuery({
            queryKey: ["cocktails-ingredient-breakdown"],
            queryFn: () => {
                return theSanityBartenderClient
                    .fetch(
                        `{
                              "barInventory": *[_type == "BarInventory" && slug.current=='the-drinkery']{
                              "theBar":theBar[]->
                              },
                                      "cocktailWithIngredients":*[_type == "Cocktail" && isDisabled != true]{
                                       ${groqQueries.COCKTAIL},
                                      "cocktailIngredientIds": 
                                         array::compact(
                                           [
                                             ...garnish[]->,
                                             ...mixingGlass[]->, 
                                             ...mixingGlass[].ingredient->
                                           ]._id
                                        )
                                    
                                
                                      }  
                              
                                  
                            }`,)
                    .then((data: any[]) => {
                        const theBarInventoryIngredientIds: SanityCocktailIngredient[] = data[0].barInventory?.theBar.map((val: SanityCocktailIngredient) => {
                            return val._id
                        });
                        const theResults = data[0].cocktailWithIngredients.reduce((acc: any[], val: SanityCocktailType) => {
                            let isAvailable = true
                            val.cocktailIngredientIds.forEach((ingredientId: string) => {
                                if (!(ingredientId in theBarInventoryIngredientIds)) {
                                    isAvailable = false
                                }
                            })

                            if (isAvailable) {
                                acc.push(val)
                            }

                        }, [])


                        return theResults
                    })
            }
        });
    }


    const useFetchAllBarIngredients = () => {
        return useQuery({
            queryKey: ["all-bar-ingredients"],
            queryFn: () => {
                return theSanityBartenderClient
                    .fetch(
                        `*[_type == "Ingredient"]{
          ${groqQueries.INGREDIENT}
       }`,)
                    .then((data: SanityCocktailIngredient[]) => {
                        return data
                    })
            }
        });
    }

    // const useFetchMyBarIngredients = () => {
    //     const pageContext = useContext(PageContext)
    //     return useQuery(
    //         ["my-bar-ingredients"],
    //         () => {
    //             return fetchMyBarIngredients(pageContext.barInventorySlug)
    //         }
    //     );
    // }

    const fetchMyBarIngredients = (barInventorySlug?: string) => {
        if (barInventorySlug === undefined || barInventorySlug === null)
            return []
        else
            return theSanityBartenderClient
                .fetch(
                    `*[_type == "BarInventory" && slug.current=='${barInventorySlug}']{
                    ...,
                    "theBar": theBar[]->
       }`,)
                .then((data: SanityBarInventoryType[]) => {
                    console.log("the ingredients and garnishes from my bar", barInventorySlug, data)
                    if (data !== undefined && data[0] !== undefined && data[0].theBar !== undefined)
                        return data[0].theBar
                    else return []
                })
    }

    const useFetchAllLiquorTypes = () => {
        return useQuery({
            queryKey: ["all-liquor-types"],
            queryFn: () => {
                return theSanityBartenderClient
                    .fetch(
                        `*[_type == "LiquorType"]{
          ${groqQueries.INGREDIENT}
       }`,)
                    .then((data: SanityLiquorType[]) => {
                        return data
                    })
            }
        });
    }


    const useFetchFilteredIngredients = () => {
        const searchContext: SearchContextType = useContext(SearchContext)

        const liquorTypes = searchContext.searchFilters

        return useQuery(
            {
                queryKey: ["filter-bar-ingredients-by-liq-type"],
                queryFn: () => {
                    if (liquorTypes !== undefined && liquorTypes.length > 0)
                        return theSanityBartenderClient
                            .fetch(
                                `*[_type == "Ingredient" && references($liquorTypeId)]{
              ${groqQueries.INGREDIENT}
           }`, {
                                    liquorTypeId: liquorTypes
                                })
                            .then((data: SanityCocktailIngredient[]) => {
                                return data
                            })

                    return theSanityBartenderClient
                        .fetch(
                            `*[_type == "Ingredient"]{
              ${groqQueries.INGREDIENT}
           }`)
                        .then((data: SanityCocktailIngredient[]) => {
                            return data
                        })
                }
            });
    }

    const useFetchMyFilteredIngredients = () => {
        const searchContext: SearchContextType = useContext(SearchContext)

        const liquorTypes = searchContext.searchFilters

        return useQuery({
            queryKey: ["filter-my-bar-ingredients-by-liq-type"],
            queryFn:// @ts-ignore
                () => {
                    if (liquorTypes !== undefined && liquorTypes.length > 0)
                        return theSanityBartenderClient
                            .fetch(
                                `*[ _type == "BarInventory"]{
                                  ...,
                                  "theBarLiquorTypes": *[ _type == "Ingredient" && _id in ^.theBar[]._ref && references($liquorTypeId)]{
                                    liquorType->,
                                    ...
                                  }
                                }`, {
                                    liquorTypeId: liquorTypes,
                                })
                            .then((data: SanityBarInventoryType[]) => {
                                console.log("Supposed to be response", data[0]?.theBarLiquorTypes)

                                // const response = data[0].theBarLiquorTypes.reduce((accumulated:SanityLiquorType[], value)=>{
                                //     const findType = accumulated.find((findingValue:SanityLiquorType)=>{
                                //         console.log("checking id", findingValue?._id, value?.liquorType?._id)
                                //         if(value.liquorType && (findingValue._id === value?.liquorType?._id)){
                                //             return findingValue
                                //         }
                                //         return undefined
                                //     })
                                //
                                //     if(!findType && value.liquorType) {
                                //         console.log("pushing",value.liquorType)
                                //         accumulated.push(value.liquorType)
                                //
                                //     }
                                //     console.log("acc", accumulated)
                                //
                                //     return accumulated
                                // },[])
                                console.log("Supposed to be response", data[0].theBarLiquorTypes)

                                return data[0].theBarLiquorTypes
                            })

                    return theSanityBartenderClient
                        .fetch(
                            `*[_type == "BarInventory" && slug.current=='${process.env.REACT_APP_BAR_INVENTORY_SLUG}']{
              ...,
              "theBar":theBar[]->
           }`)
                        .then((data: any[]) => {
                            return data[0]?.theBar
                        })
                }
        });
    }
    const useFetchFilteredCocktails = () => {
        const searchContext: SearchContextType = useContext(SearchContext)

        const liquorTypes = searchContext.searchFilters

        // include the search string in the search

        return useQuery({
            queryKey: ["filter-bar-ingredients-by-liq-type"],
            queryFn: () => {
                if (liquorTypes !== undefined && liquorTypes.length > 0)
                    return theSanityBartenderClient
                        .fetch(
                            `*[_type == "Cocktail" && references($liquorTypeId) && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`, {
                                liquorTypeId: liquorTypes
                            })
                        .then((data: SanityCocktailType[]) => {
                            return data
                        })

                return theSanityBartenderClient
                    .fetch(
                        `*[_type == "Cocktail" && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`)
                    .then((data: SanityCocktailType[]) => {
                        return data
                    })
            }
        });
    }

    const useFetchSearchedCocktails = () => {

        // const liquorTypes = searchContext.searchFilters
        // console.log("fetching cocktails filtered by liquor type ", liquorTypes)

        const searchContext: any = useContext(SearchContext)
        // const liquorTypes = searchContext.searchFilters

        return useQuery(
            {
                queryKey: ["search-cocktails-by-criteria"],
                queryFn: () => {
                    const searchString = searchContext.searchString
                    //  if(liquorTypes && liquorTypes.length > 0 )
                    //      return sanityClient
                    //          .fetch(
                    //              `*[_type == "Ingredient" && references($liquorTypeId)]{
                    //    ${groqQueries.INGREDIENT}
                    // }`,{
                    //                  liquorTypeId:liquorTypes
                    //              })
                    //          .then((data: SanityCocktailIngredient[]) => {
                    //              return data
                    //          })
                    if (searchString === undefined)
                        return theSanityBartenderClient
                            .fetch(
                                `*[_type == "Cocktail" && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`)
                            .then((data: SanityCocktailType[]) => {
                                return data
                            })

                    if (searchString.length > 0)
                        return theSanityBartenderClient
                            .fetch(
                                `*[_type == "Cocktail" && 
                                title match "*$searchString*" 
                                && isDisabled != true
                             ]{
              ${groqQueries.COCKTAIL}
           }`, {
                                    searchString
                                })
                            .then((data: SanityCocktailType[]) => {
                                return data
                            })
                    return undefined;

                }
            });
    }

    const getProduct = async (searchString?: string, searchFilters?: string[], ingredientFilters?: string[], isAndSearch?: boolean) => {
        // const [_, searchString, searchFilters] = queryKey
        const liquorTypes = searchFilters
        const requiredIngredients = ingredientFilters

        let queryParams = {}
        let searchStringClause = ""
        if (searchString && searchString.length > 0) {
            searchStringClause = ` && title match "*${searchString}*"`
            // queryParams = {
            //     ...queryParams,
            // }
        }

        let liquorTypesClause = ""
        if (liquorTypes && liquorTypes.length > 0) {
            liquorTypesClause = " && references(*[references($liquorId)]._id)"

            queryParams = {
                ...queryParams,
                liquorId: liquorTypes
            }
        }

        let ingredientsClause = undefined
        if (requiredIngredients && requiredIngredients.length > 0) {
            if (!ingredientsClause) ingredientsClause = ""
            ingredientsClause = requiredIngredients.reduce((preClause: string, reqIngredient, index) => {
                preClause += `(references(*[references('${reqIngredient}')]._id) || references('${reqIngredient}'))`

                if (index < requiredIngredients.length - 1) {
                    if (isAndSearch) {
                        preClause += " && "

                    } else {

                        preClause += " || "
                    }
                }

                return preClause
            }, "")

            ingredientsClause = ` && (${ingredientsClause})`
        }

        return theSanityBartenderClient
            .fetch(
                `*[_type == "Cocktail"  && isDisabled != true${searchStringClause}${ingredientsClause ? ingredientsClause : liquorTypesClause}]{
              ${groqQueries.COCKTAIL}
           }`, queryParams)
            .then((data: SanityCocktailType[]) => {
                return data
            })
    }

    const getMyProduct = async (searchString?: string, searchFilters?: string[], ingredientFilters?: string[], isAndSearch?: boolean) => {
        // const [_, searchString, searchFilters] = queryKey
        const liquorTypes = searchFilters
        const requiredIngredients = ingredientFilters

        let queryParams = {}
        let searchStringClause = ""
        if (searchString && searchString.length > 0) {
            searchStringClause = ` && title match "*${searchString}*"`
            // queryParams = {
            //     ...queryParams,
            // }
        }

        let liquorTypesClause = ""
        if (liquorTypes && liquorTypes.length > 0) {
            liquorTypesClause = " && references(*[references($liquorId)]._id)"

            queryParams = {
                ...queryParams,
                liquorId: liquorTypes
            }
        }

        let ingredientsClause = undefined
        if (requiredIngredients && requiredIngredients.length > 0) {
            if (!ingredientsClause) ingredientsClause = ""
            ingredientsClause = requiredIngredients.reduce((preClause: string, reqIngredient, index) => {
                preClause += `(references(*[references('${reqIngredient}')]._id) || references('${reqIngredient}'))`

                if (index < requiredIngredients.length - 1) {
                    if (isAndSearch) {
                        preClause += " && "

                    } else {

                        preClause += " || "
                    }
                }

                return preClause
            }, "")

            ingredientsClause = ` && (${ingredientsClause})`
        }

        return theSanityBartenderClient
            .fetch(
                `{
                              "barInventory": *[_type == "BarInventory" && slug.current=='the-drinkery']{
                              "theBar":theBar[]->
                              },
                              "cocktailWithIngredients":*[_type == "Cocktail" && isDisabled != true${searchStringClause}${ingredientsClause ? ingredientsClause : liquorTypesClause}]{
                               ${groqQueries.COCKTAIL}
                              "cocktailIngredientIds": 
                                 array::unique(array::compact(
                                   [
                                     ...garnish[]->,
                                     ...mixingGlass[]->, 
                                     ...mixingGlass[].ingredient->
                                   ]._id
                                ))
                                 }  
                              }`, queryParams)
            .then((data: any) => {
                const cocktailWithIngredients: any[] = data.cocktailWithIngredients
                const theBarInventoryIngredientIds: string[] = data.barInventory[0]?.theBar.map((val: SanityCocktailIngredient) => {
                    return val._id
                });
                const theResults = cocktailWithIngredients.reduce((acc: any[], val: SanityCocktailType) => {
                    let isAvailable = true
                    val.cocktailIngredientIds.forEach((ingredientId: string) => {
                        if (!(theBarInventoryIngredientIds.includes(ingredientId))) {
                            isAvailable = false
                        }
                    })

                    if (isAvailable) {
                        acc.push(val)
                    }

                    return acc
                }, [])

                return theResults
            })
    }

    const placeholderOrImage = (imageSrc?: SanityImageAsset, placeHolderWidth?: number, placeHolderHeight?: number, text?: string) => {
        let theUrl = ""

        if (imageSrc) {
            theUrl = urlFor(imageSrc)?.url() ?? ""
        } else {
            theUrl = getPlaceholderImageUrl(placeHolderWidth, placeHolderHeight, text)
        }

        return theUrl
    }

    const getPlaceholderImageUrl = (width?: number, height?: number, text?: string) => {
        let theUrl = PLACEHOLDER_URL
        if (width) {
            if (height) {
                theUrl += `${width}x${height}`
            } else {
                theUrl += `${height}x${height}`
            }
        } else {
            theUrl += `${height}x${height}`
        }

        if (text) {
            theUrl += `?text=${text.replace(" ", "+")}`
        }

        return theUrl
    }

    const getCheckinBySlug = (slug: string): Promise<SanityCheckinPageType> => theSanityClient
        .fetch(
            `*[_type=="checkinPage" && slug.current == $slug]{
          _id,
          slug,
          title,
          shortUrl,
          ball->{
            flyer{
              asset->{
                _id,
                url
              }
            },
            ballTitle,
            functionStartDate,
            location,
            slug
          },
          houseSubmission,
          checkinList[]->{
            _createdAt,
            firstname,
            lastname,
            email,
            business,
            businessUrl,
            houseSubmission
          },
       }`,
            {slug},
        ).then((data: SanityCheckinPageType[]) =>
            data[0],
        )

    const fetchBall = (ballId: string): Promise<SanityBallType> => theSanityClient
        .fetch(
            `*[_type=="ball" && _id == $ballId]{
          _id,
          ballTitle,
          host,
          approval,
          slug,
          flyer{
            asset->{
              _id,
              url
             }
           },
         categories,
         miniGrandPrize,
         grandPrize,
         ballType,
         createdBy,
         description,
         functionStartDate,
         functionEndDate,
         region,
         source,
         location,
         _createdAt,
         eventbriteId
       }`,
            {ballId},
        ).then((data: SanityBallType[]) => data[0])

    const getBallBySlug = (slug: string): Promise<SanityBallType> => {
        const queryString = `*[_type=="ball" && slug.current == "${slug}"]{
          _id,
          ballTitle,
          host,
          approval,
          slug,
          flyer{
            asset->{
              _id,
              url
             }
           },
         categories,
         miniGrandPrize,
         grandPrize,
         ballType,
         createdBy,
         description,
         functionStartDate,
         functionEndDate,
         region,
         source,
         location,
         _createdAt,
         eventbriteId
       }`

        console.log('getting the slug', slug, queryString)

        return theSanityClient
            .fetch(queryString).then((data: SanityBallType[]) => data[0])
    }

    const createBall = (ball: SanityBallType): Promise<{ response: SanityBallType, status: number }> => {
        return fetch("/create-ball",
            {
                method: 'POST',
                body: JSON.stringify(ball),
            },
        )
            .then((response: any) => {
                return clientUtils.processResponse(response, 'BallCreated');
            })
            .catch((e: any) => {
                // console.error(LOG, 'ERROR', 'error', e);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({attempt: Error(e)});
            });
    }

    const getAppSettingsFromSanity = (): Promise<AppSettingsType> => {
        const queryString = `*[_type=="appSettings"]{
          newAddBallStepsFlow
       }`

        console.log('getting App Settings...')

        return theSanityClient
            .fetch(queryString).then((data: SanityBallType[]) => data[0])
    }

    const createCheckin = (checkIn: CheckinFormType): Promise<SanityCheckinType> => {
        console.log('About to creat a checkin', checkIn)

        return theSanityClient.create({
            firstname: checkIn.firstname,
            lastname: checkIn.lastname,
            email: checkIn.email,
            houseSubmission: checkIn.houseSubmission,
            business: checkIn.businessName,
            businessUrl: checkIn.businessUrl,
            _type: 'checkin',
        }).then((res: any) => {
            console.log('result from create checkin', res)
            return res
        })
    }

    const createHouse = (house: SanityHouse): Promise<SanityHouse> => {
        return fetch("/create-new-house",
            {
                method: 'POST',
                body: JSON.stringify(house),
            },
        )
            .then((response: any) => {
                return clientUtils.processResponse(response, 'NewHouseCreated');
            })
            .catch((e: any) => {
                // console.error(LOG, 'ERROR', 'error', e);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({attempt: Error(e)});
            });
    }

    const createUser = (user: SanityUser): Promise<SanityUser> => {
        console.log('About to create a user', user)

        return theSanityClient.create({...user, _type: 'user'}).then((res: any) => {
            console.log('result from create user', res)
            return res
        })
    }

    const userSubscribe = (sanityId: string, subscribeFunc: (user: any) => SanityUser) => {
        const query = '*[_type == "user" && _id == $sanityId]'
        const params = {sanityId}

        return theSanityClient.listen(query, params)
            .subscribe((update: any) => {
                const user: SanityUser = update.result
                subscribeFunc(user)
                return user
            })
    }

    const updateAwUser = (user: SanityUser, sanityUserId: string): Promise<SanityUser> => {
        console.log('About to update a user', user, sanityUserId)

        return theSanityClient
            .patch(sanityUserId)
            .set({
                    ...user,
                },
            )
            .commit()
    }

    const updateCheckin = (checkinUpdates: CheckinFormType): Promise<SanityCheckinType> => {
        console.log('About to update a checkin', checkinUpdates)

        return theSanityClient
            .patch(checkinUpdates._id)
            .set({
                    ...checkinUpdates,
                },
            )
            .commit()
    }

    const addCheckinToCheckinList = (checkinId: string, checkinListId: string) => {
        const checkinRef = getSanityDocumentRef(checkinId)

        return theSanityClient
            .patch(checkinListId)
            .insert('after',
                'checkinList[-1]',
                [{...checkinRef, _key: uuidv4()}])
            .commit()
    }

    const fetchAllApprovedBalls = async (queryString: any): Promise<SanityBallType[]> => {
        console.log('aw - FetchingApprovedBalls with queryObj', queryString)

        // let queryString = const generateBallQueryString(queryStringObj)

        console.log('aw - query string to filter by', queryString)
        console.log('aw - sanity client in sanityProvider', theSanityClient)

        const response = theSanityClient ? await theSanityClient
            .fetch(
                `*[_type=="ball" && approval == true${queryString}] | order(_createdAt desc){
          _id,
         _createdAt,
          ...,
          flyer{
            asset->{
              _id,
              url
             }
           },
       }`,
            ) : []

        console.log("aw - result from fetchAllBalls", response)
        return response
    }

    const getSanityDocumentRef = (sanityId: string): SanityRef => ({
        _type: 'reference',
        _ref: sanityId,
    })

    const uploadImageFromURL = (imageFile: any, ballId: string, imageFileUrl: any): Promise<any> => imageFile.then((imgFileBuffer: any) => {
        console.log('uploading image for', ballId, imgFileBuffer)
        return theSanityClient.assets
            .upload('image',
                imgFileBuffer,
                {filename: `${ballId}.${imageFileUrl.indexOf('png') > 0 ? 'png' : 'jpg'}`})
            .then((imageAsset: any) => {
                console.log(`Ball ${ballId} image asset created in Sanity`, imageAsset)

                return theSanityClient
                    .patch(ballId)
                    .set({
                        flyer: {
                            _type: 'image',
                            asset: {
                                _type: 'reference',
                                _ref: imageAsset._id,
                            },
                        },
                    })
                    .commit()
            })
            .then(() => {
                console.log('Done adding image to ', ballId)
            })
    })

    const uploadBallFlyerImage = (fileUploaded: File, ballId: string): Promise<any> => {
        console.log("Uploading Flyer")

        const data = new FormData();

        // TODO: BLOG ABOUT THIS SHAT B.A.T.S.!!!
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        // for (const key in potentialQuestion) {
        //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //     // @ts-ignore
        //     data.append(key, potentialQuestion[key]);
        // }
        data.append('ballId', ballId);
        data.append('file', fileUploaded);
        data.append('fileName', fileUploaded.name);

        return fetch('/upload-ball-flyer-image',
            {
                method: 'POST',
                body: data,
            },
        )
            .then((response: any) => {
                return clientUtils.processResponse(response, 'BallFlyerImage');
            })
            .catch((e: any) => {
                // console.error(LOG, 'ERROR', 'error', e);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({attempt: Error(e)});
            });
    }

    const uploadProfileImage = (imageFile: any, userId: string): Promise<any> => {
        console.log('uploading profile image')
        return theSanityClient.assets
            .upload('image',
                imageFile,
                {filename: `${userId}.${imageUtils.extractImageExtensionFromFile(imageFile)}`})
            .then((imageAsset: any) => {
                console.log('image uploaded updating user', userId, imageAsset)
                return theSanityClient
                    .patch(userId)
                    .set({
                        profileImage: {
                            _type: 'image',
                            asset: {
                                _type: 'reference',
                                _ref: imageAsset._id,
                            },
                        },
                    })
                    .commit()
            })
    }

    const addFavorite = (favoriteToAddId: any[], userId: string) => {
        console.log('CMSCLIENT add ', favoriteToAddId, userId)
        return theSanityClient.patch(userId)
            .setIfMissing({favorites: []})
            .insert('after', 'favorites[-1]', favoriteToAddId).commit().then((response: any) => {
                console.log('added favorite results are', response)
                return response
            })
    }

    const addEventbriteId = (eventbriteId: string, eventbriteUrl: string, ballId: string, dataset: string) => {
        console.log('CMSCLIENT update eventbrite id ', eventbriteId, ballId, dataset)

        const envSanityClient = theSanityClient

        return envSanityClient.patch(ballId)
            .setIfMissing({eventbriteId, eventbriteUrl})
            .commit().then((response: any) => {
                console.log('added eventbrite id', response)
                return response
            })
    }

    const removeFavorite = (favoriteToRemove: string[], userId: string) => {
        console.log('CMSCLIENT remove favorite', favoriteToRemove, userId)
        return theSanityClient.patch(userId).unset(favoriteToRemove).commit().then((response: any) => {
            console.log('removed result', response)
            return response
        })
    }

    const createRefStringFromRefs = (listOfFaves: SanityRef[]) => listOfFaves.map((favorite) => (favorite._ref)).join(',')

    const fetchFavorites = (listOfBallRefs: string) => {
        if (listOfBallRefs.length === 0) {
            return Promise.resolve([])
        }
        const normalizedList = listOfBallRefs?.split && listOfBallRefs.split(',').join('\',\'')
        const query =
            `*[_type=="ball" && approval == true && _id in ['${normalizedList}']]{
          _id,
          ballTitle,
          slug,
          flyer{
            asset->{
              _id,
              url
             }
           },
         ballType,
         functionStartDate,
         location,
         eventbriteId
       }`

        return theSanityClient
            .fetch(
                query,
            ).then((data: any[]) => data)
    }

    const fetchUserBySsoId = (ssoUserId: string): Promise<SanityUser> => theSanityClient
        .fetch(
            `*[_type=="user" && firebaseUUID == $ssoUserId]{
          _id,
          email,
          slug,
          profileImage{
            asset
          },
          firebaseUUID,
          username,
          signInProvider,
          favorites[]
       }[0]`,
            {ssoUserId},
        ).then((data: SanityUser) => data)

    const fetchUserById = (sanityUserId: string): Promise<SanityUser> => theSanityClient
        .fetch(
            `*[_type=="user" && _id == $sanityUserId]{
          _id,
          email,
          slug,
          profileImage{
            asset
          },
          firebaseUUID,
          username,
          signInProvider,
          favorites[]
       }[0]`,
            {sanityUserId},
        ).then((data: SanityUser) => data)

    const subscribeToUserUpdateState = async (ssoId: string,
                                              stateUpdate: (user: SanityUser) => SanityUser) => fetchUserBySsoId(ssoId).then((usersObject: SanityUser | undefined) => {
        if (usersObject && usersObject._id) {
            stateUpdate(usersObject)
            console.log('subscribed to updates from ', usersObject._id)
            return userSubscribe(usersObject._id, (user) => stateUpdate(user))
        }
        console.log('could not subscribe to user with', ssoId)
        return undefined
    })

    const getSanityIdFromFirebaseUUID = async (firebaseUUID: string) => fetchUserBySsoId(firebaseUUID).then((user: SanityUser) => (user?._id))

    const createComment = (comment: SanityComment): Promise<SanityComment> => theSanityClient.create({
        ...comment,
        _type: 'ballComment',
    }).then((res: any) => res)

    const fetchCommentsByBallId = (ballId: string): Promise<SanityComment[]> => theSanityClient
        .fetch(
            `*[ _type == "ballComment" && references($ballId)]| order(_createdAt desc){
          _createdAt,
          comment,
          user->
        }`,
            {ballId},
        ).then((data: SanityComment[]) => data)

    const getSanityUserRef = async (firebaseUUID: string): Promise<SanityRef> => getSanityIdFromFirebaseUUID(firebaseUUID).then((sanityUserId) => getSanityDocumentRef(sanityUserId ?? ""))

    const createContactUs = (contactUs: SanityContactUs): Promise<SanityContactUs> => {
        return fetch("/create-contact-us" ?? "",
            {
                method: 'POST',
                body: JSON.stringify(contactUs),
            },
        )
            .then((response: any) => {
                return clientUtils.processResponse(response, 'ContactUsCreated');
            })
            .catch((e: any) => {
                // console.error(LOG, 'ERROR', 'error', e);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({attempt: Error(e)});
            });
    }

    const addBall = async (ball: SanityBallType, flyerImage: File) => {
        const newBall = await createBall(ball)
        console.log("The new ball as created by sanity", newBall)
        console.log("The new ball id as created by sanity", newBall.response._id)
        if (newBall.response._id)
            await uploadBallFlyerImage(flyerImage, newBall.response._id)
        return newBall
    }

    const fetchSkillExperiences = async (resumeSkill: ResumeSkillType):Promise<ResumeExperienceType[]> => {
        return theSanityClient
            .fetch(
                `*[ _type == "ResumeExperience" && references($skillId)]| order(dateStart desc){
                  ...
                }`,
                {skillId: resumeSkill._id},
            ).then((data: ResumeExperienceType[]) => {
                console.log("Experiences from groq", data)
            return data
        })
    }
const fetchPortfolioItems = async (resumeSkill: ResumeSkillType):Promise<ResumePortfolioItemType[]> => {
        return theSanityClient
            .fetch(
                `*[ _type == "ResumePortfolioItem" && references($skillId) && isDisabled != true]| order(inceptionDate desc){
                  ...
                }`,
                {skillId: resumeSkill._id},
            ).then((data: ResumePortfolioItemType[]) => {
                console.log("Portfolio items from groq", data)
            return data
        })
    }

    const newValue = useMemo(
        () => ({
            initSanity,
            theSanityClient,
            urlFor,
            cocktailUrlFor,
            skillReferenceSearch,
            fetchRef,
            fetchRefs,
            fetchLandingPage,
            fetchBlogPost,
            fetchLatestBlogPostPreview,
            fetchAllBlogPostPreviews,
            fetchBlogPostPreviewsByCategory,
            fetchBlogPostPreviewsByKeyword,
            fetchLandingPageHeaderMenu,
            fetchLandingPageFooterMenu,
            fetchBlogCategories,
            fetchBlogGroup,
            fetchWhySwitch,
            // useFetchPageBySlugQuery,
            fetchPageBySlugQuery,
            fetchDocumentByTypeAndSlugQuery,
            useFetchMenuBySlugQuery,
            useFetchServicesQuery,
            useFetchRefsQuery,
            useFetchMenuByRefQuery,
            fetchMuiTheme,
            fullTextSearch,
            fetchHomePage,
            fetchOurStoryPage,
            fetchCommunityPage,
            fetchHomePageSpecializationsMenu,
            fetchImageCarousel,
            fetchEvergreenPage,
            getPlaceholderImageUrl,
            placeholderOrImage,
            useFetchAllFlashCards,
            useFetchAllBarIngredients,
            fetchMyBarIngredients,
            useFetchAllLiquorTypes,
            useFetchFilteredIngredients,
            useFetchFilteredCocktails,
            useFetchSearchedCocktails,
            getProduct,
            // useFetchMyBarIngredients,
            useFetchMyFilteredIngredients,
            useFetchMyCocktails,
            getMyProduct,

            getCheckinBySlug,
            fetchBall,
            getBallBySlug,
            createBall,
            getAppSettingsFromSanity,
            createCheckin,
            createHouse,
            createUser,
            updateAwUser,
            updateCheckin,
            addCheckinToCheckinList,
            fetchAllApprovedBalls,
            uploadImageFromURL,
            uploadBallFlyerImage,
            uploadProfileImage,
            addFavorite,
            addEventbriteId,
            removeFavorite,
            createRefStringFromRefs,
            fetchFavorites,
            subscribeToUserUpdateState,
            fetchUserById,
            createComment,
            fetchCommentsByBallId,
            getSanityUserRef,
            createContactUs,

            addBall,
            getSanityDocumentRef,

            fetchSkillExperiences,
            fetchPortfolioItems
        }),
        [
            sanityConfig,
            theSanityClient,
            urlFor
        ]
    );



    return (
        <SanityContext.Provider value={newValue}>
            {props.children}
        </SanityContext.Provider>
    );

};

export default SanityProvider;
