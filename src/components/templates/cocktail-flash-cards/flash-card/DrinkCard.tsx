import{FunctionComponent, useContext} from 'react'
import FlashCardFront from "./FlashCardFront";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import SearchContext from "../search-context/SearchContext";
import {Grid} from "@mui/material";
import DrinkCardBottom from "./DrinkCardBottom";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        // height: 550,
        // minWidth: "423px",
        border: "1px solid black",
        padding: theme.spacing(6, 4)
    },
}))

interface IProps {
    // cocktail: SanityCocktailType
}

const DrinkCard: FunctionComponent<IProps> = () => {
    const classes = useStyles()

    const searchContext = useContext(SearchContext)

    return (<Grid container item style={{
        minWidth: "423px",
        // backgroundSize:"600px 600px", backgroundImage:`url('${paperBackground}')`
    }}
    >
        <Grid container item className={classes.root}>
            <Grid container item alignContent='center'>
                <FlashCardFront currentCard={searchContext.currentCard}/>
            </Grid>
            <Grid container item alignContent='center'>
                <DrinkCardBottom currentCard={searchContext.currentCard}/>
            </Grid>
        </Grid>
    </Grid>)
}

export default DrinkCard