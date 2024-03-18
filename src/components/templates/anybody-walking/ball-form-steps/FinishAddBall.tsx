import React, {FunctionComponent} from 'react'
import {Box, Grid, Typography, useTheme} from '@mui/material'
import {CheckCircle, CloseOutlined} from '@mui/icons-material'
import {AddBallState, ValidationResponse} from '../ballroomTypes'
import {renderBallTypeChoice} from '../enums/BallType.enum'

export type FinishAddBallProps = {
    newBallToAdd: AddBallState,
    status: ValidationResponse
}

const FinishAddBall: FunctionComponent<FinishAddBallProps> = (props: FinishAddBallProps) => {

    React.useEffect(() => {
        console.log('Error message in finish step', props.status?.value)
    }, [])

    const theme = useTheme()

    return <Grid container item data-testid='add-ball-finish-step' direction='column'>
        {
            props.status?.status?.statusCode === 200 ?
                <Grid container item justifyContent='center'>
                    <Typography variant='h5' align='center'>
                        <Box color={theme.palette.success.main}>
                            <Grid container direction='column' spacing={5}>
                                <Grid container item alignContent='center' alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <CheckCircle
                                            style={{marginRight: theme.spacing(1.25)}}
                                            fontSize='large'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h5' display='inline'>
                                            Add Ball Success!!
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={2} direction='column' alignItems='center'>
                                    <Grid item>
                                        <Typography variant='h6' align='center'>
                                            {`The ${renderBallTypeChoice(props.newBallToAdd.ballType)} was submitted for approval!`}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color='textSecondary' variant='body1' style={{width: '400px'}}>
                                            The ball details have been submitted. We thank you for the information and
                                            will approve it as soon
                                            as possible.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {props.newBallToAdd.notifyOnApproval &&
                                    <Grid container item justifyContent='center'>
                                        <Grid item style={{width: '800px'}}>
                                            <Typography
                                                color='primary'
                                                variant='body1'
                                                display='inline'
                                                style={{margin: theme.spacing(0, .5)}}
                                            >
                                                {props.newBallToAdd.notifyName}
                                            </Typography>
                                            <Typography display='inline' component='div' color='textPrimary'
                                                        variant='body1'>
                                                {'will receive updates about'}
                                            </Typography>
                                            <Typography
                                                color='primary'
                                                variant='body1'
                                                display='inline'
                                                style={{margin: theme.spacing(0, 0, 0, .5)}}
                                            >
                                                {`${renderBallTypeChoice(props.newBallToAdd.ballType)}:`}
                                            </Typography>
                                            <Typography
                                                color='primary'
                                                variant='body1'
                                                display='inline'
                                                style={{textTransform: 'capitalize', margin: theme.spacing(0, .5, 0, .5)}}
                                            >
                                                {props.newBallToAdd.ballTitle}
                                            </Typography>
                                            <Typography display='inline' component='div' color='textPrimary'
                                                        variant='body1'>
                                                {'at the email you provided'}
                                            </Typography>
                                            <Typography
                                                color='primary'
                                                variant='body1'
                                                display='inline'
                                                style={{margin: theme.spacing(0, .5)}}
                                            >
                                                {props.newBallToAdd.notifyEmail}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                        </Box>
                    </Typography>
                </Grid>
                :
                <Grid container item justifyContent='center'>
                    <Typography variant='h5' align='center'>
                        <Box color={theme.palette.error.main}>
                            <Grid container direction='column' spacing={5}>
                                <Grid container item alignContent='center' alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <CloseOutlined
                                            style={{marginRight: theme.spacing(1.25)}}
                                            fontSize='large'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h5' display='inline'>
                                            Add Ball Error!!
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item spacing={2} direction='column' alignItems='center'
                                      style={{width: '800px'}}>
                                    <Grid item>
                                        <Typography variant='h6' align='center'>
                                            {`Submission of the ${renderBallTypeChoice(props.newBallToAdd.ballType)} ran into an Error!`}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6' align='center'>
                                            {
                                                props.status?.status?.messageText &&
                                                <Typography variant='body1' color='error'>
                                                    {`${props.status?.status?.messageText}...`}
                                                </Typography>
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid container item justifyContent='center'>
                                        <Typography
                                            variant='body2'
                                            color='error'
                                            align='center'
                                        >{props.status?.value?.toString()}</Typography>
                                    </Grid>
                                    <Grid container item justifyContent='center'>
                                        <Typography
                                            variant='body2'
                                            color='error'
                                            align='center'
                                            style={{width: '800px'}}
                                        >Ball
                                            Submission: {JSON.stringify(props.newBallToAdd)}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item justifyContent='center'>
                                    <Typography component='div' color='textSecondary' variant='body1'
                                                style={{width: '400px'}}>
                                        Please contact the Anybody Walking Administrator at admin@anybodywalking.com and
                                        include everything
                                        above in red.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </Grid>
        }
    </Grid>
}

export default FinishAddBall
