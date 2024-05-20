import {FunctionComponent, PropsWithChildren, useContext} from 'react'
import SearchContext from "./search-context/SearchContext";
import {Grid, IconButton, Typography} from "@mui/material";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";


interface IProps {
    isDarkMode?: boolean
}

const FlashCardNav: FunctionComponent<PropsWithChildren<IProps>> = (props: PropsWithChildren<IProps>) => {
    const searchContext = useContext(SearchContext)

    return <Grid container item sx={{position: "relative", color: props.isDarkMode ? 'white' : 'secondary'}}>
        <Grid container item  justifyContent='center' alignContent='center' minHeight={450} minWidth={350}>
            <Grid item container justifyContent='center' >
               <Grid item> {props.children}</Grid>
            </Grid>
            <Grid item>
                {(searchContext.searchResults?.length ?? 0) > 0 ?
                    <Typography
                        color={props.isDarkMode ? 'inherit' : 'secondary'}
                        fontFamily='Oswald'
                        variant={'h6'}
                    >
                        {`${(searchContext.cardCounter ?? 0) + 1} / ${searchContext.searchResults?.length ?? 1}`}
                    </Typography>
                    : <Typography color='textPrimary' fontFamily='Oswald'
                                  variant={'h6'}>0 / 0</Typography>}
            </Grid>
        </Grid>
        <Grid item  container alignContent='center'
              sx={{position: "absolute", height: "100%",}}>
            <IconButton
                sx={{ zIndex:1000}}
                color={props.isDarkMode ? 'inherit' : 'secondary'}
                onClick={searchContext.prevCard}
            >
                <ArrowLeft style={{fontSize: 32}} color={'inherit'}/>
            </IconButton>
        </Grid>
        <Grid item container alignContent='center' justifyContent='flex-end'
              style={{position: "absolute", right: 0, height: "100%",}}>
            <IconButton
                sx={{ zIndex:1000}}
                color={props.isDarkMode ? 'inherit' : 'secondary'}
                onClick={searchContext.nextCard}
            >
                <ArrowRight style={{fontSize: 32}} color={'inherit'}/>
            </IconButton>
        </Grid>
    </Grid>
}

export default FlashCardNav