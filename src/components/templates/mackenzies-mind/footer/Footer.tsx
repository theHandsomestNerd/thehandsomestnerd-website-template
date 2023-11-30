import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, useMediaQuery, useTheme} from '@mui/material'
import FooterMenuContainer from './FooterMenuContainer'
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // paddingTop: "32px",
        backgroundColor: COLORS.DARK_GRAY,
        // color: '#FDF3EB',
        // marginLeft: -1 * theme.spacing(1),
        // zIndex: 1000,
        padding: theme.spacing(4),
        '& .MuiFormLabel-root': {
            color: 'white',
        },
    },
    emailContainer: {
        height: '72px',
    },
    columnHeader: {
        fontWeight: 500,
        color: '#FDF3EB',
        marginBottom: '16px',
    },
    footerLink: {
        marginBottom: '8px',
    },
    newsletterForm: {
        maxWidth: '370px',
    },
    emailInputProps: {
        borderColor: '#FDF3EB',
        color: '#FDF3EB !important',
    },
}))

interface IProps {
    pageFooter?: SanityMenuContainer
    footerMenuSlug?: string
    updateIsLoading?: (value: boolean) => void
}

const Footer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const theme = useTheme()

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    return (
            <Grid container className={classes.root}>
                <Grid container justifyContent="flex-start" sx={{paddingTop:mdDown?0:"56px"}}>
                    <Grid item xs={12}>
                        {props.pageFooter && <FooterMenuContainer pageFooterMenu={props.pageFooter}
                                                                  updateIsLoading={props.updateIsLoading}
                        />}
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Footer