import React, {FunctionComponent} from 'react'
import { Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {HowItWorksSectionType, HowItWorksStepNoRefType} from "../BlockContentTypes";
import WebDevSiteTheme, {elainSansExtraBold} from "../../theme/WebDevSiteTheme";
import {COLORS} from "../../theme/DigitalResumeTheme";
import WebDevHowItWorksStep from "./WebDevHowItWorksStep";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4,0,8,0),
        minHeight: 'max-content',
        backgroundColor: '#131313'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: HowItWorksSectionType
}

const WebDevHowItWorksSection: FunctionComponent<IProps> = (props) => {
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
                                                style={{...elainSansExtraBold}}
                                                display='inline'>{props.sectionData?.contentTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.contentTexts?.map((segment: string, index: number) => (
                                <Grid item key={index}>
                                    <Typography variant='body1' color='primary' gutterBottom>{segment}</Typography>
                                </Grid>))}
                        </Grid>
                        <Grid item container>
                            {props.sectionData?.steps?.map((step: HowItWorksStepNoRefType, index: number) => {
                                return <WebDevHowItWorksStep showAmenities key={index} index={index} step={step}/>
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default WebDevHowItWorksSection