import React, {FunctionComponent, useContext} from 'react'
import {Grid, IconButton, Tooltip, Typography, useTheme} from "@mui/material";
import {CopyAll} from "@mui/icons-material";
import SnackbarContext from "../../../modal-context/SnackbarContext";

// export const useStyles = makeStyles((theme: Theme) => ({
//     root: {},
// }))

interface IProps {
    socialMediaName: string
    socialMediaLink: string
    isHoverColor?: boolean
    bgColor?: boolean
    theBackgroundColor?: string
    iconColor?: string
    size?: any
    iconButtonIcon?: React.ReactNode
}

const SocialMediaBlockButton: FunctionComponent<IProps> = (props: IProps) => {
    const snackbarContext = useContext(SnackbarContext)
    const customizedThemeContext = useTheme()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.socialMediaLink)
            .then(()=>{
            const snack = <Grid container item>
                <Typography variant='body1'>Copied!</Typography>
            </Grid>

            snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack, 1500)
        })
    }

    return (<>
        {
            props.socialMediaName && <Grid item>
                <Tooltip
                    arrow
                    componentsProps={{
                        arrow: {
                            style: {
                                color: customizedThemeContext.palette.primary.main
                            }
                        },
                        tooltip:
                            {
                                style:
                                    {
                                        backgroundColor: customizedThemeContext.palette.primary.main
                                    }
                            }
                    }}
                    title={<Grid container alignItems='center' spacing={1}>
                        <Grid item xs={10} container>
                            <Typography variant='caption' style={{minWidth:"max-content"}}>{props.socialMediaLink}</Typography>
                        </Grid>
                        <Grid item xs={2} style={{color: "white"}}>
                            <IconButton
                                color='inherit'
                                onClick={copyToClipboard}>
                                <CopyAll
                                    fontSize='small'/>
                            </IconButton>
                        </Grid>
                    </Grid>}
                >
                    <IconButton
                        sx={{
                            "&:hover": {backgroundColor: props.isHoverColor ? customizedThemeContext.palette.primary.dark : 'transparent'},
                            borderRadius: 40,
                            padding: customizedThemeContext.spacing(2),
                            backgroundColor: props.bgColor ? props.theBackgroundColor : 'transparent',
                            color: `${props.iconColor ?? customizedThemeContext.palette.primary.main} !important`,
                        }}
                        href={props.socialMediaLink}
                        size={props.size ? props.size : "small"}>{props.iconButtonIcon}</IconButton>
                </Tooltip>
            </Grid>}
    </>)
}

export default SocialMediaBlockButton