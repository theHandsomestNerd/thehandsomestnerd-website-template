import{FunctionComponent, useContext} from 'react'
import {Avatar, Grid, Typography, useTheme} from '@mui/material'
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import {TeamSectionType} from "../../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    email?: string
    sectionData: TeamSectionType
}

export const useStyles = makeStyles(() => ({
    preroot: {
        minHeight: '321px',
        // backgroundColor: "black",
        color:"white"
        // paddingLeft: -theme.spacing(-5),
    },
}))


const TheDrinkeryStaffSection: FunctionComponent<IProps> = (props) => {
    // const classes = useCustomStyles({bgImage: bgImage})
    const classes = useCustomStyles({bgImage: undefined})
    const theClasses = useStyles()
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)

    return (
        <Grid container className={theClasses.preroot}
              style={{position: "relative", color: "white"}}>
            {/*<CssFadeToColor*/}
            {/*    toColor={COLORS.LIGHTGRAY}*/}
            {/*    isResponsive/>*/}
            {/*<Grid container item*/}
            {/*      className={clsx(xsDown ? classes.fullSection : classes.fullSection, classes.fullSectionOverlay)}>*/}
            {/*</Grid>*/}
            <Grid item container className={clsx(classes.fullSection)}
                  style={{
                      // position: 'absolute',
                      // paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item justifyContent='center' style={{paddingTop: theme.spacing(2)}}>
                    <Grid container item justifyContent='center'>
                        <Typography variant='h6' align='center' gutterBottom>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center' xs={12} sm={9} md={7} lg={5} xl={5}>
                        {props.sectionData.teamList.map((teamMember, index)=><Grid key={index} item justifyContent='center' xs={6} sm={4} alignItems={'center'}
                               alignContent='center'>
                            <Grid container item justifyContent='center'>
                                <Avatar src={sanityContext.placeholderOrImage(teamMember.image, 40,40)} variant='rounded' style={{
                                    width: theme.spacing(18),
                                    height: theme.spacing(18),
                                }}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography variant='body1'>{teamMember.title}</Typography>
                            </Grid>
                        </Grid>)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TheDrinkeryStaffSection