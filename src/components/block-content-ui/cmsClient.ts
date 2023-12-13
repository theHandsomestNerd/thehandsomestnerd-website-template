import sanityClient from '../../sanityClient'
import {
    SanityBlog,
    SanityBlogCategory,
    SanityBlogGroup, SanityBlogPreview,
    SanityLandingPage, SanityMenuContainer, SanityMuiTheme,
    SanityRef, SanityTransformHwHomePage
} from '../../common/sanityIo/Types'

import {ResumeSkill, ThwServiceItemType, WhySwitchSectionType} from "../BlockContentTypes";
import GroqQueries from "../../common/sanityIo/groqQueries";
import groqQueries from "../../common/sanityIo/groqQueries";
import {SanityHomePage} from "./static-pages/cmsStaticPagesClient";
import {QueryKey, useQuery} from "@tanstack/react-query";

const fetchLandingPage = (slug: string): Promise<SanityLandingPage> => {
    return sanityClient
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
    return sanityClient
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
    return sanityClient
        .fetch(
            `*[_type=="MuiTheme" && slug.current == $slug]`,
            {slug}
        ).then((data: SanityMuiTheme[]) => {
            return data[0]
        })
}

const fetchLatestBlogPostPreview = (): Promise<SanityBlogPreview> => {
    return sanityClient
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
    return sanityClient
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
    return sanityClient
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

    return sanityClient
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
    return sanityClient
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

    return sanityClient
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
    return sanityClient
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
    return sanityClient
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
    return sanityClient
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

    return sanityClient
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

    const services = await sanityClient
        .fetch(
            servicesQuery,
            {references: servicesRefs}
        )

    const otherRefs = await sanityClient
        .fetch(
            `*[_id in $references]`,
            {references: otherContentRefs}
        )

    console.log("Done Division of labor", services, otherRefs)

    return Promise.all([...services, otherRefs])
}

const useFetchPageBySlugQuery = (slug: string) => {
    // console.log("slug", slug)
    return useQuery(
        ['fetchPageBySlug', slug],
        async ({queryKey}) => {
            const [_, pageSlug] = queryKey

            if (pageSlug && pageSlug.length > 0) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug && _type == "homePage"]{
          ${groqQueries.HOMEPAGE}
        }`, {pageSlug})
                    .then((result) => {
                        if (result.length === 0) {
                            return Promise.reject(Error("No results returned"))
                        }
                        if (result.length >= 1) {

                            return result[0]
                        }
                    }).catch(() => {
                        return Promise.reject(Error("Sanity Error getting pageSlug " + pageSlug))
                    })
            } else {
                return Promise.reject(Error("No page slug passed"))
            }
        },
        {}
    );
}
const useFetchMenuBySlugQuery = (menuSlug: string) => {
    console.log("fetching menu with slug", menuSlug)
    return useQuery(
        [menuSlug],
        () => {
            return sanityClient
                .fetch(
                    `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: menuSlug ?? 'header-menu'}
                )
                .then((data: SanityMenuContainer[]) => {
                    return data[0]
                })
        },
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        }
    );
}

const useFetchMenuByRefQuery = (headerMenuRef?: SanityRef) => {
    console.log("fetching menu with ref", headerMenuRef)

    const menuId = headerMenuRef?._ref ?? ['no-id']

    return useQuery(
        [...menuId],
        () => {
            return sanityClient
                .fetch(
                    `*[_id == $menuId && _type == "menuContainer"]{
          ${groqQueries.MENUGROUPCONTAINER}
        }`, {menuId})
                .then((result) => {
                    if (result.length === 0) {

                        return Promise.reject(Error("No results returned"))
                    }
                    return result[0]
                }).catch(() => {
                    return Promise.reject(Error("Sanity Error getting pageSlug " + menuId))
                })
        },
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    );

}

//
// const fetchLandingPageFooterMenu = (footerSlug?: string): Promise<SanityMenuContainer> => {
//     const slug = footerSlug ?? 'footer-menu'
//
//     return sanityClient
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
        ['fetchRefs'],
        async () => {
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
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        }
    );
}


const useFetchServicesQuery = (pageSlug?: string) => {
    return useQuery(
        ['fetchServices'] ,
        async () => {
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

            return sanityClient
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
        , {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        });
}

const fullTextSearch = (textToSearch: string): Promise<any> => {

    return sanityClient
        .fetch(
            `*[
            [
                title, 
                careerTitle,
                introduction,
                name, 
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
            ] match '*${textToSearch}*']{
                ..., 
                "skillsUsed" : skillsUsed[]->,
                "skills" : skills[]->,
            }`,
            // {searchText: textToSearch}
        ).then((data: any) => {
            console.log("data from fulltext search", data)
            return data
        })
}
const skillReferenceSearch = (skill: ResumeSkill): Promise<any> => {
    return sanityClient
        .fetch(
            `*[references($searchText)]{
                ..., 
                "skillsHighlighted": skillsHighlighted[]->,
                "skillsUsed" : skillsUsed[]->,
                "skills":skills[]->,
            }`,
            {searchText: skill._id}
        ).then((data: any) => {
            console.log("data from skillReference search", data)
            return data
        })
}

export default {
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
    useFetchPageBySlugQuery,
    useFetchMenuBySlugQuery,
    useFetchServicesQuery,
    useFetchRefsQuery,
    useFetchMenuByRefQuery,
    fetchMuiTheme,
    fullTextSearch
}