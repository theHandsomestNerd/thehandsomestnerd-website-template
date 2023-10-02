import React, {FunctionComponent, useContext} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {CircularProgress, Grid, IconButton, Typography} from '@mui/material'
import {Close} from "@mui/icons-material";
import SnackbarContext from "./SnackbarContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    totalTimeSeconds?:number | null
    date?: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }
}

const SecondsCountdownButton: FunctionComponent<IProps> = ({date, totalTimeSeconds}: IProps) => {
    const snackbarContext = useContext(SnackbarContext)

    return (
        <IconButton
            aria-label="close"
            color='secondary'
            onClick={snackbarContext.handleSnackbarClose}
            size="large">
            {
                <Grid
                    item
                    container
                    justifyContent='center'
                    alignContent='center'
                    style={{
                        position: "relative",
                        minWidth: "32px",
                        height: "32px"
                    }}>
                    <Grid item style={{
                        position: "absolute",
                        top: 3
                    }}>
                        <Grid
                            container
                            item
                            justifyContent='center'
                            alignContent='center'
                            alignItems='center'>
                            <Close/>
                        </Grid>
                    </Grid>
                    <Grid item style={{position: "absolute", top: 0}}>
                        <Grid container item justifyContent='center' alignContent='center' alignItems='center'>
                            <CircularProgress color='secondary' variant='determinate' size={30} value={((date?.seconds ?? 0) / (totalTimeSeconds?totalTimeSeconds:15)) * 100}/>
                        </Grid>
                    </Grid>
                </Grid>
            }</IconButton>
    );
}

export default SecondsCountdownButton