import {FunctionComponent, useContext, useEffect, useState} from 'react'
import { makeStyles } from '@mui/styles'
import { Button, LinearProgress, Modal, Typography, Grid, Theme, useTheme } from '@mui/material'
import { ArrowLeft, ArrowRightAlt, Close } from '@mui/icons-material'
import {AddBallState, SanityBallType, StepValidationTableType, ValidationResponse} from '../ballroomTypes'
import BallSource from '../ball-form-steps/BallSource'
import {BallTypeEnum, renderBallTypeChoice} from "../enums/BallType.enum";
import BasicBallInfo from '../ball-form-steps/BasicBallInfo'
import BallLocation from "../ball-form-steps/BallLocation";
import BallDate from "../ball-form-steps/BallDate";
import PreviewBall from "../ball-form-steps/PreviewBall";
import BallDetail from "../ball-form-steps/BallDetail";
import AddBallFlyer from "../ball-form-steps/AddBallFlyer";
import NotifyOnApproval from "../ball-form-steps/NotifyOnApproval";
import FinishAddBall from "../ball-form-steps/FinishAddBall";
import AddBallCategories from '../ball-form-steps/AddCategories/AddBallCategories'
import LoadingButton from '../../../loading-button/LoadingButton'
import {fromStepFormToSanity} from "../LegacyBallUtils";
import SanityContext from '../../../../common/sanityIo/sanity-context/SanityContext'


export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: 'whitesmoke !important',
    border: '2px solid #000',
  },
  modalProgressBar: {
    height: theme.spacing(1),
    width: '100%',

    backgroundColor: 'whitesmoke',
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: theme.palette.text.secondary,
    },
  },
}))

export type AddBallModalProps = {
  open: boolean,
  ballToAdd?: AddBallState,
}

export enum AddBallStepsEnum {
  SOURCE = 0,
  BASIC_INFO = 1,
  BALL_DETAIL = 2,
  BALL_DATE = 3,
  BALL_FLYER = 4,
  CATEGORIES = 5,
  BALL_LOCATION = 6,
  PREVIEW_BALL = 7,
  NOTIFY_ON_APPROVAL = 8,
  FINISH = 9,
}

export const ADD_BALL_NUM_STEPS = 9

const AddBallModal: FunctionComponent<AddBallModalProps> = (props: AddBallModalProps) => {
  const classes = useStyles()
  const [stepCounter, setStepCounter] = useState<AddBallStepsEnum>(0)
  const [newBallToAdd, setNewBallToAdd] = useState<AddBallState>({ categories: [] })
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [stepValidation, setStepValidation] = useState<StepValidationTableType>({})
const [submitStatus, setSubmitStatus] = useState<ValidationResponse>({ value: null })

const sanityContext = useContext(SanityContext)
  useEffect(() => {
    if (props.ballToAdd) {
      setNewBallToAdd(props.ballToAdd)
    }
  }, [props.ballToAdd])

  const updateAddBallForm = (updatedFormParameters: AddBallState): void => {
    setNewBallToAdd(state => ({
      ...state,
      ...updatedFormParameters,
    }))
  }

  useEffect(() => {
    setIsOpen(props.open)
  }, [props.open])

  // const authenticatedUserContext = useContext(AuthenticatedUserContext)

  const validateStep = (partialValidation: StepValidationTableType): void => {
    setStepValidation((state) => ({ ...state, ...partialValidation }))
  }

  const renderStep = () => {
    switch (stepCounter) {
      case AddBallStepsEnum.SOURCE:
        return <BallSource stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.BASIC_INFO:
        return <BasicBallInfo stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.BALL_LOCATION:
        return <BallLocation stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.BALL_DETAIL:
        return <BallDetail validateStep={validateStep} stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.BALL_FLYER:
        return <AddBallFlyer stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.CATEGORIES:
        return <AddBallCategories stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.BALL_DATE:
        return <BallDate validateStep={validateStep} stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.NOTIFY_ON_APPROVAL:
        return <NotifyOnApproval
          validateStep={validateStep}
          stepComplete={updateAddBallForm}
          newBallToAdd={newBallToAdd}
        />
      case AddBallStepsEnum.PREVIEW_BALL:
        return <PreviewBall newBallToAdd={newBallToAdd} />
      case AddBallStepsEnum.FINISH:
        return <FinishAddBall status={submitStatus} newBallToAdd={newBallToAdd} />
      default:
        return <BallSource stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
    }
  }

  const renderBallType = (ballType?: BallTypeEnum) => {
    if(!ballType) return ""
    return renderBallTypeChoice(ballType)
  }

  const theme = useTheme()

  const renderCtaButtonText = () => {
    switch (stepCounter) {
      case AddBallStepsEnum.SOURCE:
        return <>
          <Typography style={{ display: 'inline', minWidth: '400px' }}>
            What type of Ball do you want to add?
          </Typography> <ArrowRightAlt style={{ marginLeft: theme.spacing(1) }} />
        </>
      case AddBallStepsEnum.BASIC_INFO:
        return <>
          <Typography style={{ display: 'inline', minWidth: '400px' }}>{
            newBallToAdd.ballType ?
              `Add Details About the ${  renderBallType(newBallToAdd.ballType)}`
              : 'Choose the type of ball to continue...'
          }</Typography> <ArrowRightAlt style={{ marginLeft: theme.spacing(1) }} />
        </>
      case AddBallStepsEnum.BALL_LOCATION:
        return <><Typography
          style={{
          display: 'inline',
          minWidth: '400px',
        }}
        >{`Preview your ${renderBallType(newBallToAdd.ballType)}`}</Typography><ArrowRightAlt
          style={{ marginLeft: theme.spacing(1) }}
        /></>
      case AddBallStepsEnum.BALL_DETAIL:
        return <><Typography style={{ display: 'inline', minWidth: '400px' }}>When is the ball</Typography><ArrowRightAlt
          style={{ marginLeft: theme.spacing(1) }}
        /></>
      case AddBallStepsEnum.BALL_DATE:
        return <><Typography style={{ display: 'inline', minWidth: '400px' }}>Add a flyer for the
          Ball</Typography><ArrowRightAlt style={{ marginLeft: theme.spacing(1) }} /></>
      case AddBallStepsEnum.BALL_FLYER:
        return <><Typography style={{ display: 'inline', minWidth: '400px' }}>Add ball
          Categories</Typography><ArrowRightAlt style={{ marginLeft: theme.spacing(1) }} /></>
      case AddBallStepsEnum.CATEGORIES:
        return <><Typography style={{ display: 'inline', minWidth: '400px' }}>Add the Location of the
          ball</Typography><ArrowRightAlt style={{ marginLeft: theme.spacing(1) }} /></>
      case AddBallStepsEnum.NOTIFY_ON_APPROVAL:
        return <>
          <Typography style={{ display: 'inline', minWidth: '400px' }}>
            {`${!newBallToAdd.notifyOnApproval ? 'No, Submit the ' : 'Submit '} ${renderBallType(newBallToAdd.ballType)}`}.</Typography>
          <ArrowRightAlt
            style={{ marginLeft: theme.spacing(1) }}
          />
        </>
      case AddBallStepsEnum.PREVIEW_BALL:
        return <>
          <Typography style={{ display: 'inline', minWidth: '400px' }}>
            {`Request updates on your ${renderBallType(newBallToAdd.ballType)}`}.</Typography>
          <ArrowRightAlt
            style={{ marginLeft: theme.spacing(1) }}
          />
        </>
      case AddBallStepsEnum.FINISH:
        return 'Finished'
      default:
        return <BasicBallInfo stepComplete={updateAddBallForm} newBallToAdd={newBallToAdd} />
    }
  }

  const moveToNextStep = async () => {
    console.log('Moving to next step', stepCounter)
    if (stepCounter <= ADD_BALL_NUM_STEPS) {
      console.log('Moving to step:', AddBallStepsEnum[stepCounter + 1], stepCounter + 1)
      setStepCounter(stepCounter + 1)
    } else {
      console.log('Not sure how you got here but', AddBallStepsEnum[stepCounter], stepCounter)
      setStepCounter(AddBallStepsEnum.FINISH)
    }
    return Promise.resolve({ value: AddBallStepsEnum[stepCounter], status:{ statusCode: 200 } })
  }

  const moveToPrevStep = () => {
    if (stepCounter > 0) {
      console.log('Moving to step:', AddBallStepsEnum[stepCounter - 1], stepCounter - 1)
      setStepCounter(stepCounter - 1)
    } else {
      console.log('Not sure how you got here but', AddBallStepsEnum[stepCounter], stepCounter)
      setStepCounter(AddBallStepsEnum.SOURCE)
    }
  }

  const convertToSlug = (ballTitle?: string) => {
    if(!ballTitle){
      return ""
    }
    return ballTitle
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  }

  const addBall = (ball: AddBallState): Promise<SanityBallType> => {
      const { fileUploaded } = ball

      const flyerImgFile = fileUploaded

      const slug = { _type: 'slug', current: convertToSlug(ball.ballTitle) }

      console.log("AddBall in Modal ball ", ball)
      console.log("contents of image uploaded ", flyerImgFile)
      // if (authenticatedUserContext.authentication?.awUserDetails?._id && authenticatedUserContext.authentication.awUserDetails._id !== '') {
      //   const userId = authenticatedUserContext.authentication?.awUserDetails?._id
      //
      //   const userRef: SanityRef = { _ref: userId, _type: 'reference' }
      //
      //   return awapiClient.addBall(fromStepFormToSanity({
      //     ...ball,
      //     slug,
      //     createdBy: userRef,
      //   }), flyerImgFile).then((ball) => {
      //     // set loading and submitted
      //     setSubmitStatus({ value:ball, status:{ statusCode: 200, messageText:'Add Ball Success!!!' } })
      //     setStepCounter(AddBallStepsEnum.FINISH)
      //       return ball
      //   }).catch((e) => {
      //     setSubmitStatus({ value:e, status:{ messageText: 'Error Adding Ball', statusCode: 400 } })
      //     setStepCounter(AddBallStepsEnum.FINISH)
      //     return ball
      //   })
      // }
        return sanityContext.addBall(fromStepFormToSanity({ ...ball, slug }), flyerImgFile).then(() => {
          // set loading and submitted
          setSubmitStatus({ value:ball, status:{ statusCode: 200, messageText:'Add Ball Success!!!' } })
          setStepCounter(AddBallStepsEnum.FINISH)
          return ball
        }).catch((e:any) => {
          console.log('ERRROR:', e)
          //@ts-ignore
          setSubmitStatus({ value:e, status:{ statusCode: 400, messageText:'AWAPI: AddBall Failed' } })
          setStepCounter(AddBallStepsEnum.FINISH)
          return ball
        })


  }

  return (
    <Modal
      open={isOpen}
      data-testid='add-ball-modal'
      aria-labelledby='add-ball-modal-title'
      aria-describedby='add-ball-modal-desc'
      style={{ height: 'max-content', maxWidth: '900px', minWidth: '300px', margin: 'auto' }}
    >
      <Grid

        container
        justifyContent='center'
        alignItems='center'
        className={classes.paper}
      >
        <Grid container direction='column' item spacing={3}>
          <Grid container item>
            <Grid container item style={{ padding: theme.spacing(2.5), backgroundColor: theme.palette.text.secondary }}>
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Grid container item justifyContent='center'>
                  <Typography
                    style={{ color: 'whitesmoke' }}
                    variant='h4'
                    aria-label='add-ball-modal-title'
                    data-testid='add-ball-modal-title'
                    align='center'
                  >Add A New Ball</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent='flex-end'>
                <Grid item>
                  <Button>
                    <Close onClick={() => setIsOpen(false)} fontSize='large' style={{ color: '#FAFAFA' }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <LinearProgress
                variant='determinate'
                value={((stepCounter.valueOf() + 1) / (ADD_BALL_NUM_STEPS + 1)) * 100}
                className={classes.modalProgressBar}
                data-testid='add-ball-progress-bar'
              ></LinearProgress>
            </Grid>
          </Grid>
          <Grid container item direction='column'>
            <Grid container item style={{ overflowY: 'scroll', height: '600px', padding: theme.spacing(0, 2) }}>
              {renderStep()}
            </Grid>
            <Grid container item justifyContent='center'>
              {stepCounter !== AddBallStepsEnum.FINISH &&

              <LoadingButton
                disabled={(stepCounter === AddBallStepsEnum.SOURCE && !newBallToAdd.source) ||
                (stepCounter === AddBallStepsEnum.BASIC_INFO && !newBallToAdd.ballType) ||
                (stepCounter === AddBallStepsEnum.BALL_DETAIL && (!stepValidation.isBallDetailValid)) ||
                (stepCounter === AddBallStepsEnum.BALL_LOCATION && (!newBallToAdd.location)) ||
                (stepCounter === AddBallStepsEnum.BALL_FLYER && (!newBallToAdd.flyer)) ||
                (stepCounter === AddBallStepsEnum.BALL_DATE && !stepValidation.areDatesValid) ||
                (stepCounter === AddBallStepsEnum.NOTIFY_ON_APPROVAL && (newBallToAdd.notifyOnApproval && (!newBallToAdd.notifyEmail || !newBallToAdd.notifyName)))}
                clickHandler={stepCounter === (ADD_BALL_NUM_STEPS - 1) ? () => {
                  return addBall(newBallToAdd)
                } : () => {
                  return moveToNextStep()
                }}
                width={500}
              >{renderCtaButtonText()}</LoadingButton>
              }
            </Grid>
            <Grid container item style={{ height: '64px' }}>
              {
                stepCounter !== AddBallStepsEnum.FINISH && stepCounter > 0 &&
                <Button
                  data-testid='add-ball-previous-step-button'
                  onClick={moveToPrevStep}
                >
                  <ArrowLeft />Previous Question
                </Button>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default AddBallModal
