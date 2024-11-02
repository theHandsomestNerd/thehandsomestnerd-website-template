import {FunctionComponent} from 'react'
import {useTheme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";
import {AWAboutSectionType} from './ballroomTypes';

interface IProps {
    sectionData: AWAboutSectionType
}


const AWAboutSection: FunctionComponent<IProps> = (props:IProps) => {
    const theme = useTheme()

    return (
        <Grid
            container
            alignItems="center"
            item
            justifyContent="center"
            style={{ padding: theme.spacing(14, 2) }}
        >
            <Grid container item>
                <Grid container item>
                    <Typography variant="h3" color="textSecondary">{props.sectionData.contentTitle}</Typography>
                </Grid>

            </Grid>
            <Grid container item>
                <Grid container item>
                    {props.sectionData.contentText.map((contentText:string)=>{
                        return <Typography variant="body1" color="textSecondary" gutterBottom>{contentText}</Typography>
                    })}
                </Grid>

            </Grid>
        </Grid>


    )
}

export default AWAboutSection