import{ FunctionComponent } from 'react'

import {useNavigate} from "react-router-dom";
import {SanityBallType} from "../ballroomTypes";
import { Grid, Link, Typography} from "@mui/material";
import {RoutesEnum} from "../enums/Routes.enum";
import { getPrettyDateStr } from '../HTMLUtils';
import ImageIcon from '@mui/icons-material/Image';


export type SingleBallSmallViewProps = {
  ball: SanityBallType
}

const SingleBallSmallView: FunctionComponent<SingleBallSmallViewProps> = (props: SingleBallSmallViewProps & { children?: React.ReactNode }) => {
const navigate = useNavigate()
  return (
    <Grid container direction="column" item style={{ backgroundColor:'whitesmoke', border:"1px solid #111111" }} spacing={2}>
      <Link role='button' underline={"none"} onClick={() => navigate(`${RoutesEnum.BALL}/${props.ball.slug?.current ?? "no-slug"}`)}><Grid
        container
        alignItems="stretch"
        item

        style={{
          backgroundImage: `url(${props.ball?.flyer?.asset.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '250px',
        }}
      >
        {!props.ball?.flyer && <Grid container item justifyContent="center" alignItems="center" style={{ backgroundColor:'white' }}><ImageIcon /></Grid>}
      </Grid>
        <Grid container style={{ minHeight: '120px' }}>
          <Grid
            container
            item
            justifyContent="center"
          >
            <Typography variant='body1' align='center' color='textSecondary' fontStyle='oblique'>
                {getPrettyDateStr(props.ball?.functionStartDate)}
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Typography variant='h6' align='center' color='primary' fontSize='medium'>
              {props.ball?.ballTitle}
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Typography variant='body1' align='center' color='textSecondary' >
              {props.ball?.location?.locationName}
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="center"
            item
          >
            <Typography variant='body1' align='center' color='textSecondary'>
              {`${props.ball?.location?.city}, ${props.ball?.location?.state}${props.ball?.location?.zip ? ` ${props.ball?.location?.zip}` : ''}`}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  )
}

export default SingleBallSmallView
