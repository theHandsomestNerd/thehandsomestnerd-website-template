import React, {FunctionComponent} from 'react'
import {HolidayHeadlineSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from '@mui/material/styles';
import {Box, Grid, Typography, useTheme} from "@mui/material";
import imagePlaceholderClient from "../../utils/imagePlaceholderClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        // backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: HolidayHeadlineSectionType
}

const HolidayHeadlineSection: FunctionComponent<IProps> = (props) => {
    const theme = useTheme()
    return (
        <Grid container justifyContent='center' item alignContent='center' alignItems='center'
              style={{padding: "40px"}}>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                <img  height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={imagePlaceholderClient.placeholderOrImage(props.sectionData?.holidayIconLeft, 156, 156)}/>
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
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}><img height={156} width={156} alt={props.sectionData.slug.current + " Icon"} src={imagePlaceholderClient.placeholderOrImage(props.sectionData?.holidayIconRight, 156, 156)}/></Box>
            </Grid>
        </Grid>
    )
}

export default HolidayHeadlineSection