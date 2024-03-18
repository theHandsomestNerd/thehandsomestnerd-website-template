import React, {FunctionComponent, useContext} from 'react'
import {HolidayHeadlineSectionType} from "../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from '@mui/material/styles';
import {Box, Grid, Typography} from "@mui/material";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: HolidayHeadlineSectionType
}

const HolidayHeadlineSection: FunctionComponent<IProps> = (props) => {
    const sanityContext = useContext(SanityContext)

    return (
        <Grid container justifyContent='center' item alignContent='center' alignItems='center'
              style={{padding: "40px"}}>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                <img  height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={sanityContext.placeholderOrImage(props.sectionData?.holidayIconLeft, 156, 156)}/>
            </Grid>
            <Grid item xs={12} sm={8} container justifyContent='center'>
                <Grid item>
                    <Typography variant='h2' color='primary' gutterBottom  align='center'>
                        {props.sectionData.contentText}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body1' color='textPrimary' align='center'>
                        {props.sectionData.contentSubtext}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2} container  justifyContent='center' >
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}><img height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={sanityContext.placeholderOrImage(props.sectionData?.holidayIconRight, 156, 156)}/></Box>
            </Grid>
        </Grid>
    )
}

export default HolidayHeadlineSection