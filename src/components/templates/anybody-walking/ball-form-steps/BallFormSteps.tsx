import {Fab, Typography } from '@mui/material'
import {FunctionComponent, useContext, useState} from 'react'
import {AddBallState} from "../ballroomTypes";
import AddBallModal from '../modal-add-ball/AddBallModal';
import FirebaseContext from "../../../../common/firebase/firebase-context/FirebaseContext";
import PageContext from "../../../page-context/PageContext";

export type BallFormStepsProps = {
    ballToAdd?: AddBallState,
    ballFlyerFile?: any
}


const BallFormSteps: FunctionComponent<BallFormStepsProps> = (props: BallFormStepsProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const firebaseContext= useContext(FirebaseContext)
    const pageContext = useContext(PageContext)
    const buttonText = "Add a new Ball"
    return (
        <>
            <Fab
                data-testid='add-ball-steps-button'
                style={{
                    position: 'fixed',
                    bottom: '32px',
                    right: '32px',
                    width: '200px',
                    height: '40px',
                    borderRadius: '3px',
                }}
                onClick={() => {
                    setIsModalOpen(state => !state)
                    firebaseContext.ctaClick && firebaseContext.ctaClick('ball-form-steps', buttonText,pageContext.analyticsId)
                }}
                color='primary'
            >
                <Typography noWrap>{buttonText}</Typography>
            </Fab>
            <AddBallModal open={isModalOpen} ballToAdd={props.ballToAdd ? { ...props.ballToAdd, fileUploaded: props.ballFlyerFile } : { categories: [] }}></AddBallModal>
        </>
    )
}

export default BallFormSteps
