import React, {FunctionComponent, useContext} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Divider, Grid, Typography, useMediaQuery} from '@mui/material'
import {ThwWhyChooseUsSectionType} from "../../BlockContentTypes";
import imagePlaceholderClient from "../../../utils/imagePlaceholderClient";
import TransformHWTheme from "../../../theme/TransformHWTheme";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 'max-content',
        backgroundColor: theme.palette.primary.main
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: ThwWhyChooseUsSectionType
}

const ThwServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const xsOnly = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.only('xs'))

    return (
        <Grid container item className={classes.root} xs={12}>
            <Grid container item>
                {<Grid item container xs={12} md={5} style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                    backgroundImage: `url(${imagePlaceholderClient.placeholderOrImage(props.sectionData.imageSrc, 600, 600)})`
                }}>
                </Grid>}
                <Grid item container alignItems='center' alignContent='center' justifyContent='center' xs={12}
                      md={7}
                      style={{padding: xsOnly ? TransformHWTheme.spacing(1.75, 1.5, 3) : TransformHWTheme.spacing(5, 4, 7)}}>
                    <Grid item container style={{marginBottom: "24px"}}>
                        <Typography display='inline' gutterBottom color='secondary' variant='h4'
                                    align='center'>{props.sectionData.sectionTitle}</Typography>
                        <Typography variant='h4'
                                    color='secondary' display='inline'
                                    style={{letterSpacing: "-.25em"}}>____</Typography>
                    </Grid>
                    <Grid item container spacing={2} xs={11}>
                        {props.sectionData.prosList?.map((pro, index: number) => {
                            return <Grid key={index} container item spacing={2}>
                                <Grid container item>
                                    <Grid item container xs={3} style={{
                                        backgroundSize: "contain",
                                        minHeight: "145px",
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${imagePlaceholderClient.placeholderOrImage(pro.imageSrc, 145, 145)})`
                                    }}>

                                    </Grid>
                                    <Grid container item xs={9} justifyContent='center' alignContent='center'>
                                        <Grid container item xs={11} direction='column'>
                                            <Grid item container>
                                                <Typography gutterBottom variant='h6'
                                                            color='textPrimary'>{pro.contentTitle}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                <Typography variant='body1'
                                                            color='secondary'>{pro.contentText}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {index < (props.sectionData.prosList?.length ?? 0) - 1 &&
                                    <Grid container item><Divider style={{width: "100%"}}></Divider></Grid>}
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ThwServicesSection