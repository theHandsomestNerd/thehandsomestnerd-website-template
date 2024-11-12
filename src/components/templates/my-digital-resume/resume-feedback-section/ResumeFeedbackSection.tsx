import {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumeFeedbackItemType, ResumeFeedbackSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {COLORS} from "../../../../theme/common/ColorPalette";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    sectionData: ResumeFeedbackSectionType
}

const ResumeFeedbackSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    const customizedThemeContext = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const sanityContext = useContext(SanityContext)
    const xsOnly = useMediaQuery(customizedThemeContext.breakpoints.only('xs'))
    return (
        <Grid
            container
            item
            style={{padding: theme.spacing(4, smDown ? 1 : 4)}}
            className={globalClasses.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <Typography
                            variant='h6'
                        >{props.sectionData.title}</Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            display='inline'
                        >.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container md={8} spacing={2} justifyContent={xsOnly ? "center" : "flex-start"}>
                    {
                        props.sectionData.feedbackEntries?.map((feedbackEntry: ResumeFeedbackItemType, index: number, feedbackEntriesArr:ResumeFeedbackItemType[]) => {
                            return <Grid key={index} item container alignContent='flex-start'
                                         xs={12} spacing={2} justifyContent='flex-start'>
                                <Grid item md={3} lg={2} xl={2} container alignContent='flex-start'>
                                    <img alt={feedbackEntry._id+'-feedback-image'}
                                         src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(feedbackEntry.imageSrc, 80, 80)}
                                         // height={80}
                                         style={{maxWidth: "100%", maxHeight:"100%"}}/>
                                </Grid>
                                <Grid item md={9} lg={10} xl={10} container>
                                    <Grid container item>
                                        <Typography display='inline'
                                                    variant='body2'>{feedbackEntry.customerName}</Typography>
                                    </Grid>
                                    <Grid container item>
                                        <Grid item>

                                            <Typography display='inline'
                                                        variant='subtitle1'>{feedbackEntry.customerTitle}</Typography>@
                                            <Typography display='inline'
                                                        variant='subtitle1'>{feedbackEntry.companyName}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item>
                                        <Typography
                                            variant='body1' gutterBottom>"{feedbackEntry.quote}"</Typography>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        {
                                            index <= feedbackEntriesArr.length - 2 &&
                                            <Divider role='feedback-divider'
                                                     sx={{
                                                         marginTop: "8px",
                                                         backgroundColor: COLORS.LIGHTGRAY,
                                                         width: "100%"
                                                     }}
                                            />
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        })
                    }

                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeFeedbackSection