import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {Button, Grid, Hidden, Link, Typography} from '@mui/material'
import {
    CalendarToday,
    ChevronLeft,
    DirectionsBike,
    DirectionsBus,
    DirectionsWalk,
    DriveEta,
    Email,
    Facebook,
    GpsFixed,
    LinkedIn,
    Share,
    Twitter
} from '@mui/icons-material'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {AddBallState, Category, SanityBallType} from '../ballroomTypes'
import makeStyles from "@mui/styles/makeStyles";
import {Theme, useTheme} from "@mui/material/styles";
import {RoutesEnum} from "../enums/Routes.enum";
import SanityContext from '../../../../common/sanityIo/sanity-context/SanityContext'
import {getMonthFromDate, getPrettyDateStr, getPrettyTimeStr} from "../HTMLUtils";
import BallMapComponent from "../ball-form-steps/BallMapComponent";
import ClosedCategory from "../ball-form-steps/AddCategories/ClosedCategory";
import FirebaseContext from "../../../../common/firebase/firebase-context/FirebaseContext";


export const useStyles = makeStyles((awTheme: Theme) => ({
    heroImage: {
        // left: '-16px',
        // width: '100%',
        minWidth: '540px',
        // maxWidth: '720px',
        minHeight: '360px'
    },
    // ballSummaryOrganizer: {
    //   color: '#6F7287'
    // },
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

export type BallPageBaseNewProps = {
    slug?: string;
    // authentication: any;
    ball: AddBallState
}

const BallPageBaseNew: FunctionComponent<BallPageBaseNewProps> = (props: BallPageBaseNewProps): any => {
    const classes = useStyles()
    const location = useLocation()
    const urlParams: any = useParams()
    const navigate = useNavigate()
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
                // @ts-ignore
                if (retrievedBall && retrievedBall !== {}) {
                    // firebaseAnalyticsClient.analyticsViewBall(retrievedBall)
                } else {
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

    const getUrlParams = () => location.search

    const theme = useTheme()
    return (
        <>
            {ball && <Grid container item spacing={2}>
                <Grid container item>
                    <Grid
                        data-testid={ball?.flyer?.asset.url ? 'flyer-image' : ''}
                        item
                        xs={12}
                        lg={8}
                        className={classes.heroImage}
                        style={{
                            backgroundImage: `url(${ball?.flyer?.asset.url})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <Grid container justifyContent='space-between'>
                            <Grid item container>
                                <Button
                                    sx={{paddingX: theme.spacing(4)}}
                                    style={{backgroundColor:'rgba(0,0,0,.5)'}}
                                    onClick={() => navigate(`${RoutesEnum.HOME}${getUrlParams()}`)}
                                >
                                    <Grid container item>
                                        <Grid item><ChevronLeft style={{color: "whitesmoke"}}/></Grid><Grid item><Typography color='white' variant='h6' style={{paddingTop: "3px"}}>Back to Results</Typography></Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                            {/*<Hidden mdUp>*/}
                            {/*  {typeof firebaseClient.app.auth === 'function' && firebaseClient.app.auth().currentUser &&*/}
                            {/*    <Grid container item justifyContent='flex-end' style={{position: 'relative'}}>*/}
                            {/*      <Button variant='contained' className={classes.littleFaves}>*/}
                            {/*        <Typography component='div' color='textSecondary'>*/}
                            {/*          <BallFavoriteButton*/}
                            {/*            ballId={ball._id}*/}
                            {/*            favorites={props.authentication.awUserDetails.favorites}*/}
                            {/*          />*/}
                            {/*        </Typography>*/}
                            {/*      </Button>*/}
                            {/*    </Grid>*/}
                            {/*  }*/}
                            {/*</Hidden>*/}
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction='column'
                        justifyContent='space-between'
                        item
                        xs={12}
                        md={4}
                        // spacing={2}
                        padding={2}
                    >
                        <Grid container item direction='column'>
                            <Grid item >
                                <Typography color='textSecondary' variant='h6'>
                                    {getMonthFromDate(ball?.functionStartDate).toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography color='textSecondary' variant='h5'>{ball?.functionStartDate?.substring(8,10)}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography
                                color='textSecondary'>
                                <Link
                                    href={ball?.website ?? ""}
                                    // dangerouslySetInnerHTML={{__html: ball?.ballTitle}}
                                >{ball?.ballTitle}</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='textSecondary'>{`by ${ball?.host?.replace(/&amp;/g, '&')}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid container item className={classes.favoritesShareContainer} alignItems='center'  paddingBottom={1} paddingTop={2}>
                        <Grid item  style={{paddingLeft:"16px"}}>
                            <Typography color='textSecondary'>
                                <Share style={{fontSize: '38px'}}/>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='textSecondary' component='div'>
                                {/*{typeof firebaseClient.app.auth === 'function' && firebaseClient.app.auth().currentUser &&*/}
                                {/*  <BallFavoriteButton*/}
                                {/*    ballId={ball._id}*/}
                                {/*    favorites={props.authentication.awUserDetails.favorites}*/}
                                {/*  />}*/}
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid
                        container
                        direction='column'
                        item
                        spacing={3}
                        paddingTop={2}
                        paddingBottom={1.5}
                        paddingX={2}
                        style={{
                            borderBottom: '1px solid #DBDAE3'
                    }}
                    >
                        <Grid container item wrap='nowrap' zeroMinWidth spacing={2}>
                            <Grid item><CalendarToday color='primary'/></Grid>
                            <Grid container direction='column' item>
                                <Grid item><Typography color='textSecondary' variant='body2'>Date and time</Typography></Grid>
                                <Grid item>
                                    <Typography
                                        color='textSecondary'>{getPrettyDateStr(ball?.functionStartDate, true)}, {getPrettyTimeStr(ball?.functionStartDate)}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item wrap='nowrap' zeroMinWidth spacing={2}>
                            <Grid item><GpsFixed color='primary'/></Grid>
                            <Grid container direction='column' item>
                                <Grid container item >
                                    <Grid item>
                                        <Typography color='textSecondary' variant='body2'>Location</Typography>
                                    </Grid>
                                    <Grid container direction='column' item>
                                        <Typography color='textSecondary'>{ball?.location?.locationName}</Typography>
                                        <Typography color='textSecondary'>{ball?.location?.street1}</Typography>
                                        <Typography color='textSecondary'>{ball?.location?.street2}</Typography>
                                        <Typography
                                            color='textSecondary'
                                        >{`${ball?.location?.city}, ${ball?.location?.state}`}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid container item>
                    <Grid container direction='column' item xs={12} md={8} className={classes.leftContent}>
                        <Grid item style={{marginBottom: theme.spacing(2)}}>
                            <Typography variant='h5' color='textSecondary'>About the Function</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='textSecondary' component='div'>
                                <Grid
                                    item
                                    className={classes.ballDescription}

                                >{ball?.description?.toString()}</Grid>
                            </Typography>
                        </Grid>
                        {ball?.categories?.length > 0 &&
                            <Grid container item style={{margin: theme.spacing(2, 0)}}>
                                <Typography color='textSecondary' variant='h6'>Categories</Typography>
                            </Grid>}
                        {ball?.categories.map((category: Category, index: number) => <Grid container item key={index}>
                            <ClosedCategory showDescription category={category} keyValue={index}/>
                        </Grid>)}
                    </Grid>
                    <Hidden mdDown>
                        <Grid container direction='column' item xs={4} padding={2} spacing={3}>
                            <Grid container direction='column' item >
                                <Grid item>
                                    <Typography color='textSecondary' variant='body2' fontWeight={600}>Date and time</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color='textSecondary'>
                                        {getPrettyDateStr(ball?.functionStartDate, true)},
                                        {getPrettyTimeStr(ball?.functionStartDate)}
                                    </Typography>
                                    <Typography color='textSecondary' component='div'>
                                        {ball?.functionEndDate !== '' && (
                                            <div>
                                                <div className={classes.dateText}>-</div>
                                                <div className={classes.dateText}>
                                                    {getPrettyTimeStr(ball?.functionEndDate)}
                                                </div>
                                            </div>
                                        )}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction='column' item>
                                <Grid item>
                                    <Typography color='textSecondary' variant='body2' fontWeight={600}>Location</Typography>
                                </Grid>
                                <Grid container direction='column' item>
                                    <Typography color='textSecondary'>{ball?.location?.locationName}</Typography>
                                    <Typography color='textSecondary'>{`${ball?.location?.street1}`}</Typography>
                                    <Typography color='textSecondary'>{`${ball?.location?.street2}`}</Typography>
                                    <Typography color='textSecondary'>
                                        {`${ball?.location?.city}, ${ball?.location?.state}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction='column' item>
                                <Grid container item>
                                    <Typography color='textSecondary' variant='body2' fontWeight={600}>Share with friends</Typography>
                                </Grid>
                                <Grid container item spacing={2}>
                                    <Grid item><Typography color='textSecondary'><Facebook/></Typography></Grid>
                                    <Grid item><Typography color='textSecondary'><LinkedIn/></Typography></Grid>
                                    <Grid item><Typography color='textSecondary'><Twitter/></Typography></Grid>
                                    <Grid item><Typography color='textSecondary'><Email/></Typography></Grid>
                                </Grid>
                            </Grid>
                            <Hidden mdDown>
                                <Grid container justifyContent='center' item>
                                    {/*{ball.slug?.current && <Grid item><BallCheckinList slug={ball.slug?.current}/></Grid>}*/}
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Hidden>
                </Grid>
                {/* <Grid container item>about the organizer</Grid> */}
                <Grid container direction='column' item columnSpacing={2} >
                    {ball?.location &&
                        <Grid container item justifyContent='center' >
                            <BallMapComponent
                                location={ball?.location}
                            />
                        </Grid>}
                    <Grid container item justifyContent='center' paddingTop={3}>
                        <Typography color='textSecondary' variant='h6'>{ball?.ballTitle}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography color='textSecondary'>at</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography color='textSecondary' fontStyle='oblique'>{ball?.location?.locationName}</Typography>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Typography color='textSecondary'>
                            {`${ball?.location?.street1} ${ball?.location?.city}, ${ball?.location?.state}`}
                        </Typography>
                    </Grid>
                    <Grid container item justifyContent='center' paddingTop={2}>
                        <Grid item>
                            <Grid container item columnSpacing={3}>
                                <Grid item><DriveEta color='primary'/></Grid>
                                <Grid item><DirectionsWalk color='primary'/></Grid>
                                <Grid item><DirectionsBus color='primary'/></Grid>
                                <Grid item><DirectionsBike color='primary'/></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden lgUp>
                    <Grid container justifyContent='center' item style={{padding: theme.spacing(3)}}>
                        {/*{ball.slug?.current && <BallCheckinList slug={ball.slug.current}/>}*/}
                    </Grid>
                </Hidden>
                {
                    ball.slug &&
                    <Grid container item xs={12}>
                        <Typography>Comments</Typography>
                    </Grid>
                }
                {/*{*/}
                {/*  ball.slug && <Grid container item style={{marginTop: theme.spacing(2.5)}} justifyContent='center'>*/}
                {/*    <CommentComponent ballId={ball?._id}/>*/}
                {/*  </Grid>*/}
                {/*}*/}
            </Grid>}
        </>
    )
}

export default BallPageBaseNew
