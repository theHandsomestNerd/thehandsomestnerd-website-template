import {makeStyles} from '@mui/styles'
import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {SanityBallType} from '../ballroomTypes'
import {Grid, GridSize, Typography} from "@mui/material";
import BallSearchContext from "../ball-search-context/BallSearchContext";
import InfiniteScroll from 'react-infinite-scroll-component'
import SingleBallSmallView from '../single-ball-small-view/SingleBallSmallView';

import TimeAgo from 'react-timeago'
import {COLORS} from "../../../../theme/common/ColorPalette";

export const useStyles = makeStyles(() => ({
    root: {
        // position: 'relative',
        // marginTop: '64px',
    },
}))

type DataTilesProps = {
    tiles?: SanityBallType[],
    numColumns?: GridSize,
    isAgoOn?: boolean
}

type DataTilesStateType = { displayTiles?: SanityBallType[], page: number, rowsPerPage: number }

const BallDataTiles: FunctionComponent<DataTilesProps> = (props: DataTilesProps) => {
    const classes = useStyles()
    const searchContext = useContext(BallSearchContext)

    const [state, setState] = useState<DataTilesStateType>({displayTiles: [], page: 0, rowsPerPage: 9})

    useEffect(() => {
        if (props.tiles) {
            setState((newState: DataTilesStateType) => ({
                ...newState,
                displayTiles: props.tiles,
            }))
        }
    }, [props.tiles])

    const getTiles = (rows: any, page: any, thisRowsPerPage: any) => rows?.slice(0, (page * thisRowsPerPage) + thisRowsPerPage)

    const fetchMoreData = () => {

        setState((pageAndTilesState: DataTilesStateType) => (
            {
                ...pageAndTilesState,
                page: pageAndTilesState.page + 1,
                displayTiles: getTiles(state.displayTiles, pageAndTilesState.page + 1, pageAndTilesState.rowsPerPage),
            }))
    }

    // useEffect(() => {
    //     console.log('dataTiles mout', props, searchContext)
    //     if (searchContext.setDisplayResults && props.tiles)
    //         setDisplayedResults(props.tiles)
    // },[])

    const tileClick = (tile: SanityBallType) => {
        console.log('tileCLick', tile)
        if (searchContext.getBall)
            return searchContext.getBall(tile.slug?.current)
        return undefined
    }

    // useEffect(() => {
    //     console.log('page is ', state)
    // }, [state.page])

    return (
        <BallSearchContext.Consumer>
            {
                searchContextUI =>
                    searchContextUI.loading ?
                        <Grid
                            container
                            item
                            style={{width: 'calc(100vw - 20px)', height: 53 * 7}}
                            alignItems='center'
                            justifyContent='center'
                        >Searching for Balls...</Grid>
                        :
                        !state.displayTiles || state.displayTiles.length === 0 ?
                            <Grid
                                container
                                item
                                style={{width: 'calc(100vw - 20px)', height: 53 * 7, border: '1px solid #9D9D9D'}}
                                alignItems='center'
                                justifyContent='center'
                                direction='column'
                            >
                                <Grid item>
                                    <Typography color='textSecondary'>No
                                        Balls Match your Search</Typography>
                                </Grid>
                            </Grid>
                            : state.displayTiles && state.displayTiles.length > 0 &&
                            <Grid container item xs={12} className={classes.root} id='scrollDiv'
                                  justifyContent='center'>
                                {
                                    (state.displayTiles).length > 3 ?
                                        <Grid item><InfiniteScroll
                                            style={{width: '100%'}}
                                            dataLength={state.displayTiles.length}
                                            next={fetchMoreData}
                                            hasMore
                                            loader={<h4></h4>}
                                            scrollableTarget='scrollDiv'
                                        >
                                            <Grid container style={{overflowX: 'hidden'}} spacing={2}>
                                                {(state.displayTiles).map((tile, index) => (
                                                    <Grid
                                                        container
                                                        key={index}
                                                        item
                                                        onClick={() => {
                                                            console.log('click this tile', tile)
                                                            tileClick(tile)
                                                        }}
                                                        xs={props.numColumns ? props.numColumns : 12}
                                                        sm={props.numColumns ? props.numColumns : 6}
                                                        md={props.numColumns ? props.numColumns : 4}
                                                    >
                                                        <Grid item style={{padding: '8px'}} container>
                                                            <SingleBallSmallView key={index} ball={tile}/>
                                                        </Grid>

                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </InfiniteScroll></Grid> :
                                        <Grid container style={{overflowX: 'hidden'}} spacing={2}>
                                            {
                                                (state.displayTiles).map(
                                                    (tile, index) => (
                                                        <Grid
                                                            key={index}
                                                            item
                                                            style={{position: "relative"}}
                                                            onClick={() => {
                                                                console.log('click this tile', tile)
                                                                tileClick(tile)
                                                            }}
                                                            xs={props.numColumns ? props.numColumns : 12}
                                                            sm={props.numColumns ? props.numColumns : 6}
                                                            md={props.numColumns ? props.numColumns : 4}
                                                        >
                                                            <Grid item style={{padding: '8px'}}>
                                                                <SingleBallSmallView key={index} ball={tile}/>
                                                            </Grid>
                                                            {
                                                                props.isAgoOn && tile.functionStartDate &&
                                                                <Grid item justifyContent='flex-end'
                                                                      style={{
                                                                          margin: "8px",
                                                                          backgroundColor: COLORS.TRANSPARENTDARKGRAY,
                                                                          padding: '8px',
                                                                          position: "absolute",
                                                                          right: 0,
                                                                          top: 0
                                                                      }}>
                                                                    <Typography color='white'>
                                                                        <TimeAgo date={tile.functionStartDate}/>
                                                                    </Typography>
                                                                </Grid>
                                                            }
                                                        </Grid>
                                                    ))
                                            }
                                        </Grid>
                                }
                            </Grid>

            }</BallSearchContext.Consumer>
    )

}

export default BallDataTiles
