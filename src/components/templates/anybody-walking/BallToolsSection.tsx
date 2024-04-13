import {FunctionComponent, useContext, useEffect, useState} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Button, Grid, Typography} from "@mui/material";
import {Add, Search} from "@mui/icons-material";
import theme from "../../../theme/Theme";
import {RoutesEnum} from "./enums/Routes.enum";
import {AddBallState, AWBallToolsType} from "./ballroomTypes";
import PageContext from "../../page-context/PageContext";
import AddBallModal from "./modal-add-ball/AddBallModal";

export const useStyles = makeStyles((theme: Theme) => ({
    ballInfoButton: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '466px',
        },
        // width: '210px',
    },
}))

interface IProps {
    sectionData?: AWBallToolsType
    ballToAdd?: AddBallState,
    ballFlyerFile?: any
}

const BallToolsSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(theme)
    const pageContext = useContext(PageContext)
useEffect(() => {
console.log(pageContext)
    }, [pageContext])
    // const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    return <Grid container spacing={3} justifyContent='center' style={{minHeight:"800px", paddingTop:"128px", paddingLeft:"32px",paddingRight:"32px"}}>
        <Grid container item xs={12} md={10} justifyContent='center'>
            <Typography variant='h4' color='textSecondary'>Ball Info</Typography>
        </Grid>
        <Grid container item spacing={2}>
            <Grid container direction='column' alignItems='center' item sm={12} md={4}>
                <Button
                    fullWidth
                    variant='outlined'
                    color='primary'
                    data-testid='add-ball-button'
                    style={{height: '266px'}}
                    className={classes.ballInfoButton}
                    onClick={() => {
                        setIsModalOpen(state=>!state)
                    }}
                >
                    <Grid container direction='column'>
                        <Grid item>
                            <Add style={{fontSize:"86px"}}/>
                        </Grid>
                        <Grid item>
                            Ball Submission
                        </Grid>
                    </Grid>
                </Button>
                <AddBallModal open={isModalOpen} ballToAdd={props.ballToAdd ? { ...props.ballToAdd, fileUploaded: props.ballFlyerFile } : { categories: [] }}></AddBallModal>
            </Grid>
            <Grid container direction='column' alignItems='center' item sm={12} md={4}>
                <Button
                    fullWidth
                    variant='outlined'
                    color='primary'
                    data-testid='search-ball-button'
                    style={{height: '266px'}}
                    className={classes.ballInfoButton}
                    href={`${RoutesEnum.SEARCH}`}
                    // onClick={() => navigate()}
                >
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Search style={{fontSize:"86px"}}/>
                        </Grid>
                        <Grid item>
                            Search for a Ball
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
            <Grid container direction='column' alignItems='center' item sm={12} md={4}>
                <Button
                    data-testid='new-house-button'
                    style={{height: '266px'}}
                    fullWidth
                    variant='outlined'
                    color='primary'
                    className={classes.ballInfoButton}
                    href={`${RoutesEnum.NEW_HOUSE}`}
                >
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <Add style={{fontSize:"86px"}}/>
                        </Grid>
                        <Grid item>
                            New House
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
     </Grid>
}

export default BallToolsSection