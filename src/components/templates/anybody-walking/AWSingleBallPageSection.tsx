import React, {FunctionComponent, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid} from "@mui/material";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import bgImage from "../../../assets/drinkery-background.jpg";
import PageContext from '../../page-context/PageContext';
import BallPage from './ball-page/BallPage';
import {AWSingleBallSectionType} from "./ballroomTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '521px',
        // color: "white",
        // position: "relative",
        padding: theme.spacing(12, 0)
    },
}))


interface IProps {
    sectionData?: AWSingleBallSectionType
    ball?: any
}

const AWSingleBallPageSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useCustomStyles({bgImage: bgImage})
    const theClasses = useStyles()

    const pageContext = useContext(PageContext)

    return (<Grid container item className={theClasses.preroot}>
        <Grid item container className={clsx(classes.fullSection)}
              justifyContent='center' alignItems='center'>
             <BallPage ball={props.ball?props.ball:pageContext.documentData}/>
        </Grid>
    </Grid>)
}

export default AWSingleBallPageSection