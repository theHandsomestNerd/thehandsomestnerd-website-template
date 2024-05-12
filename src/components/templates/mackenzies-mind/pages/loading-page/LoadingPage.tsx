import {CircularProgress, Grid, Typography, useTheme} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {FunctionComponent, useContext} from 'react'
import useCustomStyles from "../Styles";
import Logo from "../../../../logo/Logo";
import CustomizedThemeContext from "../../../../customized-theme-provider/CustomizedThemeContext";


export const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        // backgroundColor: "whitesmoke"
    }
}))

const LoadingPage: FunctionComponent = () => {

    const theme = useTheme()

    const globalClasses = useCustomStyles(theme)

    const customTheme = useContext(CustomizedThemeContext)

    return (
        <Grid container item justifyContent='center' alignItems='center'
              alignContent='center' className={globalClasses.fullscreen}>
            {customTheme.logoSrc ? <Grid item>{
                <img src={customTheme.logoSrc} width={400}/>
            }</Grid>:
                <Logo isCenter height={200} />
}
            <Grid item container justifyContent='center' spacing={3}>
                <Grid item container justifyContent='center'>
                    <Typography color='primary' align='center' variant='h6' style={{fontFamily: "Raleway"}}>Loading...</Typography>
                </Grid>
                <Grid item>
                    <CircularProgress size={40}/>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default LoadingPage