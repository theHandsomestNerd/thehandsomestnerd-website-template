import {FunctionComponent, useEffect, useState} from 'react'
import {CircularProgress, Grid, Link, Typography} from '@mui/material'
import pdfClient from "../../../../utils/pdfClient";

// const useStyles = makeStyles((theme: Theme) => ({
//     endAdornedInput: {
//         "& .MuiFilledInput-adornedEnd": {
//             border: `1px solid ${theme.palette?.primary.main}`,
//             // marginRight: '-12px',
//             borderTopRightRadius: theme?.shape?.borderRadius,
//             borderBottomRightRadius: theme?.shape?.borderRadius,
//         },
//         "& .MuiOutlinedInput-adornedEnd": {
//             border: "1px solid white",
//             // paddingRight: 0,
//             borderTopRightRadius: theme?.shape?.borderRadius,
//             borderBottomRightRadius: theme?.shape?.borderRadius,
//         },
//         "& .MuiInputBase-input": {
//             borderRightWidth: 0,
//             "&:hover": {
//                 borderBottomColor: "white"
//             },
//         },
//         "& .MuiButton-containedSecondary": {
//             border: 0,
//             borderLeft: '1px solid white'
//         },
//     },
// }))

export interface SubmitEmailIProps {
    emailFieldText: string
    emailButtonText: string
    subscribeText: string
    source: string
}

const BusinessCardSubmitEmail: FunctionComponent<SubmitEmailIProps> = () => {
    // const theme = useTheme()
    // const classes = useCustomStyles({})
    // const myClasses = useStyles()

    // const [email, setEmail] = useState("")
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [isError, setIsError] = useState<boolean>(false)
    // const [data, setData] = useState<any>()


    const [aLinkUrl, setALinkUrl] = useState<string | undefined>(undefined)
    useEffect(() => {
        pdfClient.getPDFLink()
            .then(async (theLink:string|undefined) => {
                setALinkUrl(theLink)
            })

    }, [])

    // const createLead = async (): Promise<any> => {
    //     setIsLoading(true)
    //     setIsError(false)
    //
    //     const response = await leadClient.sendBusinessCardEmail({email, source: props.source});
    //     // console.log(response)
    //
    //     if (response.status === "400") {
    //         console.log("there was error")
    //         setIsError(true)
    //         setData(null)
    //         setIsLoading(false)
    //     } else {
    //
    //         setData(response)
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     if (!isEmail(email) && email.length > 0) {
    //         setIsError(true)
    //     } else if (isEmail(email)) {
    //         setIsError(false)
    //     }
    // }, [email])

    // const getHelperText = () => {
    //     if ((data || isError) && !isEmail(email)) {
    //         return <Typography style={{color: theme.palette.error.main, fontFamily: "Raleway"}} variant='subtitle1'>This
    //             is not a
    //             valid email address.</Typography>
    //     }
    //
    //     if (data) {
    //         return <Typography style={{color: theme.palette.success.main, fontFamily: "Raleway"}} variant='subtitle1'>Thank
    //             you for
    //             your submission!</Typography>
    //     }
    //     if (isError) {
    //         return <Typography style={{color: theme.palette.error.main, fontFamily: "Raleway"}} variant='subtitle1'>Please
    //             Try your
    //             submission again later or contact hello@thehandsomestnerd.com.</Typography>
    //     }
    //
    //     return <Typography variant='subtitle1'>&nbsp;</Typography>
    // }


    return (<Grid container item justifyContent='center' data-testid='submit-email-block'>
        {/*<Grid item container justifyContent='center'>*/}
        {/*    <Typography color='primary' gutterBottom variant='body2'*/}
        {/*                align='center'*/}
        {/*                style={{*/}
        {/*                    fontFamily: "Raleway",*/}
        {/*                    marginBottom: theme?.spacing(2)*/}
        {/*                }}>{props.subscribeText}</Typography>*/}
        {/*</Grid>*/}
        {/*<Grid item container xs={11} md={10}>*/}
        {/*    <TextField fullWidth*/}
        {/*               label={<Typography style={{fontFamily: "Raleway"}}>{props.emailFieldText}</Typography>}*/}
        {/*               variant='outlined'*/}
        {/*               style={{paddingRight: "0", fontFamily: "Raleway"}}*/}
        {/*               type='email'*/}
        {/*               value={email}*/}
        {/*               onChange={(event: ChangeEvent<HTMLInputElement>) => {*/}
        {/*                   setEmail(event.target.value)*/}
        {/*               }}*/}
        {/*               className={myClasses.endAdornedInput}*/}
        {/*               InputProps={{*/}
        {/*                   // notched: true,*/}
        {/*                   endAdornment:*/}
        {/*                       <LoadingButton*/}
        {/*                           width={100}*/}
        {/*                           isLoading={isLoading}*/}
        {/*                           groupiness={ButtonGroupMemberEnum.RIGHT}*/}
        {/*                           disabled={!!(email.length === 0 || data || isError || (email && (email.length > 0) && !isEmail(email)))}*/}
        {/*                           clickHandler={createLead}*/}
        {/*                           color='primary'*/}
        {/*                           variant='contained'><Typography variant='button'*/}
        {/*                                                           style={{fontFamily: "Raleway"}}>{props.emailButtonText}</Typography></LoadingButton>*/}
        {/*                   ,*/}
        {/*               }}/>*/}
        {/*</Grid>*/}
        {/*<Grid item container justifyContent='center' className={classes.spacer}>*/}
        {/*    {getHelperText()}*/}
        {/*</Grid>*/}
        <Grid container item justifyContent='center'>
            {aLinkUrl ? <Link href={aLinkUrl}>Download PDF</Link> :
                <Grid spacing={.5} container item alignContent='center' justifyContent='center'
                      alignItems='center'><Grid item><CircularProgress size={12} color='primary'/></Grid><Grid
                    item><Typography color='primary'>Creating PDF version of Resume...</Typography></Grid></Grid>}
            {/*<PDFDownloadLink style={{color: theme.palette.primary.main}}*/}
            {/*                 fileName={`${page.page?.businessContact?.title}-Resume.pdf`}*/}
            {/*                 document={<ResumeDocumentPDF homePage={page.page}/>}>*/}
            {/*    */}
            {/*</PDFDownloadLink>*/}
        </Grid>
    </Grid>)
}

export default BusinessCardSubmitEmail