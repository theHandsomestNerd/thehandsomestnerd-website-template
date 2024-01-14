import {Chip, Grid, Typography} from '@mui/material'
import React, {FunctionComponent, useContext} from 'react'
import SnackbarContext from "../../modal-context/SnackbarContext";
import {useLocation} from "react-router";
import SearchContext from "./search-context/SearchContext";
import {CocktailDbResultType} from "../../../common/sanityIo/Types";
import firebaseAnalyticsClient from "../../../common/firebase/FirebaseAnalyticsClient";


interface IProps {
}


const CocktailDbResults: FunctionComponent<IProps> = (props: IProps) => {
    const snackBar = useContext(SnackbarContext)
    const location = useLocation()

    const searchContext = useContext(SearchContext)

    const getIngredientsFromCocktailDbCocktail = (cocktailDbCocktail: CocktailDbResultType) => {
        const numIngredients = [...Array(10).keys()]

        return numIngredients.map((ingredientNumber: number, index) => {
            return <Grid container item spacing={1} key={index}>
                <Grid item>
                    <Typography variant={"subtitle2"}>{cocktailDbCocktail["strMeasure" + ingredientNumber]}</Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant={"subtitle2"}>{cocktailDbCocktail["strIngredient" + ingredientNumber]}</Typography>

                </Grid>
            </Grid>
        })

    }

    const openNotification = (cocktailDbResult: CocktailDbResultType) => {
        const snack = <Grid container spacing={2}>
            <Grid item container xs={12}>
                <img src={cocktailDbResult.strDrinkThumb} height={200}/>
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"body2"}>{cocktailDbResult.strDrink}</Typography>
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"subtitle2"}>{
                    cocktailDbResult.strGlass
                }</Typography>
            </Grid>
            <Grid item container xs={12}>
                {
                    getIngredientsFromCocktailDbCocktail(cocktailDbResult)
                }
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"subtitle2"}>{
                    cocktailDbResult.strInstructions
                }</Typography>
            </Grid>
            <Grid item container xs={12}>
                {
                    <Chip size='small' label={cocktailDbResult.strCategory}/>
                }
            </Grid>
            <Grid item container xs={12}>
                {
                    cocktailDbResult.strTags?.split(',')?.map((tag, index) => {
                        return <Chip size='small' label={tag} key={index}></Chip>
                    })
                }
            </Grid>

        </Grid>

        snackBar.openSnackbar && snackBar.openSnackbar(snack)
        cocktailDbResult && firebaseAnalyticsClient.analyticsPageView(
            location.pathname,
            location.search,
            `${cocktailDbResult.strDrink} | Cocktail from cocktailDb`)
    }

    return (<Grid item container spacing={1}>
        {
            searchContext.additionalResults?.map((cocktailDbResult: CocktailDbResultType, index2) => {
                return <Grid item key={index2}><Chip onClick={() => openNotification(cocktailDbResult)}
                                                     label={cocktailDbResult.strDrink}></Chip></Grid>
            })
        }
    </Grid>)
}

export default CocktailDbResults