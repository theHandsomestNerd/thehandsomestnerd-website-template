import {FunctionComponent, useContext, useEffect, useState} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Fab, Typography} from "@mui/material";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import BallSearchContext from "./ball-search-context/BallSearchContext";
import AppSettingsContext from './app-settings/AppSettingsContext';
import {useNavigate} from "react-router-dom";
import {RoutesEnum} from "./enums/Routes.enum";
import BallDataTable from './ball-data-table/BallDataTable';
import BallFormSteps from './ball-form-steps/BallFormSteps';
import ViewChange from './view-change/ViewChange';
import BallSearchBox from './ball-search-box/BallSearchBox';
import SearchFilterDropDown from "./search-filter-dropdown/SearchFilterDropDown";
import BallDataTiles from './ball-data-tiles/BallDataTiles';
import {AWBallSectionType, SanityBallType} from "./ballroomTypes";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import BallSearchProviderWrapper from "./BallSearchProviderWrapper";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import PageContext from "../../page-context/PageContext";
import Grid from "@mui/material/Grid2";

export const useStyles = makeStyles(() => ({
    preroot: {
        minHeight: '521px',
        overflow: 'hidden',
    },
}))

interface IProps {
    sectionData?: AWBallSectionType
    balls?: SanityBallType[]
}

const AWBallSearchSection: FunctionComponent<IProps> = (props: IProps) => {
    const sanityContext = useContext(SanityContext)
    const searchContext = useContext(BallSearchContext)

    const navigate = useNavigate()
    const classes = useCustomStyles({bgImage: undefined})
    const theClasses = useStyles()

    const firebaseContext = useContext(FirebaseContext)
    const pageContext = useContext(PageContext)
    const buttonText = "Add a new Ball"

    const [displayedResults, setDisplayedResults] = useState<SanityBallType[]>()

    useEffect(() => {
        searchContext.setDisplayResults && searchContext.setDisplayResults(displayedResults)
    }, [displayedResults])

    useEffect(() => {
        if (props.balls) {
            setDisplayedResults(props.balls)
        }
    }, [props.balls])

    const getNewData = async () => {
        const remainingBalls: SanityBallType[] = props.balls ? props.balls : (sanityContext.fetchAllApprovedBalls && await sanityContext.fetchAllApprovedBalls('')) ?? []
        setDisplayedResults(remainingBalls)
    }

    useEffect(() => {
        getNewData().then()
    }, [])

    return (
        <BallSearchProviderWrapper results={props.balls}>
            <Grid container className={theClasses.preroot}
            >
                <Grid container className={clsx(classes.fullSection)}
                      justifyContent='center' alignItems='center'
                      size={{xs: 12}}>
                    <Grid alignContent='center' container direction='column'
                          style={{overflow: 'hidden', position: "relative",}}>
                        <Grid
                            container
                            style={{
                                zIndex: 1,
                                position: "fixed",
                                left: 0,
                                backgroundColor: "whitesmoke",
                            }}
                            size={{xs: 12}}>
                            <Grid container justifyContent='center' paddingLeft="32px" size={{xs: 12}}>
                                <BallSearchBox/>
                            </Grid>
                            <Grid container justifyContent='space-between'
                                  marginTop={1}
                                  alignItems='center'
                                  size={{xs: 12}}
                                  style={{backgroundColor: "white"}}
                            >
                                <Grid>
                                    <SearchFilterDropDown/>
                                </Grid>
                                <Grid
                                    justifyContent='flex-end'
                                >
                                    <ViewChange/>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid container spacing={3}
                              size={{xs: 12}}
                              justifyContent='center'
                              style={{paddingTop: "150px", paddingLeft: "8px", minHeight: "700px"}}>
                            {/*{sectionDataarchContext.loading && <Grid item>*/}
                            {/*    <LinearProgress color='primary' style={{height: '1px'}}/>*/}
                            {/*</Grid>}*/}
                            <AppSettingsContext.Consumer>
                                {appSettings => <Grid container>
                                    <BallSearchContext.Consumer>{
                                        searchValue => searchValue.viewType ? <Grid container>
                                                {
                                                    <BallDataTiles
                                                        tileClickAnalytics={(tileSlug: string) => {
                                                            firebaseContext.ctaClick
                                                            && firebaseContext.ctaClick(
                                                                'searched-ball-tile-click',
                                                                tileSlug,
                                                                pageContext.analyticsId
                                                            )
                                                        }}
                                                        ballsData={searchValue.displayResults}
                                                    />
                                                }
                                            </Grid>
                                            : <Grid container justifyContent="center" paddingTop={'2em'}>
                                                <Grid>
                                                    <BallDataTable/>
                                                </Grid>
                                            </Grid>
                                    }</BallSearchContext.Consumer>
                                    {appSettings.newAddBallStepsFlow ? <BallFormSteps/> : <Fab
                                        style={{
                                            position: 'fixed',
                                            bottom: '32px',
                                            right: '32px',
                                            width: '200px',
                                            height: '40px',
                                            borderRadius: '3px',
                                        }}
                                        onClick={() => {
                                            firebaseContext.ctaClick && firebaseContext.ctaClick('search-page', buttonText, pageContext.analyticsId)
                                            navigate(RoutesEnum.ADD_BALL)
                                        }}
                                        color='primary'
                                    >
                                        <Typography noWrap>Add a new Ball</Typography>
                                    </Fab>}
                                </Grid>}
                            </AppSettingsContext.Consumer>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </BallSearchProviderWrapper>
    )
}

export default AWBallSearchSection