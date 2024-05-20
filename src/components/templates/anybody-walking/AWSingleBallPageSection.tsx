import {FunctionComponent, useContext} from 'react'
import {Grid, useTheme} from "@mui/material";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import PageContext from '../../page-context/PageContext';
import BallPage from './ball-page/BallPage';
import {AWSingleBallSectionType} from "./ballroomTypes";


interface IProps {
    sectionData?: AWSingleBallSectionType
    ball?: any
}

const AWSingleBallPageSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useCustomStyles({bgImage: undefined})

    const pageContext = useContext(PageContext)

    const theme = useTheme()
    return (<Grid container item
                  minHeight={521}
                  sx={{
                      padding: theme.spacing(((pageContext.page?.theme?.appBarHeight ?? 8)/8) ??  8.5, 0)
                  }}>
        <Grid item container className={clsx(classes.fullSection)}
              justifyContent='center' alignItems='center'>
            <BallPage ball={props.ball ? props.ball : pageContext.documentData}/>
        </Grid>
    </Grid>)
}

export default AWSingleBallPageSection