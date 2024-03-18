import React, { FunctionComponent } from 'react'
import { Button, Grid, Typography, useTheme } from '@mui/material'
import {
  AddBallState,
  NotifyOnApprovalState,
  StepValidationTableType,
  ValidationResponse
} from '../ballroomTypes'
import STEP_BALL_FORM_VALIDATION_STATUS_CODES from "../enums/StepFormValidationCodes.enum";
import { urlPatternValidation } from '../HTMLUtils';
import {renderBallType} from "../enums/BallType.enum";
import AwTextField from '../aw-text-field/AWTextField';

export type NotifyOnApprovalProps = {
  stepComplete(stepState: NotifyOnApprovalState): void,
  newBallToAdd: AddBallState,
  validateStep(partialValidation: StepValidationTableType): void
}

const NotifyOnApproval: FunctionComponent<NotifyOnApprovalProps> = (props: NotifyOnApprovalProps) => {
  const [notifyOnApprovalState, setNotifyOnApprovalState] = React.useState<NotifyOnApprovalState>({})

  const isNotifyOnApprovalFormValid = ():boolean => {
    return !!((notifyOnApprovalState.notifyOnApproval && (!notifyOnApprovalState.notifyName && !notifyOnApprovalState.notifyEmail)) ||
    (notifyOnApprovalState.notifyOnApproval && (notifyOnApprovalState.notifyName && !!notifyOnApprovalState.notifyEmail)))
  }

  React.useEffect(() => {
    props.validateStep({ isNotifyOnApprovalValid: isNotifyOnApprovalFormValid() })

    if (notifyOnApprovalState.notifyOnApproval && (!notifyOnApprovalState.notifyName && !notifyOnApprovalState.notifyEmail)) {
      props.stepComplete(notifyOnApprovalState)
    } else if (notifyOnApprovalState.notifyOnApproval && (notifyOnApprovalState.notifyName && notifyOnApprovalState.notifyEmail)) {
      props.stepComplete(notifyOnApprovalState)
    }
  }, [notifyOnApprovalState, notifyOnApprovalState.notifyName, notifyOnApprovalState.notifyEmail])

  React.useEffect(() => {
    setNotifyOnApprovalState((state) => ({
      ...state,
      notifyEmail: props.newBallToAdd?.notifyEmail,
    }))
  }, [props.newBallToAdd?.notifyEmail])

  React.useEffect(() => {
    setNotifyOnApprovalState((state) => ({
      ...state,
      notifyName: props.newBallToAdd?.notifyName,
    }))
  }, [props.newBallToAdd?.notifyName])

  React.useEffect(() => {
    setNotifyOnApprovalState((state) => ({
      ...state,
      notifyOnApproval: props.newBallToAdd?.notifyOnApproval,
    }))
  }, [props.newBallToAdd?.notifyOnApproval])

  const updateBallFormParams = (event:any) => {
    setNotifyOnApprovalState(state => ({ ...state, [event.target.name]: event.target.value }))
  }

  const validateField = (value: string) => {
    let response: ValidationResponse = { value }

    if (value && value.length <= 1) {
      response = {
        ...response,
        status: {
          messageText: 'Description must be longer than 1 character.',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.BALL_DESCRIPTION_TOO_SHORT,
        },
      }

    } else {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID,
        },
      }
    }

    return response
  }

  const validateEmail = (emailAddress: string) => {
    let response: ValidationResponse = { value: emailAddress }

    if (!emailAddress || emailAddress === '') {
      response = {
        ...response,
        status: {
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID,
        },
      }
      return response
    }

    const isValidURL = urlPatternValidation(emailAddress)
    if (!isValidURL) {
      response = {
        ...response,
        status: {
          messageText: 'The URL is formatted incorrectly. Try something like http://www.website.com',
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.URL_INVALID,
        },
      }
      return response
    }
    response = {
      ...response,
      status: {
        statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID,
      },
    }
    return response

  }

  const theme = useTheme()

  return (
    <Grid
      container
      data-testid='add-ball-notifyOnApproval-step'
      direction='column'
      spacing={1}
      style={{ height: '525px' }}
    >
      {!notifyOnApprovalState.notifyOnApproval ?
        <Grid container item spacing={3}>
          <Grid container item justifyContent='center' alignItems='flex-end'>
            <Typography variant='h5' color='primary' align='center' style={{ width: '550px' }}>{`Does someone need to be
            notified when
            this ${renderBallType(props.newBallToAdd?.ballType)} is approved by Anybody Walking?`}</Typography></Grid>
          <Grid container item justifyContent='space-around' alignItems='center' style={{ height: '300px' }}>
            <Grid container item>
              <Button
                data-testid='notify-on-approval-button'
                style={{ minWidth: '500px', padding: theme.spacing(2, 4) }}
                variant='contained'
                color='primary'
                onClick={() => setNotifyOnApprovalState((state) => ({ ...state, notifyOnApproval: true }))}
                fullWidth
              >
                {'Yes, Enter Contact Details!'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        : <Grid
          container
          item
          direction='column'
          alignContent='space-between'
          justifyContent='space-between'
          spacing={4}
          style={{ height: '445px' }}
        >
          <Grid container item spacing={3} justifyContent='space-between'>
            <Grid container item><Typography variant='h6' color='primary'>Who would like to be contacted when
              this {renderBallType(props.newBallToAdd.ballType)} is approved by Anybody Walking?</Typography></Grid>
            <Grid container item><Typography variant='h5' color='textSecondary'>Enter contact information
              below:</Typography></Grid>
          </Grid>
          <Grid container item>
            <Grid container item direction='column' spacing={6}>
              <Grid item>
                <AwTextField
                  onChange={updateBallFormParams}
                  value={notifyOnApprovalState.notifyName}
                  testId='notification-name'
                  fieldLabel='Name'
                  fieldName='notifyName'
                  validate={validateField}
                />
              </Grid>
              <Grid item>
                <AwTextField
                  onChange={updateBallFormParams}
                  value={notifyOnApprovalState.notifyEmail}
                  testId='notification-email'
                  fieldLabel='Email'
                  fieldName='notifyEmail'
                  validate={validateEmail}
                />

              </Grid>
            </Grid>
          </Grid>


        </Grid>
      }
    </Grid>


  )
}

export default NotifyOnApproval
