import React, {FunctionComponent} from 'react'
import { Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {PortfolioSectionType, ThwServiceItemNoRefType} from "../../BlockContentTypes";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import WebDevServiceItem from "./WebDevServiceItem";
import {COLORS} from "../../../theme/common/ColorPalette";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // padding: theme.spacing(8),
        minHeight: 'max-content',
        backgroundColor: '#131313',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={WebDevSiteTheme}>
                <Grid container item className={classes.root} xs={12} justifyContent='center'>
                    <Grid container item spacing={2} xs={11}>
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
                                                style={{fontFamily:"Elaine Sans"}}
                                                display='inline'>{props.sectionData?.contentTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.contentTexts?.map((segment: string, index: number) => (
                                <Grid item key={index}>
                                    <Typography variant='body1' color='primary' gutterBottom
                                                style={{fontFamily: "Raleway"}}>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.servicesList?.map((service: ThwServiceItemNoRefType, index: number) => {
                                return <WebDevServiceItem showAmenities key={index} index={index} service={service}/>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default WebDevServicesSection