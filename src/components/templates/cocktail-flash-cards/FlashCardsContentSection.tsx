import{FunctionComponent, PropsWithChildren} from 'react'
import FlashCard from "./flash-card/FlashCard";
import SearchBox from "./search-box/SearchBox";
import FlashCardNav from "./FlashCardNav";
import CocktailDbResults from "./CocktailDbResults";
import FiltersMenu from "./FiltersMenu";
import {FlashCardSectionType} from "../../BlockContentTypes";
import {Grid} from "@mui/material";
import SearchProvider from "./search-context/SearchProvider";
import DrinkCard from "./flash-card/DrinkCard";

interface IProps {
    sectionData: FlashCardSectionType
}

const FlashCardsContentSection: FunctionComponent<IProps & PropsWithChildren> = (props) => {
    return (
        <SearchProvider>
            <Grid container item alignItems='center' alignContent='center' direction='column'
                  style={{overflow: 'hidden', paddingTop: "96px"}}>
                <Grid container justifyContent='center' style={{minWidth: "423px"}}>
                    <Grid item container xs={2} justifyContent='flex-end'>
                        <FiltersMenu anchor={'bottom'}/>
                    </Grid>
                    <Grid item container xs={10}>
                        <SearchBox/>
                    </Grid>
                </Grid>

                <Grid container item spacing={1} justifyContent='center'>
                    <Grid item container sx={{maxWidth: 508}}>
                        <FlashCardNav>{props.sectionData.isFlashCard ? <FlashCard/> : <DrinkCard/>}</FlashCardNav>
                    </Grid>
                    <Grid item container xs={12} spacing={1}>
                        <CocktailDbResults/>
                    </Grid>
                </Grid>
            </Grid>
        </SearchProvider>
    )
}

export default FlashCardsContentSection