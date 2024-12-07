import {FunctionComponent, useContext} from 'react'
import {useTheme} from "@mui/material";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import PageContext from '../../page-context/PageContext';
import BallPage from './ball-page/BallPage';
import {AWSingleBallSectionType} from "./ballroomTypes";
import Grid from "@mui/material/Grid2";

interface IProps {
    sectionData?: AWSingleBallSectionType
    ball?: any
}

const AWSingleBallPageSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useCustomStyles({bgImage: undefined})
    const theme = useTheme()

    const pageContext = useContext(PageContext)

    return (<Grid container
                  minHeight={521}
                  sx={{
                      padding: theme.spacing(((pageContext.page?.theme?.appBarHeight ?? 8) / 8), 0)
                  }}>
        <Grid container className={clsx(classes.fullSection)}
              justifyContent='center' alignItems='center'>
            <BallPage ball={props.ball ? props.ball : pageContext.documentData}/>
        </Grid>
    </Grid>)
}

export default AWSingleBallPageSection