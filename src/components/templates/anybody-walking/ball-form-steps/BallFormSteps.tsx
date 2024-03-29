import {Fab, Typography } from '@mui/material'
import {FunctionComponent, useState} from 'react'
import {AddBallState} from "../ballroomTypes";
import AddBallModal from '../modal-add-ball/AddBallModal';

export type BallFormStepsProps = {
    ballToAdd?: AddBallState,
    ballFlyerFile?: any
}


const BallFormSteps: FunctionComponent<BallFormStepsProps> = (props: BallFormStepsProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
                onClick={() => setIsModalOpen(state=>!state)}
                color='primary'
            >
                <Typography noWrap>Add a new Ball</Typography>
            </Fab>
            <AddBallModal open={isModalOpen} ballToAdd={props.ballToAdd ? { ...props.ballToAdd, fileUploaded: props.ballFlyerFile } : { categories: [] }}></AddBallModal>
        </>
    )
}

export default BallFormSteps
