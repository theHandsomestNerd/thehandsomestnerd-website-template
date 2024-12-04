import {useCallback, useContext, useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import BallSearchContext from "../ball-search-context/BallSearchContext";
import InfiniteScroll from 'react-infinite-scroll-component';
import {SanityBallType} from '../ballroomTypes';
import Grid from "@mui/material/Grid2";
import BallDataTile from "./BallDataTile";

type BallDataTilesProps = {
    ballsData?: SanityBallType[];
    columnSize?: 3 | 4 | 6 | 12;
    isAgoOn?: boolean;
    tileClickAnalytics?: (tileSlug: string) => void;
}

const ROWS_PER_PAGE = 9;

const BallDataTiles: React.FC<BallDataTilesProps> = ({
                                                                   ballsData = [],
                                                                   columnSize,
                                                                   isAgoOn = false,
                                                                   tileClickAnalytics
                                                               }) => {
    const searchContext = useContext(BallSearchContext);

    const [page, setPage] = useState(0);

    const [displayTiles, setDisplayTiles] = useState<SanityBallType[]>()

    useEffect(() => {
        setDisplayTiles(ballsData.slice(0, (page + 1) * ROWS_PER_PAGE));
    }, [page])

    useEffect(() => {
        setPage(0); // Reset pagination when tiles prop changes
        setDisplayTiles(ballsData);
    }, [ballsData]);

    const fetchMoreData = useCallback(() => {
        setPage((prevPage) => prevPage + 1);
    }, []);

    const handleTileClick = useCallback(
        (tile: SanityBallType) => {
            if (tileClickAnalytics && tile.slug?.current) {
                tileClickAnalytics(tile.slug.current);
            }
            if (searchContext.getBall && tile.slug?.current) {
                searchContext.getBall(tile.slug.current);
            }
        },
        [tileClickAnalytics, searchContext]
    );

    if (searchContext.loading) {
        return (
            <Grid
                container
                style={{width: 'calc(100vw - 20px)', height: 53 * 7}}
                alignItems="center"
                justifyContent="center"
            >
                Searching for Balls...
            </Grid>
        );
    }

    if (!ballsData.length) {
        return (
            <Grid
                container
                style={{width: 'calc(100vw - 20px)', height: 53 * 7, border: '1px solid #9D9D9D'}}
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <Typography color="textSecondary">No Balls Match your Search</Typography>
            </Grid>
        );
    }

    return (
        <Grid container id="scrollDiv" justifyContent='center'>
            {displayTiles && displayTiles.length > 3 ? (
                <Grid container>
                    <InfiniteScroll
                        style={{width: "100%"}}
                        dataLength={displayTiles.length}
                        next={fetchMoreData}
                        hasMore
                        loader={<Typography>Loading...</Typography>}
                        scrollableTarget="scrollDiv"
                    >
                        <Grid container spacing={.5}>
                            {displayTiles.map((tile, index) => (
                                <Grid key={index} container size={columnSize || {xs: 12, sm: 6, md: 4}}
                                >
                                    <BallDataTile
                                        ballData={tile}
                                        isAgoOn={isAgoOn}
                                        onClick={handleTileClick}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </InfiniteScroll>
                </Grid>
            ) : (
                <Grid container spacing={2}>
                    {displayTiles && displayTiles.map((tile, index) => (
                        <Grid key={index} container size={{xs: 12, sm: 12, md: 4}}>
                            <BallDataTile
                                ballData={tile}
                                isAgoOn={isAgoOn}
                                onClick={handleTileClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Grid>
    );
};

export default BallDataTiles;