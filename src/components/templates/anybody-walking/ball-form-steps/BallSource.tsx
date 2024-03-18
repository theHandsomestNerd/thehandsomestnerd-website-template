import React, {FunctionComponent} from 'react'
import {Button, Grid, Typography, useTheme} from '@mui/material'
import {AddBallState, BallSourceState} from '../ballroomTypes'
import {makeStyles} from '@mui/styles'
import BallSourceEnum from '../enums/BallSource.enum'

export const useStyles = makeStyles(() => ({
  ballSourceButton: {
    height: '100px',
    minWidth: '100px'
  }
}))

export type BallSourceProps = {
  stepComplete(stepState: BallSourceState): void,
  newBallToAdd: AddBallState
}


const BallSource: FunctionComponent<BallSourceProps> = (props: BallSourceProps) => {
  const classes = useStyles()
  const [activeBallSource, setActiveBallSource] = React.useState<BallSourceEnum>()

  function renderBallSourceChoice(ballSourceChoice?: BallSourceEnum) {
    if(!ballSourceChoice) return ''
    switch (ballSourceChoice) {
      case BallSourceEnum.SPECTATOR:
        return 'Spectator'
      case BallSourceEnum.PROMOTER:
        return 'Promoter'
      default:
        return ''
    }
  }


  function renderBallSource() {
    return renderBallSourceChoice(activeBallSource)
  }

  React.useEffect(() => {
    if (activeBallSource != null) {
      props.stepComplete({source: activeBallSource})
    }
  }, [activeBallSource])

  React.useEffect(() => {
    if (props.newBallToAdd?.source) {
      setActiveBallSource(props.newBallToAdd.source)
    }
  }, [props.newBallToAdd?.source])

  const theme = useTheme()

  return (
    <Grid container data-testid='add-ball-source-step' direction='column' spacing={2}>
      <Grid container item>
        <Grid item>

          <Typography variant='h5' color='textSecondary'>Tell us who you are...</Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{paddingLeft: theme.spacing(2)}}
            variant='h5' data-testid='ball-source-choice' align='center'
            color='primary'>{renderBallSource()}</Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={1} style={{paddingTop: theme.spacing(2.25),height:"450px"}}>

        <Grid container item><Typography variant='h6' style={{textTransform: 'uppercase'}} color='textSecondary'>Choose below:</Typography></Grid>
        <Grid container item alignItems='center'  justifyContent='space-around' direction="column">
          <Grid container item xs={6}>
            <Button
              color="primary"
              className={classes.ballSourceButton}
              fullWidth
              data-testid='ball-source-spectator-button'
              variant={`${activeBallSource === BallSourceEnum.SPECTATOR ? 'contained' : 'outlined'}`}
              onClick={() => setActiveBallSource(BallSourceEnum.SPECTATOR)}><Typography variant='h6'>Ball Spectator</Typography></Button>
          </Grid>
          <Grid container item xs={6}>
            <Button
              color="primary"
              className={classes.ballSourceButton}
              fullWidth
              data-testid='ball-source-organizer-button'
              variant={`${activeBallSource === BallSourceEnum.PROMOTER ? 'contained' : 'outlined'}`}
              onClick={() => setActiveBallSource(BallSourceEnum.PROMOTER)}><Typography variant='h6'>Ball Organizer</Typography></Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BallSource
