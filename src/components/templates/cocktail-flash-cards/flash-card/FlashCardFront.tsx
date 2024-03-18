import React, {FunctionComponent, useContext} from 'react'
import {Grid, Typography,} from "@mui/material";
import {SanityCocktailType} from "../../../../common/sanityIo/Types";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    currentCard?: SanityCocktailType
}

const FlashCardFront: FunctionComponent<IProps> = ({currentCard}: IProps) => {
    const sanityContext = useContext(SanityContext)

    return (<Grid container item direction='column' justifyContent='center' alignItems='center' alignContent='center'
                  spacing={1}>
        <Grid item container alignContent='center' justifyContent='center'>
            <Grid item>
                <Typography variant='h2' fontFamily='Covered By Your Grace' align='center'
                            sx={{lineHeight: .7, zIndex: 1000, position: "relative"}}>{currentCard?.title}</Typography>
            </Grid>
        </Grid>
        <Grid item>

            {currentCard?.imageSrc &&
                <img style={{zIndex: 900, position: "relative"}} src={sanityContext.cocktailUrlFor(currentCard?.imageSrc).url() ?? ""}
                     width={350} height={350}/>}
        </Grid>

    </Grid>)
}

export default FlashCardFront