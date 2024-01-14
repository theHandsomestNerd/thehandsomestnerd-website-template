import React, {FunctionComponent, useContext} from 'react';
import SearchContext from "../search-context/SearchContext";
import {Button, Grid, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";

interface IProps {
}

const SearchBox: FunctionComponent<IProps> = (props) => {
    // const classes = useStyles();
    const [searchTerms, setSearchTerms] = React.useState<string>('');
    const searchContext = useContext(SearchContext)

    const onSearchTermsChange = (newTerms: string) => {
        setSearchTerms(newTerms);
        if (newTerms === "") {
            searchContext?.submitSearch && searchContext?.submitSearch(undefined)
        } else {
            searchContext?.submitSearch && searchContext?.submitSearch(searchTerms)
        }
    };
    const clearSearch = () => {
        setSearchTerms('');
        searchContext?.submitSearch && searchContext?.submitSearch(undefined);
    };
    return (
        <Grid container item spacing={1}>
            <Grid item xs={10} lg={8}>
                <TextField
                    color="secondary"
                    fullWidth
                    helperText="Enter Search Terms here"
                    label="Search"
                    id="search"
                    name="search"
                    type="text"
                    value={searchTerms}
                    onChange={(e): void => onSearchTermsChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={2}>
                <Button onClick={clearSearch}>
                    <Close/>
                </Button>
            </Grid>
            {/*<Grid item xs={12} lg={2} container justifyContent='center'>*/}
            {/*    <Button fullWidth onClick={submitSearch} variant="contained" color="secondary">*/}
            {/*        Search*/}
            {/*    </Button>*/}
            {/*</Grid>*/}
        </Grid>
    );
};

export default SearchBox;
