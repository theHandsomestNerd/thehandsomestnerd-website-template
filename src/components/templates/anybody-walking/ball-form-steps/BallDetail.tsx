import React, { FunctionComponent } from 'react'
import { Grid, Typography } from '@mui/material'
import { AddBallState, BallDetailState, StepValidationTableType, ValidationResponse } from '../ballroomTypes'
import STEP_BALL_FORM_VALIDATION_STATUS_CODES from '../enums/StepFormValidationCodes.enum'
import { urlPatternValidation } from '../HTMLUtils'
import AwTextField from '../aw-text-field/AWTextField'
import { renderBallType } from '../enums/BallType.enum'

export type BallDetailProps = {
  stepComplete(stepState: BallDetailState): void,
  newBallToAdd: AddBallState,
  validateStep(partialValidation: StepValidationTableType): void
}


const BallDetail: FunctionComponent<BallDetailProps> = (props: BallDetailProps) => {
  const [ballDetailState, setBallDetailState] = React.useState<BallDetailState>({})

  React.useEffect(() => {
    const isDetailValid = (ballDetailState.ballTitle && ballDetailState.ballTitle.length > 0) &&
      (ballDetailState.description && ballDetailState.description.length > 0) &&
      (ballDetailState.host && ballDetailState.host.length > 0) &&
      (ballDetailState.website && ballDetailState.website.length > 0) &&
      validateBallDetail(ballDetailState.ballTitle).status?.statusCode === STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID  &&
      validateBallDetail(ballDetailState.description).status?.statusCode === STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID &&
      validateBallDetail(ballDetailState.host).status?.statusCode === STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID &&
      validateWebsiteUrl(ballDetailState.website).status?.statusCode === STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID


    if(isDetailValid !== undefined){
      let newValue
      if(isDetailValid === "")
        newValue = false
      else
        newValue = isDetailValid
      props.validateStep({
        isBallDetailValid: newValue
      })
    }

    if (isDetailValid) {
      props.stepComplete(ballDetailState)
    }
  }, [
    ballDetailState.ballTitle,
    ballDetailState.description,
    ballDetailState.host,
    ballDetailState.website
  ])

  React.useEffect(() => {
    setBallDetailState((state:any) => ({
      ...state,
      description: props.newBallToAdd.description
    }))
  }, [props.newBallToAdd.description])

  React.useEffect(() => {
    setBallDetailState((state:any) => ({
      ...state,
      host: props.newBallToAdd.host
    }))
  }, [props.newBallToAdd.host])

  React.useEffect(() => {
    setBallDetailState((state:any) => ({
      ...state,
      website: props.newBallToAdd.website
    }))
  }, [props.newBallToAdd.website])

  React.useEffect(() => {
    setBallDetailState((state:any) => ({
      ...state,
      ballTitle: props.newBallToAdd.ballTitle
    }))
  }, [props.newBallToAdd.ballTitle])

  const updateBallFormParams = (event:any) => {
    setBallDetailState((state:any) => ({...state, [event.target.name]: event.target.value}))
  }

  const validateBallDetail = (ballDetail: string) => {
    let response: ValidationResponse = {value: ballDetail}

    if (ballDetail && ballDetail.length <= 1) {
      response = {
        ...response,
        status: {
          messageText: 'Must be longer than 1 character.',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.BALL_TITLE_TOO_SHORT
        }
      }

    } else {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID
        }
      }
    }

    return response
  }

  const validateBallHost = (ballHost: string) => {
    let response: ValidationResponse = {value: ballHost}

    if (ballHost && ballHost.length <= 1) {
      response = {
        ...response,
        status: {
          messageText: 'Hosts\' names must be longer than 1 character.',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.BALL_HOST_TOO_SHORT
        }
      }
    } else {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID
        }
      }
    }

    return response
  }

  const validateWebsiteUrl = (website: string) => {
    let response: ValidationResponse = {value: website}

    if (!website || website === '') {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID
        }
      }
      return response
    }

    const isValidURL = urlPatternValidation(website)
    if (!isValidURL) {
      response = {
        ...response,
        status: {
          messageText: 'The URL is formatted incorrectly. Try something like http://www.website.com',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.URL_INVALID
        }
      }
      return response
    }
    response = {
      ...response,
      status: {
        statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID
      }
    }
    return response

  }

  const validateDescription = (description: string) => {
    let response: ValidationResponse = {value: description}

    if (description && description.length <= 1) {
      response = {
        ...response,
        status: {
          messageText: 'Description must be longer than 1 character.',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.BALL_DESCRIPTION_TOO_SHORT
        }
      }

    } else {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID
        }
      }
    }

    return response
  }

  return (
    <Grid container data-testid='add-ball-detail-step' direction='column' spacing={2}>
      <Grid container item><Typography variant='h5' color='textSecondary'>Tell me more about
        the {renderBallType(props.newBallToAdd.ballType)}...</Typography></Grid>
      <Grid container item direction='column'>
        <Grid item>
          <AwTextField
            onChange={updateBallFormParams}
            value={ballDetailState.ballTitle}
            testId='ball-title'
            fieldLabel={`${renderBallType(props.newBallToAdd.ballType)} Title`}
            fieldName='ballTitle'
            validate={validateBallDetail}
          />
        </Grid>
        <Grid item>
          <AwTextField
            onChange={updateBallFormParams}
            value={ballDetailState.host}
            testId='ball-host'
            fieldLabel={
              <>
                <>{`${renderBallType(props.newBallToAdd.ballType)} Organizer`}</>
                <Typography variant='h6' display='inline' style={{textTransform: 'lowercase'}}>(s)</Typography>
              </>
            }
            fieldName='host'
            validate={validateBallHost}
          />
        </Grid>
        <Grid item>
          <AwTextField
            onChange={updateBallFormParams}
            value={ballDetailState.website}
            testId='ball-website'
            fieldLabel='Website URL:'
            fieldName='website'
            validate={validateWebsiteUrl}
          />
        </Grid>
        <Grid item>
          <AwTextField
            onChange={updateBallFormParams}
            value={ballDetailState.description}
            testId='ball-description'
            fieldLabel='Description'
            fieldName='description'
            multiline
            validate={validateDescription}
          />

        </Grid>
      </Grid>
    </Grid>
  )
}

export default BallDetail
