import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import SearchContext from "./search-context/SearchContext";
import {Grid, IconButton, Typography} from "@mui/material";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

const FlashCardNav: FunctionComponent<PropsWithChildren> = (props) => {
    const searchContext = useContext(SearchContext)

    return <Grid container item style={{position: "relative"}}>
        <Grid container item xs={12} justifyContent='center' alignContent='center' style={{position: "relative"}}>
            <Grid item container>
                {props.children}
            </Grid>
            <Grid item style={{paddingTop: "8px"}}>
                {(searchContext.searchResults?.length ?? 0) > 0 ? <Typography color='textPrimary' fontFamily='Oswald'
                                                                              variant={'h6'}>{`${(searchContext.cardCounter ?? 0) + 1} / ${searchContext.searchResults?.length ?? 1}`}</Typography> :
                    <Typography color='textPrimary' fontFamily='Oswald'
                                variant={'h6'}>0 / 0</Typography>}
            </Grid>
        </Grid>
        <Grid item xs={2} container alignContent='center' style={{position: "absolute", height: "100%"}}>
            <IconButton color='secondary' onClick={searchContext.prevCard}>
                <ArrowLeft style={{fontSize: 32}}/>
            </IconButton>
        </Grid>
        <Grid item xs={2} container alignContent='center' justifyContent='flex-end'
              style={{position: "absolute", right: 0, height: "100%"}}>
            <IconButton color='secondary' onClick={searchContext.nextCard}>
                <ArrowRight style={{fontSize: 32}}/>
            </IconButton>
        </Grid>
    </Grid>
}

export default FlashCardNav