import {SanityBallType} from "../ballroomTypes";
import Grid from "@mui/material/Grid2";
import {COLORS} from "../../../../theme/common/ColorPalette";
import {Box, Button, Typography} from "@mui/material";
import TimeAgo from "react-timeago";
import {RoutesEnum} from "../enums/Routes.enum";
import {getPrettyDateStr} from "../HTMLUtils";

const BallDataTile: React.FC<{
    ballData: SanityBallType;
    isAgoOn?: boolean;
    onClick: (tile: SanityBallType) => void;
}> = ({ballData, isAgoOn, onClick}) => {
    const {
        slug,
        flyer,
        functionStartDate,
        ballTitle,
        location,
    } = ballData;

    const ballUrl = `${RoutesEnum.BALL}/${slug?.current ?? 'no-slug'}`;
    const flyerUrl = flyer?.asset.url ?? '';
    const locationName = location?.locationName ?? '';
    const city = location?.city ?? '';
    const state = location?.state ?? '';
    const zip = location?.zip ? ` ${location.zip}` : '';

    return (
        <Grid
            container size={{xs: 12}}
            onClick={() => onClick(ballData)}
            style={{position: 'relative', padding: '8px'}}
        >
            <Button
                fullWidth
                href={ballUrl}
                sx={{p: 0, textTransform: 'none'}}
            >
                <Grid
                    size={{xs: 12}}
                    sx={{
                        backgroundColor: 'whitesmoke',
                        border: '1px solid #111111',
                    }}
                >
                    <Grid
                        size={{xs: 12}}
                        sx={{
                            backgroundImage: `url(${flyerUrl})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: 250,
                        }}
                    />

                    <Grid
                        container
                        flexDirection="column"
                        sx={{
                            minHeight: '8em',
                            px: 1.5,
                            justifyContent: 'space-around',
                        }}
                    >
                        <Box>
                            <Typography variant="body1" align="center" color="text.secondary" fontStyle="italic">
                                {getPrettyDateStr(functionStartDate)}
                            </Typography>
                        </Box>
                        <Box sx={{minHeight: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography variant="h6" align="center" color="primary">
                                {ballTitle}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" align="center" color="text.secondary">
                                {locationName}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" align="center" color="text.secondary">
                                {`${city}, ${state}${zip}`}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Button>

            {isAgoOn && functionStartDate && (
                <Grid
                    container
                    justifyContent="flex-end"
                    style={{
                        margin: "8px",
                        backgroundColor: COLORS.TRANSPARENTDARKGRAY,
                        padding: '8px',
                        position: "absolute",
                        right: 0,
                        top: 0,
                    }}
                >
                    <Typography color="white">
                        <TimeAgo date={functionStartDate}/>
                    </Typography>
                </Grid>
            )}
        </Grid>
    )
};

export default BallDataTile;