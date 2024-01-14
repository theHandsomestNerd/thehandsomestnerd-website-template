import React, {FunctionComponent, useContext} from 'react'
import SearchContext from "./search-context/SearchContext";
import {Button, Chip, Grid, Typography} from "@mui/material";
import {SanityCocktailIngredient} from "../../../common/sanityIo/Types";
import apiClient from "./apiClient";


interface IProps {
    // liquorType: SanityLiquorType
}

const FilteredIngredients: FunctionComponent<IProps> = (props: IProps) => {
    const searchContext = useContext(SearchContext)
    const [filteredBarIngredients, setFilteredBarIngredients] = React.useState<(any)[]>([])
    const {data, refetch} = apiClient.useFetchMyFilteredIngredients()

    React.useEffect(() => {
        if (data) {
            setFilteredBarIngredients(data)
        }
    }, [data])

    React.useEffect(() => {
        refetch()
    }, [searchContext.searchFilters, searchContext.ingredientFilters])

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