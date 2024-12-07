import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {Button, Link, Typography} from '@mui/material'
import {AddBallState, Category, SanityBallType} from "../ballroomTypes";
import {useLocation, useParams} from "react-router-dom";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import FirebaseContext from "../../../../common/firebase/firebase-context/FirebaseContext";
import {Theme, useTheme} from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import {RoutesEnum} from "../enums/Routes.enum";
import {CalendarToday, ChevronLeft, GpsFixed} from "@mui/icons-material";
import {getDayFromDate, getMonthFromDate, getPrettyDateStr, getPrettyTimeStr, getYearFromDate} from "../HTMLUtils";
import ClosedCategory from "../ball-form-steps/AddCategories/ClosedCategory";
import BallMapComponent from "../ball-form-steps/BallMapComponent";
import PageContext from "../../../page-context/PageContext";
import Grid from "@mui/material/Grid2";
import {sanitize} from "isomorphic-dompurify";

export type BallPageProps = {
    ball?: AddBallState
    slug?: string;
    isHideBackButton?: boolean;
}

const useStyles = makeStyles((awTheme: Theme) => ({
    heroImage: {
        minWidth: '540px',
        minHeight: '360px'
    },
    favoritesShareContainer: {
        borderStyle: 'solid',
        borderColor: '#DBDAE3',
        borderWidth: '1px 0',
        backgroundColor: 'whitesmoke',
    },
    ballDescription: {
        whiteSpace: 'pre-wrap'
    },
    leftContent: {
        paddingTop: "16px",
        paddingLeft: "8px",
        [awTheme.breakpoints.up('md')]: {
            paddingLeft: `${awTheme.spacing(12)}px !important`
        }
    },
    littleFaves: {
        [awTheme.breakpoints.up('sm')]: {marginRight: '10%'},
        [awTheme.breakpoints.down('xs')]: {
            marginRight: '45%'
        },
        height: '78px',
        position: 'relative',
        top: 38,
        borderRadius: '36px',
        backgroundColor: 'whitesmoke'
    },
    dateText: {
        marginLeft: awTheme.spacing(2)
    }
}))

const BallPage: FunctionComponent<BallPageProps> = (props: BallPageProps): any => {
    const theme = useTheme()
    const classes = useStyles()
    const location = useLocation()
    const urlParams: any = useParams()
    const sanityContext = useContext(SanityContext)
    const firebaseContext = useContext(FirebaseContext)

    const [ball, setBall] = useState<SanityBallType>()

    const getBallBySlug =
        (slug: string) => {
            return slug ? sanityContext.theSanityClient.getBallBySlug(slug)
                .then((returnedBall: SanityBallType) => {
                    setBall(returnedBall)
                    return returnedBall
                }) : Promise.resolve({})
        }

    useEffect(() => {
        if (ball && firebaseContext.analyticsViewBall) {
            firebaseContext.analyticsViewBall(ball)
        }
    }, [ball])

    useEffect(() => {
        if (!props.slug) {
            getBallBySlug(urlParams.slug).then((retrievedBall: any) => {
                console.log('retrieved from sanity', retrievedBall)
                if (location.state) {
                    const {ballToPreview} = location.state
                    if (ballToPreview) {
                        // translate to a Sanity Ball
                        const sanityBall: SanityBallType = {
                            ballTitle: ballToPreview.ballTitle,
                            ballType: ballToPreview.ballType.toString(),
                            flyer: ballToPreview.flyer,
                            // flyer?: SanityImage,
                            host: ballToPreview.host,
                            categories: ballToPreview.categories,
                            description: ballToPreview.ballDescription,
                            functionStartDate: ballToPreview.functionStartDate,
                            functionEndDate: ballToPreview.functionEndDate,
                            source: ballToPreview.source.toString(),
                            location: {
                                locationName: ballToPreview.location.locationName,
                                url: ballToPreview.location.url,
                                country: ballToPreview.location.country,
                                city: ballToPreview.location.city,
                                street1: ballToPreview.location.street1,
                                street2: ballToPreview.location.street2,
                                state: ballToPreview.location.state
                            },
                            website: ballToPreview.website,
                            notifyEmail: ballToPreview.notifyEmail,
                            notifyName: ballToPreview.notifyName,
                            notifyOnApproval: ballToPreview.notifyOnApproval
                        }

                        setBall(sanityBall)
                    }
                }
            })
        }
    }, [props.slug])

    useEffect(() => {
        const ballToPreview = props.ball
        if (ballToPreview) {
            // translate to a Sanity Ball
            const sanityBall: SanityBallType = {
                ballTitle: ballToPreview.ballTitle,
                ballType: ballToPreview.ballType?.toString(),
                flyer: ballToPreview.flyer,
                // flyer?: SanityImage,
                host: ballToPreview.host,
                categories: ballToPreview.categories,
                description: ballToPreview.description,
                functionStartDate: ballToPreview.functionStartDate,
                functionEndDate: ballToPreview.functionEndDate,
                source: ballToPreview.source?.toString(),
                location: {
                    locationName: ballToPreview.location?.locationName,
                    url: ballToPreview.location?.url,
                    country: ballToPreview.location?.country,
                    city: ballToPreview.location?.city,
                    street1: ballToPreview.location?.street1,
                    street2: ballToPreview.location?.street2,
                    state: ballToPreview.location?.state
                },
                website: ballToPreview.website,
                notifyEmail: ballToPreview.notifyEmail,
                notifyName: ballToPreview.notifyName,
                notifyOnApproval: ballToPreview.notifyOnApproval
            }

            setBall(sanityBall)
        }
    }, [props.ball])

    const pageContext = useContext(PageContext)

    const displayDateRange = (startDate: string, endDate?: string) => {
        let dateRangeString = `${getPrettyDateStr(startDate, true)}, ${getPrettyTimeStr(startDate)}`

        if (endDate) {
            dateRangeString += `- ${getPrettyDateStr(endDate, true)}, ${getPrettyTimeStr(endDate)}`
        }

        return dateRangeString
    }

    return <Grid container size={{xs: 12}}>
        {props.ball &&
            <Grid size={{xs: 12}}>

                {ball &&
                    <Grid container spacing={2}>
                        <Grid
                            data-testid={ball?.flyer?.asset.url ? 'flyer-image' : ''}
                            size={{xs: 12}}
                            className={classes.heroImage}
                            style={{
                                backgroundImage: `url(${ball?.flyer?.asset.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                            {!props.isHideBackButton &&
                                <Grid container justifyContent='space-between'>
                                    <Grid container>
                                        <Button
                                            sx={{paddingX: theme.spacing(4), backgroundColor: 'rgba(0,0,0,.5)'}}
                                            href={`/${pageContext.baseRoute}/${RoutesEnum.SEARCH + "/" + location.search}`}
                                        >
                                            <Grid container>
                                                <Grid>
                                                    <ChevronLeft style={{color: "whitesmoke"}}/>
                                                </Grid>
                                                <Grid>
                                                    <Typography color='white' variant='h6' sx={{paddingTop: "3px"}}>
                                                        Goto Search{props.slug}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                        <Grid
                            container
                            direction='column'
                            justifyContent='space-between'
                            size={{xs: 12}}
                            paddingTop={2}
                            paddingLeft={2}
                            paddingBottom={2}
                        >
                            <Grid container direction='column'>
                                <Grid>
                                    <Typography color='#c1bebe' variant='subtitle2'>
                                        {getDayFromDate(ball?.functionStartDate).toUpperCase()} &bull; {getYearFromDate(ball?.functionStartDate).toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color='textSecondary' variant='h6'>
                                        {getMonthFromDate(ball?.functionStartDate).toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color='textSecondary'
                                                variant='h5'>{ball?.functionStartDate?.substring(8, 10)}</Typography>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Typography
                                    color='textSecondary'>
                                    <Link
                                        href={ball?.website ?? ""}
                                        // dangerouslySetInnerHTML={{__html: ball?.ballTitle}}
                                    >{ball?.ballTitle}</Link>
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    color='textSecondary'>{`by ${ball?.host?.replace(/&amp;/g, '&')}`}</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            paddingBottom={2}
                            style={{
                                borderBottom: '1px solid #DBDAE3'
                            }}
                            size={{xs: 12}}
                        >
                            <Grid size={{md: 6}} container wrap='nowrap'
                                  style={{paddingLeft: "16px", paddingBottom: "8px"}}
                                  spacing={2}>
                                <Grid><CalendarToday color='primary'/></Grid>
                                <Grid container direction='column'>
                                    <Grid><Typography color='textSecondary' variant='body2'>Date and
                                        time</Typography></Grid>
                                    <Grid>
                                        <Typography
                                            color='textSecondary'>{displayDateRange(ball?.functionStartDate, ball?.functionEndDate)}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{md: 6}} container wrap='nowrap' style={{paddingLeft: "16px"}} spacing={2}>
                                <Grid><GpsFixed color='primary'/></Grid>
                                <Grid container direction='column'>
                                    <Grid>
                                        <Typography color='textSecondary' variant='body2'>Location</Typography>
                                    </Grid>
                                    <Grid container direction='column'>
                                        <Typography
                                            color='textSecondary'>{ball?.location?.locationName}</Typography>
                                        {
                                            ball?.location?.street1 &&
                                            <Typography color='textSecondary'>{ball.location.street1}</Typography>
                                        }
                                        {
                                            ball?.location?.street2 &&
                                            <Typography color='textSecondary'>{ball.location.street2}</Typography>
                                        }
                                        {
                                            ball?.location && (ball.location.city || ball.location.state) &&
                                            <Typography
                                                color='textSecondary'
                                            >{`${ball.location.city}, ${ball.location.state}`}</Typography>}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction='column' className={classes.leftContent}>
                            <Grid style={{marginBottom: theme.spacing(2)}}>
                                <Typography variant='h5' color='textSecondary'>About the Function</Typography>
                            </Grid>
                            <Grid>
                                <Typography color='textSecondary' component='div'>
                                    <Grid
                                        className={classes.ballDescription}


                                    ><Typography color='textSecondary' ><div dangerouslySetInnerHTML={{__html: sanitize(ball?.description ||"")}}></div></Typography></Grid>
                                </Typography>
                            </Grid>
                            {ball?.categories?.length > 0 &&
                                <Grid container style={{margin: theme.spacing(2, 0)}}>
                                    <Typography color='textSecondary' variant='h6'>Categories</Typography>
                                </Grid>}
                            {ball?.categories.map((category: Category, index: number) => <Grid container
                                                                                               key={index}
                                                                                               padding={.5}>
                                <ClosedCategory showDescription category={category} keyValue={index}/>
                            </Grid>)}
                        </Grid>
                        <Grid container direction='column' columnSpacing={2} size={{xs:12}}>
                            {ball?.location &&
                                <Grid container justifyContent='center'>
                                    <BallMapComponent
                                        location={ball?.location}
                                    />
                                </Grid>}
                            <Grid container justifyContent='center' paddingTop={3}>
                                <Typography color='textSecondary' variant='h6'>{ball?.ballTitle}</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography color='textSecondary'>at</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography color='textSecondary'
                                            fontStyle='oblique'>{ball?.location?.locationName}</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography color='textSecondary'>
                                    {`${ball?.location?.street1} ${ball?.location?.city}, ${ball?.location?.state}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        slug
                    </Grid>
                }
            </Grid>
        }
    </Grid>
}

export default BallPage
// const BallPageContainer = compose(
//     withGoogleAnalytics('Ball Page')
// )(BallPageBaseNew)
//
// export { BallPageContainer }
