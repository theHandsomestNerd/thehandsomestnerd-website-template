import{FunctionComponent, PropsWithChildren} from 'react'
import FlashCard from "./flash-card/FlashCard";
import SearchBox from "./search-box/SearchBox";
import FlashCardNav from "./FlashCardNav";
import CocktailDbResults from "./CocktailDbResults";
import FiltersMenu from "./FiltersMenu";
import makeStyles from "@mui/styles/makeStyles";
import {FlashCardSectionType} from "../../BlockContentTypes";
import {Theme} from "@mui/material/styles";
import {Grid} from "@mui/material";
import SearchProvider from "./search-context/SearchProvider";
import DrinkCard from "./flash-card/DrinkCard";
import {SanityCocktailType} from "../../../common/sanityIo/Types";

interface IProps {
    allCocktails?: SanityCocktailType[]
    searchString?: string
    sectionData: FlashCardSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    contentSection: {
        // height: '500px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

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