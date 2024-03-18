import React, {FunctionComponent, useContext} from 'react'
import FilteredIngredients from "./FilteredIngredients";
import {Button, Grid, Typography} from "@mui/material";
import {SanityCocktailIngredient, SanityGarnish, SanityLiquorType} from "../../../common/sanityIo/Types";
import SearchContext from "./search-context/SearchContext";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    entireBar?: (SanityCocktailIngredient | SanityGarnish)[]
}

const LiquorBarFilter: FunctionComponent<IProps> = (props: IProps) => {
    const [liquorTypes, setLiquorTypes] = React.useState<SanityLiquorType[]>([])

    const sanityContext = useContext(SanityContext)
    const {data} = sanityContext.useFetchAllLiquorTypes()

    React.useEffect(() => {
        if (data) {
            setLiquorTypes(data)
        }
    }, [data])


    // React.useEffect(() => {
    //     if (props.entireBar) {
    //         const justLiquorFromTheBar = props.entireBar.filter((ingredient: SanityCocktailIngredient) => {
    //             return ingredient.isLiquor
    //         })
    //         setTheLiquor(justLiquorFromTheBar)
    //     }
    // }, [props.entireBar])
    const searchContext = useContext(SearchContext)

    const processFilter = (filter: string) => {
        if (searchContext.isFilterIncluded && !searchContext.isFilterIncluded(filter))
            searchContext.addFilter && searchContext.addFilter(filter ?? "")
        else
            searchContext.removeFilter && searchContext.removeFilter(filter ?? "")
    }

    return (<Grid container item>
        {/*<Grid item>*/}
        {/*    <Typography>Menu({searchContext.searchFilters?.length})</Typography>*/}
        {/*</Grid>*/}
        {/*<Grid container item style={{height: "50px", overflowX: 'scroll'}} direction='column'>*/}
        {/*    {searchContext.searchFilters?.map((filter, index) => <Typography>*/}
        {/*        {*/}
        {/*            liquorTypes.filter((liqType) => {*/}
        {/*                return liqType._id === filter*/}
        {/*            }).map((filteredLiqType, innerIndex) => {*/}
        {/*                return <Typography key={"filteredLiqType" + innerIndex}*/}
        {/*                                   onClick={() => searchContext.removeFilter && searchContext.removeFilter(filteredLiqType._id)}><Chip*/}
        {/*                    label={<Grid container item alignItems='center'*/}
        {/*                                 alignContent='center'><Typography>{filteredLiqType.title}</Typography><Close*/}
        {/*                        fontSize='small'/></Grid>}/></Typography>*/}
        {/*            })*/}
        {/*        }*/}
        {/*    </Typography>)}*/}
        {/*</Grid>*/}
        <Grid item>
            <Typography>Store({props.entireBar?.length})</Typography>
        </Grid>
        <Grid item container style={{height: "180px", overflowX: "scroll", overflowY: "hidden"}} direction='column'>
            {
                liquorTypes.map((liquorTypes: SanityLiquorType, index) => {
                    return <Grid item xs={5} key={"liquorbarfilter" + index}
                                 style={{minWidth: "170px", marginRight: "8px"}}>
                        <Button
                            fullWidth
                            color={searchContext.isFilterIncluded && searchContext.isFilterIncluded(liquorTypes?._id ?? "") ? "secondary" : "primary"}
                            variant={"contained"}
                            onClick={() => processFilter(liquorTypes._id ?? "")}>
                            <Grid container>
                                <Grid container item justifyContent='center'>
                                    <img height={100} src={sanityContext.cocktailUrlFor(liquorTypes.imageSrc ?? "").url() ?? ""}/>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography align='center'>{liquorTypes.title}</Typography>
                                </Grid>
                                {/*<Grid container item style={{backgroundColor:searchContext.isFilterIncluded && searchContext.isFilterIncluded(liquorTypes?._id ?? "")?"red":"transparent",height:"5px"}}>*/}


                                {/*</Grid>*/}
                            </Grid>
                        </Button>

                    </Grid>
                })
            }
        </Grid>
        <Grid container item>
            <FilteredIngredients/>
        </Grid>

    </Grid>)
}

export default LiquorBarFilter