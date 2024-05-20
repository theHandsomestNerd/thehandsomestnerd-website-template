import {FunctionComponent, PropsWithChildren} from 'react'
import FlashCard from "./flash-card/FlashCard";
import SearchBox from "./search-box/SearchBox";
import FlashCardNav from "./FlashCardNav";
import CocktailDbResults from "./CocktailDbResults";
import FiltersMenu from "./FiltersMenu";
import {FlashCardSectionType} from "../../BlockContentTypes";
import {Grid, Typography, useTheme} from "@mui/material";
import SearchProvider from "./search-context/SearchProvider";
import DrinkCard from "./flash-card/DrinkCard";

interface IProps {
    sectionData: FlashCardSectionType
}

const FlashCardsContentSection: FunctionComponent<IProps & PropsWithChildren> = (props) => {
    const theme = useTheme()

    return (
        <SearchProvider>
            <Grid container minWidth={380} item sx={{
                backgroundColor: props.sectionData.isDarkMode ? "black" : "white", padding: theme.spacing(2)
            }}>

                <Grid container item alignItems='center' alignContent='center'
                      sx={{
                          border: "3px solid white",
                          overflow: 'hidden',
                      }}
                >
                    <Grid item container justifyContent='center' alignContent='flex-start' color='white'
                          sx={{
                              borderBottom: "3px solid white",
                              // padding: theme.spacing(1, 2)
                          }}>
                        <Typography variant='h6' align='center'
                                    sx={{
                                        color: props.sectionData.isDarkMode ?
                                            "#dddddd"
                                            : theme.palette.text.primary
                                    }}>{props.sectionData.title}</Typography>
                    </Grid>
                    <Grid container  item justifyContent='center' >
                        <Grid item container xs={2} justifyContent='flex-end'>
                            <FiltersMenu anchor={'bottom'}/>
                        </Grid>
                        <Grid item xs={10}>
                            <SearchBox isDarkMode={props.sectionData.isDarkMode}/>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item container sx={{maxWidth: 508}}>
                            <FlashCardNav isDarkMode={props.sectionData.isDarkMode}>
                                {
                                    props.sectionData.isFlashCard ?
                                        <FlashCard/>
                                        : <DrinkCard isDarkMode={props.sectionData.isDarkMode}/>
                                }
                            </FlashCardNav>
                        </Grid>
                        <Grid item container xs={12} style={{padding: theme.spacing(2.5)}}>
                            <CocktailDbResults/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SearchProvider>
    )
}

export default FlashCardsContentSection