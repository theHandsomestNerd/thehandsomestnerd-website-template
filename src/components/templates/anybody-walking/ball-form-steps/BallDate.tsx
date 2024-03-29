import {FunctionComponent, useEffect, useState} from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { AddBallState, BallDateState, StepValidationTableType, ValidationResponse } from '../ballroomTypes'
import { combineDateAndTime } from '../HTMLUtils'
import STEP_BALL_FORM_VALIDATION_STATUS_CODES from '../enums/StepFormValidationCodes.enum'
import { renderBallType } from '../enums/BallType.enum'
import AwTextField from '../aw-text-field/AWTextField'

export type BallDateProps = {
  stepComplete(stepState: BallDateState): void,
  newBallToAdd: AddBallState,
  validateStep(partialValidation: StepValidationTableType): void,
}

const BallDate: FunctionComponent<BallDateProps> = (props: BallDateProps) => {
  const [ballDateState, setBallDateState] = useState<BallDateState>({...props.newBallToAdd})

  const updateBallFormParams = (event:any) => {
    setBallDateState((state:any) => ({...state, [event.target.name]: event.target.value}))
  }

  useEffect(() => {
    setBallDateState((state:any) => ({
      ...state,
      functionStartTime: props.newBallToAdd?.functionStartTime
    }))
  }, [props.newBallToAdd?.functionStartTime])

  useEffect(() => {
    setBallDateState((state:any) => ({
      ...state,
      functionStartDate: props.newBallToAdd?.functionStartDate
    }))
  }, [props.newBallToAdd?.functionStartDate])

  useEffect(() => {
    setBallDateState((state:any) => ({
      ...state,
      functionEndDate: props.newBallToAdd?.functionEndDate
    }))
  }, [props.newBallToAdd?.functionEndDate])

  useEffect(() => {
    setBallDateState((state:any) => ({
      ...state,
      functionEndTime: props.newBallToAdd?.functionEndTime
    }))
  }, [props.newBallToAdd?.functionEndTime])

  useEffect(() => {
    const areDatesValidResponse = ballDateState?.functionEndTime ? areDatesValid() : false

    const stepCompleteArg = {
      functionStartDate: ballDateState?.functionStartDate,
      functionStartTime: ballDateState?.functionStartTime,
      functionEndDate: ballDateState?.functionEndDate,
      functionEndTime: ballDateState?.functionEndTime
    }

    props.validateStep({areDatesValid: areDatesValidResponse})

    if (ballDateState.functionStartTime?.length === 5 &&
      ballDateState.functionEndTime?.length === 5 &&
      ballDateState.functionStartDate?.length === 10 &&
      ballDateState.functionEndDate?.length === 10 &&
      validateEndDate(ballDateState?.functionEndDate).status?.statusCode === STEP_BALL_FORM_VALIDATION_STATUS_CODES.VALID) {
      props.stepComplete(stepCompleteArg)
    }
  }, [ballDateState?.functionStartDate, ballDateState?.functionEndDate, ballDateState?.functionStartTime, ballDateState?.functionEndTime])

  const areDatesValid = () => {
    let response = false
    if (ballDateState.functionStartTime?.length === 5 &&
      ballDateState.functionStartDate?.length === 10 &&
      ballDateState.functionEndDate?.length === 10) {
      const startDate = new Date(combineDateAndTime(ballDateState?.functionStartDate, ballDateState?.functionStartTime))
      const endDate = new Date(combineDateAndTime(ballDateState?.functionEndDate, ballDateState?.functionEndTime ? ballDateState?.functionEndTime : '23:59'))

      response = (startDate < endDate)
    }

    return response
  }

  const validateEndDate = (functionEndDate: string) => {
    let response: ValidationResponse = {value: functionEndDate}

    let dateValid = areDatesValid()

    if (!ballDateState?.functionStartTime &&
      !ballDateState?.functionStartDate && !ballDateState?.functionEndTime &&
      !ballDateState?.functionEndDate) {
      dateValid = true

    }

    if (!dateValid) {
      response = {
        ...response,
        status: {
          messageText: `End Date must come after ${ballDateState?.functionStartDate} ${ballDateState.functionStartTime}`,
          statusCode: STEP_BALL_FORM_VALIDATION_STATUS_CODES.END_DATE_BEFORE_START_DATE
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
  const theme = useTheme()

  return (
    <Grid container data-testid='add-ball-date-step' direction='column' spacing={1}>
      <Grid container item><Typography variant='h5' color='textSecondary'>When is
        the {renderBallType(props.newBallToAdd?.ballType)}?</Typography></Grid>
      <Grid container item style={{paddingTop: theme.spacing(6.25)}} spacing={5}>
        <Grid container item direction='column' justifyContent='center' alignContent='center' spacing={1}>
          <Grid item>
            <AwTextField
              onChange={updateBallFormParams}
              value={ballDateState?.functionStartDate}
              testId='ball-start-date'
              fieldLabel='Start Date'
              fieldName='functionStartDate'
              type='date'
            />
          </Grid>
          <Grid item>
            <AwTextField
              onChange={updateBallFormParams}
              value={ballDateState?.functionStartTime}
              testId='ball-start-time'
              fieldLabel='Start Time'
              fieldName='functionStartTime'
              type='time'
            />
          </Grid>
        </Grid>
        <Grid container item direction='column' justifyContent='center' alignContent='center' spacing={2}>
          <Grid item>
            <AwTextField
              onChange={updateBallFormParams}
              value={ballDateState?.functionEndDate}
              dependendentFieldValue={ballDateState?.functionEndTime}
              testId='ball-end-date'
              fieldLabel='End Date'
              fieldName='functionEndDate'
              type='date'
              validate={validateEndDate}
            />
          </Grid>
          <Grid item>
            <AwTextField
              onChange={updateBallFormParams}
              value={ballDateState?.functionEndTime}
              testId='ball-end-time'
              fieldLabel='End Time'
              fieldName='functionEndTime'
              type='time'
              validate={validateEndDate}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BallDate
