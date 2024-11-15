import {FunctionComponent} from 'react'
import {Grid, Link, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumePortfolioItemType, ResumePortfolioSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import ResumePortfolioEntry from "./ResumePortfolioEntry";

interface ResumePortfolioSectionProps {
    sectionData: ResumePortfolioSectionType
}

const ResumePortfolioSection: FunctionComponent<ResumePortfolioSectionProps> = ({sectionData}: ResumePortfolioSectionProps) => {
    const theme = useTheme()
    const classes = useThwCommonStyles()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container item style={{padding: theme.spacing(4, smDown ? 1 : 4)}}
              className={classes.resumeSection} justifyContent={'center'}>
            <Grid
                container item spacing={3} justifyContent='center'>
                <Grid item container alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <Typography
                            variant='h6'
                        >{sectionData.title}</Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            display='inline'
                        >.
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Typography variant='body1'>{sectionData.introduction}</Typography>
                    </Grid>
                </Grid>
                {
                    sectionData.portfolioEntries && sectionData.portfolioEntries.length > 0 &&
                    <Grid item container justifyContent={'center'} xs={11}
                          justifySelf='center' spacing={1}>
                        {
                            sectionData.portfolioEntries.map(
                                (portfolioItem: ResumePortfolioItemType, index: number) => {
                                    return <Grid key={index} item xs={12} sm={6} lg={4} xl={4}>
                                        <Link id={portfolioItem._id} underline="hover" position='relative' top={-90}/>
                                        <ResumePortfolioEntry portfolioItem={portfolioItem}/>
                                    </Grid>
                                })
                        }
                    </Grid>
                }
            </Grid>
        </Grid>
    );
}

export default ResumePortfolioSection