import {CircularProgress, Grid, Typography, useTheme} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, {FunctionComponent} from 'react'
import useCustomStyles from "../Styles";
import Logo from "../../../../logo/Logo";


export const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        // backgroundColor: "whitesmoke"
    }
}))

const LoadingPage: FunctionComponent = () => {

    const theme = useTheme()

    const globalClasses = useCustomStyles(theme)

    return (
        <Grid container item justifyContent='center' alignItems='center'
              alignContent='center' className={globalClasses.fullscreen}>
            <Logo isCenter height={200} />
            <Grid item container justifyContent='center' spacing={3}>
                <Grid item container justifyContent='center'>
                    <Typography align='center' variant='h6' style={{fontFamily: "Raleway"}}>Loading...</Typography>
                </Grid>
                <Grid item>
                    <CircularProgress size={40}/>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default LoadingPage