import {FunctionComponent, useContext, useEffect, useState} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Grid, Toolbar, Typography, useTheme} from "@mui/material";
import BallDataTiles from './ball-data-tiles/BallDataTiles';
import {AWBallSectionType, SanityBallType} from "./ballroomTypes";
import {Theme} from "@mui/material/styles";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import BallSearchProviderWrapper from "./BallSearchProviderWrapper";

export const useStyles = makeStyles((theme: Theme) => ({
    ballSection: {
        border: '2px solid ' +
            '#e8e8e8',
        // width: '100vw',
        padding: theme.spacing(4, 4, 6, 4),

        margin: theme.spacing(4, 6),
    },
}))


interface IProps {
    sectionData?: AWBallSectionType
    balls?: SanityBallType[]
}

const AWBallSummarySection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    const sanityContext = useContext(SanityContext)

    const [featuredSetOfBalls, setFeaturedSetOfBalls] = useState<SanityBallType[]>([])
    const [upcomingSetOfBalls, setUpcomingSetOfBalls] = useState<SanityBallType[]>([])
    const [remainingSetOfBalls, setRemainingSetOfBalls] = useState<SanityBallType[]>([])

    const [featuredLoading, setFeaturedLoading] = useState<boolean>(false)
    const [upcomingLoading, setUpcomingLoading] = useState<boolean>(false)
    const [remainingLoading, setRemainingLoading] = useState<boolean>(false)

    const getBallData = async () => {
        // Filter featured
        const featured: SanityBallType[] = props.balls ? props.balls.slice(0, 3) : await sanityContext.fetchAllApprovedBalls(' && featured == true')
        console.log('featured', featured)
        setFeaturedSetOfBalls(featured)

        //
        // // Filter upcoming
        const today = new Date()
        const fromNow30Days = new Date()
        fromNow30Days.setDate(today.getDate() + 30)
        const filterQueryString = ` && functionStartDate > "${today.toISOString()}" && functionStartDate < "${fromNow30Days.toISOString()}"`

        const upcoming: SanityBallType[] = props.balls ? props.balls.slice(0, 3) : await sanityContext.fetchAllApprovedBalls(filterQueryString)
        console.log('upcoming', upcoming)

        setUpcomingSetOfBalls(upcoming?.slice(0, 3))

        // Filter rest
        const remainingBalls: SanityBallType[] = props.balls ? props.balls : await sanityContext.fetchAllApprovedBalls('')

        const slugs = featured.concat(upcoming).map((ball: SanityBallType) => ball.slug?.current)
        const theRest = remainingBalls.filter((ball: SanityBallType) => !slugs.includes(ball.slug?.current))
        setRemainingSetOfBalls(theRest)
        console.log('the balls remaining', slugs, theRest)

        return await Promise.all([featured, upcoming, remainingBalls])
    }

    const refreshSearchResults = () => {
        setFeaturedLoading(true)
        setUpcomingLoading(true)
        setRemainingLoading(true)
        console.log(featuredLoading, upcomingLoading, remainingLoading)
        // setSearchParams(queryObject)
        return getBallData().then(() => {
            setFeaturedLoading(false)
            setUpcomingLoading(false)
            setRemainingLoading(false)
        })
    }

    // const getBall = (slug) => {
    //   history.push(`${RoutesEnum.BALL}/${slug}`)
    // }

    useEffect(() => {
        refreshSearchResults().then()
    }, [])
    const theme = useTheme()
    return (
        <BallSearchProviderWrapper results={props.balls}><Grid container justifyContent='center'>
            <Toolbar style={{marginBottom: '48px'}}/>
            <Grid container item spacing={2}
                  style={{borderBottom: "1px solid #333333", padding: theme.spacing(0, 0, 3, 2)}}>
                <Grid item container><Typography variant='h4' color='textSecondary' fontWeight={500}>Featured
                    Balls</Typography></Grid>
                <Grid item container>
                    <BallDataTiles
                        // parentRef={scrollParentRef}
                        // sortFunction={sortBalls}
                        tiles={featuredSetOfBalls}
                        // columns={ballTableColumns}
                    />
                </Grid>
            </Grid>
            <Grid container item className={classes.ballSection} spacing={2}>
                <Grid item container><Typography variant='h4' color='textSecondary' fontWeight={500}>Upcoming
                    Balls</Typography>
                    <Grid item container><Typography variant='body1'>(Last 30 days)</Typography></Grid> </Grid>
                <Grid item container>
                    <BallDataTiles
                        isAgoOn
                        numColumns={4}
                        // parentRef={scrollParentRef}
                        // sortFunction={sortBalls}
                        tiles={upcomingSetOfBalls}
                        // columns={ballTableColumns}
                    />
                </Grid>
            </Grid>
            <Grid container item className={classes.ballSection} spacing={2}>
                <Grid item container><Typography variant='h4' color='textSecondary' fontWeight={500}>More
                    Balls...</Typography></Grid>
                <Grid item container>
                    <Grid item container justifyContent='center'>
                        <BallDataTiles
                            numColumns={4}
                            // parentRef={scrollParentRef}
                            // sortFunction={sortBalls}
                            tiles={remainingSetOfBalls}
                            // columns={ballTableColumns}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid></BallSearchProviderWrapper>
    )
}

export default AWBallSummarySection