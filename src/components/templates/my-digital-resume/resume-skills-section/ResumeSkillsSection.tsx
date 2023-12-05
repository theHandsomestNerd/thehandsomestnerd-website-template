import React, {FunctionComponent, useContext} from 'react'
import {Theme, ThemeProvider, useTheme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {ResumeSkillSectionType, ResumeSkillSet} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import ResumeSkillSetItem from "./ResumeSkillSetItem";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeSkillSectionType
}

const ResumeSkillsSection: FunctionComponent<IProps> = (props: IProps) => {
    // const classes = useStyles()
    const globalClasses = useThwCommonStyles()


    const theme = useTheme()
    return (
            <Grid
                container
                item
                style={{
                    padding: theme.spacing(4)
                }}
                className={globalClasses.resumeSection}
            >
                <Grid container item spacing={3}>
                    <Grid item container md={4} alignContent='flex-start' spacing={1}>
                        <Grid item container><Typography component='div' variant='h6'>{props.sectionData?.title}</Typography><Typography variant='h6'
                                                                                                 color='primary'
                                                                                                 display='inline'>.</Typography></Grid>
                        <Grid item><Typography variant='body1'>{props.sectionData?.introduction}</Typography></Grid>
                    </Grid>
                    <Grid item container md={8} spacing={2} justifyContent='space-between'>
                        {
                            props.sectionData?.skillsets?.map((skillset: ResumeSkillSet, index2: number) => {
                                return <ResumeSkillSetItem skillset={skillset} />
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default ResumeSkillsSection