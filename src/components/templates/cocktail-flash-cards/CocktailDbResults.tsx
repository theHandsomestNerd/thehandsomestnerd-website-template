import {Chip, Grid, Typography} from '@mui/material'
import {FunctionComponent, useContext} from 'react'
import SnackbarContext from "../../modal-context/SnackbarContext";
import {useLocation} from "react-router";
import SearchContext from "./search-context/SearchContext";
import {CocktailDbResultType} from "../../../common/sanityIo/Types";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";


interface IProps {
    isDarkMode?: boolean
}


const CocktailDbResults: FunctionComponent<IProps> = () => {
    const snackBar = useContext(SnackbarContext)
    const location = useLocation()

    const searchContext = useContext(SearchContext)
    const firebaseContext = useContext(FirebaseContext)

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
        const snack = <Grid container spacing={2} sx={{color: "white"}}>
            <Grid item container xs={12}>
                <img alt={cocktailDbResult.strDrink} src={cocktailDbResult.strDrinkThumb} height={200}/>
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"body2"} color='inherit'>{cocktailDbResult.strDrink}</Typography>
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
                    <Chip size='medium' color='secondary' label={cocktailDbResult.strCategory}/>
                }
            </Grid>
            <Grid item container xs={12}>
                <Grid container item>
                    <Typography variant='caption'>Tags</Typography>
                </Grid>
                {
                    cocktailDbResult.strTags?.split(',')?.map((tag, index) => {
                        return <Chip size='small' color={'secondary'} label={tag} key={index}></Chip>
                    })
                }
            </Grid>

        </Grid>

        snackBar.openSnackbar && snackBar.openSnackbar(snack)
        cocktailDbResult && firebaseContext.analyticsPageView && firebaseContext.analyticsPageView(
            location.pathname,
            location.search,
            `${cocktailDbResult.strDrink} | Cocktail from cocktailDb`)
    }

    return (<Grid item container spacing={1}>
        {
            searchContext.additionalResults?.map((cocktailDbResult: CocktailDbResultType, index2) => {
                return <Grid item key={index2}>
                    <Chip color='secondary'
                          onClick={() => openNotification(cocktailDbResult)}

                          label={cocktailDbResult.strDrink}></Chip>
                </Grid>
            })
        }
    </Grid>)
}

export default CocktailDbResults