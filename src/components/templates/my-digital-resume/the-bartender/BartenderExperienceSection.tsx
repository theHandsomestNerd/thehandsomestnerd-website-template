import {FunctionComponent} from 'react'
import {Grid, Link, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BartenderExperienceSectionType, ResumeExperienceType} from "../../../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import BartenderExperienceItem from "./BartenderExperienceItem";

export const useStyles = makeStyles(() => ({
    contactIcons: {
        paddingLeft: "16px",
        color: "gray"
    }
}))

interface IProps {
    sectionData: BartenderExperienceSectionType
}

const BartenderExperienceSection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))

    return (<Grid container item sx={{backgroundColor: "black", padding: "16px"}}>
        <Grid
            container
            item
            justifyContent='center'
            sx={{border: "3px solid white"}}
        >
            <Grid item container md={12} justifyContent='center' alignContent='flex-start' color='white'
                  sx={{
                      borderBottom: "3px solid white",
                      padding: theme.spacing(1, 2)
                  }}>
                    <Typography variant='h6' color='inherit'>{props.sectionData.title}</Typography>
            </Grid>
            <Grid container item sx={{padding: "16px"}}>
                <Grid item container  spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                    {
                        props.sectionData.experiences?.map((experience: ResumeExperienceType, experienceIndex: number) => {
                            return <Grid item container key={experienceIndex} sm={6} md={4}>
                                <Link id={experience._id} underline="hover" style={{position: "relative", top: -90}}>
                                    <></>
                                </Link>
                                <BartenderExperienceItem experience={experience} key={experienceIndex}/>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}

export default BartenderExperienceSection