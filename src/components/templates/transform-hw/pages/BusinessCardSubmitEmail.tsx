import React, {ChangeEvent, FunctionComponent, useContext, useState} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, TextField, Typography, useTheme} from '@mui/material'
import LoadingButton from "../../../loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../../loading-button/ButtonGroupMemberEnum";
import isEmail from "validator/lib/isEmail";
import leadClient from "./under-construction-page/leadClient";
import TheWebsiteTheme from "../../../../theme/Theme";
import useCustomStyles from "../../mackenzies-mind/pages/Styles";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";

const useStyles = makeStyles((theme: Theme) => ({
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            border: "1px solid red",
            // marginRight: '-12px',
            borderTopRightRadius: TheWebsiteTheme.shape.borderRadius,
            borderBottomRightRadius: TheWebsiteTheme.shape.borderRadius,
        },
        "& .MuiOutlinedInput-adornedEnd": {
            border: "1px solid white",
            // paddingRight: 0,
            borderTopRightRadius: TheWebsiteTheme.shape.borderRadius,
            borderBottomRightRadius: TheWebsiteTheme.shape.borderRadius,
        },
        "& .MuiInputBase-input": {
            borderRightWidth: 0,
            "&:hover": {
                borderBottomColor: "white"
            },
        },
        "& .MuiButton-containedSecondary": {
            border: 0,
            borderLeft: '1px solid white'
        },
    },
}))

export interface SubmitEmailIProps {
    emailFieldText: string
    emailButtonText: string
    subscribeText: string
    source: string
}

const BusinessCardSubmitEmail: FunctionComponent<SubmitEmailIProps> = (props: SubmitEmailIProps) => {
    const theme = useTheme()
    const classes = useCustomStyles(TheWebsiteTheme)
    const myClasses = useStyles(TheWebsiteTheme)

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    const [data, setData] = React.useState<any>()

    const createLead = async (e: any): Promise<any> => {
        setIsLoading(true)
        setIsError(false)

        const response = await leadClient.sendBusinessCardEmail({email, source: props.source});
        console.log(response)

        if (response.status === "400") {
            console.log("there was error")
            setIsError(true)
            setData(null)
            setIsLoading(false)
        } else {

            setData(response)
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        if (!isEmail(email) && email.length > 0) {
            setIsError(true)
        } else if(isEmail(email)){
            setIsError(false)
        }
    }, [email])

    const getHelperText = () => {
        if ((data || isError) && !isEmail(email)) {
            return <Typography style={{color: theme.palette.error.main, fontFamily:"Raleway"}} variant='subtitle1'>This is not a
                valid email address.</Typography>
        }

        if (data) {
            return <Typography style={{color: theme.palette.success.main, fontFamily:"Raleway"}} variant='subtitle1'>Thank you for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: theme.palette.error.main, fontFamily:"Raleway"}} variant='subtitle1'>Please Try your
                submission again later or contact hello@thehandsomestnerd.com.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }


    return (<Grid container item justifyContent='center' data-testid='submit-email-block'>
        <Grid item container justifyContent='center'>
            <Typography color='primary' gutterBottom variant='body2'
                        align='center'
                        style={{fontFamily: "Raleway", marginBottom: theme?.spacing(2)}}>{props.subscribeText}</Typography>
        </Grid>
        <Grid item container xs={11} md={10}>
            <TextField fullWidth
                       label={<Typography style={{fontFamily: "Raleway"}}>{props.emailFieldText}</Typography>}
                       variant='outlined'
                       style={{paddingRight: "0", fontFamily: "Raleway"}}
                       type='email'
                       value={email}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           setEmail(event.target.value)
                       }}
                       className={myClasses.endAdornedInput}
                       InputProps={{
                           // notched: true,
                           endAdornment:
                               <LoadingButton
                                   width={100}
                                   isLoading={isLoading}
                                   groupiness={ButtonGroupMemberEnum.RIGHT}
                                   disabled={!!(email.length === 0 || data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                   clickHandler={createLead}
                                   color='primary'
                                   variant='contained'><Typography variant='button'
                                                                   style={{fontFamily: "Raleway"}}>{props.emailButtonText}</Typography></LoadingButton>
                           ,
                       }}/>
        </Grid>
        <Grid item container justifyContent='center' className={classes.spacer}>
            {getHelperText()}
        </Grid></Grid>)
}

export default BusinessCardSubmitEmail