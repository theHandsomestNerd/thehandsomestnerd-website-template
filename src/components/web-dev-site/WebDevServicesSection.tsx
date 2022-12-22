import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, MuiThemeProvider, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {PortfolioSectionType, ThwServiceItemNoRefType, ThwServicesSectionType} from "../BlockContentTypes";
import cmsClient from "../block-content-ui/cmsClient";
import mediaQueries from "../../utils/mediaQueries";
import PageContext from "../page-context/PageContext";
import WebDevSiteTheme, {elainSansExtraBold} from "../../theme/WebDevSiteTheme";
import ThwServiceItem from "../transform-hw/ThwServiceItem";
import WebDevServiceItem from "./WebDevServiceItem";
import {COLORS} from "../../theme/DigitalResumeTheme";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(8),
        minHeight: 'max-content',
        backgroundColor: '#131313'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: PortfolioSectionType
}

const WebDevServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()

    return (
        <MuiThemeProvider theme={WebDevSiteTheme}>
            <Grid container item className={classes.root} xs={12}>
                <Grid container item spacing={2}>
                <Grid container item>
                    <Grid item container>
                        <Typography variant='subtitle2'
                                    color='secondary'
                                    style={{color: COLORS.AQUA}}
                        >{props.sectionData?.contentPreTitle}</Typography>
                    </Grid>
                    <Grid item container wrap='nowrap'>
                        <Grid item>
                            <Typography color='primary' variant='h2' align='center'
                                        style={{...elainSansExtraBold}}
                                        display='inline'>{props.sectionData?.contentTitle}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container>
                    {props.sectionData?.contentTexts?.map((segment: string, index: number) => (<Grid item key={index}>
                        <Typography variant='body1' color='primary' gutterBottom>{segment}</Typography>
                    </Grid>))}
                </Grid>
                <Grid item container>
                    {props.sectionData?.servicesList?.map((service: ThwServiceItemNoRefType, index: number) => {
                        return <WebDevServiceItem showAmenities key={index} index={index} service={service}/>
                    })}
                </Grid>
            </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

export default WebDevServicesSection