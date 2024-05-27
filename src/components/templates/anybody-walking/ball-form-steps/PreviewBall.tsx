import{ FunctionComponent } from 'react'
import { Grid, Typography } from '@mui/material'
import { AddBallState } from '../ballroomTypes'
import { renderBallTypeChoice } from '../enums/BallType.enum'
import BallPage from '../ball-page/BallPage'

export type PreviewBallProps = {
  newBallToAdd: AddBallState
}

const PreviewBall: FunctionComponent<PreviewBallProps> = (props: PreviewBallProps) =>

  (
    <Grid container item data-testid='add-ball-preview-step' direction='column' spacing={3} overflow='hidden'>
      <Grid container item>
        <Typography variant='h5' color='primary' gutterBottom>
          {`Preview your ${renderBallTypeChoice(props.newBallToAdd.ballType)} below...`}
        </Typography>
        <Typography variant='h5' color='textSecondary'>
          {`When the ${renderBallTypeChoice(props.newBallToAdd.ballType)} is approved by Anybody Walking it will appear as shown below.`}
        </Typography>
      </Grid>
      <Grid container item>
        <BallPage isHideBackButton={true} ball={props.newBallToAdd}/>
      </Grid>
    </Grid>
  )


export default PreviewBall
