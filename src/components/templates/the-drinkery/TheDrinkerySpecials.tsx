import React, {FunctionComponent, useContext} from 'react'
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import TheOtherSideLogo from "./TheOtherSideLogo";
import {DrinkerySpecialsSectionType} from "../../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid, Typography, useTheme} from "@mui/material";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import PageContext from '../../page-context/PageContext';

interface IProps {
    email?: string
    sectionData: DrinkerySpecialsSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '521px',
        color: "white",
        position: "relative",
        padding: theme.spacing(9, 0)
    },
}))

const TheDrinkerySpecials: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: undefined})
    const theme = useTheme()
    const theClasses = useStyles()
    const sanityContext = useContext(SanityContext)
const pageContext = useContext(PageContext)
    return (
        <Grid container item className={theClasses.preroot}>
            <Grid item container className={clsx(classes.fullSection)}
                  justifyContent='center' alignItems='center'>
                <Grid item container spacing={1}>
                    <Grid container item justifyContent='center'>
                        <TheOtherSideLogo isCenter={true} logoImageSrc={pageContext.page?.businessCardImageSrc}></TheOtherSideLogo>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <img
                            src={(props.sectionData?.imageSrc ? sanityContext.urlFor(props.sectionData?.imageSrc).url() : sanityContext.placeholderOrImage(props.sectionData.imageSrc, 485, 356)) ?? ""}
                             alt={props.sectionData?.imageSrcAltText}/>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Grid item style={{maxWidth: 800}}>
                            <Typography align='center' variant='body2'
                                        style={{
                                            fontWeight: 400,
                                            paddingTop: 16,
                                            paddingRight: 32,
                                            paddingLeft: 32
                                        }}>
                                {props.sectionData?.contentText}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        justifyContent='center'
                        alignItems='center'
                        alignContent='center'>
                        <Grid
                            item
                            style={{
                                backgroundColor: "whitesmoke"
                            }}>
                            <Typography align='center'
                                        variant='body1'
                                        style={{
                                            fontWeight: 400,
                                            paddingRight: 32,
                                            paddingLeft: 32,
                                            color: "black"
                                        }}>*{props.sectionData?.disclaimer}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h3'>{props.sectionData?.contentTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography variant='body1'>{props.sectionData?.subTitle}</Typography>
                    </Grid>
                    {
                        props.sectionData?.theSpecials.map((specialData,index) =>
                            <Grid container item
                                  key={index}
                                  style={{paddingTop: theme.spacing(4)}}>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='h4'>{specialData.title}</Typography>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography variant='body2'>{specialData.content}</Typography>
                                </Grid>
                            </Grid>)
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkerySpecials