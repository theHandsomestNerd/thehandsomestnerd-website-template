import {FunctionComponent, useContext, useState} from 'react';
import SearchContext from "../search-context/SearchContext";
import {Button, Grid, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";

interface IProps {
    isDarkMode?: boolean
}

const useStyles = makeStyles(() => ({
    textField: (props:IProps) => ({
        "& .MuiFilledInput-input": {
            color: props.isDarkMode?"whitesmoke":"black"
        },
        "& .MuiInputLabel-root":
            {
                "& :hover":{
                    color: props.isDarkMode?"whitesmoke":"black"
                },

                color: props.isDarkMode?"whitesmoke":"black"
            }
    })
}))

const SearchBox: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(props);
    const [searchTerms, setSearchTerms] = useState<string>('');
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
        <Grid container item spacing={1} justifyContent='center'>
            <Grid item >
                <TextField
                    className={classes.textField}
                    variant='filled'
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
            <Grid item>
                <Button onClick={clearSearch}>
                    <Close/>
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchBox;
