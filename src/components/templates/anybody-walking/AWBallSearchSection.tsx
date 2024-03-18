import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Fab, Grid, Typography} from "@mui/material";
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
import BallSearchProvider from "./ball-search-context/BallSearchProvider";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles(() => ({
    preroot: {
        minHeight: '521px',
        overflow: 'hidden',
        // color: "white",
        // position: "relative",
    },
}))


interface IProps {
    sectionData?: AWBallSectionType
    balls?: SanityBallType[]
}

const BallSearchProviderWrapper: FunctionComponent<PropsWithChildren<{
    results?: SanityBallType[]
}>> = (props: any) => {
    return props.results ? <BallSearchProvider balls={props.results}>
            <Typography variant='h1' color='textSecondary'>WRAPPED</Typography>
            {props.children}
        </BallSearchProvider> :
        <BallSearchProvider><Typography variant='h1' color='textSecondary'>UNWRAPPED</Typography>{props.children}
        </BallSearchProvider>
}

const AWBallSearchSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useCustomStyles({bgImage: undefined})

    const navigate = useNavigate()
    const theClasses = useStyles()

    // const theme = useTheme()
    const searchContext = useContext(BallSearchContext)
    // const sanityContext = useContext(SanityContext)
    const [displayedResults, setDisplayedResults] = React.useState<SanityBallType[]>()

    React.useEffect(() => {
        console.log("The sanity context before setting balls", searchContext)
        // if (props.balls) {
        //     setDisplayedResults(props.balls)
        // } else
        setDisplayedResults(searchContext.displayResults)
    }, [searchContext.displayResults])

    React.useEffect(() => {
        if (props.balls) {
            setDisplayedResults(props.balls)
        }
    }, [props.balls])

    const getNewData = async () => {
        const remainingBalls: SanityBallType[] = props.balls ? props.balls : await sanityContext.fetchAllApprovedBalls('')

        setDisplayedResults(remainingBalls)
        console.log('the balls found', remainingBalls)
    }

    React.useEffect(() => {
        getNewData().then()
    }, [])

    const sanityContext = useContext(SanityContext)


    return (
        <BallSearchProviderWrapper results={props.balls}><Grid container item className={theClasses.preroot}>
            <Grid item container className={clsx(classes.fullSection)}
                  justifyContent='center' alignItems='center'>
                <Grid item alignContent='center' container direction='column'
                      style={{ overflow: 'hidden', position: "relative",}}>
                    <Grid
                        item
                        container
                        style={{
                            zIndex: 1,
                            position: "fixed",
                            left: 0,
                            backgroundColor: "whitesmoke",
                            padding: "16px"
                        }}
                    >
                        <Grid item container justifyContent='center' paddingLeft="32px">
                            <BallSearchBox/>
                        </Grid>
                        <Grid container justifyContent='space-between'
                              marginTop={1}
                              alignItems='center'
                            // paddingX={1.5}
                              style={{backgroundColor: "white"}}
                        >
                            <Grid item>
                                <SearchFilterDropDown/>
                            </Grid>
                            <Grid

                                item
                                justifyContent='flex-end'
                            >
                                <ViewChange/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container item spacing={3} style={{paddingTop: "150px", paddingLeft: "8px"}}>
                        {/*{sectionDataarchContext.loading && <Grid item>*/}
                        {/*    <LinearProgress color='primary' style={{height: '1px'}}/>*/}
                        {/*</Grid>}*/}
                        <AppSettingsContext.Consumer>
                            {appSettings => <Grid container item>
                                <BallSearchContext.Consumer>{
                                    searchValue => searchValue.viewType ? <Grid item container>
                                            {
                                                <BallDataTiles tiles={displayedResults}/>
                                            }
                                        </Grid>
                                        : <Grid item container justifyContent="center"><Grid item>
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
                                    onClick={() => navigate(RoutesEnum.ADD_BALL)}
                                    color='primary'
                                >
                                    <Typography noWrap>Add a new Ball</Typography>
                                </Fab>}
                            </Grid>}
                        </AppSettingsContext.Consumer>
                    </Grid>

                </Grid>
            </Grid>
        </Grid></BallSearchProviderWrapper>
    )
}

export default AWBallSearchSection