import{FunctionComponent, useContext} from 'react'
import BallSearchContext from '../ball-search-context/BallSearchContext'
import {Button, Grid,} from '@mui/material'
import {Close} from '@mui/icons-material'
import StyledTextField from "../styled-text-field/StyledTextField";

// const useStyles = makeStyles(() =>
//     createStyles({
//         textfield: {
//             "& .MuiOutlinedInput-notchedOutline": {
//                 "&:hover" : {
//                 backgroundColor: "red",
//                     borderWidth: 1,
//                     borderColor: "black",
//                 }
//                 // borderWidth: 1,
//                 // borderColor: "black",
//             }
//         },
//     }),
// );

const BallSearchBox: FunctionComponent = () => {
    // const theme =useTheme()
    // const style = {
    //     fieldset: {
    //         borderColor: "black"
    //     },
    //     "&:hover fieldset": {
    //         //borderColor: "green!important" // works
    //         borderColor: "black!important" // doesnt work
    //     }
    // };
    const searchContext = useContext(BallSearchContext)
    // const classes = useStyles()
    return (
        <Grid item container alignItems='stretch'>
            <Grid container item xs={11} >
                <StyledTextField
                    style={{ color: 'black'}}
                    // sx={style}
                    color='primary'
                    fullWidth
                    label='Search the Ball Scene'
                    helperText='Keyword Search'
                    onChange={searchContext.updateSearchParams}
                    name='keywords'
                    value={searchContext.searchParams?.keywords ?? ''}
                />
            </Grid>
            <Grid container item xs={1} justifyContent='center' alignItems='center'>
                    <Button style={{height: 56}} onClick={searchContext.resetSearchResults}>
                        <Close fontSize='large'/>
                    </Button>
            </Grid>
        </Grid>
    )
}

export default BallSearchBox
