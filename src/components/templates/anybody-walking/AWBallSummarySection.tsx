import {FunctionComponent, useContext, useEffect, useState} from 'react'

import {Divider, Typography} from "@mui/material";
import BallDataTiles from './ball-data-tiles/BallDataTiles';
import {AWBallSectionType, SanityBallType} from "./ballroomTypes";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import BallSearchProviderWrapper from "./BallSearchProviderWrapper";
import {makeStyles} from '@mui/styles';
import {Theme} from "@mui/material/styles";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import PageContext from "../../page-context/PageContext";
import Grid from "@mui/material/Grid2";

export const useStyles = makeStyles((theme: Theme) => ({
    ballSection: {
        border: '2px solid #e8e8e8',
        padding: theme.spacing(2, 2, 2, 2),
    },
}))

interface IProps {
    sectionData?: AWBallSectionType
    balls?: SanityBallType[]
}

const AWBallSummarySection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    const sanityContext = useContext(SanityContext)
    const firebaseContext = useContext(FirebaseContext)
    const pageContext = useContext(PageContext)

    const [featuredSetOfBalls, setFeaturedSetOfBalls] = useState<SanityBallType[]>([])
    const [upcomingSetOfBalls, setUpcomingSetOfBalls] = useState<SanityBallType[]>([])
    const [remainingSetOfBalls, setRemainingSetOfBalls] = useState<SanityBallType[]>([])

    const [featuredLoading, setFeaturedLoading] = useState<boolean>(false)
    const [upcomingLoading, setUpcomingLoading] = useState<boolean>(false)
    const [remainingLoading, setRemainingLoading] = useState<boolean>(false)

    useEffect(() => {
    }, [featuredLoading, upcomingLoading, remainingLoading])

    const getBallData = async () => {
        // Filter featured
        const featured: SanityBallType[] = props.balls ? props.balls.slice(0, 3) : await sanityContext.fetchAllApprovedBalls(' && featured == true', 3)
        console.log('featured', featured)
        setFeaturedSetOfBalls(featured)

        // // Filter upcoming
        const today = new Date()
        const fromNow30Days = new Date()
        fromNow30Days.setDate(today.getDate() + 30)
        const filterQueryString = ` && functionStartDate > "${today.toISOString()}" && functionStartDate < "${fromNow30Days.toISOString()}"`

        const upcoming: SanityBallType[] = props.balls ? props.balls.slice(0, 3) : await sanityContext.fetchAllApprovedBalls(filterQueryString)
        console.log('upcoming', upcoming)

        setUpcomingSetOfBalls(upcoming?.slice(0, 3))

        // Filter rest
        const remaingBallsQueryString = ` && functionStartDate >= "${today.toISOString()}"`

        const remainingBalls: SanityBallType[] = props.balls ? props.balls : await sanityContext.fetchAllApprovedBalls(remaingBallsQueryString)

        const slugs = featured.concat(upcoming).map((ball: SanityBallType) => ball.slug?.current)
        const theRest = remainingBalls.filter(
            (ball: SanityBallType) => !slugs.includes(ball.slug?.current)
        )
            .sort(() => .5 - Math.random())
        setRemainingSetOfBalls(theRest)
        console.log('the balls remaining', slugs, theRest)

        return await Promise.all([featured, upcoming, remainingBalls])
    }

    const refreshSearchResults = () => {
        setFeaturedLoading(true)
        setUpcomingLoading(true)
        setRemainingLoading(true)

        return getBallData().then(() => {
            setFeaturedLoading(false)
            setUpcomingLoading(false)
            setRemainingLoading(false)
        })
    }

    useEffect(() => {
        refreshSearchResults().then()
    }, [])

    return (
        <BallSearchProviderWrapper results={props.balls}>
            <Grid container justifyContent='center' size={{xs: 12}} spacing={2}>
                <Grid container
                      size={{xs: 12}}
                >
                    <Grid container size={{xs: 12}}>
                        <Typography variant='h4' color='textSecondary' fontWeight={500}>
                            Featured Balls
                        </Typography>
                    </Grid>
                    <Grid container size={{xs: 12}} overflow='scroll' justifyContent='center'>
                        <BallDataTiles
                            columnSize={4}
                            tileClickAnalytics={(tileSlug: string) => {
                                firebaseContext.ctaClick
                                && firebaseContext.ctaClick(
                                    'featured-ball-tile-click',
                                    tileSlug,
                                    pageContext.analyticsId
                                )
                            }}
                            ballsData={featuredSetOfBalls}
                        />
                    </Grid>
                    <Grid container size={{xs: 12}}>
                        <Divider style={{width: "100%"}}/>
                    </Grid>
                </Grid>
                <Grid container className={classes.ballSection} spacing={2} size={{xs: 12}}>
                    <Grid container size={{xs: 12}} alignItems='center'>
                        <Typography
                            align='center'
                            variant='h4'
                            color='textSecondary'
                            fontWeight={500}
                        >
                            Upcoming Balls
                        </Typography>
                        <Grid container>
                            <Typography variant='body1' color='textSecondary'>
                                (Last 30 days)
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container size={{xs: 12}} overflow='scroll' justifyContent='center'>
                        <BallDataTiles
                            isAgoOn
                            tileClickAnalytics={(tileSlug: string) => {
                                firebaseContext.ctaClick
                                && firebaseContext.ctaClick(
                                    'upcoming-ball-tile-click',
                                    tileSlug,
                                    pageContext.analyticsId
                                )
                            }}
                            ballsData={upcomingSetOfBalls}
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.ballSection} spacing={2}>
                    <Grid container size={{xs: 12}}>
                        <Typography variant='h4' color='textSecondary' fontWeight={500}>More
                            Balls...</Typography>
                    </Grid>
                    <Grid container overflow={'scroll'}>
                        <BallDataTiles
                            tileClickAnalytics={(tileSlug: string) => {
                                firebaseContext.ctaClick
                                && firebaseContext.ctaClick(
                                    'uncategorized-ball-tile-click',
                                    tileSlug,
                                    pageContext.analyticsId
                                )
                            }}
                            ballsData={remainingSetOfBalls}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </BallSearchProviderWrapper>
    )
}

export default AWBallSummarySection