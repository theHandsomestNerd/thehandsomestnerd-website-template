import React, {FunctionComponent, useContext} from 'react'
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import SearchContext from "../search-context/SearchContext";
import {Grid} from "@mui/material";
import ReactCardFlip from "react-card-flip";

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

const FlashCard: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const searchContext = useContext(SearchContext)

    return (<Grid container item style={{
        minWidth: "423px",
        // backgroundSize:"600px 600px", backgroundImage:`url('${paperBackground}')`
    }}
    >
        <ReactCardFlip containerClassName={classes.root} isFlipped={searchContext.isFlipped}
                       flipDirection="vertical">
            <Grid container item onClick={searchContext.handleFlip} alignContent='center'>
                <FlashCardFront currentCard={searchContext.currentCard}/>
            </Grid>
            <Grid container item onClick={searchContext.handleFlip} alignContent='center'>
                <FlashCardBack currentCard={searchContext.currentCard}/>
            </Grid>
        </ReactCardFlip>
    </Grid>)
}

export default FlashCard