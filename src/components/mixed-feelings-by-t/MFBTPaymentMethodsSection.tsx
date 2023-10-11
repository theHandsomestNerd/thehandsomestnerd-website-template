import React, {FunctionComponent} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {MfbtPaymentMethodSectionType} from "../BlockContentTypes";
import widthUtils from "../../utils/widthUtils";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: "white",
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtPaymentMethodSectionType
}

const MFBTAboutTheProprietor: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
const xsOnly = widthUtils.useIsWidthDown('xs')
    return (
        <Grid container item className={classes.root} xs={xsOnly ? 12 : 11}
              style={xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                  paddingBottom: MixedFeelingsByTTheme.spacing(10),
                  paddingTop: MixedFeelingsByTTheme.spacing(10),
              }}>
            <Grid container item alignContent='center' justifyContent='center' style={{paddingBottom: xsOnly ? MixedFeelingsByTTheme.spacing(3):MixedFeelingsByTTheme.spacing(0)}}>
                <Typography variant={"h3"}>{props.sectionData.title}</Typography>
            </Grid>
            <Grid container item justifyContent='space-around'
            >
                <Grid container item>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={115}
                                                imageSrc={props.sectionData.mainPaymentImage}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item justifyContent='space-around' spacing={2} style={{padding: MixedFeelingsByTTheme.spacing(2,4)}}
            >
                <Grid container item xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage1}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
                <Grid container item  xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage2}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage3}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTAboutTheProprietor