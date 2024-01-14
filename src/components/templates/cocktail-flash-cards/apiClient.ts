import {useParams} from "react-router-dom";
import groqQueries from "../../../common/sanityIo/groqQueries";
import sanityClient from "../../../sanityClient";
import {useQuery} from "@tanstack/react-query";
import {
    SanityBarInventoryType,
    SanityCocktailIngredient,
    SanityCocktailType,
    SanityLiquorType,
    SanityMenuContainer
} from "../../../common/sanityIo/Types";
import {useContext} from "react";
import SearchContext from "./search-context/SearchContext";
import bartenderSanityClient from "../../../bartenderSanityClient";

const useFetchPageBySlugQuery = () => {
    const urlParams: { pageSlug?: string } = useParams()

    return useQuery(
        ['fetchPageBySlug'],
        async () => {
            const pageSlug = urlParams.pageSlug
            if (pageSlug) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
                    .then((result: any) => {
                        if (result.length === 0) {
                            // redirect(RoutesEnum.ERROR)
                        }
                        return result
                    }).catch(() => {
                        // redirect(RoutesEnum.ERROR)
                    })
            } else {
                // redirect(RoutesEnum.COMING_SOON)
            }
        }
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
          ${groqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: menuSlug ?? 'header-menu'}
                )
                .then((data: SanityMenuContainer[]) => {
                    return data[0]
                })
        }
    );
}

const useFetchAllCocktails = () => {
    console.log("fetching cocktails",)
    return useQuery(
        ["all-cocktails"],
        () => {
            return bartenderSanityClient
                .fetch(
                    `*[_type == "Cocktail" && isDisabled != true]{
          ${groqQueries.COCKTAIL}
       }`,)
                .then((data: SanityCocktailType[]) => {
                    return data
                })
        }
    );
}

const useFetchMyCocktails = () => {
    console.log("fetching my cocktails ingredient breakdown",)
    return useQuery(
        ["cocktails-ingredient-breakdown"],
        () => {
            return bartenderSanityClient
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
                    const theBarInventoryIngredientIds: SanityCocktailIngredient[] = data[0].barInventory.theBar.map((val: SanityCocktailIngredient) => {
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
    );
}


const useFetchAllBarIngredients = () => {
    return useQuery(
        ["all-bar-ingredients"],
        () => {
            return bartenderSanityClient
                .fetch(
                    `*[_type == "Ingredient"]{
          ${groqQueries.INGREDIENT}
       }`,)
                .then((data: SanityCocktailIngredient[]) => {
                    return data
                })
        }
    );
}

const useFetchMyBarIngredients = () => {
    return useQuery(
        ["my-bar-ingredients"],
        () => {
            return bartenderSanityClient
                .fetch(
                    `*[_type == "BarInventory" && slug.current=='${process.env.REACT_APP_BAR_INVENTORY_SLUG}']{
                    ...,
                    "theBar": theBar[]->
       }`,)
                .then((data: (SanityBarInventoryType)[]) => {
                    console.log("the ingredients and garnishes from my bar", data[0].theBar)
                    return data[0].theBar
                })
        }
    );
}

const useFetchAllLiquorTypes = () => {
    return useQuery(
        ["all-liquor-types"],
        () => {
            return bartenderSanityClient
                .fetch(
                    `*[_type == "LiquorType"]{
          ${groqQueries.INGREDIENT}
       }`,)
                .then((data: SanityLiquorType[]) => {
                    return data
                })
        }
    );
}


const useFetchFilteredIngredients = () => {
    const searchContext = useContext(SearchContext)

    const liquorTypes = searchContext.searchFilters

    return useQuery(
        ["filter-bar-ingredients-by-liq-type"],
        () => {
            if (liquorTypes !== undefined && liquorTypes.length > 0)
                return bartenderSanityClient
                    .fetch(
                        `*[_type == "Ingredient" && references($liquorTypeId)]{
              ${groqQueries.INGREDIENT}
           }`, {
                            liquorTypeId: liquorTypes
                        })
                    .then((data: SanityCocktailIngredient[]) => {
                        return data
                    })

            return bartenderSanityClient
                .fetch(
                    `*[_type == "Ingredient"]{
              ${groqQueries.INGREDIENT}
           }`)
                .then((data: SanityCocktailIngredient[]) => {
                    return data
                })
        }
    );
}

const useFetchMyFilteredIngredients = () => {
    const searchContext = useContext(SearchContext)

    const liquorTypes = searchContext.searchFilters

    return useQuery(
        ["filter-my-bar-ingredients-by-liq-type"],
        // @ts-ignore
        () => {
            if (liquorTypes !== undefined && liquorTypes.length > 0)
                return bartenderSanityClient
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
                        console.log("Supposed to be response", data[0].theBarLiquorTypes)

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

            return bartenderSanityClient
                .fetch(
                    `*[_type == "BarInventory" && slug.current=='${process.env.REACT_APP_BAR_INVENTORY_SLUG}']{
              ...,
              "theBar":theBar[]->
           }`)
                .then((data: any[]) => {
                    return data[0].theBar
                })
        }
    );
}
const useFetchFilteredCocktails = () => {
    const searchContext = useContext(SearchContext)

    const liquorTypes = searchContext.searchFilters

    // include the search string in the search

    return useQuery(
        ["filter-bar-ingredients-by-liq-type"],
        () => {
            if (liquorTypes !== undefined && liquorTypes.length > 0)
                return bartenderSanityClient
                    .fetch(
                        `*[_type == "Cocktail" && references($liquorTypeId) && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`, {
                            liquorTypeId: liquorTypes
                        })
                    .then((data: SanityCocktailType[]) => {
                        return data
                    })

            return bartenderSanityClient
                .fetch(
                    `*[_type == "Cocktail" && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`)
                .then((data: SanityCocktailType[]) => {
                    return data
                })
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
//           ${groqQueries.MENUGROUPCONTAINER}
//        }`, {slug}
//         )
//         .then((data: SanityMenuContainer[]) => {
//             return data[0]
//         })
// }

const useFetchSearchedCocktails = () => {

    // const liquorTypes = searchContext.searchFilters
    // console.log("fetching cocktails filtered by liquor type ", liquorTypes)

    const searchContext = useContext(SearchContext)
    const liquorTypes = searchContext.searchFilters

    return useQuery(
        ["search-cocktails-by-criteria"],
        () => {
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
                return bartenderSanityClient
                    .fetch(
                        `*[_type == "Cocktail" && isDisabled != true]{
              ${groqQueries.COCKTAIL}
           }`)
                    .then((data: SanityCocktailType[]) => {
                        return data
                    })

            if (searchString.length > 0)
                return bartenderSanityClient
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


        }
    );
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

    return bartenderSanityClient
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

    return bartenderSanityClient
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
            const theBarInventoryIngredientIds: string[] = data.barInventory[0].theBar.map((val: SanityCocktailIngredient) => {
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


export default {
    useFetchPageBySlugQuery,
    useFetchMenuBySlugQuery,
    useFetchAllFlashCards: useFetchAllCocktails,
    useFetchAllBarIngredients,
    useFetchAllLiquorTypes,
    useFetchFilteredIngredients,
    useFetchFilteredCocktails,
    useFetchSearchedCocktails,
    getProduct,
    useFetchMyBarIngredients,
    useFetchMyFilteredIngredients,
    useFetchMyCocktails,
    getMyProduct
}