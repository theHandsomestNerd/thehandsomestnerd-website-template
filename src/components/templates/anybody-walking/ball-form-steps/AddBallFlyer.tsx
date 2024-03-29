import {FunctionComponent, useEffect, useRef, useState} from 'react'
import {FormControlLabel, FormGroup, Grid, Typography, useTheme} from '@mui/material'
import {AddBallFlyerState, AddBallState} from '../ballroomTypes'
import {renderBallType} from "../enums/BallType.enum";
import {Image} from '@mui/icons-material'
import StyledTextField from "../styled-text-field/StyledTextField";

export type AddBallFlyerProps = {
  stepComplete(stepState: AddBallFlyerState): void,
  newBallToAdd: AddBallState
}


const AddBallFlyer: FunctionComponent<AddBallFlyerProps> = (props: AddBallFlyerProps) => {

  const flyerInputRef = useRef()
  const [addBallFlyerState, setAddBallFlyerState] = useState<AddBallFlyerState>({})

  useEffect(() => {
    if (addBallFlyerState.flyer) {
      props.stepComplete(addBallFlyerState)
    }
  }, [addBallFlyerState.flyer])

  useEffect(() => {
    if (props.newBallToAdd?.fileUploaded && !props.newBallToAdd?.flyer) {
      console.log('FileUploaded', props.newBallToAdd?.fileUploaded)
      // uploadFile(null, props.newBallToAdd?.fileUploaded)
      setAddBallFlyerState((state:AddBallFlyerState) => ({
        ...state,
        flyer: {
          asset: {
            url: props.newBallToAdd.fileUploaded[0]
          }
        },
        fileUploaded: props.newBallToAdd.fileUploaded[0]
      }))
    }
  }, [props.newBallToAdd.fileUploaded])

  useEffect(() => {
    setAddBallFlyerState((state) => ({
      ...state,
      flyer: props.newBallToAdd.flyer
    }))
  }, [props.newBallToAdd.flyer])

  const fileUploadToBlob = (blob: Blob) => {
    const fileReader:FileReader = new FileReader()
    fileReader.readAsDataURL(blob)

    fileReader.addEventListener('load', function (progressEvent) {
      console.log(progressEvent.target?.result)
      const newState = {
        fileUploaded: blob,
        flyer: {
          asset: {
            url: progressEvent.target?.result?.toString()
          }
        }
      }
      setAddBallFlyerState((state) => ({...state, ...newState}))
    })
  }

  const uploadFile = (event: any) => {
    if (event) {
      fileUploadToBlob(event.target.files[0])
    }
  }

  const updateBallFormParams = (event:any) => {
    if (event.target.files.length === 0) {
      const newState = {
        flyer: {
          asset: {
            url: ''
          }
        }
      }

      setAddBallFlyerState((state) => ({...state, ...newState}))
    } else {
      uploadFile(event)
    }
  }

  const theme = useTheme()

  return (
    <Grid container data-testid='add-ball-flyer-step' direction='column' spacing={1}>
      <Grid container item>
        <Typography
            color='textSecondary'
          variant='h5'
          noWrap>{`Upload a flyer for the ${renderBallType(props.newBallToAdd.ballType)}:`}</Typography>
      </Grid>
      <Grid container item>
        <Typography variant='h5' color='textSecondary'>Select a file below.</Typography>
      </Grid>
      <Grid justifyContent='center' container item spacing={1} style={{paddingTop: theme.spacing(3.25),}} alignItems='center'>
        <Grid container item  xs={12} >
          <FormGroup style={{  width:"100%" }} >
            <FormControlLabel
              style={{alignItems: 'start'}}
              control={<StyledTextField
                required
                //@ts-ignore
                ref={flyerInputRef}
                fullWidth
                variant='outlined'
                onChange={updateBallFormParams}
                name='flyer'
                type='file'
                inputProps={{'data-testid': 'flyer-file-input', accept: 'image/png, image/jpeg'}}
              />} label={<Typography
                color='textSecondary'
                display='inline'
                variant='h6' noWrap
                >{`${renderBallType(props.newBallToAdd.ballType)} Flyer`}</Typography>}
              labelPlacement='top'/>
          </FormGroup>
        </Grid>
        {(addBallFlyerState.flyer?.asset?.url?.length ?? -1) > 0 ? (
          <Grid container item xs={8} justifyContent='center'>
            <img
              data-testid='flyer-image-preview'
              alt='Flyer for the Event'
              src={addBallFlyerState.flyer?.asset.url}
              width='100%'
            />
          </Grid>
        ) : <Grid container item justifyContent='center'>
          <Grid
            container item direction='column' alignItems='center' justifyContent='center' xs={6}
            style={{minHeight: '400px', border: `1px solid #6B6B6B`}}>
            <Grid item><Image fontSize='large' style={{color: theme.palette.text.secondary}}/></Grid>
            <Grid item><Typography color='textSecondary' variant='subtitle1' fontWeight={400}>Image Preview</Typography></Grid>
          </Grid>
        </Grid>}
      </Grid>
    </Grid>
  )
}

export default AddBallFlyer
