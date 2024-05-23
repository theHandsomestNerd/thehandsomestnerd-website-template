import {makeStyles} from '@mui/styles'
import {FunctionComponent, useEffect, useState} from 'react'
import {AddBallState, BasicBallInfoState} from '../ballroomTypes'
import {BallTypeEnum, renderBallTypeChoice} from '../enums/BallType.enum'
import {Box, Button, Grid, Typography, useTheme} from "@mui/material";

export const useStyles = makeStyles(() => ({
    ballTypeButton: {
        height: '100px',
        minWidth: '100px'
    }
}))

export type BasicBallInfoProps = {
    stepComplete(stepState: BasicBallInfoState): void,
    newBallToAdd: AddBallState
}


const BasicBallInfo: FunctionComponent<BasicBallInfoProps> = (props: BasicBallInfoProps) => {
    const classes = useStyles()
    const [activeBallType, setActiveBallType] = useState<BallTypeEnum>()

    function renderBallType() {
        return renderBallTypeChoice(activeBallType)
    }

    useEffect(() => {
        if (activeBallType != null) {
            props.stepComplete({ballType: activeBallType})
        }
    }, [activeBallType])

    useEffect(() => {
        if (props.newBallToAdd?.ballType) {
            setActiveBallType(props.newBallToAdd.ballType)
        }
    }, [props.newBallToAdd?.ballType])

    const theme = useTheme()
    return (
        <Grid container data-testid='add-ball-basic-info-step' direction='column' spacing={2}>
            <Grid container item>
                <Grid item>
                    <Typography display='inline'
                                variant='h5' color='textSecondary'>What type of ball do you wish to add? <Box sx={{
                        color: theme.palette.primary.main,
                        display: "inline"
                    }}>{renderBallType()}</Box>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item spacing={3} style={{paddingTop: theme.spacing(2.25), height: '450px'}}>

                <Grid container item><Typography variant='h6' style={{textTransform: 'uppercase'}}
                                                 color='textSecondary'>Choose
                    the type of ball below:</Typography></Grid>
                <Grid container item spacing={2}>
                    <Grid container item alignItems='center' justifyContent='space-around' direction='column'
                          spacing={2}>
                        <Grid container item xs={6}>
                            <Button
                                className={classes.ballTypeButton}
                                // style={{...theme.typography.h6}}
                                fullWidth
                                data-testid='ball-type-majorball-button'
                                variant={`${activeBallType === BallTypeEnum.BALL ? 'contained' : 'outlined'}`}
                                color='primary'
                                onClick={() => setActiveBallType(BallTypeEnum.BALL)}>Major Ball</Button>
                        </Grid>
                        <Grid container item xs={6}>
                            <Button
                                className={classes.ballTypeButton}
                                // style={{...theme.typography.h6}}
                                fullWidth
                                data-testid='ball-type-miniball-button'
                                variant={`${activeBallType === BallTypeEnum.MINI_BALL ? 'contained' : 'outlined'}`}
                                color='primary'
                                onClick={() => setActiveBallType(BallTypeEnum.MINI_BALL)}>Mini-Ball</Button>
                        </Grid>
                    </Grid>
                    <Grid container item alignItems='center' justifyContent='space-around' direction='column'
                          spacing={2}>
                        <Grid container item xs={6}>
                            <Button
                                className={classes.ballTypeButton}
                                // style={{...theme.typography.h6}}
                                fullWidth
                                data-testid='ball-type-kikiball-button'
                                variant={`${activeBallType === BallTypeEnum.KIKI_BALL ? 'contained' : 'outlined'}`}
                                color='primary'
                                onClick={() => setActiveBallType(BallTypeEnum.KIKI_BALL)}>Kiki Ball</Button>
                        </Grid>
                        <Grid container item xs={6}>
                            <Button
                                className={classes.ballTypeButton}
                                // style={{...theme.typography.h6}}
                                fullWidth
                                data-testid='ball-type-miniballdeluxe-button'
                                variant={`${activeBallType === BallTypeEnum.MINI_BALL_DELUXE ? 'contained' : 'outlined'}`}
                                color='primary'
                                onClick={() => setActiveBallType(BallTypeEnum.MINI_BALL_DELUXE)}>Mini-Ball
                                Deluxe</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BasicBallInfo
