import {FunctionComponent} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {StatsCounterSectionType} from "../../../BlockContentTypes";

interface IProps {
    sectionData: StatsCounterSectionType
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: {
        backgroundColor: theme.palette.primary.main,
        color:"whitesmoke",
        minHeight: '100px',
        position: "relative",
        padding: theme.spacing(3, 8)
    },
    contentSection: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(8),
        backgroundColor: 'transparent',
    },
}))

const BartenderStatsCounterSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()
    return (
        <Grid container item className={classes.marketingBackground}>
            <Grid container spacing={3}>
                {
                    props.sectionData?.stats?.map(
                        (particularStat, index: number) => <Grid key={index} item sm={6}
                                                                 md={3} container spacing={1}
                                                                 alignItems='center'
                                                                 alignContent='center'>
                            <Grid item xs={4}><Typography variant='h4'
                                                          align='right'
                                                          color={'inherit'}
                                                          style={{fontFamily: "Elaine Sans"}}>{particularStat.statValue}</Typography></Grid>
                            <Grid item xs={8}><Typography variant='body1'
                                                          color={'inherit'}
                                                          style={{fontFamily: "Elaine Sans"}}>{particularStat.statContent}</Typography></Grid>
                        </Grid>)
                }
            </Grid>
        </Grid>
    );
}

export default BartenderStatsCounterSection