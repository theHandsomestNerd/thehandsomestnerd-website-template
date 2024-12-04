import {FunctionComponent} from 'react'
import {useTheme} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {AWAboutSectionType} from './ballroomTypes';
import Grid from "@mui/material/Grid2";

interface IProps {
    sectionData: AWAboutSectionType
}


const AWAboutSection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()

    return (
        <Grid
            container
            alignItems="center"
            style={{padding: theme.spacing(2, 2)}}
        >
            <Grid container>
                    <Typography variant="h3" color="textSecondary">{props.sectionData.contentTitle}</Typography>
            </Grid>
            <Grid container>
                <Grid container>
                    {props.sectionData.contentText.map((contentText: string) => {
                        return <Typography variant="body1" color="textSecondary" gutterBottom>{contentText}</Typography>
                    })}
                </Grid>

            </Grid>
        </Grid>


    )
}

export default AWAboutSection