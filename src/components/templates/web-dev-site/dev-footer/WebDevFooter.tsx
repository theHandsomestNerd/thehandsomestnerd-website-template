import React, {FunctionComponent} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid, useTheme} from '@mui/material'
import WebDevFooterMenuContainer from './WebDevFooterMenuContainer'
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";

interface IProps {
    pageFooter?: SanityMenuContainer
    footerMenuSlug?: string
    updateIsLoading?: (value: boolean) => void
}

const WebDevFooter: FunctionComponent<IProps> = (props: IProps) => {

    const theTheme = useTheme()
    const useStyles = makeStyles(() => ({
        root: {
            backgroundColor: theTheme.palette.secondary.main,
            // color: '#FDF3EB',
            // marginLeft: -1 * theme.spacing(1),
            // zIndex: 1000,
            padding: theTheme.spacing(4),
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

    const classes = useStyles()


    return (
        <Grid container className={classes.root}>
            <Grid container justifyContent="flex-start">
                <Grid item xs={12}>
                    {props.pageFooter && <WebDevFooterMenuContainer pageFooterMenu={props.pageFooter}
                                                                    updateIsLoading={props.updateIsLoading}
                    />}
                </Grid>
            </Grid>
        </Grid>

    )
}

export default WebDevFooter