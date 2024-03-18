/**
 *
 * BallPage
 *
 */

import {Grid, Hidden} from '@mui/material'
import React, {FunctionComponent} from 'react'
import {AddBallState} from "../ballroomTypes";
import BallPageBaseNew from './BallPageBaseNew';

export type BallPageProps = {
  ball?: AddBallState
}

const BallPage: FunctionComponent<BallPageProps> = (props: BallPageProps): any => {
  // const theme = useTheme()
  return <Grid
      container
      >

    <Hidden mdDown>
      <Grid item lg={4} xl={4}/>
    </Hidden>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      {props.ball && <BallPageBaseNew ball={props.ball}/>}
    </Grid>
  </Grid>
}

export default BallPage
// const BallPageContainer = compose(
//     withGoogleAnalytics('Ball Page')
// )(BallPageBaseNew)
//
// export { BallPageContainer }
