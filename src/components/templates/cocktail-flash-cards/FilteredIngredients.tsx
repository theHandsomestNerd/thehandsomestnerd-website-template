import {FunctionComponent, useContext, useEffect, useState} from 'react'
import SearchContext from "./search-context/SearchContext";
import {Button, Chip, Grid, Typography} from "@mui/material";
import {SanityCocktailIngredient} from "../../../common/sanityIo/Types";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    // liquorType: SanityLiquorType
}

const FilteredIngredients: FunctionComponent<IProps> = () => {
    const searchContext = useContext(SearchContext)
    const sanityContext = useContext(SanityContext)

    const [filteredBarIngredients, setFilteredBarIngredients] = useState<(any)[]>([])

    useEffect(() => {
        const data = sanityContext.useFetchMyFilteredIngredients()

        if (data) {
            setFilteredBarIngredients(data)
        }
    }, [searchContext.searchFilters, searchContext.ingredientFilters])

    // useEffect(() => {
    //     refetch()
    // }, [searchContext.searchFilters, searchContext.ingredientFilters])

    const processIngredient = (filter: SanityCocktailIngredient) => {
        if (searchContext.isIngredientIncluded && !searchContext.isIngredientIncluded(filter))
            searchContext.addIngredientFilter && searchContext.addIngredientFilter(filter._id ?? "")
        else
            searchContext.removeIngredientFilter && searchContext.removeIngredientFilter(filter._id ?? "")
    }

    return (<Grid container item style={{height: "300px"}}>
        {
            filteredBarIngredients.map((liquorBarItem: (any), index) => {
                return <Button key={index} onClick={() => processIngredient(liquorBarItem)}><Chip
                    color={searchContext.isIngredientIncluded && searchContext.isIngredientIncluded(liquorBarItem) ? 'secondary' : 'primary'}
                    label={<Grid
                        item><Typography>{liquorBarItem.title}</Typography></Grid>}/></Button>
            })
        }
    </Grid>)
}

export default FilteredIngredients